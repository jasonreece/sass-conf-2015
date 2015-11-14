---
layout: post
title: "Houdini: The Extensible Future of CSS"
name: "Tab Atkins"
date: 2015-11-11 19:45:17
twitter: tabatkins
github: tabatkins
slides: http://www.xanthir.com/talks/2015-11-11/
links:
  - https://drafts.css-houdini.org
  - https://github.com/w3c/css-houdini-drafts/
---

## Houdidni

* Makes CSS customizable
* Kissing cousin to the HTML Custom Elements work


## Nearest-Future Houdini Parts

* Custom Properties redux
* Isolated Worklets
* Better CSSOM - no more string parsing/building!
* Custom Paint
* Custom At-Rules / Exposed CSS Parser

## Later Houdini Parts

* Reliable, performant control over scrolling
* Custom Layout
* Custom Functions
* Probably more

## Custom Properties

* CSS Variables spec was stalking horse for Houdini
* Introduced custom properties, but very weak, specialized for Variables use-case
* Need more control & awareness to do properly.

[https://drafts.css-houdini.org/css-properties-values-api](https://drafts.css-houdini.org/css-properties-values-api)

{% highlight javascript %}
  CSS.registerProperty("--aspect-ratio",
    applyHook,
    {inherited: false,
     grammar: "<number> | none",
     initial: "none",
     inputProperties: ["width", "height"],
     outputProperties: ["height"]})
{% endhighlight %}

## Apply Hooks

{% highlight javascript %}
  function(input, output) {
    let ratio = input.get("ratio");
    if(ratio.value == "none") {
      output.set("height", input.get("height"));
      return;
    }
    let width = input.get("width");
    output.set("height", width.mult(ratio.value));
  }
{% endhighlight %}

## Details

* "apply" phase happens after computed values (right after transitions take effect), so values that depend on layout (like width:auto) aren't resolved yet. (Custom Layout will handle these properly later.)

* Multiple custom properties can use same input, but colliding outputs are a problem. Current plan is to throw at runtime if output properties collide on a single element.

* Don't need an apply hook if you just want souped-up variables.

## Worklets

* Houdini JS is called at delicate times, and must be performant due to syncness.
* Worklets are a super-lite version of a Worker, used for all Houdini JS.
* Run in separate context from page, but may be grouped together into a few contexts.
* Precise details still being worked out

[https://drafts.css-houdini.org/worklets/](https://drafts.css-houdini.org/worklets/)

## Better CSSOM

* Current CSSOM shows its age. Easy for string-parsing/building to be the CPU bottleneck.
* Previous attempts at bettering were done very badly (DOM L2 Style). Lessons learned.

[https://drafts.css-houdini.org/css-typed-om/](https://drafts.css-houdini.org/css-typed-om/)

## Typed CSSOM

* Expose objects for property values, giving you numbers and units and such directly.
* *Take* objects for property values, with easy constructors.
* Make complex things, like calc(), work easily and naturally.

## CSSOM Example
{% highlight javascript %}
  // Ranges are autocorrected later.
  el.styleMap.set('opacity',
    CSS.number(3));

  // Represents calc(10px + 3em)
  el.styleMap.set('width',
    CSS.calc({px:10, em: 3}));

  el.styleMap.set('transform',
    [CSS.translate(CSS.length(20,'px')),
     CSS.scale(1.5)])
{% endhighlight %}

## Details

* Harder than it looks to design; CSS changes regularly.
* Properties become shorthands, single values become lists, "simple" properties get complex.
* Some bits that might feel awkward as a result.
* In future, when JS has "value objects", will get a lot better.

## Custom Paint

* Currently hard to feed images into CSS. Have to build data: url or similar.
* Previous attempts (-moz-element(), -webkit-canvas()) too weak and limited, not enough information fed in.

[https://drafts.css-houdini.org/css-paint-api/](https://drafts.css-houdini.org/css-paint-api/)

## Custom Paint Example

{% highlight javascript %}
  registerPaint('circle', class {
      static get inputProperties() { return ['--circle-color']; }
      paint(ctx, geom, properties) {
          // Change the fill color.
          var color = properties.get('--circle-color');
          ctx.fillStyle = color;

          // Determine the center point and radius.
          var x = geom.width / 2;
          var y = geom.height / 2;
          var radius = Math.min(x, y);

          // Draw the circle \o/
          ctx.beginPath();
          ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
          ctx.fill();
      }
  });
{% endhighlight %}

## CSS Usage

{% highlight html %}
  <div id="myElement">
      CSS is awesome.
  </div>

  <style>
  #myElement {
      --circle-color: red;
      background-image: paint(circle);
  }
  </style>
{% endhighlight %}


## Details

* No pixel readback - all painting is effectively vector.
* Paint callbacks must be stateless - results will be cached when appropriate.
* If there's a time dependence, drive it with a custom property + transition/animation.
* Input arguments will come in v2; for now, use custom properties to pass more data in.

## Custom At-Rules

* Custom properties are great, but not always best mechanism to specify things. (No blocks, etc)
* Custom at-rules give you another avenue of control.
* No draft yet, I'll write it before February meeting.

## Details
* Names will start with --, just like custom properties.
* Specify a "grammar" of sorts, similar to registered properties. Dictates whether it's a statement or block, what it contains, etc.
* Exposed to JS with good CSSOM, as much as possible.
* Can output arbitrary "real" CSS in its place, or take other actions. See [Jonathan Neal's @--svg rule](https://github.com/jonathantneal/postcss-write-svg).

## Example
{% highlight css %}
  @--svg square {
      @--rect {
          fill: var(--color, black);
          width: 100%;
          height: 100%;
      }
  }

  .example {
      background: white svg(square param(--color #00b1ff)) cover;
  }
{% endhighlight %}

## Timeline

* No firm timeline set yet; implementation speeds vary.
* Chrome has experimental implementations in private branches; not in Canary yet.
* Planning for experimental support to start shipping next year in browsers.
* Rest of Houdini 2-3 years away to start showing up. This is long-term work, need to spend time to get it right.

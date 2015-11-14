---
layout: post
title: "Using Musical Scales to Build Harmonious Typographic Scale"
name: "James Steinbach"
date: 2015-11-11 23:43:25
twitter: jdsteinbach
slides: http://jdsteinbach.com/sassconf/#/
github: jdsteinbach
links:
  - https://jdsteinbach.com/

---

## Typography and Modular Scales

### Single-Stranded modular scales

* Every interval is the same
* A musical half-step scale PLAY
* A musical whole-step scale

### Multi-Stranded modular scales

* Major & minor scales are created by alternating whole & half steps (WWHWWWH) / (WHWWHWW)
* These patterns repeat every octave, creating a mult-stranded modular scale.

## Modular Scales in Sass

* [Modular Scale](http://www.modularscale.com/)
* [Sassline](https://sassline.com/)
* [Typesettings](http://typesettings.io/)
* [Type Scale](http://type-scale.com/)
* [Gridlover](http://www.gridlover.net/)
* [ALA: More Meaningful Typography](http://alistapart.com/article/more-meaningful-typography)

## See and Hear

### interval: Octave

* Notes Are Numbers
* Every musical note is a number: a frequency vibrating a certain number of times per second (measured in hertz).

### interval: Fifth

* Notes Are Numbers
* Every musical note is a number: a frequency vibrating a certain number of times per second (measured in hertz).

### interval: Third

* Notes Are Numbers
* Every musical note is a number: a frequency vibrating a certain number of times per second (measured in hertz).

### scale: Major Scale

* 1.5em Heading 1
* 1.33em Heading 2
* 1.25em Heading 3
* 1.13em Blockquote
* 1em Paragraph

### scale: Pentatonic

* 1.67em Heading 1
* 1.5em Heading 2
* 1.25em Heading 3
* 1.13em Blockquote
* 1em Paragraph

### scale: Major Triad

* 2.5em Heading 1
* 2em Heading 2
* 1.5em Heading 3
* 1.25em Blockquote
* 1em Paragraph

### Responsive musical scales

* More notes per octave: better for small screens
* Fewer notes per octave: better for large screens

## Intro to Type Tuner

[typetuner.com](http://typetuner.com)

{% highlight scss %}
  @include set-hierarchy( $list );
  @include add-breakpoint(
    $label,
    $min-width,
    $font-size,
    $line-height,
    $scale
  );
  @include remove-breakpoint( $label );
  @include type-tune( extend | class );
{% endhighlight %}

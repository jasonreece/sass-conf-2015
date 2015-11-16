---
layout: post
title: "From 0 to 80 in 40 Minutes"
name: "Roy Tomeij"
date: 2015-11-12 9:51:45
twitter: roy
github: roytomeij
slides: http://roy.io/sassconf2015
---

# All the @functions!

## color

### RGB
`rgb(204, 102, 153);` creates a color from red, green, and blue values.

`rgba($color, $alpha);` creates a color from red, green, blue, and alpha values.

`red($red);` gets the red component of a color.

`blue($blue);` gets the blue component of a color.

`green($green);` the green component of a color.

### HSL

`hsl($hue, $saturation, $lightness);` creates a color from hue, saturation, and lightness values

`hsla($hue, $saturation, $lightness, $alpha);` creates a color from hue, saturation, lightness, and alpha values

{% highlight scss %}
// sass pink
hsla(330, 50, 60, 0.5);
{% endhighlight %}

`hue(#cc6699);` returns the hue component of a color.

`saturation(#cc6699)` returns the saturation component of a color.

`lightness(#cc6699)` returns the lightness component of a color.

`adjust-hue($color, $degrees);` changes the hue of a color.

{% highlight scss %}
// create color wheel with adjust-hue
$number-of-colors: 18;
$degrees: 360 / $number-of-colors;

@for $i from 0 to $number-of-colors {
  background: adjust-hue(
    red,
    $i * $degrees
  );
}
{% endhighlight %}

`lighten(#cc6699, 20%);` makes a color lighter.

`saturate(#cc6699, 20%);` makes a color more saturated.

`desaturate(#cc6699, 20%);` makes a color less saturated.

`grayscale(#cc6699, 20%);` converts a color to grayscale.

`invert();` takes rgb values and subtracts them from 255.

`alpha();` returns the opacity of the color.

`opacify();` makes a color more opaque.

`transparentize();` makes a color more transparent.

`adjust-color();` increases or decreases one or more colors

`scale-color();` fluidly scales one or more properties of a color.

`change color();` changes one or more properties of a color.

## Strings

`quote();` adds quotes

`unquote();` removes quotes

`str-length();` gets length of string

`str-insert();` insert string into other string

{% highlight scss %}
str-insert("something", "xx", 5);
// returns 'someXXthing'

str-insert("something", "xx", -4);
// returns 'somethXXing'
{% endhighlight %}

`str-index();` returns the index of the first occurance of $substring in $string.

`str-slice();` extracts substring from string

`to-upper-case();` converts to uppercase

`to-lower-case();` converts to lowercase

## Numbers

`percentage();` - converts to percentage

{% highlight scss %}
percentage(0.5);
// returns 50%
{% endhighlight %}

`round();` rounds a number down to the previous whole number

`ceil();` rounds a number up to the next whole number.

`floor();` rounds a number down to the previous whole number.

`abs();` returns absolute value

{% highlight scss %}
$light1: lightness($color1); // 50%
$light2: lightness($color2); // 100%

$diff: $light1 - $light2; // -50%

$diff: abs($light1 - $light2); // 50%
{% endhighlight %}

`min();` return lowest value in list

`max();` return largest value in list

`random();` returns a random number from 0 - $limit.

## Lists

`length();` - returns length of list

`nth();` - fetches nth item from list

`set-nth();` - changes nth item from list

`join();` - merges two lists into one - doesn't change existing list returns new

`append();` adds to existing list

`zip();` - zip two lists together, returns nested list

`list-separator();` - returns separator

`index();` - returns where item appears in list

## Maps

`map-get();` - get things out of a map

`map-has-key();` - returns boolean. does item exist in map

`map-key();` - returns keys from map

`map-values();` - returns values from map

`map-remove();` - remove item from map, returns new map

`map-merge();` - merges maps, can get complex

`keywords();` - returns map that validates if item is in map

## Introspection

`feature-exists();` - does feature exist in this version of Sass

{% highlight scss %}
feature-exists(at-error)
=> true // supports @error
{% endhighlight %}

`variable-exists();` - returns boolean determining if variable exists

`global-variable-exists();` returns boolean determining if global variable exists

`function-exists();` - returns boolean determining if function exists

`mixin-exists();` - returns boolean determining if mixin exists

`inspect();` - returns a string of what Sass has in memory for a map or list.

`type-of();` - returns primitive type

`unit();` - returns unit

`unitless();` - checks if unit exists

`comparable();` - are units comparable

`call();` - calls function

{% highlight scss %}
call(lighten, #cc6699, 17%)
// #e2a7c4
{% endhighlight %}

## Miscellaneous

`if();` - Sass' ternary operator

`unique-id();` - returns unique identifier

---
layout: post
title: "Creating Your Styles with Sass Maps"
name: "Lourdes Montano"
date: 2015-11-12 10:53:54
github: loumontano
twitter: loumontano
slides: http://www.slideshare.net/loumontano/sassconf-maps
---

## Sass Maps

{% highlight scss %}
$mapName: (
  key: value,
  otherKey: otherValue
);

.my-style {
  color(map-get($nameName, key));
}
{% endhighlight %}

## Theming with Maps

{% highlight scss %}
$theme-black: (
  background-color: black,
  color: white,
  font-size: 18px
);

$theme-red: (
  background-color: red,
  color: yellow,
  font-size: 18px
);

.category-black  {
  @each $k, $v in $theme-black {
    #{$k}: $v;
  }
}

.category-red  {
  @each $k, $v in $theme-red {
    #{$k}: $v;
  }
}

// css output
.category-black {
  background-color: black;
  color: white;
  font-size: 18px;
}

.category-red {
  background-color: red;
  color: yellow;
  font-size: 18px;
}
{% endhighlight %}

{% highlight scss %}
$my-colors: (
  primary: (
    base: red,
    light: lighten(red, 30%),
    dark: darken(red, 30%)
  ),
  secondary: (
    base: blue,
    light: lighten(blue, 30%),
    dark: darken(blue, 30%)
  )
);


@function get-color($color-name, $tone: base) {
  @if map-has-key($my-colors, $color-name) {
    @return map-get(map-get($my-colors, $color-name), $tone);
  } @else {
    @error " Cannot find color name `#{$color-name}";
  }
}

.my-color {
  bakground: get-color(primary, light);
}

.my-other-color {
  bakground: get-color(secondary, dark);
}

// outputted css
.my-color {
  background: #ff9999;
}

.my-other-color {
  background: #000066;
}
{% endhighlight %}

## Final Thoughts

* Easy to maintain and modify
* Better code organization
* Use maps with a purpose
* Beware those nested maps
* Debug

---
layout: post
title: "Slaying the Dragon Refactoring CSS Using Sass"
name: "Alicia Liu"
date: 2015-11-12 10:39:48
twitter: aliciatweet
github: alicial
slides: http://alicialiu.me/talks
---

## Goals

* Non Blocking
* Productive
* Don't go crazy

## Warning signs

* over reliance on IDs
* generic class names
* inconsistent vendor prefixing
* unnecessarily verbose
* weird formatting

## Code smells

* `!important`
* `.header .group ul li a`
* `.header > #nav`
* inline styles
* head styles
* duplicates

## Tools and Tactics

* Sass
* Compass
* Bourbon
* Bootstrap
* Mixins

## Style Guide

### Design

* Colors
* Font-sizes
* Buttons
* Device Widths

### Code

* px vs em
* white space
* allow IDs

## Use a linter

* scss-lint
* Linter + ide = <3

## Naming Convention

* BEM
* OOCSS
* SMACSS
* DIY

## Be Specific

* `.loading` - what is this, a spinning thing?
* `.global-loading-indicator` - better
* `.red-alert` - may not be as useful as .dialog-alert-error

## Namespace

* `.heading` => `.sidebar-heading`
* `.heading` => `.profile-sidebar-heading`

## Separate Behavior

* Prefix javascript classes with `.js-`

## Single Purpose Modifiers

* .`menu.blue` => `.menu.menu-cool`

{% highlight html %}
  <div class="menu menu-wide menu-blue"></div>
{% endhighlight %}

## Single Class

{% highlight scss %}
  .cool-menu {
    @include menu($blue);
    width: $menu-wide-width;
    // more styles here
  }
{% endhighlight %}

## Code Organization
{% highlight scss %}
  @import 'third-party-stuff';
  @import 'variables';
  @import 'mixins';
  @import 'fonts';
  @import 'base';
  @import 'layout';
  @import 'nav';
  @import 'alerts';
  @import 'comments';
  @import 'footer';
  @import 'responsive';
{% endhighlight %}

## How many CSS Files?

* How many stylesheets? - IE, webview, email, contexts

## Moving and Adding Styles

* Create new files for new code
* Don't extend duplicate
* Namespace or rename your new styles (e.g. beta-)

## Deleting Styles

* Tools: uncss, grunt-ucss
* Regular expressions are your friend
* Search everywhere: JS, HTML, backend code
* Test as you go


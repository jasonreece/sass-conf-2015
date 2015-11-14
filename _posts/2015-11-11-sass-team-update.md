---
layout: post
title: "Sass Team Update"
name: "Sass Team Update"
date: 2015-11-11 19:45:18
twitter:
github:
slides:
---

# Sass Team Update

## 8 Years of Sass

## Libsass
* Libsass has feature parity with Ruby Sass
* Newest version has performance improvements
* Now 10x faster than Ruby Sass
* Libsass is compiling faster than PostCSS.
* 3.4 Compatible by the end of the year
* Working on Sass 4.0 features with Ruby Sass
* Trying to make it easier to contribute for everyone

[https://github.com/mgreter/postcss-playground](https://github.com/mgreter/postcss-playground)

## The next year of Sass

### Will there be a Sass 3.5?
If 4.0 features are taking a long time, and we have compelling features and deprecations to warrant a release.

### Sass 4.0
A new module system.  This will be the biggest change to internals since 3.0 (scss)

### Module System

{% highlight  scss %}
  '@import' => '@use'
{% endhighlight %}

* @use will have import once, allows namespaced identifiers (avoid global name collisions)
* Will be able to import CSS files as Sass.
* Details are still being fleshed out.

### Organizational Changes

* Natalie will focus on new major features of the language
* Chris driving ongoing maintenance of Ruby Sass and minor features
* We need you!


### Compass

* Compass is end of lifed.  Looking for a maintainer.

### Eyeglass

* Release and consume Sass packages and themes via NPM
* Filesystem access from Sass

## Another Big Announcement

* Sass trademark has been applied for.

## Sass Open Source Foundation

* A Sass non-profit

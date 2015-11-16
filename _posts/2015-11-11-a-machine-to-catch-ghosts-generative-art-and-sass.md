---
layout: post
title: "A Machine to Catch Ghosts: Generative Art and Sass"
name: "Miriam Nadler"
date: 2015-11-11 19:45:16
twitter: antimytheme
github: mknadler
slides: http://codepen.io/mknadler/
---

## The random() function

Returns a decimal between 0 and 1 or Returns a an integer between 1 and `$limit`

## Lets make some pretty colors

{% highlight scss %}
$new-pink: rbga(random(255), 50, 50, 1);
{% endhighlight %}

## Randomized Transform

{% highlight  scss %}
transform: translate(random(30) * 1px, 30px);
{% endhighlight %}

## Randomized Transform with negative numbers

{% highlight scss %}
transform: translate(random(4) - 2px, random(4) - 2px);
{% endhighlight %}

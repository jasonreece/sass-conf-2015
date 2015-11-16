---
layout: post
title: "Looping for Animation"
name: "Eva Ferreira"
date: 2015-11-11 23:45:32
twitter: evaferreira92
github: evaferreira
slides: http://evaferreira.com.ar/sassconf/
links:
  - http://www.harrypottertheplay.com/
---

# Animation for Sass

{% highlight scss %}
// random background color
$hue: random(360);

body {
  background-color: hsl($hue, 50%, 60%);
}
{% endhighlight %}

{% highlight scss %}
// random bg color within range
$hue: 70 + random(55);

body {
  background-color: hsl($hue, 50%, 60%);
}
{% endhighlight %}

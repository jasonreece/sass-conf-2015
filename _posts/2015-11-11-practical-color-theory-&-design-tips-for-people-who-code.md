---
layout: post
title: "Practical Color Theory & Design Tips for People Who Code"
name: "Natalya Shelburne"
date: 2015-11-11 19:45:17
github: tallys
twitter: natalyathree
slides: https://tallys.github.io/color-theory/
links:
  - http://www.artist-developer.com

---

## Pick a color

hsl($hue, $saturation, $lightness)

{% highlight scss %}
  hsl($hue, $saturation, $lightness)
{% endhighlight %}

Pick any color by selecting its hue (0-360) on the color wheel at full saturation (100%) and at half lightness (50%) - this way you start with the 'most colorful color' you can get.

## Complementary Color

`complement();`

{% highlight scss %}
  $second-color: complement($first-color);
{% endhighlight %}

## Color Relationship Established by Mixing

`mix();`

Establish a color relationship by mixing them together. As an added bonus, mixing colors desaturates them, further making them look more like something you'd find in nature.

{% highlight scss %}
  $complementary-color: harmonious-mix($first-color, $second-color);

  $primary-color: harmonious-mix($second-color, $first-color);
{% endhighlight %}

## Complementary Neutrals

`desaturate();` `lighten();` `darken();`

Let your chosen color pop by surrounding it with neturals. Desaturate the complementary color to get a neutral. Then, give that neutral some lightness to create a light neutral, and do the same with darkness for a dark neutral.

{% highlight scss %}
  $complementary-neutral: create-neutral($complementary-color);

  $complementary-neutral-light: lighten($complementary-neutral, 33);

  $complementary-neutral-dark: darken($complementary-neutral, 33);
{% endhighlight %}

## Primary Neutrals

`desaturate();` `lighten();` `darken();`

This seems logical, we can do the same for our primary color too. More to work with. Sadly, doesn't seem to make our layout much better. But, at least now we can see what should be done next.

{% highlight scss %}
  $primary-neutral: create-neutral($primary-color);

  $primary-neutral-light: lighten($primary-neutral, 33);

  $primary-neutral-dark: darken($primary-neutral, 33);
{% endhighlight %}

## Mix a "White" and "Black"

`grayscale();` `lighten();` `darken();`

Finally, some contrast! Make sure you don't use pure black or white - this is just like mixing neutrals, just mix them really bright and really dark.

{% highlight scss %}
  $white: lighten($primary-neutral-light, 15);

  $black: grayscale($complementary-neutral-dark);
{% endhighlight %}

## Make it pop! Primary Light, primary, and Dark

`mix();` `lighten();` `darken();`

This is the color you wanted in the first place, make sure you're using it. But, remember that it's about context - make sure you're using the right amount of contrast! The header on our little layout has a lighter version of our primary color.

{% highlight scss %}
  $primary-light: mix($primary-neutral-light, $primary-color, 45%);

  $primary-dark: mix($primary-neutral-dark, $primary-color, 45%);
{% endhighlight %}


## More mixes that mach

Don't pick colors at random. Mix them. For example:

{% highlight scss %}
  $mix-1: mix($primary-color, $complementary-color, 13%);
  $mix-2: mix($complementary-color, $primary-color, 13%);
  $mix-3: mix($primary-neutral-light, $primary-color, 45%);
  $mix-4: mix($primary-neutral-light, $complementary-color, 35%);
  $mix-5: mix($primary-neutral-dark, $complementary-color, 35%);
  $mix-6: mix($primary-neutral-dark, $primary-color, 35%);
  $mix-7: mix($complementary-neutral-dark, $complementary-color, 35%);
  $mix-8: mix($complementary-neutral-dark, $primary-color, 35%);

  $contrast-to-mix-1: increase-contrast($mix-1, 20);
  $contrast-to-mix-2: increase-contrast($mix-2, 20);
  $contrast-to-mix-3: increase-contrast($mix-3, 20);
  $contrast-to-mix-4: increase-contrast($mix-4, 20);
  $contrast-to-mix-5: increase-contrast($mix-5, 20);
  $contrast-to-mix-6: increase-contrast($mix-6, 20);
  $contrast-to-mix-7: increase-contrast($mix-7, 20);
  $contrast-to-mix-8: increase-contrast($mix-8, 20);

  $analogous-color: adjust-hue($complementary-color, -40);
  $complementary-analogous: mix($analogous-color, $complementary-color, 66);

  $complementary-analogous-mix-1: mix($complementary-analogous, $complementary-color, 10%);
  $complementary-analogous-mix-2: mix($complementary-analogous, $primary-color, 10%);
{% endhighlight %}

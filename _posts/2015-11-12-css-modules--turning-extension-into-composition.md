---
layout: post
title: "CSS Modules: turning extension into composition"
name: "Glen Maddern"
date: 2015-11-12 13:36:54
twitter: glenmaddern
github: geelen
slides: http://glenmaddern.com/slides/from-extension-to-composition
links:
  - http://github.com/orgs/css-modules/people
  - http://github.com/css-modules/css-modules
  - http://glenmaddern.com/articles/css-modules

---

Helps to run CSSConf AU

Works on CSS Modules

## Today

* The problem with @extend
* How CSS Modules works
* Composition and Modular Style

## The problem with @extend

### @extend - what are you?

{% highlight scss %}
.Shadow--Obnoxious {
  box-shadow: 0 0px 40px 10px currentColor;
}
.Button--CallToAction {
  @extend .Button;
  color: fuchsia;
  &:hover {
    @extend .Shadow--Obnoxious;
  }
}
{% endhighlight %}

a CallToAction button is a Button, and is a obnoxiously shadowed thing when hovered.

### Hungry Hungry @extend

@extend will duplicate selectors to cover all bases.

### Limitations

@extend doesn't work in media queries

## @extend is a good idea
* Only use the extendee in one place
* Use %placeholder extends

## CSS Modules

What happens when your markup is dynamic?

{% highlight js %}
import styles from './signup-form.scss'
{% endhighlight %}t

## But then what is styles?

{% highlight css %}
/* CSS */
.normal {
  /* styles here... */
}
/* ICSS */
:export {
  normal: normal_f34f7fa0;
}
.normal_f34f7fa0 {
  /* styles unchanged... */
}
{% endhighlight %}

{% highlight js %}
/* components/submit-button.jsx */
import styles from './signup-form.scss'
return <button className="{sytles.normal}">Submit</button>
{% endhighlight %}


## Composition and Modular Style

* Backwards @extends

## Single Purpose Files full of Single Purpose Classes

## One name in your markup can refer to styles all over the palce.

## Modular Style

* Flexibility

## Future Work

* Reusable components w/ CSS on NPM
* Non-JS ecosystems!!!

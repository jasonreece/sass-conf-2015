---
layout: post
title: "Unintentional Exclusion - Web accessibility and how we’re failing our users"
name: "Lee Ann Kinney"
date: 2015-11-11 23:45:25
twitter: _leekinney
github: leekinney
slides: leekinney.github.io/sassconf
links:
  - http://leekinney.is
---


* 57 million people in the US living with a disability
* Of all US computer users 22 million have a mild visual difficulty 11 million being severe
* Of all US computer users 24 million have a mild dexterity difficulty or impairment 7 million being severe


##Types of Disability

* Visual: blind or low-sight, color blind
* Hearing: deaf or hard-of-hearing
* Physical: MS, ALS, paraplegic/quadriplegic
* Cognitive: dyslexia, low literacy, learning disabilities, ESL
* Seizures: photosensitive

## Temporary or Situational Disabilities

* Aging: dementia/Alzheimer’s, cataracts, low vision, mobility, loss of fine motor skills
* Broken limbs
* Sleep deprivation
* Chemo brain
* Migraines/headaches

## Why are we excluding so many users?

* It’s too hard
* It’s too expensive
* We're lazy
* We don’t realize we’re doing it

## 8 Easy Tips to get started
* Alt text
* Links
* Navigation
* Contrast & Color
* Keyboard focus
* Forms
* Semantic HTML
* Video captions

## Alt Text
* Provide the function, not the content
* Make sure it's providing context
* If image is purely decorative use “” to instruct screen reader to skip

## Links
* Don’t use color alone to signify a link
* Link text should make sense (and let a user know where it is taking them)
* Don’t open in a new window (unless you let the user know first)

## Navigation
* Provide skip to main content
* Make sure users can tab through navigation

## Color & Contrast
* Don’t rely on color to indicate something
* Use a minimum contrast ratio of 4.5:1 for normal text, 3:1 for large text

## Keyboard Focus
* Don’t remove :focus
* Style it to fit in with the look and feel of your site

## Accessible Forms
* Labels
* Tab
* Error Messages
* No Captchas

## Semantic HTML
* Gives the page meaning and structure
* Use header tags in correct order

## Video Captions
* Provide captions if you have video on your site
* Helps SEO
* Helps users to scan content of video before watching

## Tools & extensions
* [Chrome Accessibility Dev Tools](https://chrome.google.com/webstore/detail/accessibility-developer-t/fpkknkljclfencbdbgkenhalefipecmb?hl=en)
* [Firefox Accessibility Evaluation Toolbar](https://addons.mozilla.org/en-US/firefox/addon/accessibility-evaluation-toolb/)
* [Wave Toolbar (available as a Chrome or Firefox Extension or bookmarklet](http://wave.webaim.org/toolbar/)
* [ChromeVox](https://chrome.google.com/webstore/detail/chromevox/kgejglhpjiefppelpmljglcjbhoiplfn?hl=en)
* [Firefox Fangs](https://addons.mozilla.org/en-US/firefox/addon/fangs-screen-reader-emulator/?src=search)
* [Chrome No Coffee (low-vision simulator)](https://chrome.google.com/webstore/detail/nocoffee/jjeeggmbnhckmgdhmgdckeigabjfbddl?hl=en&gl=US)

## Resources
* [The Accessibility Project](http://a11yproject.com/)
* [W3C Web Accessibility Initiative (WAI)](http://www.w3.org/WAI/)
* [WebAIM, an accessibility-focused organization with great information](http://webaim.org/)
* [Accessibilty Checklist](http://design4access.nomensa.com/checklist.html)
* [A11Y Wins](http://a11ywins.tumblr.com/)

## Sass Specific Resources
* [AccessCSS Mixin](https://github.com/LukyVj/accecss)
* [Accessibility Color Methods](https://gist.github.com/haschek/1059983)
* [Accessibility helpers for Sass](https://github.com/at-import/sass-a11y)
* [Mixin for accessible color contrast](http://codepen.io/davidhalford/pen/wlDxL)
* [Accessible Contrast with Less and Sass](http://madebymike.com.au/writing/accessible-contrast-with-less-and-sass/)

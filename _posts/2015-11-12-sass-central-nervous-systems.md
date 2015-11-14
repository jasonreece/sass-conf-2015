---
layout: post
title: "Sass Central Nervous Systems"
name: "Chris Sauve"
date: 2015-11-12 13:17:19
twitter: _lemonmade
github: lemonmade
slides: http://www.slideshare.net/chrismsauve/sassconf-slides-chris-sauve
links:
  - http://www.lemondesign.co/
---

## Shared Styling Concerns

* Colors
* Typography
* Stacking (z-index)
* Metrics
* Common Properties
* Breakpoints

## We Want

* Consistency
* Maintainability

## Variables - Not such a great thing for consistency and maintainability

* Variables get tacked on
* Developers aren't sure what is available.
* Naming conflicts (globals)
* Invisible dependencies between components
* No iteration

## Maps and Functions

* Each module has map with custom function to retrieve items from map.
* Colors
* Defaults
* Z-Index
* mixins and functions can share names.

## Wow, So great!

* Single point of entry
* Debugging / normalization
* Iteration / Programmatic access
* Reduced API Footprint

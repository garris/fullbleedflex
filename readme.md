#FullBleedFlex 

## What it is

**FullBleedFlex** is a CSS framework that makes it easy to build responsive web layouts.  **FullBleedFlex** manages your layouts dynamically -- automatically resizing and reflowing your block-level content areas for optimal viewing on any sized screen.

## The bullets

* Tested on IE7, IE8, IE9, FF, Chrome, Safari, iPhone, iPad, Android 2.3.3 & 4.1
* Plays nice with jQuery Mobile, jQuery UI, KnockoutJS, Backbone, Mustache & other popular frameworks.
* Core is 100% CSS based & takes full advantage of CSS hardware acceleration.
* Optional jQuery plug-in -- for added sub-pixel precision.
* Intuitive, reliable & easy to use.

**FullBleedFlex** was designed for web applications where mash-ups of different block-level content occupy defined hierarchical spaces in a given layout.  Regardless of scren size, **fullBleedFlex** takes advantage of the full available horizontal area of its container -- stacking content blocks horizontally and then vertically based on available width.

## Let's try one

### First you'll need to download the source here...

    https://github.com/garris/fullbleedflex

### Next, install into your project...

    <link type="text/css" rel="stylesheet" href="css/reset.css"/>
    <link type="text/css" rel="stylesheet" href="css/fullBleedFlex.css"/>


### Next try this.   See what happens...

    <div class="fb-row-333333">
      <div class="fb-33 content"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>
      <div class="fb-33 content"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>
      <div class="fb-33 content"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>
    </div> <!-- row-333333 -->

    <div class="fb-row-5050">
      <div class="fb-50 content"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>
      <div class="fb-50 content"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>
    </div> <!-- row-5050 -->


What sets fullBleedFlex apart from other CSS frameworks is the optional content margin settings.  The need for content area margin is not always necessary in a gadget based layout so margin widths are optional (akin to the old-school printing term 'full bleed') and can be applied selectively to specific areas of a layout as needed. Common and intuitive rules define how these areas flex depending on available space. Hence the name FullBleedFlex. 

## Notes:
* The IE7 & IE8 implementation of fullBleedFlex are locked to the wide (laptop & desktop) view. 
* This version of fullBleedFlex was refactored for cleaner classnames.  The original was used to build an innovation management application called [ICON](http://icon.spigit.com/ "icon.spigit.com").  If you find any bugs, please report it -- & we will fix it asap.
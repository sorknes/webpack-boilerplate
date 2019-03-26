# How to use the SCSS

Here are some tips and tricks on how to use the Grid, helper classes and much
more.

## Grid

We use [Sass Flexbox Grid](http://sassflexboxgrid.com/), a responsive grid
system based on Flexbox Grid and the flex property, re-written in Sass, edited
and expanded upon.

### Responsive and Fluid

Responsive modifiers let you define column sizes, offsets, alignment and
distribution at xs, sm, md & lg viewport widths. Use the row class to define an
outer row of columns and then place columns inside of rows.
[See all classes](http://sassflexboxgrid.com/views/classes.html)

```scss
<div class="row">
  <div class="col-xs-12 col-sm-8 col-md-6 col-lg-4"></div>
</div>
```

### Offsets

Offset a column.

```scss
<div class="row">
  <div class="col-xs-offset-3 col-xs-9"></div>
</div>
```

### Auto Width

Add any number of auto sizing columns to a row. Let the grid figure it out.

```scss
<div class="row">
  <div class="col"></div>
  <div class="col"></div>
</div>
```

### Alignment

Add classes to align elements to the start or end of a row as well as the top,
bottom, or center of a column.
[See all classes](http://sassflexboxgrid.com/views/classes.html)

```scss
<div class="row start-xs">
  <div class="col-xs-6">content</div>
</div>
```

### Distribution

Add classes to distribute the contents of a row or column.

```scss
<div class="row around-xs">
  <div class="col-xs-2"></div>
  <div class="col-xs-2"></div>
  <div class="col-xs-2"></div>
</div>
```

### Reordering

Add classes to reorder columns.

```scss
<div class="row">
  <div class="col-xs-2">1</div>
  <div class="col-xs-2">2</div>
  <div class="col-xs-2 first-xs">3</div>
  ...
</div>
```

### Reversing

Add a class to reverse columns or column content.

```scss
<div class="row reverse">
  <div class="col-xs">1</div>
  <div class="col-xs">2</div>
  <div class="col-xs">3</div>
</div>
```

### Column Height Equalizer

By default, flexbox stretches each flex item to match the height of it's
sibling. The .natural-height row utility class will make each column's height
match it's content, giving the developer control of the behavior.

```scss
<div class="row">
  <div class="col">Content of varying height</div>
  <div class="col">Content of varying height</div>
</div>
```

### Nested Grids

Nest grids inside grids inside grids.

```scss
<div class="row">
  <div class="col-xs">
    <div class="row">
      <div class="col-xs"></div>
    </div>
  </div>
</div>
```

### Visibility

Visibility classes allow for responsive showing and hiding of content.
[See all classes](http://sassflexboxgrid.com/views/classes.html)

```scss
<div class="row">
  <div class="col hide-md"></div>
  <div class="col hide-xs show-md"></div>
  <div class="col"></div>
  <div class="col"></div>
  <div class="col"></div>
  <div class="col hide-sm-only"></div>
</div>
```

### Variables

Customizable Sass variables allow you to create a grid and responsive framework
to meet your needs. You can easily change the number of columns in your grid
from the default 12. Update your breakpoint ranges by adjusting these variables
and all of the media queries, classes and mixins will update accordingly.
[See all variables](http://sassflexboxgrid.com/views/variables.html)

```scss
$grid-columns: 12; // Set number of columns in the grid

$xs-max: 40rem; // Set xs breakpoint's max width
$sm-max: 64rem; // Set sm breakpoint's max width
$md-max: 90rem; // Set md breakpoint's max width
$lg-max: 120rem; // Set lg breakpoint's max width

$gutter: 1rem; // Set gutter size

$content-well-max-width: 'none'; // Set the max-width of the content well
```

### Mixins

Mixins are available for every Sass Flexbox Grid set of delarations.
[See all mixins](http://sassflexboxgrid.com/views/mixins.html)

```scss
.container {
  @include row();
  .box {
    @inlcude col(6);
    @inlcude col(md, 3);
  }
  .extras {
    @include hide(lg);
  }
}
```

### Helper classes

Helper classes are available to remove padding from (nested) grid.

```scss
// Remove padding-left and padding-right
.col-gutter-lr {
  padding: 0 $gutter;
}

// Remove all padding
.col-no-gutter {
  padding: 0;
}
```

## SASS-MQ (Media Query)

[mq()](https://github.com/sass-mq/sass-mq) is a Sass mixin that helps you
compose media queries in an elegant way.

```scss
.class-name {
  @include mq($from: s, $until: m) {
    background-color: red;
  }

  @include mq($from: m) {
    background-color: green;
  }
}

// Compiles to
// -------------------------------------------------------------------------------
@media (min-width: 36em) and (max-width: 48em) {
  .class-name {
    background: red;
  }
}

@media (min-width: 48em) {
  .class-name {
    background: green;
  }
}
```

## Border

Add border to element.

```scss
// Border all sides
// -------------------------------------------------------------------------------
.class-name {
  @include border($border-width-small, $border-solid, teal, all);
}

// All sides minus bottom
// -------------------------------------------------------------------------------
.class-name {
  @include border($border-width-small, $border-dashed, teal, all, bottom);
}

// Top only
// -------------------------------------------------------------------------------
.class-name {
  @include border($border-width-small, $border-dotted, teal, top);
}
```

## Center element

Align element to center, and center align text.

```scss
.class-name {
  @include center();
}
```

## Clearfix

This is a simpler version of the well known clearfix hack made by Nicolas
Gallagher. This version is simplified for more modern browsers.

```scss
.class-name {
  @include clearfix();
}
```

## Establish Baseline

Adjust font and line-height values.

```scss
.class-name {
  @include establish-baseline;
}
```

## Font Family

Choose between different sets of font-families.

```scss
.class-name {
  @include font-family(FONT_FAMILY_PRIMARY);
}
```

## Font smoothing

Improving font rendering with CSS

```scss
.class-name {
  @include font-smoothing();
}
```

## Font weight

```scss
.class-name {
  @include font-weight(FONT_WEIGHT_REGULAR);
}
```

## Hidden element

An easy way to hide an element from both screenreaders and browsers

```scss
.class-name {
  @include hidden();
}
```

## Icon scale

Sets width/height of icons. Matches \$type-scale

```scss
.class-name {
  @include icon-scale(m);
}

.class-name {
  @include icon-scale-bg(m);
}
```

## Visually hidden

An easy way to hide text from screen but not from screen-readers.

```scss
.class-name {
  @include is-vhidden();
}
```

## Line height

This mixin takes a parameter for line-height (sass-map: \$line-height). It then
uses the function map-fetch to reach deep key:value pairs within this map.

Finally it outputs the correct pairing of font-size and line-height, using the
compass-mixin `line-height`.

```scss
.class-name {
  @include line-height(xl);
}
```

## Placeholder

The @content directive, allows us to pass a content block into a mixin.

```scss
@include placeholder {
  color: black;
}
```

## Pseudo

When using ::before and ::after you'll always need these three, so we're saving
two lines of code every time you use this.

```scss
.class-name::after {
  @include pseudo;
}
```

## Push auto

To quickly centre a block element without having to worry about if there is any
top or bottom margin already applied.

```scss
.class-name {
  @include push-auto;
}
```

## Spacing

SCSS classes/mixins for responsive margins and padding.
[Resource used](https://github.com/digitaledgeit/sass-spacing)

```scss
// p = padding t = top
// -------------------------------------------------------------------------------
.class-name {
  @include pt(4);
}

// m = margin t = bottom
// -------------------------------------------------------------------------------
.class-name {
  @include mb(4);
}
```

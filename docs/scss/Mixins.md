# Mixins

Here's a list of all available mixins.

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

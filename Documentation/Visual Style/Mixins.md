# Mixins

Here's a list of all available mixins.

> TODO: describe the tokens / config / mixins flow

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
  @include border(BORDER_WIDTH_2, solid, teal, all);
}

// All sides minus bottom
// -------------------------------------------------------------------------------
.class-name {
  @include border(BORDER_WIDTH_2, solid, teal, all, bottom);
}

// Top only
// -------------------------------------------------------------------------------
.class-name {
  @include border(BORDER_WIDTH_2, solid, teal, top);
}
```

## Border radius

Adds border-radius to element.

```scss
// All corners
// -------------------------------------------------------------------------------
.class-name {
  @include border-radius(BORDER_RADIUS_1);
}

// Top-left only
// -------------------------------------------------------------------------------
.class-name {
  @include border-radius(BORDER_RADIUS_1);
}

// Bottom only
// -------------------------------------------------------------------------------
.class-name {
  @include border-radius(
    BORDER_RADIUS_NONE,
    BORDER_RADIUS_NONE,
    BORDER_RADIUS_1,
    BORDER_RADIUS_1
  );
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

## Container

Container mixin

```scss
// Max-width
// -------------------------------------------------------------------------------
.class-name {
  @include container;
}

// 100% width
// -------------------------------------------------------------------------------
.class-name {
  @include container-fluid;
}
```

## Establish Baseline

Adjust font-size and line-height values. Default values are:

- Font-size = 16px
- Line-height = 1.5

```scss
.class-name {
  @include establish-baseline;
}
```

## Focus

Add a uniform focus styling.

```scss
:focus {
  @include focus();
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

An easy way to hide an element from both screenreaders and browsers.

```scss
.class-name {
  @include hidden();
}
```

## Icon scale

Sets width/height of icons.

```scss
.class-name {
  @include icon-scale(ICON_SCALE_1);
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
  @include line-height(LINE_HEIGHT_1);
}
```

## Placeholder

The @content directive, allows us to pass a content block into a mixin.

```scss
@include placeholder {
  color: map-get($COLOR_GREY, COLOR_GREY_TINT_25);
}
```

## Pseudo

When using ::before and ::after you'll always need these three, so we're saving
two lines of code every time you use this.

```scss
.class-name::before {
  @include pseudo;
}

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
[Resource used](https://github.com/digitaledgeit/sass-spacing).

- pt = (p)adding(t)op
- mb = (m)argin(b)ottom

```scss
.class-name {
  @include pt(4);
}

.class-name {
  @include mb(4);
}

.class-name {
  @include p(4);

  @include mq($from: m) {
    @include p(8);
  }
}
```

## Screen readers only

Theorically bulletproof CSS class for visually hide anything and keep it
accessible to ATs.

```scss
.class-name {
  @include sr-only;
}

// Use in conjunction with .sr-only to only display content when it's focused.
// -------------------------------------------------------------------------------
.class-name:focus,
.class-name:active {
  @include sr-only-focusable;
}
```

## Text align

A mixin that helps text-alignment.

- text-align: start; and text-align: end; allows the browser to decide how to
- best align text based on the user's LTR or RTL preference. Browser support is
- quite good, but to be sure, we use a backup solution for `start`and `end`,
- using double declarations, hence falling back to `left`and `right`.

```scss
.class-name {
  @include text-align(ALIGN_CENTER);
}
```

## Text underline

The idea behind this mixin is that no defaults are declared in the arguments so
that we are “forced” in a friendly way to declare all 4 states of our links.

The :hover and :focus pseudo-classes are usually declared together. Feel free to
separate them if you want to do so.

- Active-color
- Hover(focus)-color
- Visited-color

```scss
.class-name {
  @include text-underline(red, yellow, blue);
}
```

## Transition

Transition with type and duration.

```scss
.class-name {
  @include transition(all, DURATION_3, ease-in-out);
}
```

## Type scale

This mixin takes a parameter for typographic scale (sass-map: \$type-scale). It
then uses the function map-fetch to reach deep key:value pairs within this map.

Finally it outputs the correct pairing of font-size and line-height, using the
compass-mixin `buf-type-scale`.

```scss
.class-name {
  @include type-scale(TEXT_PRESET_2);
}
```

## Z-index

Mixin to organize your z-index

```scss
.class-name {
  @include z-index(Z_INDEX_2);
}
```

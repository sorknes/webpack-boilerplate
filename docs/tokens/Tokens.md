# How to use tokens

Here's a list of all available design tokens, with examples how to use them in
your CSS file.

Design tokens are the visual design atoms of the design system — specifically,
they are named entities that store visual design attributes. We use them in
place of hard-coded values (such as hex values for color or pixel values for
spacing) in order to maintain a scalable and consistent visual system for UI
development - Source
[SalesForce](https://www.lightningdesignsystem.com/design-tokens/).

## Border radius

```scss
.class-name {
  border-radius: map-get($BORDER_RADIUS, BORDER_RADIUS_XXXL);
}
```

## Border width

```scss
.class-name {
  border: map-get($BORDER_WIDTH, BORDER_WIDTH_S) solid map-get(
      $COLOR_GREY,
      COLOR_GREY_TINT_0
    );
}
```

## Breakpoints

```scss
.class-name {
  @media (min-width: map-get($BREAKPOINT, BREAKPOINT_S)) {
  }
}
```

## Colors

```scss
.class-name {
  background-color: map-get($COLOR_GREY, COLOR_GREY_TINT_0);
}
```

## Duration

```scss
.class-name {
  transition-duration: map-get($DURATION, DURATION_DEFAULT);
}
```

## Font family

```scss
.class-name {
  font-size: map-get($FONT_FAMILY, FONT_FAMILY_PRIMARY);
}
```

## Font size

```scss
.class-name {
  font-size: map-get($FONT_SIZE, FONT_SIZE_M);
}
```

## Font weight

```scss
.class-name {
  font-weight: map-get($FONT_WEIGHT, FONT_WEIGHT_REGULAR);
}
```

## Line height

```scss
.class-name {
  line-height: map-get($LINE_HEIGHT, LINE_HEIGHT_S);
}
```

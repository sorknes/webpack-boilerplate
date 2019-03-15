# How to use tokens

Her you can see how to use the JSON token files in your CSS.

## Border radius

```css
.class-name {
  border-radius: map-get($BORDER_RADIUS, BORDER_RADIUS_XXXL);
}
```

## Border width

```css
.class-name {
  border: map-get($BORDER_WIDTH, BORDER_WIDTH_S) solid map-get(
      $COLOR_GREY,
      COLOR_GREY_TINT_0
    );
}
```

## Breakpoints

```css
@media (min-width: map-get($BREAKPOINT, BREAKPOINT_S)) {
  .class-name {
  }
}
```

## Colors

```css
.class-name {
  background-color: map-get($COLOR_GREY, COLOR_GREY_TINT_0);
}
```

## Font size

```css
.class-name {
  font-size: map-get($FONT_SIZE, FONT_SIZE_M);
}
```

## Font weight

```css
.class-name {
  font-weight: map-get($FONT_WEIGHT, FONT_WEIGHT_REGULAR);
}
```

## Line height

```css
.class-name {
  line-height: map-get($LINE_HEIGHT, LINE_HEIGHT_S);
}
```

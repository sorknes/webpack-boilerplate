# Utility classes

To help you have a consistent way of doing things, there are som nifty helper
classes available.

> Let's keep things [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself)

## Hidden

Hide elements with display none.

```scss
.hidden {
  @include hidden();
}
```

## Invisible

Make elements invisible (but still take up place).

```scss
.invisible {
  @include invisible();
}
```

## Shown

Show elements with display block.

```scss
.shown {
  @include shown;
}
```

## Spacing

If you need to sett a different e.g. padding value based on breakpoints, there
are some helper classes available.

```scss
@media screen and (min-width: 36em) {
  .mt\:0\@xs {
    margin-top: 0;
  }
}

@media screen and (min-width: 36em) {
  .mt\:4\@xs {
    margin-top: 1rem;
  }
}
```

```html
<div class="class-name p:1@xs p:2@md">
  <h1 class="class-name__title">My Title</h1>
  <p class="class-name__content mt:1@xs mt:2@md">My content...</p>
</div>
```

## Sr-only

Theorically bulletproof CSS class for visually hide anything and keep it
accessible to ATs.

```scss
.sr-only {
  @include sr-only;
}
```

Use in conjunction with .sr-only to only display content when it's focused.

```scss
.sr-only-focusable:focus,
.sr-only-focusable:active {
  @include sr-only-focusable;
}
```

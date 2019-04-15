# Utility classes

There are som nifty helper classes available.

## Focus

Add a uniform focus styling.

```scss
:focus {
  @include focus();
}
```

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

## Sr-only

Theorically bulletproof CSS class for visually hide anything and keep it
accessible to ATs.

```scss
.sr-only {
  @include sr-only;
}

// Use in conjunction with .sr-only to only display content when it's focused.
// -------------------------------------------------------------------------------
.sr-only-focusable:focus,
.sr-only-focusable:active {
  @include sr-only-focusable;
}
```

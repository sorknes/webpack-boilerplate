# Spacing

CSS classes/mixins for responsive margins and padding.

```html
<div class="class-name p:1@xs p:2@md">
  <h1 class="class-name__title">My Title</h1>
  <p class="class-name__content mt:1@xs mt:2@md">My content...</p>
</div>
```

- Where m or p is margin or padding
- Where x, y, l, r, t or b is the direction in which the margin or padding is
  applied
- Where 0, 1, 2, 3, 4, 5, 6 or auto is the size of the margin or padding applied
- Where @\* is the breakpoint from which the margin or padding is applied

```scss
.class-name {
  @include p(1);

  @include mq('md') {
    @include p(2);
  }
}

.class-name__content {
  @include mt(1);

  @include mq('md') {
    @include mt(2);
  }
}
```

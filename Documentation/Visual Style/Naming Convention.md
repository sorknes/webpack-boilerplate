# Naming Convention

Naming things is hard and I've tried several different approaches. I tried
naming things as what they are (heading-1, heading-2 etc.), I also tried the
t-shirt size variant (small, medium, large etc.). But I always find myself going
back and changing things up.

Then I came across
[this](http://danmall.me/articles/typography-in-design-systems/) article written
by Dan Mall. And I was thinking of trying a new way of thinking. Using a
numerical value from 1 - 7 with a descripting prefix, where 1 is the smallest
and 7 are the largest value.

## Animation

**Duration**

- duration-none (0ms)
- duration-1 (100ms)
- duration-2 (200ms)
- duration-3 (300ms - default)
- duration-4 (500ms)
- duration-5 (700ms)
- duration-6 (1000ms)
- duration-7 (2000ms)

## Border

**Border radius**

- border-radius-none (0)
- border-radius-1 (2px)
- border-radius-2 (4px)
- border-radius-3 (8px)
- border-radius-4 (16px)
- border-radius-5 (32px)
- border-radius-6 (9999px)
- border-radius-7 (100%)

**Border width**

- border-width-none (0)
- border-width-1 (1px)
- border-width-2 (2px)
- border-width-3 (4px)
- border-width-4 (8px)
- border-width-5 (16px)
- border-width-6 (32px)
- border-width-7 (64px)

## Box shadow

- box-shadow-none (0 0 0 0)
- box-shadow-1 (0 0 0 2px - spread)
- box-shadow-2 (0 0 0 4px - spread)
- box-shadow-3 (0 0 8px 0 - blur)
- box-shadow-4 (0 0 12px 0 - blur)
- box-shadow-5 (0 0 16px 0 - blur)
- box-shadow-6 (0 0 20px 0 - blur)
- box-shadow-7 (0 0 24px 0 - blur)

## Icon

- icon-scale-none (0)
- icon-scale-1 (8px)
- icon-scale-2 (16px - default)
- icon-scale-3 (24px)
- icon-scale-4 (32px)
- icon-scale-5 (40px)
- icon-scale-6 (48px)
- icon-scale-7 (56px)

## Breakpoint

- breakpoint-1 (576px)
- breakpoint-2 (768px)
- breakpoint-3 (992px)
- breakpoint-4 (1200px)

## Typography

**Font family**

- font-family-1 (Open Sans, sans-serif)
- font-family-2 (Playfair Display, serif)

**Font size**

- font-size-none (0)
- font-size-1 (small)
- font-size-2 (h6, p - default)
- font-size-3 (h5)
- font-size-4 (h4)
- font-size-5 (h3)
- font-size-6 (h2)
- font-size-7 (h1)

**Font weight**

- font-weight-none (0)
- font-weight-1 (200)
- font-weight-2 (300)
- font-weight-3 (400 - default)
- font-weight-4 (600)
- font-weight-5 (700)
- font-weight-6 (800)
- font-weight-7 (900)

**Line height**

- line-height-none (0)
- line-height-1 (small)
- line-height-2 (h6, p - default)
- line-height-3 (h5)
- line-height-4 (h4)
- line-height-5 (h3)
- line-height-6 (h2)
- line-height-7 (h1)

## Global class namespace

Namespace should be wb followed by the dash suffix -, like this: wb- (wb =
(w)ebpack(b)oilerplate.

Namespacing in Sass is very useful for scoping project-specific styles and
avoiding conflicts, e.g. with third party plugins og modules.

I've created a variable that holds the prefix value, `$prefix: '.wb-';` I
recommend that you change this to fit your needs.

Usage:

```scss
#{$prefix}class-name {
  color: black;
}
```

Output:

```scss
.wb-class-name {
  color: black;
}
```

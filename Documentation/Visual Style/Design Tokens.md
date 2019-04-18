# Tokens

We use
[node-sass-json-importer](https://www.npmjs.com/package/node-sass-json-importer)
to import our JSON files as design tokens. Design tokens are the visual design
atoms of the design system — specifically, they are named entities that store
visual design attributes. We use them in place of hard-coded values (such as hex
values for color or pixel values for spacing) in order to maintain a scalable
and consistent visual system for UI development

> Resource: [SalesForce](https://www.lightningdesignsystem.com/design-tokens/).

Here's a list of all available design tokens. Change them to fit your need.

## Border radius

```json
{
  "BORDER_RADIUS": {
    "BORDER_RADIUS_NONE": "0",
    "BORDER_RADIUS_1": "2px",
    "BORDER_RADIUS_2": "4px",
    "BORDER_RADIUS_3": "8px",
    "BORDER_RADIUS_4": "16px",
    "BORDER_RADIUS_5": "32px",
    "BORDER_RADIUS_6": "9999px",
    "BORDER_RADIUS_7": "100%"
  }
}
```

## Border width

```json
{
  "BORDER_WIDTH": {
    "BORDER_WIDTH_NONE": "0",
    "BORDER_WIDTH_1": "1px",
    "BORDER_WIDTH_2": "2px",
    "BORDER_WIDTH_3": "4px",
    "BORDER_WIDTH_4": "8px",
    "BORDER_WIDTH_5": "16px",
    "BORDER_WIDTH_6": "32px",
    "BORDER_WIDTH_7": "64px"
  }
}
```

## Box shadow

```json
{
  "BOX_SHADOW": {
    "BOX_SHADOW_NONE": "0 0 0 0",
    "BOX_SHADOW_1": "0 0 0 2px",
    "BOX_SHADOW_2": "0 0 0 4px",
    "BOX_SHADOW_3": "0 0 8px 0",
    "BOX_SHADOW_4": "0 0 12px 0",
    "BOX_SHADOW_5": "0 0 16px 0",
    "BOX_SHADOW_6": "0 0 20px 0",
    "BOX_SHADOW_7": "0 0 24px 0"
  }
}
```

## Breakpoints

```json
{
  "BREAKPOINT": {
    "BREAKPOINT_1": "576px",
    "BREAKPOINT_2": "768px",
    "BREAKPOINT_3": "992px",
    "BREAKPOINT_4": "1200px"
  }
}
```

## Colors

```json
{
  "COLOR_GREY": {
    "COLOR_GREY_TINT_100": "#ffffff",
    "COLOR_GREY_TINT_95": "#f5f5f5",
    "COLOR_GREY_TINT_90": "#e5e5e5",
    "COLOR_GREY_TINT_85": "#d9d9d9",
    "COLOR_GREY_TINT_80": "#cccccc",
    "COLOR_GREY_TINT_75": "#bfbfbf",
    "COLOR_GREY_TINT_70": "#b3b3b3",
    "COLOR_GREY_TINT_65": "#a6a6a6",
    "COLOR_GREY_TINT_60": "#999999",
    "COLOR_GREY_TINT_55": "#8c8c8c",
    "COLOR_GREY_TINT_50": "#7f7f7f",
    "COLOR_GREY_TINT_45": "#737373",
    "COLOR_GREY_TINT_40": "#666666",
    "COLOR_GREY_TINT_35": "#595959",
    "COLOR_GREY_TINT_30": "#4d4d4d",
    "COLOR_GREY_TINT_25": "#404040",
    "COLOR_GREY_TINT_20": "#333333",
    "COLOR_GREY_TINT_15": "#262626",
    "COLOR_GREY_TINT_10": "#1a1a1a",
    "COLOR_GREY_TINT_5": "#0d0d0d",
    "COLOR_GREY_TINT_0": "#000000"
  }
}
```

## Duration

```json
{
  "DURATION": {
    "DURATION_NONE": "0ms",
    "DURATION_1": "100ms",
    "DURATION_2": "200ms",
    "DURATION_3": "300ms",
    "DURATION_4": "500ms",
    "DURATION_5": "700ms",
    "DURATION_6": "1000ms",
    "DURATION_7": "2000ms"
  }
}
```

## Font family

```json
{
  "FONT_FAMILY": {
    "FONT_FAMILY_1": ["'Open Sans'", "sans-serif"],
    "FONT_FAMILY_2": ["'Playfair Display'", "serif"]
  }
}
```

## Font size

```json
{
  "FONT_SIZE": {
    "FONT_SIZE_NONE": "0",
    "FONT_SIZE_1": "12px",
    "FONT_SIZE_2": "16px",
    "FONT_SIZE_3": "20px",
    "FONT_SIZE_4": "24px",
    "FONT_SIZE_5": "28px",
    "FONT_SIZE_6": "32px",
    "FONT_SIZE_7": "42px"
  }
}
```

## Font weight

```json
{
  "FONT_WEIGHT": {
    "FONT_WEIGHT_NONE": "0",
    "FONT_WEIGHT_1": "200",
    "FONT_WEIGHT_2": "300",
    "FONT_WEIGHT_3": "400",
    "FONT_WEIGHT_4": "600",
    "FONT_WEIGHT_5": "700",
    "FONT_WEIGHT_6": "800",
    "FONT_WEIGHT_7": "900"
  }
}
```

## Icon scale

```json
{
  "ICON_SCALE": {
    "ICON_SCALE_NONE": "0",
    "ICON_SCALE_1": "8px",
    "ICON_SCALE_2": "16px",
    "ICON_SCALE_3": "24px",
    "ICON_SCALE_4": "32px",
    "ICON_SCALE_5": "40px",
    "ICON_SCALE_6": "48px",
    "ICON_SCALE_7": "56px"
  }
}
```

## Line height

```json
{
  "LINE_HEIGHT": {
    "LINE_HEIGHT_NONE": "0",
    "LINE_HEIGHT_1": "1",
    "LINE_HEIGHT_2": "1.50",
    "LINE_HEIGHT_3": "1.25",
    "LINE_HEIGHT_4": "1.25",
    "LINE_HEIGHT_5": "1.15",
    "LINE_HEIGHT_6": "1.15",
    "LINE_HEIGHT_7": "1.15"
  }
}
```

## Z-index

```json
{
  "Z_INDEX": {
    "Z_INDEX_NONE": "0",
    "Z_INDEX_1": "10",
    "Z_INDEX_2": "20",
    "Z_INDEX_3": "30",
    "Z_INDEX_4": "40",
    "Z_INDEX_5": "50",
    "Z_INDEX_6": "60",
    "Z_INDEX_7": "9999"
  }
}
```

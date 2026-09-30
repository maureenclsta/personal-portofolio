# Project images

This is where project screenshots / preview images go — shown at the top of
each project card and on the project detail page.

## Expected files

Name each image after the project's `slug` (found in `data/portfolio.ts`):

```
public/images/projects/agriyield.jpg
public/images/projects/buginator.jpg
public/images/projects/kovera.jpg
public/images/projects/schola.jpg
public/images/projects/snapdriver.jpg
```

`.png` / `.webp` also work — match the extension in the data file.

## How it's wired

Each project in `data/portfolio.ts` has a `media` field:

```ts
media: { type: "image", src: "/images/projects/agriyield.jpg", alt: "AgriYield preview" }
```

- Set `type: "image"` and point `src` at the file here.
- For a video instead, see `public/videos/projects/`.
- Leave `src: null` to show the styled placeholder.

Landscape 16:9 or 16:10 images look best. At least 1280px wide is recommended.
```
```

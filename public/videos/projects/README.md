# Project demo videos

This is where project demo video files go — played in the project detail page
media area.

## Which source does this project use?

The project supports **local video files** served from `/public` (not YouTube
or external embeds). Drop the file here and reference it by path.

## Expected files

Name each video after the project's `slug` (found in `data/portfolio.ts`):

```
public/videos/projects/agriyield.mp4
public/videos/projects/buginator.mp4
public/videos/projects/kovera.mp4
public/videos/projects/schola.mp4
public/videos/projects/snapdriver.mp4
```

`.webm` also works — match the extension in the data file.

## How it's wired

Each project in `data/portfolio.ts` has a `media` field:

```ts
media: { type: "video", src: "/videos/projects/agriyield.mp4", alt: "AgriYield demo" }
```

- Set `type: "video"` and point `src` at the file here.
- Leave `src: null` to show the styled placeholder.

On the **project detail page** videos autoplay muted, loop, and play inline
(no controls). This is why they must be muted — browsers block autoplay with
sound. Keep files reasonably small (compressed MP4, H.264) so pages load fast.
An `.mp4` under ~10–20 MB is a good target for a short demo.

## Card thumbnail vs. detail video

A project can show a static image on the Projects **card** while playing a
video on the **detail page**. Set both fields in `data/portfolio.ts`:

```ts
thumbnail: { type: "image", src: "/images/projects/snapdriver.jpg", alt: "..." }, // card
media:     { type: "video", src: "/videos/projects/snapdriver.mp4", alt: "..." }, // detail page
```

If `thumbnail` is omitted, the card falls back to `media`.
SnapDrive AI is already set up this way — just drop `snapdriver.mp4` here.

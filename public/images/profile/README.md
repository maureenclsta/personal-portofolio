# Profile photos (Home page)

This is where Maureen's profile photos go — the ones shown in the Home page
hero "candidate card" slideshow.

## Expected files

The Home page currently expects 3 photos:

```
public/images/profile/maureen-1.jpg
public/images/profile/maureen-2.jpg
public/images/profile/maureen-3.jpg
```

`.png` / `.webp` also work — just match the extension in the data file.

## How it's wired

The list lives in `data/portfolio.ts` → `profilePhotos`. Each entry is
`{ src, alt }`. Until the files exist, the hero shows a styled placeholder
icon, so nothing looks broken.

To use fewer or more photos, just add/remove entries in `profilePhotos`.
Square-ish images (around 1:1) look best in the circular/rounded frame —
at least 400×400px.

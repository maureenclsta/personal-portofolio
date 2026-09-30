# Experience documentation photos

Drop the real documentation photos for each experience here. Until a file is
added, the Experience page shows a styled purple placeholder automatically —
nothing breaks.

## How it works

Each experience in `data/portfolio.ts` has a `slug` and exactly **3**
documentation photo slots. The expected filenames follow this pattern:

```
public/images/experience/<slug>-1.jpg
public/images/experience/<slug>-2.jpg
public/images/experience/<slug>-3.jpg
```

`.png` / `.webp` work too — just match the extension in the data file.

## To show a real photo

1. Put the image file in this folder, e.g. `beelingua-mentor-1.jpg`.
2. Open `data/portfolio.ts`, find the matching experience, and in its
   `documentation` array change `src: null` to the path, e.g.
   `src: "/images/experience/beelingua-mentor-1.jpg"`.

That's the only change needed — the component design stays the same.

## Slugs (expected filename prefixes)

### BINUS EXPERIENCE
- `beelingua-mentor`
- `cb-kewarganegaraan-biopori`
- `cb-agama-sunday-school`
- `starlight`
- `cb-pancasila-anti-poverty`
- `fyp-mangrove-planting`
- `fyp-anti-bullying-outreach`
- `fyp-beach-cleanup`

### OUTSIDE BINUS
- `emina-brand-promoter`
- `torriden-brand-promoter`
- `dettol-brand-promoter`
- `millennium-luxuries-usher`
- `ubs-gold-usher`
- `topeng-event-crew`
- `blp-beauty-brand-promoter`

Recommended: landscape images around 4:3, at least 800×600px, for the
sharpest result in the 3-column documentation grid.

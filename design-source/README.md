# design-source

Full-resolution originals (JPG / PNG exports of screenshots, photos and certificates).

These files are **not** served by the site — `public/` only carries the WebP derivatives that are
actually loaded by the browser. Keep this folder as the source of truth if you ever need to re-export
at a different size or quality.

Re-generate the web set after dropping new files in here:

```bash
# covers for cards (1000px wide) + gallery images (1500px wide)
for f in design-source/originals/projects/*/*.{png,jpg}; do
  out="public/projects/$(basename "$(dirname "$f")")/$(basename "${f%.*}").webp"
  convert "$f" -strip -resize 1500x -quality 78 "$out"
done

convert design-source/originals/profile.jpg -strip -resize 800x800^ -gravity center -quality 84 public/profile.webp
```

Then point the matching entry in `src/data/projects.ts` at the new `.webp` path.

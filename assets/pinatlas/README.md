# PinAtlas background

Bundled from [PinAtlas](https://github.com/vikramaharshith/PinAtlas/tree/72299ce3dd7cbfd15befb75c019b8baab3d7121f), using its unchanged `background.jsx` and `components/MicroSlats.jsx` with the same blue/cyan colors, signal preset, cursor interaction, and animation settings.

`background.js` and `background.css` are self-contained static assets. The portfolio uses PinAtlas’s dark-mode overlay and a matching static CSS slat fallback when WebGL is unavailable; the renderer respects reduced-motion preferences.

To regenerate in that PinAtlas checkout: install its locked dependencies with `npm ci`, then use its esbuild configuration from `scripts/build.mjs` to bundle `background.jsx`. Include the linked bundle notices, React Bits license, and third-party license notices alongside the output.

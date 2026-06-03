# US-001 Taste Skill Redesign

## Status

completed

## Lane

normal

## Product Contract

Redesign the wedding invitation website to use premium typography, asymmetric layouts, proper color calibration, dynamic content rendering with custom SVGs, choice-card RSVPs, a vinyl floating music player, and smooth GSAP entrance and parallax scroll animations. Use the `design-taste-frontend` skill rules.

## Relevant Product Docs

- [README.md](file:///D:/C%C3%A1%20nh%C3%A2n/Codex/wedding-website/README.md)
- [config.json](file:///D:/C%C3%A1%20nh%C3%A2n/Codex/wedding-website/config.json)
- [settings.json](file:///D:/C%C3%A1%20nh%C3%A2n/Codex/wedding-website/settings.json)

## Acceptance Criteria

- [x] Integrate Cormorant Garamond (serif) and Plus Jakarta Sans (sans-serif) Google Fonts.
- [x] Calibrate color palette to use muted champagnes, linen off-whites, and warm cocoas/espressos.
- [x] Create an asymmetric split-screen hero section featuring an arched portrait photo frame.
- [x] Implement a dynamic vertical timeline for the couple's story.
- [x] Replace raw emojis in the events schedule with custom inline SVGs.
- [x] Overhaul RSVP select dropdowns with custom choice cards.
- [x] Add a floating vinyl music player disk in the bottom-right corner.
- [x] Add smooth entrance and parallax scrolling transitions using GSAP and ScrollTrigger.
- [x] Verify responsive behavior across desktop and mobile layout widths.

## Design Notes

- **UI surfaces**: Upgraded [index.html](file:///D:/C%C3%A1%20nh%C3%A2n/Codex/wedding-website/index.html) file with integrated styling and scripts.
- **Image assets**: Generated 5 custom-tailored romantic AI images using the `generate_image` tool and copied them to `img/` and `img/eng_pics/`.

## Validation

When updating durable proof status, use numeric booleans:
`scripts/bin/harness-cli.exe story update --id US-001 --unit 0 --integration 0 --e2e 1 --platform 0`.

| Layer | Expected proof |
| --- | --- |
| Unit | N/A |
| Integration | N/A |
| E2E | Visual verification of layout and animations |
| Platform | N/A |
| Release | N/A |

## Harness Delta

None.

## Evidence

- Verified that `harness-cli.exe` works locally on Windows.
- Successfully generated high-end romantic couple image assets using `generate_image` and mapped them.

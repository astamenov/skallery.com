<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Skallery

**Replace Your Resume with Verifiable Proof of Skills.**

Skallery is a React-based skill verification platform that lets professionals build evidence-backed profiles by connecting their work from GitHub, Behance, LinkedIn, and other platforms. Instead of self-reported resumes, Skallery generates verified skill profiles with confidence scores drawn from real work history.

---

## Features

- **Verified Skill Profiles** — Connect external platforms and let Skallery analyze your actual work to generate skill scores with source citations.
- **4-Step Profile Wizard** — Guided onboarding: enter identity, connect platforms, run verification, preview your profile.
- **Demo Profile** — Explore a fully populated example profile showing verified skills, certifications, proof-of-work projects, and experience timeline.
- **Landing Page** — Features overview, user testimonials, and FAQ accordion.
- **Responsive Design** — Mobile-friendly layout with a collapsible navigation menu.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + TypeScript |
| Build tool | Vite 6 |
| Styling | Tailwind CSS (CDN) |
| Icons | Heroicons |
| Fonts | Inter, JetBrains Mono (Google Fonts) |
| AI integration | Gemini API (via `GEMINI_API_KEY`) |

---

## Project Structure

```
skallery.com/
├── App.tsx                  # Root component, view routing, navbar, footer
├── index.tsx                # Entry point
├── index.html               # HTML template
├── index.css                # Global styles
├── vite.config.ts           # Vite configuration (port 3000, path aliases)
├── metadata.json            # App name and description
└── components/
    ├── Hero.tsx             # Landing hero section
    ├── InputArea.tsx        # Features overview cards
    ├── CreationHistory.tsx  # Testimonials section
    ├── LivePreview.tsx      # FAQ accordion
    ├── ProfileBuilder.tsx   # 4-step profile creation wizard
    └── DemoProfile.tsx      # Example verified profile display
```

### View States

```
Landing ──→ Profile Builder ──→ Profile Preview
         └→ Demo Profile
```

---

## Getting Started

**Prerequisites:** Node.js

1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

The app runs at `http://localhost:3000`.

### Build

```bash
npm run build
npm run preview   # preview the production build locally
```

---

## Profile Builder Flow

1. **Identity** — Enter your name, target role, and bio.
2. **Evidence** — Toggle connections to GitHub, Behance, LinkedIn, and other platforms.
3. **Verification** — Animated skill verification runs with per-skill confidence scores.
4. **Preview** — View your complete verified profile.

---

View your app in AI Studio: https://ai.studio/apps/drive/1Q4VXIOKD9nHiFrFOHD5jY7j2tSISOoZr

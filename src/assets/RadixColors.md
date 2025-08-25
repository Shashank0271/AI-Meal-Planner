Perfect 👍 — here’s a **visual cheat sheet** for how to use **Radix color scales** (`--accent-n`, `--gray-n`, etc.) in your UI design.

---

# 🎨 Radix Color Scale Cheat Sheet

### 🔹 Accent Scale (`--accent-n`)

*(Use for brand color, interactive elements, highlights)*

| Token                  | Role / Brightness | Typical Usage                                   |
| ---------------------- | ----------------- | ----------------------------------------------- |
| **--accent-1**         | Lightest tint     | App/page background                             |
| **--accent-2**         | Slightly stronger | Panel backgrounds, subtle fills                 |
| **--accent-3**         | Light accent      | Hover states, subtle component background       |
| **--accent-4**         | Light accent      | Hover/focus states, input background            |
| **--accent-5**         | Stronger accent   | Active states, borders, subtle emphasis         |
| **--accent-6**         | Medium strength   | Borders, separators, input outlines             |
| **--accent-7**         | Strong accent     | Selected states, component highlights           |
| **--accent-8**         | Strong accent     | Emphasis background (e.g. hovered card)         |
| **--accent-9**         | Primary solid     | Button backgrounds, active elements             |
| **--accent-10**        | Stronger solid    | Alternative button background                   |
| **--accent-11**        | High contrast     | Text on top of 9/10 (accessible contrast)       |
| **--accent-12**        | Deepest shade     | Headings, high emphasis foreground text         |
| **--accent-surface**   | Neutralized tint  | Surfaces that adapt to light/dark               |
| **--accent-indicator** | UI indicator      | Sliders, toggles, progress bars                 |
| **--accent-track**     | Track color       | Slider/scrollbar track backgrounds              |
| **--accent-contrast**  | Contrasting       | Accessible foreground against accent background |

---

### 🔹 Gray Scale (`--gray-n`)

*(Use for neutrals, background layers, typography, borders)*

| Token                | Role / Brightness | Typical Usage                                    |
| -------------------- | ----------------- | ------------------------------------------------ |
| **--gray-1**         | Lightest          | Page background                                  |
| **--gray-2**         | Subtle tint       | Panel background                                 |
| **--gray-3–5**       | Light shades      | Input backgrounds, hover states                  |
| **--gray-6–8**       | Mid shades        | Borders, dividers, disabled states               |
| **--gray-9**         | Default text      | Body copy, secondary text                        |
| **--gray-10**        | Stronger text     | Form labels, muted headings                      |
| **--gray-11**        | High contrast     | Primary text, headlines                          |
| **--gray-12**        | Darkest           | Foreground in light mode / lightest in dark mode |
| **--gray-surface**   | Neutral surface   | Adaptive background                              |
| **--gray-indicator** | Neutral UI        | Toggles, sliders, progress track                 |
| **--gray-track**     | Track color       | Slider track, scrollbar background               |
| **--gray-contrast**  | Contrasting       | Foreground on gray backgrounds                   |

---

### 🔹 Shadows (`--shadow-n`)

*(Elevation scale for depth hierarchy)*

| Token          | Depth | Typical Usage                     |
| -------------- | ----- | --------------------------------- |
| **--shadow-1** | Small | Subtle UI (tooltips, small cards) |
| **--shadow-2** |       | Cards, dropdown menus             |
| **--shadow-3** |       | Larger cards, modals              |
| **--shadow-4** |       | Popovers, dialogs                 |
| **--shadow-5** |       | Higher elevation (side panels)    |
| **--shadow-6** | Deep  | Highest elevation (full overlays) |

---

### 🔹 How to Apply in CSS

```css
.button-primary {
  background-color: var(--accent-9);
  color: var(--accent-11); /* readable text */
  box-shadow: var(--shadow-2);
}

.card {
  background-color: var(--gray-2);
  border: 1px solid var(--gray-6);
  color: var(--gray-11);
}
```

---

✅ **Key takeaway**:

* **1–2** = backgrounds
* **3–8** = interactive / borders / subtle states
* **9–10** = solid fills (buttons, primary surfaces)
* **11–12** = text/foreground

---

Would you like me to **generate a color chart image (like swatches of accent 1–12 with labels)** so you can literally see the gradation?

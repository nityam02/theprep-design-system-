# The Design System: Editorial Precision & Tonal Depth

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Legal Architect."**

In the complex world of legal and life planning, thePREP acts as both the blueprint and the builder. The design must feel as precise and organized as an architect's plan, yet as accessible and readable as a high-quality editorial publication. We balance "Legal Authority" with "Human Approachability."

---

## 2. Visual Principles

### I. Structured Clarity (The Grid)
*   **Definition:** Every element has a purposeful place. We use a rigorous 8px grid to ensure alignment and rhythmic spacing.
*   **Design Application:** Large margins, clear content grouping in "vessels" (cards), and a strong vertical rhythm.

### II. Tonal Depth (The Palette)
*   **Definition:** We move beyond flat colors to create a sense of hierarchy through layering and subtle shifts in saturation.
*   **Design Application:** Using deep navy for authority, soft pinkish-whites for approachable backgrounds, and vibrant blue for action.

### III. Editorial Precision (The Typography)
*   **Definition:** Information is treated with the care of a newspaper editor. Titles are bold and clear; body text is highly legible.
*   **Design Application:** High contrast between headers and body. Use of Inter for its modern, neutral, yet highly readable characteristics.

### IV. Meaningful Motion (The Interaction)
*   **Definition:** Interactions should feel deliberate and smooth, mirroring the "Start simple → build clarity" philosophy.
*   **Design Application:** Subtle hover states and transitions that guide the eye without being distracting.

---

## 3. Design Tokens

### A. Color Palette
| Token | Value | Purpose |
| :--- | :--- | :--- |
| `color-primary` | `#1032CF` | Core brand color, primary actions, and highlights. |
| `color-on-primary` | `#FFFFFF` | Text on primary backgrounds. |
| `color-surface-brand` | `#001F9D` | Deep navy for headers and brand-heavy components. |
| `color-surface` | `#FFFFFF` | Primary background for cards and content areas. |
| `color-background` | `#FFF8F9` | The main "editorial" background color—off-white with a warm tint. |
| `color-surface-variant` | `#FFF0F5` | Secondary background for sidebars or subtle separation. |
| `color-text-primary` | `#1A1618` | Main body text and heavy headers. |
| `color-text-secondary` | `#765568` | Descriptive text and labels. |
| `color-accent-soft` | `#FFE8F2` | Background for highlighted tags or active navigation states. |
| `color-status-info` | `#001F9D` | Informational badges. |
| `color-status-success` | `#2E7D32` | Completed steps or validated items. |
| `color-status-warning` | `#ED6C02` | Needs review or maintenance. |

### B. Typography (Inter Family)
| Role | Weight | Size | Case | Tracking |
| :--- | :--- | :--- | :--- | :--- |
| **H1 (Display)** | Black | 48px | Normal | -0.02em |
| **H2 (Section)** | Bold | 32px | Normal | -0.01em |
| **H3 (Card Title)** | Bold | 20px | Normal | 0 |
| **Subtitle 1** | SemiBold | 16px | Normal | 0 |
| **Body 1** | Regular | 16px | Normal | 0 |
| **Body 2** | Medium | 14px | Normal | 0 |
| **Label / Nav** | Medium | 13px | Uppercase | 0.05em |

### C. Spacing & Shape
*   **Base Unit:** 8px
*   **Container Padding:** 24px (Mobile), 40px (Desktop)
*   **Gaps:** 16px (Small), 32px (Medium), 64px (Large)
*   **Corner Radius:**
    *   `radius-small`: 4px (Buttons, Small Inputs)
    *   `radius-medium`: 8px (Cards, Modals)
    *   `radius-large`: 16px (Major Sections)

---

## 4. Components Strategy

### I. The Shell (Navigation)
*   **Top Nav:** Flat, full-width, focusing on "The Architect" persona—clean logo, simple text links, and a prominent search for "Records."
*   **Sidebar (Workflow):** Used in guided flows to show progress. Uses tonal layering (Surface Variant) to separate from the main workspace.

### II. The Content Vessel (Cards)
*   **Design:** White backgrounds on warm-tinted page backgrounds. Minimal shadows to maintain a "flat but layered" editorial feel.
*   **Usage:** Used to group asset summaries, document lists, and recommended actions.

### III. The Guided Step (Inputs)
*   **Design:** High-contrast fields with clear, simple labels. Focus on reducing cognitive load.
*   **Feedback:** Real-time validation cues that feel helpful, not punitive.

### IV. The Expert Bridge (Lawyer Review)
*   **Design:** A distinct "chat" or "feedback" area that feels connected but slightly different from the DIY tools, using the primary brand navy to signal authority.

---

## 5. Tone of Voice
*   **Direct:** No fluff. Say what things are.
*   **Reassuring:** Acknowledge the weight of the decisions without being morbid.
*   **Authoritative:** Use precise legal terminology where necessary, but always explain it in simple terms.

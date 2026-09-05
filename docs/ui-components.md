# UI Component Standards

## Overview

All UI in this app is built with **shadcn/ui** (`@/components/ui`). Do not hand-roll custom components when a shadcn equivalent exists.

## Rules

1. **shadcn/ui only** — every UI element (buttons, inputs, dialogs, dropdowns, forms, cards, etc.) must use a shadcn/ui component. Never create custom one-off components for things shadcn already provides.
2. **Install missing components via the CLI** — if a needed component isn't in `components/ui`, add it with the shadcn CLI rather than writing it manually:
   ```bash
   npx shadcn@latest add <component>
   ```
3. **Import from the alias** — always import from `@/components/ui/<component>`, matching the aliases defined in `components.json`.
   ```tsx
   import { Button } from "@/components/ui/button";
   ```
4. **Compose, don't rebuild** — build complex UI by composing existing shadcn/ui components together, rather than writing new base components from scratch.
5. **Respect the project's shadcn config** — style (`base-nova`), base color (`neutral`), and icon library (`lucide`) are set in `components.json`; keep new components consistent with these.

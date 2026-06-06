# Graph Report - .  (2026-06-06)

## Corpus Check
- Corpus is ~3,732 words - fits in a single context window. You may not need a graph.

## Summary
- 128 nodes · 159 edges · 12 communities (9 shown, 3 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_UI Components|UI Components]]
- [[_COMMUNITY_TSConfig Setup|TSConfig Setup]]
- [[_COMMUNITY_Package Scripts & DevDeps|Package Scripts & DevDeps]]
- [[_COMMUNITY_Layout & Theme Components|Layout & Theme Components]]
- [[_COMMUNITY_Package Dependencies|Package Dependencies]]
- [[_COMMUNITY_Tailwind Components Config|Tailwind Components Config]]
- [[_COMMUNITY_Home Page Data & Sections|Home Page Data & Sections]]
- [[_COMMUNITY_Card UI Component|Card UI Component]]
- [[_COMMUNITY_ESLint Config|ESLint Config]]
- [[_COMMUNITY_NextJS Config|NextJS Config]]
- [[_COMMUNITY_PostCSS Config|PostCSS Config]]

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 15 edges
2. `cn()` - 9 edges
3. `tailwind` - 6 edges
4. `scripts` - 5 edges
5. `Badge()` - 4 edges
6. `Button` - 4 edges
7. `aliases` - 3 edges
8. `Avatar` - 3 edges
9. `AvatarImage` - 3 edges
10. `AvatarFallback` - 3 edges

## Surprising Connections (you probably didn't know these)
- `Badge()` --calls--> `cn()`  [EXTRACTED]
  src/components/ui/badge.tsx → src/lib/utils.ts

## Import Cycles
- None detected.

## Communities (12 total, 3 thin omitted)

### Community 0 - "UI Components"
Cohesion: 0.21
Nodes (12): cn(), Avatar, AvatarFallback, AvatarImage, Badge(), BadgeProps, badgeVariants, Progress (+4 more)

### Community 1 - "TSConfig Setup"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 2 - "Package Scripts & DevDeps"
Cohesion: 0.11
Nodes (17): devDependencies, eslint, eslint-config-next, postcss, tailwindcss, @types/node, @types/react, @types/react-dom (+9 more)

### Community 3 - "Layout & Theme Components"
Cohesion: 0.15
Nodes (9): jakarta, metadata, syne, ThemeProvider(), Footer(), Navbar(), Button, ButtonProps (+1 more)

### Community 4 - "Package Dependencies"
Cohesion: 0.12
Nodes (16): dependencies, class-variance-authority, clsx, framer-motion, lucide-react, next, next-themes, @radix-ui/react-avatar (+8 more)

### Community 5 - "Tailwind Components Config"
Cohesion: 0.14
Nodes (13): aliases, components, utils, rsc, $schema, style, tailwind, baseColor (+5 more)

### Community 6 - "Home Page Data & Sections"
Cohesion: 0.24
Nodes (6): politicians, statistics, trendingPromises, HeroSection(), LeaderboardSection(), TrendingPromises()

### Community 7 - "Card UI Component"
Cohesion: 0.29
Nodes (6): Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle

## Knowledge Gaps
- **73 isolated node(s):** `extends`, `$schema`, `style`, `rsc`, `tsx` (+68 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `dependencies` connect `Package Dependencies` to `Package Scripts & DevDeps`?**
  _High betweenness centrality (0.047) - this node is a cross-community bridge._
- **Why does `cn()` connect `UI Components` to `Layout & Theme Components`, `Card UI Component`?**
  _High betweenness centrality (0.046) - this node is a cross-community bridge._
- **What connects `extends`, `$schema`, `style` to the rest of the system?**
  _73 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `TSConfig Setup` be split into smaller, more focused modules?**
  _Cohesion score 0.10526315789473684 - nodes in this community are weakly interconnected._
- **Should `Package Scripts & DevDeps` be split into smaller, more focused modules?**
  _Cohesion score 0.1111111111111111 - nodes in this community are weakly interconnected._
- **Should `Package Dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.125 - nodes in this community are weakly interconnected._
- **Should `Tailwind Components Config` be split into smaller, more focused modules?**
  _Cohesion score 0.14285714285714285 - nodes in this community are weakly interconnected._
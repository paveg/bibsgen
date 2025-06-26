# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

bibsgen is a web application for generating racing bibs (number plates) for enduro-race games. Built by FUNAI RACING, it allows users to create customizable bibs with different fonts, colors, and styling options that can be downloaded as high-resolution PNG files.

## Key Commands

### Development
- `pnpm dev` - Start development server with hot reload
- `pnpm build` - Build for production
- `pnpm serve` - Preview production build locally

### Code Quality
- `pnpm lint` - Run ESLint on src directory  
- `pnpm lint:fix` - Fix linting issues and format code
- `pnpm type-check` - Run TypeScript compiler checks
- `pnpm format` - Format code with Prettier

### Testing
- `pnpm test` - Run tests with Vitest
- `pnpm test:ui` - Run tests with UI and coverage
- `pnpm test:coverage` - Run tests with coverage report

### Integrated Commands
- `pnpm check:turbo` - Run lint, type-check, and test in parallel via Turbo

### Package Management
- `pnpm up-interactive` - Interactive dependency updates
- `pnpm up-latest` - Update to latest versions

## Architecture

### Core Technology Stack
- **React 18** with TypeScript for UI components
- **Vite** for build tooling with Million.js optimization
- **TailwindCSS** for styling with shadcn/ui component library
- **HTML5 Canvas** for bib generation and rendering
- **React Router** for client-side routing
- **PWA** capabilities via vite-plugin-pwa

### Application Structure

The app follows a feature-based architecture:

1. **Canvas-Based Bib Generator** (`src/components/generator.tsx`):
   - Real-time preview canvas (300x100px) with live updates
   - High-resolution export canvas (2893x4092px) for download
   - Supports custom fonts, text styling (bold/italic), and color customization
   - Text positioning uses center alignment with middle baseline

2. **Fonts**: Includes custom font "Electric Boots" alongside system fonts (Arial, Roboto, etc.)

3. **Component Library**: Uses shadcn/ui components with consistent styling via `cn()` utility (clsx + tailwind-merge)

4. **Path Aliases**: TypeScript paths configured with `@/` pointing to `src/`

### Key Implementation Details

- **Font Loading**: Custom fonts are preloaded and font-face declarations handle fallbacks
- **Canvas Rendering**: Dual canvas approach - small preview + high-res download version
- **State Management**: React hooks for form state and canvas synchronization  
- **Color Management**: Uses react-input-color for color picker with hex value handling
- **Download**: Dynamically creates download link from canvas.toDataURL()

### Development Patterns

- Components use TypeScript with proper typing for props and state
- ESLint config extends 'sznm' preset with import/React rules
- Prettier with Tailwind plugin for code formatting
- Uses React.lazy() for code splitting on route level
- PWA manifest configured for mobile app-like experience

## Requirements

- **Node.js**: >= 20.14.x
- **Package Manager**: pnpm >= 9 (specified in engines)
- **Browser Support**: Modern browsers with Canvas API support
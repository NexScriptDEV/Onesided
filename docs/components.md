# One Sided Landing Page Components Documentation

This document provides detailed information about each component used in the One Sided landing page.

## Table of Contents

1. [Navbar](#navbar)
2. [Hero](#hero)
3. [Projects](#projects)
4. [RobloxSection](#robloxsection)
5. [RobloxStudioSection](#robloxstudiosection)
6. [Roadmap](#roadmap)
7. [Quote](#quote)
8. [Footer](#footer)

## Navbar

**File:** `components/Navbar.tsx`

### Description
The Navbar component provides navigation for the landing page. It includes links to all major sections and features a responsive design that adapts to different screen sizes.

### Features
- Fixed positioning that becomes semi-transparent on scroll
- Mobile-responsive with a hamburger menu for smaller screens
- Smooth animations using Framer Motion
- Links to all major sections of the page

### Props
This component does not accept any props.

### State
- `isScrolled`: Boolean that tracks whether the user has scrolled down the page
- `isMobileMenuOpen`: Boolean that tracks whether the mobile menu is open

### Usage
```tsx
<Navbar />
```

## Hero

**File:** `components/Hero.tsx`

### Description
The Hero component is the main banner section at the top of the landing page. It features a dark background with a blue glow effect, the group name, and a typing animation for the description.

### Features
- Animated text using Typed.js
- Blue glow effect in the center
- Grid pattern background
- Responsive design for different screen sizes
- Call-to-action buttons

### Props
This component does not accept any props.

### Usage
```tsx
<Hero />
```

## Projects

**File:** `components/Projects.tsx`

### Description
The Projects component showcases the games and projects that One Sided is working on. It displays a grid of project cards with images, titles, descriptions, and status indicators.

### Features
- Grid layout for project cards
- Status indicators (Completed, In Progress, Planned)
- Animations when scrolling into view
- Responsive design that adjusts the grid based on screen size

### Props
This component does not accept any props, but it uses an internal array of project data.

### Usage
```tsx
<Projects />
```

## RobloxSection

**File:** `components/RobloxSection.tsx`

### Description
The RobloxSection component provides information about the Roblox platform, including statistics like live player counts and total plays.

### Features
- Left-aligned Roblox logo
- Grid pattern background with gray glow effect
- Statistics cards showing player counts
- Responsive layout that stacks on mobile

### Props
This component does not accept any props.

### Usage
```tsx
<RobloxSection />
```

## RobloxStudioSection

**File:** `components/RobloxStudioSection.tsx`

### Description
The RobloxStudioSection component provides information about Roblox Studio, the development environment used to create Roblox games.

### Features
- Right-aligned Roblox Studio logo
- Grid pattern background with blue glow effect
- Feature list with icons
- Responsive layout that stacks on mobile

### Props
This component does not accept any props.

### Usage
```tsx
<RobloxStudioSection />
```

## Roadmap

**File:** `components/Roadmap.tsx`

### Description
The Roadmap component displays the development timeline for the upcoming game "One Armed Cook". It features a horizontal scrolling effect as the user scrolls down the page.

### Features
- Horizontal scrolling effect using GSAP ScrollTrigger
- Timeline cards for each development stage
- Responsive design
- Scroll indicator

### Props
This component does not accept any props, but it uses an internal array of roadmap step data.

### Usage
```tsx
<Roadmap />
```

## Quote

**File:** `components/Quote.tsx`

### Description
The Quote component displays a randomly selected quote about One Sided's mission and goals. It also includes a brief description of the team's mission.

### Features
- Randomly selected quote on page load
- Grid pattern background
- Animation when scrolling into view
- Mission statement

### Props
This component does not accept any props, but it uses an internal array of quote data.

### Usage
```tsx
<Quote />
```

## Footer

**File:** `components/Footer.tsx`

### Description
The Footer component appears at the bottom of the page and provides links to various sections, legal pages, and contact information.

### Features
- Multi-column layout with links
- Social media icons with hover animations
- Copyright information
- Responsive design that stacks columns on mobile

### Props
This component does not accept any props.

### Usage
```tsx
<Footer />
```

## Updating Components

When updating components, please follow these guidelines:

1. Maintain the existing styling patterns and color scheme
2. Ensure all components remain responsive
3. Update this documentation when adding new features or props
4. Test changes across different screen sizes

## Adding New Components

When adding new components:

1. Create the component file in the `components` directory
2. Use the existing styling patterns and animations
3. Make the component responsive
4. Add the component to this documentation
5. Import and add the component to the appropriate page

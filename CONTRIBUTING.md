# Folder Structure and Naming Convention Guide (WILL CHANGE THIS SOON)

## Overview

This document outlines the standardized folder structure and naming conventions used in the Viteach website project for organizing blogs, viteacher tales, and related content.

## Directory Structure

### 1. Public Assets (`/public/`)

public/
├── obs/ # Office Beared image assets
│ ├── 2024/ # Year-based organization
│ ├──── name # First name of person in lower case
│ └── 2025/
├── vtales/ # Viteacher tales assets
│ ├── 2024/ # Year-based organization
│ └── 2025/
├── root/ # General website assets
│ ├── image-1.jpg
│ ├── image-2.png
│ ├── image-3.jpg
│ ├── image-4.jpg
│ ├── image-5.jpg
│ ├── image-6.jpg
│ ├── image-7.jpg
│ ├── image-8.png
│ └── showcase/ # Showcase-specific assets
│ ├── image-1.svg
│ ├── image-2.svg
│ └── image-3.svg
└── [other SVG files] # Icon and utility assets

### 2. App Routes (`/src/app/`)

src/app/
├── blogs/ # Blog section
│ ├── (n)/ # Dynamic route group
│ │ ├── 2024/ # Year-based organization
│ │ ├── 2025/ # Year-based organization
│ │ └── layout.tsx # Shared layout for blog routes
│ └── page.tsx # Main blogs listing page
├── viteacher-tales/ # Viteacher tales section
│ ├── (n)/ # Dynamic route group
│ │ ├── 2024/ # Year-based organization
│ │ ├── 2025/ # Year-based organization
│ │ └── layout.tsx # Shared layout for tale routes
│ └── page.tsx # Main tales listing page
└── [other app routes]

### 3. Constants (`/src/constants/`)

src/constants/
├── blogs-meta-data.ts # Blog metadata definitions
├── viteacher-tales-meta-data.ts # Tale metadata definitions
├── obs-meta-data.ts # Observation metadata definitions
└── essence-images.ts # Essence section image definitions

## Naming Conventions

### 1. Folder Names

- **Lowercase with hyphens**: Use kebab-case for folder names (e.g., `viteacher-tales`, `board-members`)
- **Year folders**: Use 4-digit year format (e.g., `2024`, `2025`)
- **Dynamic routes**: Use parentheses for route groups (e.g., `(n)`)

### 2. File Names

- **Components**: PascalCase (e.g., `BlogCard.tsx`, `Navbar.tsx`)
- **Pages**: lowercase with hyphens (e.g., `page.tsx`, `layout.tsx`)
- **Constants**: lowercase with hyphens (e.g., `blogs-meta-data.ts`)
- **Images**: lowercase with hyphens and numbers (e.g., `image-1.jpg`, `image-2.png`)

### 3. Asset Organization

- **Year-based**: Content is organized by year for easy chronological access
- **Type-based**: Assets are separated by content type (obs, vtales, root)
- **Showcase**: Special assets for showcase sections are grouped separately

## Content Structure

### 1. Blog Structure

- **Route**: `/blogs/[year]/[slug]`
- **Layout**: Shared layout with Navbar, Footer, and article wrapper
- **Metadata**: Includes title, description, date, author, image, and link

### 2. Viteacher Tales Structure

- **Route**: `/viteacher-tales/[year]/[slug]`
- **Layout**: Similar to blogs but with tale-specific styling
- **Metadata**: Same structure as blogs for consistency

### 3. Observation Structure

- **Route**: `/obs/[year]/[slug]`
- **Assets**: Organized by year in public folder
- **Metadata**: Defined in `obs-meta-data.ts`

## Best Practices

### 1. Adding New Content

1. Create year folder if it doesn't exist
2. Add content files following the established naming pattern
3. Update corresponding metadata files
4. Ensure images are placed in appropriate public folders

### 2. Maintaining Consistency

- Always use the established folder structure
- Follow the naming conventions strictly
- Keep metadata files updated with new content
- Use appropriate image formats (JPG for photos, PNG for graphics, SVG for icons)

### 3. File Organization

- Group related assets together
- Use descriptive names for better maintainability
- Keep the hierarchy logical and intuitive
- Avoid deep nesting beyond 3-4 levels

## Future Considerations

### 1. Scalability

- The year-based structure allows for easy expansion
- Dynamic routes support unlimited content addition
- Metadata-driven approach enables easy content management

### 2. Maintenance

- Regular cleanup of unused assets
- Consistent naming across all new additions
- Documentation updates when patterns change

### 3. Performance

- Optimize image sizes for web use
- Consider lazy loading for large asset collections
- Implement proper caching strategies

## Notes

- The `(n)` route group allows for flexible routing without affecting the URL structure
- Year folders are created proactively to maintain consistency
- All content follows the same metadata structure for easy integration
- The layout files ensure consistent presentation across all content types

# 源氏物語 Portfolio

A product designer portfolio website inspired by the elegant visual aesthetics of **The Tale of Genji** (源氏物語, Genji Monogatari), the classic 11th-century Japanese literary masterpiece.

## Design Philosophy

This portfolio draws inspiration from the traditional emaki (picture scrolls) that illustrated The Tale of Genji, bringing together classical Japanese aesthetics with modern web design principles.

### Visual Elements Inspired by Genji

#### 🌸 Color Palette
- **Cream (#F5F1E8)** - Base color reminiscent of aged paper scrolls
- **Gold (#D4AF37)** - Traditional gold leaf accents used in emaki
- **Sage Green (#9FA898)** - Natural, muted tones from traditional pigments
- **Dusty Pink (#D4A5A5)** - Cherry blossom petals and textile colors
- **Warm Gray (#8B7E74)** - Ink wash tones

#### ☁️ Cloud Motifs (雲)
Floating cloud decorations that move with parallax scrolling, inspired by the traditional "cloud bands" (kasumi) used in emaki to separate scenes and create atmospheric depth.

#### 🌊 Flowing Compositions
- Diagonal layouts reminiscent of traditional scroll compositions
- Smooth, organic transitions between sections
- Scroll-based animations that evoke the unrolling of an emaki

#### 🎋 Nature Elements
- Cherry blossom (sakura) decorative elements
- Bamboo patterns
- Wave motifs in the footer
- Seasonal aesthetic sensibilities

### Typography

- **Primary Font**: Cormorant Garamond - Elegant serif with classical proportions
- **Japanese Font**: Noto Serif JP - For authentic Japanese characters
- Generous spacing and breathing room (ma, 間)
- Emphasis on hierarchy and flow

### Interactive Features

1. **Smooth Scroll Navigation** - Emulates the flowing nature of scroll paintings
2. **Parallax Effects** - Cloud and blossom elements move at different speeds
3. **Fade-in Animations** - Elements appear gracefully as you scroll
4. **Project Cards** - Staggered reveal animations
5. **Hover States** - Subtle gold underlines and scale effects
6. **Easter Egg** - Konami code (↑↑↓↓←→←→BA) activates falling cherry blossoms

## File Structure

```
Genji/
├── index.html          # Main portfolio page
├── styles.css          # Genji-inspired styling
├── script.js           # Interactive animations
└── README.md           # This file
```

## Usage

### Quick Start

Simply open `index.html` in a modern web browser. No build process or dependencies required!

```bash
# Clone or download the repository
cd Genji

# Open in browser (macOS)
open index.html

# Or just double-click index.html in your file explorer
```

### Customization

#### 1. Personal Information

Edit `index.html` to update:

- **Name and Title** - Line 43-52 (Hero section)
- **About Text** - Lines 69-109 (About section)
- **Skills** - Lines 81-108
- **Projects** - Lines 120-200 (Work section)
- **Contact Links** - Lines 216-232 (Contact section)

#### 2. Colors

Modify the CSS custom properties in `styles.css` (lines 8-18):

```css
:root {
    --color-cream: #F5F1E8;
    --color-gold: #D4AF37;
    /* ... customize as needed */
}
```

#### 3. Projects

Replace the placeholder project cards with your actual work:

```html
<article class="project">
    <div class="project-image">
        <!-- Add your project image here -->
        <img src="your-image.jpg" alt="Project name">
    </div>
    <div class="project-info">
        <span class="project-category">Your Category</span>
        <h3 class="project-title">Your Project Title</h3>
        <p class="project-description">Your description...</p>
        <div class="project-tags">
            <span>Tag 1</span>
            <span>Tag 2</span>
        </div>
    </div>
</article>
```

## Features

### Accessibility
- Semantic HTML5 structure
- ARIA-compliant navigation
- Keyboard navigation support
- Focus indicators for keyboard users
- Responsive font sizing with `clamp()`

### Performance
- Debounced scroll events
- Optimized animations with CSS transforms
- Intersection Observer for lazy animations
- Minimal JavaScript dependencies
- No external frameworks required

### Responsive Design
- Mobile-first approach
- Breakpoints: 480px, 768px, 1024px
- Touch-friendly interactive elements
- Collapsible mobile navigation

## Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Design Principles

### Wabi-Sabi (侘寂)
Finding beauty in imperfection and transience - subtle imperfections in animations and organic, flowing layouts.

### Ma (間)
The concept of negative space - generous whitespace and breathing room between elements.

### Miyabi (雅)
Elegance and refinement - sophisticated color palette and typography choices.

### Yūgen (幽玄)
Mysterious depth - layered clouds, parallax effects, and subtle animations create depth.

## Credits

Inspired by:
- **The Tale of Genji** by Murasaki Shikibu (11th century)
- Traditional Japanese emaki scrolls
- Yamato-e painting style
- Contemporary minimalist web design

## License

Free to use for personal portfolios. Please maintain the design credit in the footer or add attribution if you use this template.

## Tips for Product Designers

1. **Add Your Work** - Replace placeholder project images with high-quality screenshots
2. **Tell Stories** - Use the project descriptions to explain your design process
3. **Show Progression** - Order projects to demonstrate skill growth
4. **Keep It Updated** - Regularly add new projects and remove outdated ones
5. **Personal Touch** - Modify the color scheme to match your personal brand
6. **Performance** - Optimize images before uploading (use WebP or optimized JPG/PNG)

## Contact & Support

Update the contact section with your actual links:
- Email
- LinkedIn
- Dribbble
- Twitter/X
- Behance
- Portfolio site

---

**Built with elegance and purpose**

*"In all things, the heart that feels deeply is most important."* - The Tale of Genji

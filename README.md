# Food Ninja

Food Ninja is a modern, responsive food recipe website UI built with [Tailwind CSS](https://tailwindcss.com/). It showcases a clean layout, custom components, and interactive navigation, making it a great starting point for food delivery or recipe web apps.

## Features

- **Responsive Layout:**  
  Adapts seamlessly to mobile, tablet, and desktop screens using Tailwind's grid and utility classes.

- **Custom Navigation Bar:**

  - Brand title with hover effect
  - Burger menu for mobile devices (toggles navigation links)
  - Navigation links with icons and active state styling

- **Stylish Cards for Recipes:**

  - Each recipe is displayed in a card with an image, title, author, and a badge for cooking time
  - Hover effects for card elevation

- **Badges:**

  - Custom badge component shows cooking time with an icon
  - Styled with custom colors from Tailwind config

- **Buttons:**

  - "Log in" and "Sign up" buttons with hover and transition effects
  - "Load more" button with scaling and shadow on hover

- **Google Fonts Integration:**  
  Uses Nunito, Open Sans, and Work Sans for a modern look

- **Custom Tailwind Theme:**

  - Extended font families
  - Custom secondary color palette

- **Image Assets:**  
  Includes sample images for recipes (`stew.jpg`, `noodles.jpg`, `curry.jpg`)

- **Easy Customization:**  
  All styles are managed via [style.css](style.css) and [tailwind.config.js](tailwind.config.js)

## Getting Started

1. **Install dependencies:**

```
npm install
```

2. **Start Tailwind in watch mode:**

```
npm run build
```

This will generate `dist/output.css` from your [style.css](style.css).

3. **Open [index.html](index.html) in your browser.**

## Customization

- Edit [style.css](style.css) to add or modify components.
- Update [tailwind.config.js](tailwind.config.js) to change theme colors or fonts.
- Replace images in the [img/](img/) folder with your own.

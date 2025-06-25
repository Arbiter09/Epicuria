# 🍽️ Epicuria

A modern React-based food ordering app that helps users find and explore restaurants with detailed menus, ratings, and essential information. Built with React, React Router, and styled with Tailwind CSS for a sleek, responsive user experience.

## 📋 Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Components Overview](#components-overview)
- [Custom Hooks](#custom-hooks)
- [API Integration](#api-integration)
- [Styling](#styling)
- [Performance Optimizations](#performance-optimizations)
- [Browser Support](#browser-support)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## ✨ Features

### 🏪 Restaurant Discovery
- Browse restaurants with comprehensive information
- View restaurant ratings, cuisine types, and pricing
- See delivery estimates and location details
- Beautiful restaurant imagery from Cloudinary CDN

### 🍕 Menu Exploration
- Detailed menu items with descriptions and pricing
- Vegetarian/Non-vegetarian indicators
- High-quality food images
- Recommended items section

### 🎨 Modern UI/UX
- Responsive design that works on all devices
- Clean, minimalistic interface
- Smooth loading animations with shimmer effects
- Intuitive navigation with React Router

### ⚡ Performance
- Fast loading with optimized API calls
- Efficient state management
- Image optimization through CDN
- Component-based architecture for better maintainability

## 🚀 Demo

<!-- [Live Demo](https://your-demo-link.com) | [Screenshots](#screenshots) -->

## 🛠️ Technologies Used

### Frontend Framework
- **React 18+** - Modern React with functional components and hooks
- **React Router DOM** - Client-side routing for SPA navigation

### Styling & UI
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **Lucide React** - Beautiful, customizable icons

### Development Tools
- **Create React App** - Build toolchain and development server
- **ES6+ JavaScript** - Modern JavaScript features
- **Custom Hooks** - Reusable logic abstraction

### External Services
- **Cloudinary CDN** - Image optimization and delivery
- **Restaurant API** - Real-time restaurant and menu data

## 🏁 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (version 14.0.0 or higher)
- **npm** (version 6.0.0 or higher) or **yarn**
- A modern web browser

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/restaurant-discovery-app.git
   cd restaurant-discovery-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Add your configuration to `.env.local`:
   ```env
   REACT_APP_API_BASE_URL=your_api_base_url
   REACT_APP_CDN_URL=your_cloudinary_cdn_url
   ```

4. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📖 Usage

### Basic Navigation
1. **Home Page**: Browse available restaurants
2. **Restaurant Detail**: Click on any restaurant to view detailed information
3. **Menu Exploration**: Scroll through recommended menu items
4. **Responsive Design**: Use on any device - desktop, tablet, or mobile

### Key User Flows
- **Discover Restaurants**: Browse through restaurant listings
- **View Details**: Click to see comprehensive restaurant information
- **Explore Menu**: Browse through categorized menu items with prices
- **Check Ratings**: View community ratings and reviews

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── RestaurantHeader.js    # Restaurant info header
│   ├── RestaurantMenuItems.js # Menu items display
│   ├── RestaurantSection.js   # Main restaurant page
│   └── Shimmer.js            # Loading skeleton
├── utils/               # Utility functions and hooks
│   ├── constants.js          # App constants (CDN URLs, etc.)
│   └── useRestaurantMenu.js  # Custom hook for API calls
├── App.js              # Main app component with routing
├── index.js            # App entry point
└── index.css           # Global styles and Tailwind imports
```

## 🧩 Components Overview

### RestaurantHeader
**Purpose**: Displays comprehensive restaurant information
**Features**:
- Restaurant name, rating, and review count
- Location and pricing information
- Cuisine types with tags
- Delivery time estimates
- Restaurant hero image

**Props**:
```javascript
{
  restaurantData: {
    data: {
      cards: [
        // Restaurant information structure
      ]
    }
  }
}
```

### RestaurantMenuItems
**Purpose**: Showcases recommended menu items
**Features**:
- Grid layout for menu items
- Vegetarian indicators
- Item descriptions and pricing
- Food imagery
- Responsive design

### RestaurantSection
**Purpose**: Main container component for restaurant pages
**Features**:
- URL parameter extraction
- Data fetching coordination
- Loading state management
- Layout structure

### Shimmer
**Purpose**: Loading skeleton for better UX
**Features**:
- Matches actual component structure
- Smooth pulse animations
- Responsive design
- Professional appearance

## 🎣 Custom Hooks

### useRestaurantMenu
**Purpose**: Fetches and manages restaurant menu data
**Features**:
- API call abstraction
- Loading state management
- Error handling
- Data caching potential

**Usage**:
```javascript
const restaurantData = useRestaurantMenu(restaurantId);
```

## 🔗 API Integration

### Data Structure
The app expects restaurant data in the following format:
```javascript
{
  data: {
    cards: [
      // Card 2: Restaurant basic info
      {
        card: {
          card: {
            info: {
              name: "Restaurant Name",
              avgRating: 4.5,
              totalRatings: "1K+",
              city: "City Name",
              costForTwoMessage: "₹200 for two",
              cuisines: ["Italian", "Pizza"],
              cloudinaryImageId: "image_id"
            }
          }
        }
      },
      // Card 4: Menu information
      {
        groupedCard: {
          cardGroupMap: {
            REGULAR: {
              cards: [
                {
                  card: {
                    card: {
                      itemCards: [
                        {
                          card: {
                            info: {
                              id: "item_id",
                              name: "Item Name",
                              description: "Item description",
                              price: 29900, // Price in paise
                              imageId: "image_id",
                              itemAttribute: {
                                vegClassifier: "VEG" // or "NONVEG"
                              }
                            }
                          }
                        }
                      ]
                    }
                  }
                }
              ]
            }
          }
        }
      }
    ]
  }
}
```

## 🎨 Styling

### Tailwind CSS Configuration
The project uses Tailwind CSS for styling with the following approach:

**Design System**:
- **Colors**: Consistent color palette with gray-based neutrals
- **Spacing**: Tailwind's spacing scale for consistent layouts
- **Typography**: Modern font stacks with proper hierarchy
- **Components**: Utility-first approach with component composition

**Key Design Principles**:
- Mobile-first responsive design
- Consistent spacing and typography
- Subtle shadows and borders for depth
- Hover states for interactivity
- Loading states for better UX

### Responsive Breakpoints
```css
/* Mobile First Approach */
sm: 640px   /* Small devices */
md: 768px   /* Medium devices */
lg: 1024px  /* Large devices */
xl: 1280px  /* Extra large devices */
```

## ⚡ Performance Optimizations

### Code Splitting
- Route-based code splitting with React Router
- Component-level splitting for large components

### Image Optimization
- Cloudinary CDN for optimized image delivery
- Lazy loading for images below the fold
- WebP format support

### State Management
- Efficient state management with React hooks
- Minimal re-renders with proper dependency arrays
- Custom hooks for reusable logic

### Bundle Optimization
- Tree shaking for unused code elimination
- Production build optimization
- Gzip compression support

## 🌐 Browser Support

- **Chrome** 60+
- **Firefox** 60+
- **Safari** 12+
- **Edge** 79+

### Progressive Enhancement
The app is built with progressive enhancement in mind:
- Core functionality works without JavaScript
- Enhanced experience with modern browser features
- Graceful degradation for older browsers

## 🤝 Contributing

We welcome contributions! Please follow these steps:

### Getting Started
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

### Development Guidelines
- Follow the existing code style
- Write meaningful commit messages
- Add comments for complex logic
- Ensure responsive design
- Test on multiple browsers
- Update documentation as needed

### Code Style
- Use functional components with hooks
- Follow React best practices
- Use semantic HTML elements
- Implement proper error handling
- Maintain consistent naming conventions

## 📝 Scripts

```bash
# Start development server
npm start

# Create production build
npm run build

# Run tests
npm test

# Eject from Create React App (irreversible)
npm run eject

# Format code (if Prettier is configured)
npm run format

# Lint code (if ESLint is configured)
npm run lint
```

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deployment Options
- **Netlify**: Drag and drop the `build` folder
- **Vercel**: Connect your GitHub repository
- **GitHub Pages**: Use `gh-pages` package
- **Heroku**: Deploy with Node.js buildpack


## 🐛 Troubleshooting

### Common Issues

**API Connection Issues**:
- Check CORS configuration

**Build Failures**:
- Clear node_modules and reinstall dependencies
- Check for TypeScript errors if using TS
- Verify all imports are correct

**Styling Issues**:
- Ensure Tailwind CSS is properly configured
- Check for conflicting CSS rules
- Verify responsive classes are correct


## 📊 Analytics & Monitoring

Consider integrating:
- **Google Analytics** for user behavior tracking
- **Sentry** for error monitoring
- **Performance monitoring** tools
- **A/B testing** frameworks

## 🔒 Security Considerations

- Sanitize user inputs
- Implement proper CORS policies
- Use HTTPS in production
- Validate API responses
- Keep dependencies updated
- Follow OWASP security guidelines

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 🙏 Acknowledgments

- [React Team](https://reactjs.org/) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Lucide](https://lucide.dev/) for beautiful icons
- [Create React App](https://create-react-app.dev/) for the build toolchain

## 📞 Contact

**Jas Shah** - [@jas529](https://x.com/Jas529) - 

**Project Link**: [https://github.com/Arbiter09/Epicuria.git]

---

## 📸 Screenshots

### Desktop View
<!-- ![Desktop Homepage](screenshots/desktop-home.png) -->
*Modern, clean interface showcasing restaurant listings*

### Mobile View
<!-- ![Mobile Restaurant Detail](screenshots/mobile-detail.png) -->
*Responsive design optimized for mobile devices*

### Loading States
<!-- ![Shimmer Effect](screenshots/shimmer-loading.png) -->
*Smooth loading animations enhance user experience*

---

**Made with ❤️ and React**

*If you found this project helpful, please consider giving it a ⭐ on GitHub!*
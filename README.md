# Weather App

A modern, responsive weather application built with React and Vite that allows users to search for weather information by location.

## Features

- 🌍 **Search Weather by Location** - Search for weather information in any city worldwide
- 📊 **Detailed Weather Information** - Display current temperature, max/min temperatures, humidity, and "feels like" temperature
- 🎨 **Modern UI** - Built with Material-UI (MUI) for a clean and professional interface
- ⚡ **Fast Performance** - Built with Vite for optimal development and production performance
- 📱 **Responsive Design** - Works seamlessly across different screen sizes

## Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite
- **UI Library**: Material-UI (MUI)
- **Styling**: Emotion
- **Icons**: Material-UI Icons
- **Linting**: ESLint

## Project Structure

```
weatherApp/
├── src/
│   ├── App.jsx              # Main App component
│   ├── WeatherApp.jsx       # Weather App container component
│   ├── SearchBox.jsx        # Search input component
│   ├── InfoBox.jsx          # Weather information display component
│   ├── App.css              # App styles
│   ├── SearchBox.css        # SearchBox styles
│   ├── InfoBox.css          # InfoBox styles
│   ├── main.jsx             # React entry point
│   ├── index.css            # Global styles
│   └── assets/              # Static assets
├── public/                  # Static files
├── vite.config.js          # Vite configuration
├── eslint.config.js        # ESLint configuration
├── package.json            # Project dependencies
└── index.html              # HTML template
```

## Installation

1. **Clone or download the project**
   ```bash
   cd weatherApp
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

## Usage

### Development

Start the development server with hot module replacement:
```bash
npm run dev
```

The app will be available at `http://localhost:5173` (or the port shown in your terminal)

### Build for Production

Create an optimized production build:
```bash
npm run build
```

The build output will be in the `dist/` directory.

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

### Lint Code

Check for code quality issues:
```bash
npm run lint
```

## How to Use

1. Open the application in your browser
2. Enter a city name in the search box
3. View the current weather information including:
   - Temperature
   - Max/Min temperatures
   - Humidity
   - "Feels like" temperature
   - Weather condition

## Components

### WeatherApp
Main container component that manages the weather state and passes data between SearchBox and InfoBox components.

### SearchBox
Handles user input for searching weather by location. Fetches weather data and updates the parent component.

### InfoBox
Displays the weather information in a formatted and visually appealing manner using Material-UI components.

## Dependencies

### Main Dependencies
- `react` - UI library
- `react-dom` - React DOM rendering
- `@mui/material` - Material-UI component library
- `@mui/icons-material` - Material icons
- `@emotion/react` & `@emotion/styled` - CSS-in-JS styling
- `@fontsource/roboto` - Roboto font

### Dev Dependencies
- `vite` - Build tool
- `eslint` - Code linting
- `@vitejs/plugin-react` - Vite React plugin

## Browser Support

This application works on all modern browsers including:
- Chrome
- Firefox
- Safari
- Edge

## Future Improvements

- Add temperature unit conversion (Celsius/Fahrenheit)
- Implement weather forecast for multiple days
- Add location favorites/saved locations
- Include weather alerts and warnings
- Add dark mode toggle
- Implement local storage for search history

## License

This project is open source and available for use.

## Author

Weather App by KJ

Thanks...

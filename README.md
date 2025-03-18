# React Timeline Visualization

## Description
This project is a React-based web application designed to display a **timeline visualization** with interactive thumbnails. The application features a **parallax scrolling background**, a **chronologically sorted timeline**, and individual event details in a structured format.

## Features
- **Parallax Scrolling Background**: The background image dynamically shifts as the user scrolls.
- **Interactive Timeline**: Events are displayed in a structured timeline format.
- **Sorted Historical Elements**: Timeline items are sorted from most recent to oldest.
- **Customizable Thumbnails**: Each event is presented with a title, subtitle, description, year, date, person profile, and an optional button.

## Technologies Used
- **React.js** (functional components and hooks)
- **Styled Components** (for modular styling)
- **CSS animations** (for smooth transitions and effects)
- **JavaScript (ES6+)** (for data handling and state management)

## Installation
 **Install dependencies**
   ```sh
   npm install
   ```
 **Start the development server**
   ```sh
   npm start
   ```
   The application will be accessible at `http://localhost:3000/`.

## Project Structure
```
📂 src
├── 📂 assets
│   ├── images/background.png
├── 📂 components
│   ├── 📂 timeLine
│   │   ├── timeLine.jsx
│   │   ├── thumbnail/thumbnail.jsx
│   │   ├── verticalLine/verticalLine.jsx
├── 📂 dataStructure
│   ├── dataSimulation.js
│   ├── dataConstructor.js
├── 📂 styling
│   ├── generalStyling.js
├── 📂 pages
│   ├── home.jsx
├── App.js
├── App.css
└── index.js
```

## Configuration
- **Adding New Timeline Events**:
  - Modify `dataSimulation.js` to include new event entries.
  - Ensure each event has properties such as `TitleH1`, `Subtitle`, `Text`, `Year`, `ValueType`, and `PersonProfile`.

## Contribution
1. Fork the project
2. Create a new branch (`git checkout -b feature-new-timeline-event`)
3. Commit your changes (`git commit -m 'Added a new timeline event'`)
4. Push the branch (`git push origin feature-new-timeline-event`)
5. Open a pull request

## Author
Developed by Copp3lia LaRoche-Francoeur


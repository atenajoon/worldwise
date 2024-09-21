



# WorldWise

WorldWise is a Single Page Application (SPA) that allows users to register and track all the cities they have traveled to. The app automatically associates each city with its corresponding country. Users can navigate between pages, search for cities on a map to add them to their list, delete cities, or find their current location using the browser's GeoLocation feature.

## Features
- **User Registration:** Register an account to keep track of your traveled cities. 
_Note: The login page is purely for simulation purposes; there is no real authentication implemented._
- **Interactive Map:** Add cities to your list by finding them on an interactive map.
- **GeoLocation:** Easily add your current location (city) to your list after providing permission.
- **Manage Cities:** Add, delete, or update your list of visited cities.
- **SPA Navigation:** Fast, seamless navigation between pages with React Router.
- **Automatic Country Assignment:** Cities are automatically linked with the appropriate country.

## Tech Stack
- **Frontend:** React
- **Build Tool:** Vite
- **Styling:** CSS Modules
- **Routing:** React Router
- **Linting:** ESLint (custom configuration)
- **Map Integration:** GeoLocation API

## Installation
To run this project locally, follow these steps:

### 1. Clone the repository:
<pre>git clone https://github.com/atenajoon/worldwise.git
cd worldwise
 </pre>
### 2. Install dependencies: 
Before running the project, ensure that you have Node.js installed. Then, install the project dependencies:
<pre>npm install</pre>
### 3. Start the development server: 
Vite makes it easy to start the app with a fast dev server. Run the following command:
<pre>npm run dev</pre>
### 4. Build for production: 
To build the project for production, use the build command:
<pre>npm run build</pre>
### 5. Preview production build: 
After building, you can preview the production version locally by running:
<pre>npm run preview</pre>

## Usage
1. After installation, open your browser and navigate to _http://localhost:5173/_.
2. Register or log in to start adding cities.
3. Use the map to search for and select cities, which will automatically be linked to their countries.
4. Use the "Current Location" feature to add your present city to your list.

## License
This project is licensed under the MIT License.








This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

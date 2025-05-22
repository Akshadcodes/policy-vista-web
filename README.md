# SKIS - SHRI KRISHNA INSURANCE SERVICE Website

This repository contains the code for the SKIS - SHRI KRISHNA INSURANCE SERVICE website, a modern web application built with React and Vite.

## Getting Started

To get a local copy of the project up and running, follow these simple steps.

### Prerequisites

Make sure you have Node.js and npm installed. You can install them using nvm:

```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
source ~/.bashrc
nvm install --lts
```

Or download directly from [nodejs.org](https://nodejs.org/).

### Installation

1. Clone the repository:
   ```sh
   git clone <YOUR_GIT_URL>
   ```
2. Navigate to the project directory:
   ```sh
   cd policy-vista-web # or the name of the cloned directory
   ```
3. Install dependencies:
   ```sh
   npm install
   ```

### Running the Project

To start the development server:

```sh
npm run dev
```

Open your browser and visit `http://localhost:8080` (or the address shown in your terminal) to see the website.

## Scripts

- `npm run dev`: Starts the development server with hot module replacement.
- `npm run build`: Builds the project for production to the `dist` folder.
- `npm run build:dev`: Builds the project for development mode.
- `npm run lint`: Runs ESLint to check for code quality issues.
- `npm run preview`: Serves the production build locally for preview.

## Technologies Used

This project utilizes a modern stack for building performant and maintainable web applications:

- **Vite**: A fast build tool for frontend development.
- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **Tailwind CSS**: A utility-first CSS framework for rapid styling.
- **shadcn/ui**: A collection of reusable components built with Radix UI and Tailwind CSS.
- **Framer Motion**: A library for production-ready animations.
- **React Router DOM**: For declarative routing in React applications.
- **Lucide React**: A collection of beautiful open-source icons.
- **React Spring**: A spring-physics based animation library.

## Deployment

Instructions on how to deploy this project to your preferred hosting provider (e.g., Vercel, Netlify, GitHub Pages, etc.) will be added here in the future.

## Project Structure

The main parts of the project are:

- `public/`: Static assets like images and the main HTML file.
  - `SKIS-uploads/`: Directory for uploaded images, including the logo.
- `src/`: Source code for the React application.
  - `components/`: Reusable UI components.
  - `hooks/`: Custom React hooks.
  - `lib/`: Utility functions and configurations.
  - `pages/`: React components for different pages of the website.
  - `App.tsx`: The main application component.
  - `main.tsx`: The entry point of the React application.
- `vite.config.ts`: Vite build configuration.
- `tailwind.config.ts`: Tailwind CSS configuration.
- `package.json`: Project dependencies and scripts.

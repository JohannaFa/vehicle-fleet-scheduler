# Vehicle Fleet Scheduler

The **Vehicle Fleet Scheduler** is a React-based web application designed to manage and visualize vehicle bookings and schedules. It provides an intuitive interface for fleet managers to track vehicle availability, bookings, and maintenance schedules.

## Features

- **Gantt Chart Visualization**: Displays vehicle bookings and schedules in a Gantt chart format.
- **Date Navigation**: Navigate through daily, weekly, or monthly intervals.
- **Booking Management**: Visualize bookings by type (e.g., maintenance, customer booking, provisioning) and status (e.g., pending, active, completed).
- **Responsive Design**: Optimized for various screen sizes.
- **Theming**: Customizable theme using Material-UI.

## Project Structure
```
src/ 
├── components/ # React components 
├── mocks/ # Mock data for vehicles and bookings 
├── theme/ # Theme configuration 
├── types/ # TypeScript type definitions 
├── utils/ # Utility functions 
├── App.tsx # Main application component 
├── main.tsx # Application entry point
└── README.md
```

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/JohannaFa/vehicle-fleet-scheduler.git
   cd vehicle-fleet-scheduler


2. Install dependencies:

   ```bash
   npm run dev


2. Run application:

   ```bash
   npm run dev


## Technologies Used
- [React](https://react.dev/) Frontend library for building user interfaces with TypeScript for type safety.
- [Material-UI](https://mui.com/?srsltid=AfmBOoo5frjBEyK85nzRzt2-oGB1VA2lIbjyviwiJYQfmNwV6hCjd4Ad) Component library for styling and theming.
- [Vite](https://vite.dev/) - fast build tool and development server.
- [date-fns](https://date-fns.org/) utility library for date manipulation.

## Mock Data
The project includes mock data for vehicles and bookings located in the following files:

- [`src/mocks/vehicles.ts`](src/mocks/vehicles.ts) – contains vehicle mock data  
- [`src/mocks/bookings.ts`](src/mocks/bookings.ts) – contains bookings mock data   

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgments
Material-UI for the design components.
date-fns for date utilities.

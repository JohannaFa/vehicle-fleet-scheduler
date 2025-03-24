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
npm run dev

## Technologies Used
React: Frontend library for building user interfaces.
TypeScript: Strongly typed programming language.
Material-UI: Component library for styling and theming.
Vite: Fast build tool and development server.
date-fns: Utility library for date manipulation.

## Mock Data
The project includes mock data for vehicles and bookings located in:

src/mocks/vehicles.ts
src/mocks/bookings.ts

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## Acknowledgments
Material-UI for the design components.
date-fns for date utilities.
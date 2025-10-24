# ReactMentoring Platform

A modern React-based mentoring platform that connects React developers with mentors for personalized learning sessions. Built with TypeScript, Vite, and React Router for a seamless user experience.

## Features

- **Browse Sessions**: Explore a variety of React mentoring sessions covering topics from beginner to advanced
- **Session Details**: View comprehensive information about each mentoring session including descriptions, duration, and dates
- **Book Sessions**: Reserve mentoring sessions with experienced React developers
- **Upcoming Sessions**: Manage and track your scheduled mentoring sessions
- **Responsive Design**: Optimized for desktop and mobile devices

## Tech Stack

- **React** 18.2.0 - UI library
- **TypeScript** 5.2.2 - Type safety and enhanced developer experience
- **Vite** 4.4.11 - Fast build tool and development server
- **React Router** 6.17.0 - Client-side routing
- **ESLint** 8.51.0 - Code linting and quality assurance

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd sandbox
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run lint` - Run ESLint to check for code quality issues
- `npm run preview` - Preview the production build locally

## Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── Navigation/      # Navigation components
│   ├── Sessions/        # Session-related components
│   └── UI/             # Generic UI components (Button, Input, Modal)
├── context/            # React Context for state management
│   ├── sessions/       # Session-specific context
│   │   ├── actions/    # Session action creators
│   │   ├── reducers/   # Session state reducers
│   │   └── types/      # TypeScript type definitions
│   └── SessionsProvider.tsx
├── pages/              # Route components
│   ├── Home.tsx        # Landing page
│   ├── Sessions.tsx    # Sessions listing page
│   ├── Session.tsx     # Individual session details
│   └── Root.tsx        # Root layout component
├── assets/             # Static assets (images, icons)
└── dummy-sessions.ts   # Sample session data
```

## State Management

The application uses React Context API combined with useReducer for state management:

### SessionContext Architecture

- **Context Provider**: `SessionsProvider.tsx` wraps the application and provides session state
- **Reducer Pattern**: `src/context/sessions/reducers/sesionsReducer.ts` manages session state updates
- **Actions**: `src/context/sessions/actions/sessionActions.ts` defines action creators for state mutations
- **Types**: `src/context/sessions/types/sessionTypes.ts` provides TypeScript interfaces for type safety

### State Flow

1. Components dispatch actions through the context
2. Actions are processed by the reducer
3. State updates trigger re-renders in consuming components
4. Type safety is maintained throughout the data flow

## Development Notes

### Component Organization

- **Pages**: Route-level components in `src/pages/`
- **Components**: Reusable UI components organized by feature
- **Context**: Centralized state management with clear separation of concerns

### Routing Structure

- `/` - Home page with platform overview
- `/sessions` - Browse all available mentoring sessions
- `/sessions/:id` - View detailed information for a specific session

### Session Data

Sample session data is provided in `src/dummy-sessions.ts` and includes:
- Session metadata (id, title, summary, description)
- Scheduling information (date, duration)
- Visual assets (session images)


## License

This project is for educational purposes.

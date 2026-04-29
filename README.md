# FilmCollection

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.1.2.

## Deploy

[Netlify deploy link](https://lorenzo-sthohn-film-collection.netlify.app/home)

Screenshot:

<img width="1440" height="900" alt="Screenshot 2026-04-29 at 12 53 43" src="https://github.com/user-attachments/assets/9301eaec-bbad-4318-876a-3b0e93eac0f3" />

## About

Film Collection is a tiny educational Angular application built for the **RS School Angular 2026 Q2** course.  
The main goal of this project is to demonstrate modern Angular skills (standalone components, signals, reactive forms, routing) and **to find a mentor** who can review the code, provide feedback, and help me grow as a developer.

If you are a mentor and have found this link — thank you for stopping by! I’d be grateful for any guidance.

## Features

- Browse a collection of movies loaded from a JSON fixture.
- Filter movies by title using a template-driven form (two‑way binding with signal).
- View movie details (year, genre, rating, duration, description).
- Toggle favorites on home page.
- Responsive breadcrumbs that automatically reflect the current route.
- Skeleton loader for movie poster images on home page.
- Fully typed and linted codebase (ESLint + Prettier).

## Tech stack

- **Angular 21** (standalone APIs, signals, new control flow)
- **TypeScript** (strict mode)
- **ESLint** with `@angular-eslint` and Prettier
- **Netlify** for deployment

## Installation

1. Clone repository:

```bash
git clone https://github.com/Lorenzo-StJohn/film-collection.git
```

2. Go to the project folder:

```bash
cd film-collection
```

3. Install dependencies:

```bash
npm ci
```

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Linting and format

To run linter:

```bash
npm run lint
```

To format code with prettier:

```bash
npm run format
```

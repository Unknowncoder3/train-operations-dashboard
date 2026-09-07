# Train Operations Dashboard

A modern railway operations monitoring dashboard built with Angular 22 and ASP.NET Core Web API.

## Architecture

```text
Angular 22 Frontend  ->  ASP.NET Core Web API  ->  Data layer
        |                         |
        +---- KPI dashboard       +---- Train operations API
        +---- live-style status   +---- Coach API
        +---- alerts              +---- Station API
```

## Features

- Train operations overview
- KPI cards for total, active, delayed and cancelled trains
- On-time performance metric
- Train status table with search and status filtering
- Operational alerts
- Route/station information
- Responsive desktop/tablet layout
- Clean separation between Angular components, models and API service
- ASP.NET Core API with CORS configured for the Angular development server

## Project structure

```text
frontend/train-operations-dashboard
backend/TrainOperations.Api
database
```

## Run locally

### Frontend

```bash
cd frontend/train-operations-dashboard
npm install
npm start
```

Open `http://localhost:4200`.

### Backend

```bash
cd backend/TrainOperations.Api
dotnet restore
dotnet run
```

The API uses the URLs printed by ASP.NET Core at startup. The Angular service defaults to `http://localhost:5000/api` and can be changed in `src/environments/environment.ts`.

## API endpoints

- `GET /api/trains`
- `GET /api/trains/{id}`
- `GET /api/dashboard/summary`
- `GET /api/alerts`
- `GET /api/stations`

## Roadmap

- SQL Server/PostgreSQL persistence
- Authentication and role-based access
- SignalR real-time train updates
- Advanced operational charts
- Route map integration
- Docker and CI/CD
- Production deployment

# Mini E-Commerce Application

A full-stack e-commerce application built with Next.js, Express.js, TypeScript, and Docker.

## Features

### Frontend (Next.js)
- Product listing page with responsive design
- Shopping cart functionality
- Add to cart, update quantity, remove items
- State management using Context API
- Custom CSS (no UI libraries)
- TypeScript for type safety

### Backend (Express.js)
- RESTful API for products and cart
- Input validation middleware
- Error handling middleware
- In-memory data storage
- TypeScript implementation
- Clean architecture (routes → controllers → services → models)

## Tech Stack

- **Frontend**: Next.js 14 (App Router), TypeScript, React Context API
- **Backend**: Node.js, Express.js, TypeScript
- **Containerization**: Docker, Docker Compose
- **Styling**: Custom CSS (no UI libraries)

## Project Structure

```
mini-ecommerce/
├── docker-compose.yml
├── README.md
├── .gitignore
├── frontend/
│   ├── Dockerfile
│   ├── next.config.ts
│   ├── tsconfig.json
│   ├── package.json
│   ├── .env.local
│   └── src/
│       ├── app/
│       ├── components/
│       ├── context/
│       ├── types/
│       ├── services/
│       └── styles/
└── backend/
    ├── Dockerfile
    ├── tsconfig.json
    ├── package.json
    ├── .env
    └── src/
        ├── server.ts
        ├── routes/
        ├── controllers/
        ├── services/
        ├── models/
        ├── middleware/
        ├── types/
        ├── config/
        └── data/
```

## Prerequisites

- Docker Desktop installed
- Docker Compose installed
- Git installed

## Quick Start with Docker (Recommended)

1. **Clone the repository**
```bash
git clone https://github.com/ManishMahto1/mini-ecommerce
cd mini-ecommerce
```

2. **Run with Docker Compose**
```bash
docker-compose up --build
```

3. **Access the application**
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

4. **Stop the application**
```bash
docker-compose down
```

## Local Development Setup (Without Docker)

### Backend Setup

1. Navigate to backend directory
```bash
cd backend
```

2. Install dependencies
```bash
npm install
```

3. Create .env file
```bash
PORT=5000
NODE_ENV=development
```

4. Run development server
```bash
npm run dev
```

Backend will run on http://localhost:5000

### Frontend Setup

1. Navigate to frontend directory
```bash
cd frontend
```

2. Install dependencies
```bash
npm install
```

3. Create .env.local file
```bash
NEXT_PUBLIC_API_URL=http://localhost:5000
```

4. Run development server
```bash
npm run dev
```

Frontend will run on http://localhost:3000

## API Endpoints

### Products
- `GET /api/products` - Get all products

### Cart
- `POST /api/cart` - Add item to cart
- `PUT /api/cart/:id` - Update cart item quantity
- `DELETE /api/cart/:id` - Remove item from cart
- `GET /api/cart` - Get all cart items

## Available Scripts

### Backend
- `npm run dev` - Start development server with hot reload
- `npm run build` - Build TypeScript to JavaScript
- `npm start` - Run production server
- `npm run lint` - Lint code

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Run production server
- `npm run lint` - Lint code

## Docker Commands

### Build and run
```bash
docker-compose up --build
```

### Run in detached mode
```bash
docker-compose up -d
```

### View logs
```bash
docker-compose logs -f
```

### Stop services
```bash
docker-compose down
```

### Remove volumes
```bash
docker-compose down -v
```

### Rebuild specific service
```bash
docker-compose up --build frontend
docker-compose up --build backend
```

## Architecture

### Frontend Architecture
```
App Router (Next.js 14)
    ↓
Context Provider (Cart State)
    ↓
Pages (Home, Cart)
    ↓
Components (ProductCard, CartItem, Header, Layout)
    ↓
Services (API calls)
```

### Backend Architecture
```
Routes
    ↓
Controllers
    ↓
Services
    ↓
Models
```


### Docker Issues

**Port already in use**
```bash
# Stop conflicting services or change ports in docker-compose.yml
docker-compose down
```

**Cannot connect to backend**
- Ensure backend service is running: `docker-compose logs backend`
- Check if port 5000 is accessible
- Verify NEXT_PUBLIC_API_URL in frontend

**Build fails**
```bash
# Clear Docker cache
docker-compose down
docker system prune -a
docker-compose up --build
```

### Development Issues

**Module not found**
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

**API not responding**
- Check backend logs
- Verify backend is running on correct port
- Check CORS configuration



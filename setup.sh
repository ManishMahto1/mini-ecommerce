#!/bin/bash

echo "=========================================="
echo "Mini E-Commerce Setup "
echo "=========================================="
echo ""

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    echo " Docker is not installed. Please install Docker Desktop first."
    echo "   Visit: https://www.docker.com/products/docker-desktop"
    exit 1
fi

# Check if Docker Compose is installed
if ! command -v docker-compose &> /dev/null; then
    echo " Docker Compose is not installed. Please install Docker Compose first."
    exit 1
fi

echo " Docker and Docker Compose are installed"
echo ""

# Stop any existing containers
echo " Stopping any existing containers..."
docker-compose down 2>/dev/null

# Build and start containers
echo ""
echo "🔨 Building Docker images..."
echo "   This may take a few minutes on first run..."
echo ""

docker-compose build

if [ $? -eq 0 ]; then
    echo ""
    echo " Build successful!"
    echo ""
    echo " Starting containers..."
    echo ""
    
    docker-compose up -d
    
    if [ $? -eq 0 ]; then
        echo ""
        echo "=========================================="
        echo " Application started successfully!"
        echo "=========================================="
        echo ""
        echo " Backend API: http://localhost:5000"
        echo " Frontend: http://localhost:3000"
        echo ""
        echo "Useful commands:"
        echo "  • View logs: docker-compose logs -f"
        echo "  • Stop app: docker-compose down"
        echo "  • Restart: docker-compose restart"
        echo ""
        echo "Opening browser in 5 seconds..."
        sleep 5
        
        # Try to open browser (works on most systems)
        if command -v xdg-open &> /dev/null; then
            xdg-open http://localhost:3000
        elif command -v open &> /dev/null; then
            open http://localhost:3000
        else
            echo "Please open http://localhost:3000 in your browser"
        fi
    else
        echo " Failed to start containers"
        echo "Check logs with: docker-compose logs"
        exit 1
    fi
else
    echo " Build failed"
    echo "Check the error messages above"
    exit 1
fi

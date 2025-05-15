# MercadoCore 

MercadoCore is a backend service built with Django for managing a grocery e-commerce platform. It is part of a broader system designed to support product listings, real-time inventory, and catalog management.

## Features

- Product creation and detail views via REST API
- UUID-based product identification
- Scalable Django project structure
- Admin interface for easy data management
- Ready for integration with frontend or mobile apps

## Tech Stack

- **Backend**: Django 5.2
- **Database**: SQLite (development)
- **API Style**: RESTful
- **Language**: Python 3.10

## Project Structure


mercadocore/
├── catalog_service/ # Main Django project
│ ├── settings.py
│ └── urls.py
├── catalog/ # Catalog app
│ ├── models.py
│ ├── views.py
│ └── urls.py
├── venv/ # Virtual environment (excluded from Git)
└── manage.py

## Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/omarrfaarouk/mercadocore.git
   cd mercadocore
2. Create and activate a virtual environment
python -m venv venv
venv\Scripts\activate

3. Install dependencies
pip install -r requirements.txt

4. Run the server
python manage.py runserver


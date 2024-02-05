# app/__init__.py

from flask import Flask
from flask_cors import CORS
from flask_pymongo import PyMongo
from config import Config

app = Flask(__name__)
# Initialize CORS extension
CORS(app)
app.config.from_object(Config)
mongo = PyMongo(app)

from app.routes import volunteer_routes, query_routes,upcoming_events_routes,events_routes,completed_events_routes, payments_routes

# app/routes/upcoming_events_routes.py

from flask import jsonify, request
from app import app
from app.controllers.upcoming_events_controller import UpcomingEventsController

@app.route('/upcoming_events', methods=['POST'])
def create_upcoming_event():
    data = request.json
    UpcomingEventsController.create_upcoming_event(data)
    return jsonify({'message': 'Upcoming Event created successfully'}), 201

@app.route('/upcoming_events', methods=['GET'])
def get_all_upcoming_events():
    upcoming_events = UpcomingEventsController.get_all_upcoming_events()
    return jsonify({'upcoming_events': upcoming_events})

@app.route('/upcoming_events/<string:event_id>', methods=['GET'])
def get_upcoming_event_by_id(event_id):
    upcoming_event = UpcomingEventsController.get_upcoming_event_by_id(event_id)
    return jsonify({'upcoming_event': upcoming_event})

@app.route('/upcoming_events/<string:event_id>', methods=['PUT'])
def update_upcoming_event(event_id):
    data = request.json
    UpcomingEventsController.update_upcoming_event(event_id, data)
    return jsonify({'message': 'Upcoming Event updated successfully'})

@app.route('/upcoming_events/<string:event_id>', methods=['DELETE'])
def delete_upcoming_event(event_id):
    UpcomingEventsController.delete_upcoming_event(event_id)
    return jsonify({'message': 'Upcoming Event deleted successfully'})

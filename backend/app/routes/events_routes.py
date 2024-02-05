# app/routes/events_routes.py

from flask import jsonify, request
from app import app
from app.controllers.events_controller import EventsController

@app.route('/events', methods=['POST'])
def create_event():
    data = request.json
    EventsController.create_event(data)
    return jsonify({'message': 'Event created successfully'}), 201

@app.route('/events', methods=['GET'])
def get_all_events():
    events = EventsController.get_all_events()
    return jsonify({'events': events})

@app.route('/events/<string:event_id>', methods=['GET'])
def get_event_by_id(event_id):
    event = EventsController.get_event_by_id(event_id)
    return jsonify({'event': event})

@app.route('/events/<string:event_id>', methods=['PUT'])
def update_event(event_id):
    data = request.json
    EventsController.update_event(event_id, data)
    return jsonify({'message': 'Event updated successfully'})

@app.route('/events/<string:event_id>', methods=['DELETE'])
def delete_event(event_id):
    EventsController.delete_event(event_id)
    return jsonify({'message': 'Event deleted successfully'})

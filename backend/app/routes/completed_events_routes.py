# app/routes/completed_events_routes.py

from flask import jsonify, request
from app import app
from app.controllers.completed_events_controller import CompletedEventsController

@app.route('/completed_events', methods=['POST'])
def create_completed_event():
    data = request.json
    CompletedEventsController.create_completed_event(data)
    return jsonify({'message': 'Completed Event created successfully'}), 201

@app.route('/completed_events', methods=['GET'])
def get_all_completed_events():
    completed_events = CompletedEventsController.get_all_completed_events()
    return jsonify({'completed_events': completed_events})

@app.route('/completed_events/<string:event_id>', methods=['GET'])
def get_completed_event_by_id(event_id):
    completed_event = CompletedEventsController.get_completed_event_by_id(event_id)
    return jsonify({'completed_event': completed_event})

@app.route('/completed_events/<string:event_id>', methods=['PUT'])
def update_completed_event(event_id):
    data = request.json
    CompletedEventsController.update_completed_event(event_id, data)
    return jsonify({'message': 'Completed Event updated successfully'})

@app.route('/completed_events/<string:event_id>', methods=['DELETE'])
def delete_completed_event(event_id):
    CompletedEventsController.delete_completed_event(event_id)
    return jsonify({'message': 'Completed Event deleted successfully'})

# app/routes/volunteer_routes.py

from flask import jsonify, request
from app import app
from app.controllers.volunteer_controller import VolunteerController

@app.route('/',methods = ['GET'])
def appstart():
    return jsonify({'message':"App is Working fine"}) , 200

@app.route('/volunteers', methods=['POST'])
def create_volunteer():
    data = request.json
    VolunteerController.create_volunteer(data)
    return jsonify({'message': 'Volunteer created successfully'}), 201

@app.route('/volunteers', methods=['GET'])
def get_all_volunteers():
    volunteers = VolunteerController.get_all_volunteers()
    # print("data",volunteers)
    return ({'volunteers': volunteers})
   
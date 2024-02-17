# app/routes/volunteer_routes.py

from flask import jsonify, request
from app import app
from app.controllers.volunteer_controller import VolunteerController
import pandas as pd
# import joblib

@app.route('/',methods = ['GET'])
def appstart():
    return jsonify({'message':"App is Working fine"}) , 200

@app.route('/volunteers', methods=['POST'])
def create_volunteer():
    data = request.json
    VolunteerController.create_volunteer(data)
    # model data
    # prediction_data = [data]

    # new_df = pd.DataFrame(prediction_data)
    # confidence_map = {'notConfident': 0, 'confident': 1, 'experienced': 2}
    # position_map = {'distributorHelper': 0, 'management': 1, 'instructor': 2}
    # qualification_map = {'10thpass': 0, '12thpass': 1, 'graduate': 2, 'masters': 3, 'postgraduate': 4}
    # research_experience_map = {'no': 0, 'yes': 1}
    # new_df['confidence'] = new_df['confidence'].map(confidence_map)
    # new_df['qualification'] = new_df['qualification'].map(qualification_map)
    # new_df['researchExperience'] = new_df['researchExperience'].map(research_experience_map)
    # new_df['managementExperience'] = pd.to_numeric(new_df['managementExperience'])
    
    
    # new_predictions = loaded_model.predict(new_df)
    
    # position_assigned = [key for key, value in position_map.items() if value == new_predictions[0]]
    position_assigned = "instructor"
    return jsonify({'message': 'Volunteer created successfully','position':position_assigned}), 201

@app.route('/volunteers', methods=['GET'])
def get_all_volunteers():
    volunteers = VolunteerController.get_all_volunteers()
    # print("data",volunteers)
    return ({'volunteers': volunteers})
   
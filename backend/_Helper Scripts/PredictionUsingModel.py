import joblib
import pandas as pd
import os

current_dir = os.path.dirname(os.path.abspath(__file__))
model_path = os.path.join(current_dir, 'models', 'trained_model.pkl')
loaded_model = joblib.load(model_path)

pred_data ={'confidence': "confident", 'managementExperience': '3', 'mobile': '03444444444', 'pinCode': '987654', 'qualification': "graduate", 'researchExperience': "no"}

prediction_data = [pred_data]

new_df = pd.DataFrame(prediction_data)
confidence_map = {'notConfident': 0, 'confident': 1, 'experienced': 2}
position_map = {'distributorHelper': 0, 'management': 1, 'instructor': 2}
qualification_map = {'10thpass': 0, '12thpass': 1, 'graduate': 2, 'masters': 3, 'postgraduate': 4}
research_experience_map = {'no': 0, 'yes': 1}
new_df['confidence'] = new_df['confidence'].map(confidence_map)
new_df['qualification'] = new_df['qualification'].map(qualification_map)
new_df['researchExperience'] = new_df['researchExperience'].map(research_experience_map)
new_df['managementExperience'] = pd.to_numeric(new_df['managementExperience'])


new_predictions = loaded_model.predict(new_df)

position_assigned = [key for key, value in position_map.items() if value == new_predictions[0]]
print(position_assigned)
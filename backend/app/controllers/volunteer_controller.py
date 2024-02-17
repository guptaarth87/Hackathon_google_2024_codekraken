# app/controllers/volunteer_controller.py
from flask import jsonify
from app.models.volunteer_model import VolunteerModel

class VolunteerController:
    @classmethod
    def create_volunteer(cls, data):
        return VolunteerModel.create_volunteer(data)

    @classmethod
    def get_all_volunteers(cls):
        volunteer_cursor =VolunteerModel.get_all_volunteers()
        
        for volunteer in volunteer_cursor:
            volunteer['_id'] = str(volunteer['_id'])
        
       
        return volunteer_cursor
        # for i in volunteer_cursor:
        #     print(i)
        # volunteers_list = [
        #     {
        #         "_id": str(volunteer["_id"]),
        #         "name_": volunteer["name_"],
        #         "email": volunteer["email"],
        #         "pinCode": volunteer["pinCode"],
        #         "mobile": volunteer["mobile"],
        #         "qualification": volunteer["qualification"],
        #         # "managementExperience": volunteer["managementExperience"],
        #         "researchExperience": volunteer["researchExperience"],
        #         "confidence": volunteer["confidence"],
        #         # "position": volunteer["position"]
        #     }
        #     for volunteer in volunteer_cursor
        # ]
        # l1=[]
        # for i in volunteer_cursor:
        #     l1.append(i)
        # print(l1)
        # return volunteers_list
       

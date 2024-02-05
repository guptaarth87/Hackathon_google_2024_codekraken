# app/controllers/volunteer_controller.py

from app.models.volunteer_model import VolunteerModel

class VolunteerController:
    @classmethod
    def create_volunteer(cls, data):
        return VolunteerModel.create_volunteer(data)

    @classmethod
    def get_all_volunteers(cls):
        volunteer_cursor =VolunteerModel.get_all_volunteers()
        volunteers_list = [
            {
                "_id": str(volunteer["_id"]),
                "name": volunteer["name"],
                "email": volunteer["email"],
                "pincode": volunteer["pincode"],
                "mobile_no": volunteer["mobile_no"],
                "highest_qualification": volunteer["highest_qualification"],
                "experience_in_management": volunteer["experience_in_management"],
                "experience_in_research": volunteer["experience_in_research"],
                "public_speaking": volunteer["public_speaking"]
            }
            for volunteer in volunteer_cursor
        ]

        return volunteers_list
       

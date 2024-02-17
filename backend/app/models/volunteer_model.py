# app/models/volunteer_model.py

from app import mongo

class VolunteerModel:
    collection = mongo.db.Volunteers

    @classmethod
    def create_volunteer(cls, data):
        return cls.collection.insert_one(data)

    @classmethod
    def get_all_volunteers(cls):
        return cls.collection.find()

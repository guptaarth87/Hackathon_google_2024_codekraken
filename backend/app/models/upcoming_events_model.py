# app/models/upcoming_events_model.py

from app import mongo

class UpcomingEventsModel:
    collection = mongo.db.upcoming_events

    @classmethod
    def create_upcoming_event(cls, data):
        return cls.collection.insert_one(data)

    @classmethod
    def get_all_upcoming_events(cls):
        return cls.collection.find()

    @classmethod
    def get_upcoming_event_by_id(cls, event_id):
        return cls.collection.find_one({"_id": event_id})

    @classmethod
    def update_upcoming_event(cls, event_id, data):
        return cls.collection.update_one({"_id": event_id}, {"$set": data})

    @classmethod
    def delete_upcoming_event(cls, event_id):
        return cls.collection.delete_one({"_id": event_id})

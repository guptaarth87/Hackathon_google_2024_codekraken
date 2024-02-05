# app/models/events_model.py

from app import mongo

class EventsModel:
    collection = mongo.db.events

    @classmethod
    def create_event(cls, data):
        return cls.collection.insert_one(data)

    @classmethod
    def get_all_events(cls):
        return cls.collection.find()

    @classmethod
    def get_event_by_id(cls, event_id):
        return cls.collection.find_one({"_id": event_id})

    @classmethod
    def update_event(cls, event_id, data):
        return cls.collection.update_one({"_id": event_id}, {"$set": data})

    @classmethod
    def delete_event(cls, event_id):
        return cls.collection.delete_one({"_id": event_id})

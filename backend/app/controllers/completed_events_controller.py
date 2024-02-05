# app/controllers/completed_events_controller.py

from app.models.completed_events_model import CompletedEventsModel
from bson import ObjectId

class CompletedEventsController:
    @classmethod
    def create_completed_event(cls, data):
        return CompletedEventsModel.create_completed_event(data)

    @classmethod
    def get_all_completed_events(cls):
        completed_events_cursor  = CompletedEventsModel.get_all_completed_events()
       
        completed_events_list = [
            {
                "_id": str(event["_id"]),
                "name_": event["name_"],
                "recieved_amt": event["recieved_amt"],
                "venue": event["venue"],
                "date_":event["date"],
                "volunteers_participated": event["volunteers_participated"]
            }
            for event in completed_events_cursor
        ]

        return completed_events_list
        
    @classmethod
    def get_completed_event_by_id(cls, event_id):
        completed_event = CompletedEventsModel.get_completed_event_by_id(event_id)
        return cls._convert_to_json(completed_event)

    @classmethod
    def update_completed_event(cls, event_id, data):
        return CompletedEventsModel.update_completed_event(event_id, data)

    @classmethod
    def delete_completed_event(cls, event_id):
        return CompletedEventsModel.delete_completed_event(event_id)

    @classmethod
    def _convert_to_json(cls, data):
        if isinstance(data, list):
            return [{**item, '_id': str(item['_id'])} for item in data]
        elif data:
            return {**data, '_id': str(data['_id'])}
        return data

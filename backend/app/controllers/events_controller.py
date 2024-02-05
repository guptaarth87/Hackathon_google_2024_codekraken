# app/controllers/events_controller.py

from app.models.events_model import EventsModel
from bson import ObjectId

class EventsController:
    @classmethod
    def create_event(cls, data):
        return EventsModel.create_event(data)
        

    @classmethod
    def get_all_events(cls):
        events_cursor = EventsModel.get_all_events()
        events_list = [
            {
                "_id": str(event["_id"]),
                "name_": event["name_"],
                "required_amt": event["required_amt"],
                "remaining_amt":event["remaining_amt"]
            }
            for event in events_cursor
        ]

        return events_list
    @classmethod
    def get_event_by_id(cls, event_id):
        event = EventsModel.get_event_by_id(event_id)
        print(event)
        return cls._convert_to_json(event)

    @classmethod
    def update_event(cls, event_id, data):
        return EventsModel.update_event(event_id, data)

    @classmethod
    def delete_event(cls, event_id):
        return EventsModel.delete_event(event_id)

    @classmethod
    def _convert_to_json(cls, data):
        if isinstance(data, list):
            return [{**item, '_id': str(item['_id'])} for item in data]
        elif data:
            return {**data, '_id': str(data['_id'])}
        return data

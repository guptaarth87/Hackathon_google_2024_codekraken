# app/controllers/upcoming_events_controller.py

from app.models.upcoming_events_model import UpcomingEventsModel
from bson import ObjectId

class UpcomingEventsController:
    @classmethod
    def create_upcoming_event(cls, data):
        return UpcomingEventsModel.create_upcoming_event(data)

    @classmethod
    def get_all_upcoming_events(cls):
        upcoming_events_cursor = UpcomingEventsModel.get_all_upcoming_events()
       
        events_list = [
            {
                "_id": str(event["_id"]),
                "name_": event["name_"],
                "recieved_amt": event["recieved_amt"],
                "venue":event[" venue"],
                "date_":event[" date_"],
                "remaining_volunteers":event[" remaining_volunteers"]
            }
            for event in upcoming_events_cursor
        ]

        return events_list

    @classmethod
    def get_upcoming_event_by_id(cls, event_id):
        upcoming_event = UpcomingEventsModel.get_upcoming_event_by_id(event_id)
        return cls._convert_to_json(upcoming_event)

    @classmethod
    def update_upcoming_event(cls, event_id, data):
        return UpcomingEventsModel.update_upcoming_event(event_id, data)

    @classmethod
    def delete_upcoming_event(cls, event_id):
        return UpcomingEventsModel.delete_upcoming_event(event_id)

    @classmethod
    def _convert_to_json(cls, data):
        if isinstance(data, list):
            return [{**item, '_id': str(item['_id'])} for item in data]
        elif data:
            return {**data, '_id': str(data['_id'])}
        return data

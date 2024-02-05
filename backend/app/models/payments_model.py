# app/models/payments_model.py

from app import mongo
from datetime import datetime

class PaymentsModel:
    collection = mongo.db.payments

    @classmethod
    def add_payment(cls, data):
        data['date_time'] = datetime.utcnow()
        result = cls.collection.insert_one(data)

        # Update remaining_amt in the corresponding Events document
        events_collection = mongo.db.events
        events_collection.update_one(
            {"name_": data["paid_for"]},
            {"$inc": {"remaining_amt": -data["paid_amt"]}}
        )

        return result.inserted_id

    @classmethod
    def get_all_payments(cls):
        return cls.collection.find()

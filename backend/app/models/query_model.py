# app/models/query_model.py

from app import mongo

class QueryModel:
    collection = mongo.db.queries

    @classmethod
    def create_query(cls, data):
        return cls.collection.insert_one(data)

    @classmethod
    def get_all_queries(cls):
        return cls.collection.find()

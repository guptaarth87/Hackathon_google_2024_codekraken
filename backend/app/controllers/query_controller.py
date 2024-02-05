# app/controllers/query_controller.py

from app.models.query_model import QueryModel

class QueryController:
    @classmethod
    def create_query(cls, data):
        return QueryModel.create_query(data)

    @classmethod
    def get_all_queries(cls):
        queries_cursor = QueryModel.get_all_queries()

        # Convert cursor to a list of dictionaries, converting ObjectId to string
        queries_list = [
            {
                "_id": str(query["_id"]),
                "email": query["email"],
                "query": query["query"]
            }
            for query in queries_cursor
        ]

        return queries_list

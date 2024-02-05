# app/routes/query_routes.py

from flask import jsonify, request
from app import app
from app.controllers.query_controller import QueryController

@app.route('/queries', methods=['POST'])
def create_query():
    data = request.json
    QueryController.create_query(data)
    return jsonify({'message': 'Query created successfully'}), 201

@app.route('/queries', methods=['GET'])
def get_all_queries():
    queries = QueryController.get_all_queries()
    return jsonify({'queries': queries})

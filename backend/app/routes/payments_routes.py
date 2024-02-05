# app/routes/payments_routes.py

from flask import jsonify, request
from app import app
from app.controllers.payments_controller import PaymentsController

@app.route('/payments', methods=['POST'])
def add_payment():
    data = request.json
    payment_id = PaymentsController.add_payment(data)
    return jsonify({'message': 'Payment added successfully', 'payment_id': str(payment_id)}), 201

@app.route('/payments', methods=['GET'])
def get_all_payments():
    payments = PaymentsController.get_all_payments()
    return jsonify({'payments': payments})

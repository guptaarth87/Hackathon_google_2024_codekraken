# app/controllers/payments_controller.py

from app.models.payments_model import PaymentsModel

class PaymentsController:
    @classmethod
    def add_payment(cls, data):
        return PaymentsModel.add_payment(data)

    @classmethod
    def get_all_payments(cls):
        payments_cursor = PaymentsModel.get_all_payments()
        payments_list = [
            {
                "_id": str(payment["_id"]),
                "email": payment["email"],
                "paid_amt": payment["paid_amt"],
                "paid_for":payment["paid_for"]
            }
            for payment in payments_cursor
        ]

        return  payments_list
       

from flask import Blueprint, jsonify, request

main = Blueprint('main', __name__)

@main.route('/api/data', methods=['GET'])
def get_data():
    data = {
        "message": "Hello from Flask!"
    }
    return jsonify(data)

@main.route('/api/predict', methods=['POST'])
def predict():
    input_data = request.get_json()
    # Lógica de previsão usando IA pode ir aqui
    return jsonify({"prediction": "fake-prediction"})

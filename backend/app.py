from flask import Flask, request, jsonify
from flask_cors import CORS
import random

app = Flask(__name__)
CORS(app)  # Allow all CORS for now

predictions = [
    "No Diabetic Retinopathy (Healthy)",
    "Mild Non-Proliferative Diabetic Retinopathy (Mild NPDR)",
    "Moderate Non-Proliferative Diabetic Retinopathy (Moderate NPDR)",
    "Severe Non-Proliferative Diabetic Retinopathy (Severe NPDR)",
    "Proliferative Diabetic Retinopathy (PDR)"
]

@app.route('/predict', methods=['POST'])
def predict():
    if 'image' not in request.files:
        return jsonify({"error": "No image uploaded"}), 400
    
    file = request.files['image']
    
    # Here you would normally load the image and run model prediction.
    # For now, simulate random prediction.
    diagnosis = random.choice(predictions)
    confidence = round(random.uniform(80, 99.9), 2)  # Random confidence score

    return jsonify({
        "diagnosis": diagnosis,
        "confidence": confidence
    })

@app.route('/', methods=['GET'])
def home():
    return "Diabetic Retinopathy Detection Backend Running."

if __name__ == '__main__':
    app.run(debug=True)

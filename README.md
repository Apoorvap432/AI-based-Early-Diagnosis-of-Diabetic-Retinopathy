# 🩺 Diabetic Retinopathy Detection

A web-based application for **diabetic retinopathy detection from retinal images**, designed to demonstrate how AI and deep learning can assist in the early screening of diabetic eye disease.

The application allows users to upload retinal images, receive a preliminary prediction with a confidence score, and explore educational information about diabetic retinopathy, including its symptoms, prevention, and treatment.

> ⚠️ **Disclaimer:** This project is an educational prototype and is not intended to provide medical diagnosis or replace examination by a qualified healthcare professional.

---

## 📌 Overview

**Diabetic Retinopathy** is a diabetes-related eye condition that damages the blood vessels of the retina. Without timely detection and treatment, it can progress to serious vision impairment or blindness.

This project provides a simple web interface where users can upload retinal images and analyze them using a machine-learning-based prediction pipeline.

The system combines:

* A user-friendly frontend
* A Python Flask backend
* TensorFlow/Keras-based machine learning components
* Retinal image processing
* Prediction and confidence-score display
* Educational content about diabetic retinopathy

The project demonstrates the potential of AI-assisted screening systems while providing an accessible interface for learning about diabetic eye disease.

---

## 🎯 Problem Statement

Diabetic retinopathy can develop gradually without obvious symptoms during its early stages. Regular retinal screening and early detection are therefore important for reducing the risk of severe vision loss.

However, access to screening and specialist evaluation can be limited in some areas.

This project explores how a web-based AI-assisted system could help analyze retinal images and provide a **preliminary indication of diabetic retinopathy severity**.

---

## ✨ Features

### 👁️ Retinal Image Upload

Users can upload retinal images for analysis.

The application supports separate analysis of:

* Left eye
* Right eye

### 🤖 Diabetic Retinopathy Detection

The application provides predictions across different stages of diabetic retinopathy:

* **No Diabetic Retinopathy**
* **Mild NPDR**
* **Moderate NPDR**
* **Severe NPDR**
* **Proliferative DR**

### 📊 Confidence Score

Along with the predicted class, the application displays a confidence percentage associated with the prediction.

### 📚 Educational Content

The application includes informational sections covering:

* What is diabetic retinopathy?
* Symptoms
* Causes and risk factors
* Prevention
* Treatment
* Importance of early detection

### 🖥️ User-Friendly Interface

The frontend is designed to provide a simple workflow for uploading images and viewing prediction results.

### 📱 Responsive Design

The interface is designed to work across different screen sizes, including:

* Desktop
* Laptop
* Tablet
* Mobile

### 🔌 Flask API

The frontend communicates with a Python Flask backend responsible for handling image-processing and prediction requests.

### 🧠 CNN-Based Model Pipeline

The project includes a training script demonstrating the use of a **Convolutional Neural Network (CNN)** approach for retinal image classification.

---

## 🔄 How It Works

The application follows this basic workflow:

```text
             ┌──────────────────────┐
             │      User            │
             │ Uploads Retinal      │
             │      Image           │
             └──────────┬───────────┘
                        │
                        ▼
             ┌──────────────────────┐
             │      Frontend        │
             │ HTML / CSS / JS      │
             └──────────┬───────────┘
                        │
                        ▼
             ┌──────────────────────┐
             │     Flask API        │
             │   Backend Server     │
             └──────────┬───────────┘
                        │
                        ▼
             ┌──────────────────────┐
             │ Image Processing &   │
             │ Prediction Pipeline  │
             └──────────┬───────────┘
                        │
                        ▼
             ┌──────────────────────┐
             │ Prediction +         │
             │ Confidence Score     │
             └──────────┬───────────┘
                        │
                        ▼
             ┌──────────────────────┐
             │      Frontend        │
             │ Display Results      │
             └──────────────────────┘
```

### Prediction Flow

1. The user opens the web application.
2. The user uploads a retinal image.
3. The frontend sends the image to the Flask backend.
4. The backend receives and processes the image.
5. The machine-learning pipeline generates a prediction.
6. The backend returns the predicted category and confidence score.
7. The frontend displays the result to the user.

---

## 🧠 Detection Categories

| Stage                | Description                                           |
| -------------------- | ----------------------------------------------------- |
| **No DR**            | No visible signs of diabetic retinopathy              |
| **Mild NPDR**        | Early-stage non-proliferative diabetic retinopathy    |
| **Moderate NPDR**    | Moderate progression of non-proliferative disease     |
| **Severe NPDR**      | Advanced non-proliferative diabetic retinopathy       |
| **Proliferative DR** | Advanced stage involving abnormal blood-vessel growth |

> These categories are provided for project classification purposes and should not be interpreted as a clinical diagnosis.

---

## 🛠️ Tech Stack

| Technology     | Purpose                                      |
| -------------- | -------------------------------------------- |
| **HTML5**      | Frontend structure                           |
| **CSS3**       | Styling and responsive design                |
| **JavaScript** | Frontend functionality and API communication |
| **Python**     | Backend and machine-learning logic           |
| **Flask**      | REST API and backend server                  |
| **TensorFlow** | Machine learning framework                   |
| **Keras**      | Neural network development                   |
| **NumPy**      | Numerical and array processing               |
| **Flask-CORS** | Cross-origin API communication               |

---

## 📂 Project Structure

```text
diabetic-retinopathy-detection/
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── assets/
│
├── backend/
│   ├── app.py
│   ├── model/
│   └── ...
│
├── training/
│   ├── train.py
│   └── ...
│
├── requirements.txt
├── README.md
└── .gitignore
```

> The exact structure may vary depending on the implementation and model files included in the repository.

---

## ⚙️ Installation & Setup

### Prerequisites

Make sure the following are installed on your system:

* Python 3.x
* pip
* Git
* Virtual environment — recommended

---

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/diabetic-retinopathy-detection.git
```

Navigate into the project:

```bash
cd diabetic-retinopathy-detection
```

---

### 2. Create a Virtual Environment

#### Windows

```bash
python -m venv venv
```

Activate it:

```bash
venv\Scripts\activate
```

#### macOS / Linux

```bash
python3 -m venv venv
```

Activate it:

```bash
source venv/bin/activate
```

---

### 3. Install Dependencies

```bash
pip install -r requirements.txt
```

---

### 4. Start the Flask Backend

Navigate to the backend directory:

```bash
cd backend
```

Run the Flask application:

```bash
python app.py
```

The backend server should start locally.

---

### 5. Open the Frontend

Open:

```text
frontend/index.html
```

in your browser.

If your project uses a frontend development server, start it according to the project's configuration.

---

## 🧪 Usage

1. Launch the application.
2. Upload the retinal image of the **left eye**.
3. Upload the retinal image of the **right eye**, if required.
4. Start the analysis.
5. Wait for the backend to process the images.
6. View the predicted diabetic retinopathy category.
7. Review the confidence score.
8. Explore the educational sections for additional information.

---

## 🧠 Machine Learning

The project includes a CNN-based training pipeline intended for retinal image classification.

A typical classification pipeline consists of:

```text
Retinal Image
      ↓
Image Preprocessing
      ↓
Image Normalization
      ↓
CNN Model
      ↓
Feature Extraction
      ↓
Classification
      ↓
Prediction
      ↓
Confidence Score
```

The model attempts to classify retinal images into the five diabetic retinopathy categories used by the application.

### Important Note

The current implementation should be considered a **prototype** rather than a clinically validated diagnostic system.

For real-world medical deployment, the model would require:

* A large, high-quality labeled retinal image dataset
* Appropriate preprocessing and augmentation
* Training and validation on independent datasets
* Sensitivity and specificity evaluation
* Clinical validation
* Bias and demographic-performance analysis
* Medical and regulatory review

---

## 📸 Screenshots

### 🏠 Home Page

*Add your homepage screenshot here.*

```md
![Home Page](./screenshots/home.png)
```

### 👁️ Retinal Image Analysis

*Add your prediction/upload screenshot here.*

```md
![Retinal Analysis](./screenshots/analysis.png)
```

### 📊 Prediction Result

*Add your result screenshot here.*

```md
![Prediction Result](./screenshots/result.png)
```

### 📚 Educational Section

*Add your information-page screenshot here.*

```md
![Educational Section](./screenshots/education.png)
```

---

## 🎯 Project Goals

The main goals of this project are to:

* Demonstrate AI-assisted diabetic retinopathy screening
* Build an accessible retinal-image analysis interface
* Understand the application of CNNs to medical image classification
* Integrate a machine-learning model with a web application
* Promote awareness about diabetic retinopathy
* Encourage the importance of early screening and professional eye examinations

---

## 🔮 Future Enhancements

Possible improvements include:

* [ ] Train the model using a large, clinically validated retinal dataset
* [ ] Improve prediction accuracy
* [ ] Add advanced image preprocessing
* [ ] Implement image augmentation
* [ ] Add model performance metrics
* [ ] Add ROC-AUC and confusion matrix visualization
* [ ] Add patient history and risk-factor information
* [ ] Add doctor/healthcare-professional dashboard
* [ ] Add secure user authentication
* [ ] Add database support
* [ ] Add patient report generation
* [ ] Improve accessibility
* [ ] Deploy the application to a cloud platform
* [ ] Implement proper security and privacy controls
* [ ] Perform clinical validation before any real-world medical use

---

## ⚠️ Medical Disclaimer

This project is developed for **educational, research, and demonstration purposes only**.

The predictions generated by this application should **not be considered a medical diagnosis**.

The application does not replace:

* Professional ophthalmological examination
* Retinal screening by qualified professionals
* Medical advice
* Clinical diagnosis
* Treatment recommendations

Anyone concerned about their eye health or diabetic retinopathy should consult a qualified healthcare professional.

---

## 🔐 Privacy & Security

Retinal images can contain sensitive health-related information.

If this project is deployed publicly, appropriate measures should be implemented for:

* Secure image transmission
* Secure image storage
* Data encryption
* Access control
* User authentication
* Removal of unnecessary patient-identifying information
* Compliance with applicable privacy and healthcare regulations

---

## 📌 Project Status

**Status:** 🚧 Prototype / Educational Project

The current project demonstrates the concept of integrating retinal image analysis, machine learning, and a web interface for diabetic retinopathy screening.

Further model training, testing, validation, and clinical evaluation would be required before considering the system for real-world medical applications.

---

## 📄 License

This project is intended for **educational and research purposes**.

If you plan to use, modify, distribute, or deploy the project commercially, review and add an appropriate open-source license to the repository.

---

## ⭐ Acknowledgments

This project was developed to explore the application of **machine learning, computer vision, and web technologies** in diabetic retinopathy screening.

The project also aims to promote awareness of the importance of **early detection and regular eye examinations** for people at risk of diabetic eye disease.

---

### ⭐ If you find this project useful, consider giving the repository a star!

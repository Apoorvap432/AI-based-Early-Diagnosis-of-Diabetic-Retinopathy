# train_model.py

import tensorflow as tf
from tensorflow import keras
from tensorflow.keras import layers
import numpy as np

# Generate dummy dataset
num_samples = 1000
X = np.random.rand(num_samples, 64, 64, 3)  # 64x64 RGB images
y = np.random.randint(2, size=(num_samples, 1))  # Binary labels: 0 or 1

# Build a simple CNN model
model = keras.Sequential([
    layers.Conv2D(32, (3, 3), activation='relu', input_shape=(64, 64, 3)),
    layers.MaxPooling2D(2, 2),
    layers.Conv2D(64, (3, 3), activation='relu'),
    layers.MaxPooling2D(2, 2),
    layers.Flatten(),
    layers.Dense(64, activation='relu'),
    layers.Dense(1, activation='sigmoid')
])

# Compile model
model.compile(optimizer='adam', loss='binary_crossentropy', metrics=['accuracy'])

# Train model
model.fit(X, y, epochs=5, batch_size=32)

# Save model
model.save('model/dr_model.h5')

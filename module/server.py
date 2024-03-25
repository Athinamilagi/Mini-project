import cv2
import numpy as np
import os
import base64
from flask import Flask, request, jsonify
from flask_cors import CORS
from hss import authentication

app = Flask(__name__)
CORS(app)

# Create a directory for storing images if it doesn't exist


@app.route("/login/checkuser", methods=["POST"])
def login():
    if not os.path.exists("temp_images"):
        os.makedirs("temp_images")
    try:
        print("Req", request)
        base64_data = request.data.decode("utf-8")
        print("Request data:", base64_data)  # Print request data for debugging
        if len(base64_data) < 2:
            print("Error: Base64 data not found")
            return jsonify({"error": "Base64 data not found"}), 400

        # Convert base64 string to numpy array
        nparr = np.frombuffer(base64.b64decode(base64_data), np.uint8)

        # Decode the image
        img_np = cv2.imdecode(nparr, cv2.IMREAD_COLOR)

        if img_np is not None:
            cv2.imwrite(os.path.join("temp_images", "auth_image.jpg"), img_np)
            print("Image saved successfully")
            val = authentication()
            return jsonify({"message": "Image saved successfully","Authenticated": val});
        else:
            print("Error: Unable to decode image data")
            return jsonify({"error": "Unable to decode image data"}), 400
    except Exception as e:
        print("Error:", e)
        return jsonify({"error": str(e)}), 500


@app.route("/upload/adduser", methods=["POST"])
def add_user():
    if not os.path.exists("images"):
        os.makedirs("images")
    try:
        print("Req", request)
        base64_data = request.data.decode("utf-8")
        print("Request data:", base64_data)  # Print request data for debugging
        if len(base64_data) < 2:
            print("Error: Base64 data not found")
            return jsonify({"error": "Base64 data not found"}), 400

        # Convert base64 string to numpy array
        nparr = np.frombuffer(base64.b64decode(base64_data), np.uint8)

        # Decode the image
        img_np = cv2.imdecode(nparr, cv2.IMREAD_COLOR)

        if img_np is not None:
            # Save the received image to the 'images' folder
            cv2.imwrite(os.path.join("images", "received_image.jpg"), img_np)
            print("Image saved successfully")
            return jsonify({"message": "Image saved successfully"})
        else:
            print("Error: Unable to decode image data")
            return jsonify({"error": "Unable to decode image data"}), 400
    except Exception as e:
        print("Error:", e)
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    app.run(debug=True, port=5000)

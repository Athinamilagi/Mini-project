import cv2
import numpy as np
from facenet_pytorch import MTCNN, InceptionResnetV1
import torch

# Initialize FaceNet models
mtcnn = MTCNN()
resnet = InceptionResnetV1(pretrained="vggface2").eval()


def authentication():
    reference_image_path = "./images/received_image.jpg"
    temp_image_path = "./temp_images/auth_image.jpg"

    # Load images
    reference_image = cv2.imread(reference_image_path)
    frame = cv2.imread(temp_image_path)

    # Resize images to the required dimensions
    reference_image_resized = cv2.resize(reference_image, (160, 160))
    frame_resized = cv2.resize(frame, (160, 160))

    # Convert images to RGB format
    reference_rgb = cv2.cvtColor(reference_image_resized, cv2.COLOR_BGR2RGB)
    frame_rgb = cv2.cvtColor(frame_resized, cv2.COLOR_BGR2RGB)

    # Convert images to tensors
    reference_tensor = (
        torch.tensor(reference_rgb, dtype=torch.float32).permute(2, 0, 1).unsqueeze(0)
    )
    frame_tensor = (
        torch.tensor(frame_rgb, dtype=torch.float32).permute(2, 0, 1).unsqueeze(0)
    )

    # Detect faces and extract facial embeddings using FaceNet
    reference_faces = resnet(reference_tensor)
    frame_faces = resnet(frame_tensor)

    # Compute similarity score
    similarity_score = torch.nn.functional.cosine_similarity(
        reference_faces, frame_faces
    )

    # Print similarity score
    print("Similarity Score:", similarity_score.item())

    # Define threshold
    threshold = 0.9  # Adjust as needed

    # Check if similarity score exceeds threshold
    authenticated = similarity_score.item() < threshold

    if authenticated:
        print("User authenticated")
    else:
        print("User not authenticated")

    return authenticated

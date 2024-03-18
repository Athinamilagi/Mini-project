import cv2

# Function to load the image from file
def load_image(file_path):
    return cv2.imread(file_path)

# Function to compare images
def compare_images(image1, image2):
    # Resize the captured frame to match the size of the reference image
    image2_resized = cv2.resize(image2, (image1.shape[1], image1.shape[0]))
    
    # Convert images to grayscale
    gray_image1 = cv2.cvtColor(image1, cv2.COLOR_BGR2GRAY)
    gray_image2 = cv2.cvtColor(image2_resized, cv2.COLOR_BGR2GRAY)
    
    # Compute the absolute difference between the two images
    diff = cv2.absdiff(gray_image1, gray_image2)
    
    # Compute the mean squared error (MSE)
    mse = (diff ** 2).mean()
    
    return mse

# Path to the folder containing the reference image
reference_image_path = './captured_frame.jpg'

# Load the reference image
reference_image = load_image(reference_image_path)

# Initialize the webcam
cap = cv2.VideoCapture(0)

authenticated = False

# Capture frame-by-frame
ret, frame = cap.read()

# Compare the captured frame with the reference image
mse = compare_images(reference_image, frame)
print("MSE:", mse)

# Display the captured frame
cv2.imshow('Authentication', frame)

# If the MSE is below a certain threshold, consider it a match
if mse < 100:  # Adjusted threshold value
    print("User authenticated")
    authenticated = True
else:
    print("User not authenticated")

# Release the capture
cap.release()
cv2.destroyAllWindows()

# Check if authentication failed due to timeout
if not authenticated:
    print("Authentication timeout. User not authenticated.")
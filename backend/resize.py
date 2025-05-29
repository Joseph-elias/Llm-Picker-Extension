from PIL import Image

# Your original image file
input_file = "backend\im16.png"

# Output sizes
sizes = {
    "icon16.png": (16, 16),
    "icon48.png": (48, 48),
    "icon128.png": (128, 128)
}

for filename, size in sizes.items():
    img = Image.open(input_file)
    img = img.resize(size, Image.LANCZOS)
    img.save(filename)
    print(f"Saved {filename}")

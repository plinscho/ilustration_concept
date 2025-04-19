import requests
import os

def is_valid_image(response):
    content_type = response.headers.get("Content-Type", "")
    return "image" in content_type

def download_image(url, filename):
    try:
        response = requests.get(url, timeout=10)
        if response.status_code == 200 and is_valid_image(response):
            with open(filename, 'wb') as f:
                f.write(response.content)
            print(f"[OK] Descargado: {filename}")
        else:
            print(f"[X] No es imagen o fallo la descarga: {url}")
    except Exception as e:
        print(f"[X] Error con {url}: {e}")

def main():
    input_file = input("URLS source (srcs.txt): ").strip()
    
    if not os.path.isfile(input_file):
        print(f"No se encontró el archivo: {input_file}")
        return

    with open(input_file, 'r') as f:
        urls = [line.strip() for line in f if line.strip()]

    os.makedirs("downloads", exist_ok=True)

    for idx, url in enumerate(urls):
        ext = ".jpg"
        filename = f"downloads/img_{idx+1}{ext}"
        download_image(url, filename)

if __name__ == "__main__":
    main()


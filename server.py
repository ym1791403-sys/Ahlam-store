import http.server
import socketserver
import webbrowser
import os
import sys

PORT = 8080

os.chdir(os.path.dirname(os.path.abspath(__file__)))

class Handler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate')
        super().end_headers()

def run_server():
    global PORT
    for attempt_port in range(PORT, PORT + 20):
        try:
            with socketserver.TCPServer(("", attempt_port), Handler) as httpd:
                url = f"http://localhost:{attempt_port}"
                print("\n" + "="*50)
                print(f"✨ VÉRA STUDIO Web Server Running!")
                print(f"🚀 Visit: {url}")
                print("="*50 + "\n")
                webbrowser.open(url)
                httpd.serve_forever()
        except OSError:
            continue

if __name__ == "__main__":
    run_server()

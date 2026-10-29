import http.server
import socketserver
import webbrowser
import os
import sys

PORT = 8080
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
os.chdir(BASE_DIR)

class SecureHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    """
    Hardened HTTP Request Handler with security headers and path traversal prevention.
    """
    def end_headers(self):
        # Prevent MIME type sniffing
        self.send_header('X-Content-Type-Options', 'nosniff')
        # Prevent Clickjacking / iframe embedding by malicious domains
        self.send_header('X-Frame-Options', 'SAMEORIGIN')
        # Referrer Policy to prevent information leakage
        self.send_header('Referrer-Policy', 'strict-origin-when-cross-origin')
        # Cross-Site Scripting filter protection
        self.send_header('X-XSS-Protection', '1; mode=block')
        # Cache control for sensitive dynamic testing
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate')
        super().end_headers()

    def translate_path(self, path):
        # Enforce boundary: never allow requests outside BASE_DIR
        resolved = super().translate_path(path)
        real_base = os.path.realpath(BASE_DIR)
        real_target = os.path.realpath(resolved)
        if not real_target.startswith(real_base):
            return os.path.join(real_base, "index.html")
        return resolved

def run_server():
    global PORT
    for attempt_port in range(PORT, PORT + 20):
        try:
            with socketserver.TCPServer(("", attempt_port), SecureHTTPRequestHandler) as httpd:
                url = f"http://localhost:{attempt_port}"
                print("\n" + "="*50)
                print(f"🔒 VÉRA STUDIO Secure Web Server Running!")
                print(f"🛡️  Security Headers & Path Boundary Protection Active")
                print(f"🚀 Visit: {url}")
                print("="*50 + "\n")
                webbrowser.open(url)
                httpd.serve_forever()
        except OSError:
            continue

if __name__ == "__main__":
    run_server()

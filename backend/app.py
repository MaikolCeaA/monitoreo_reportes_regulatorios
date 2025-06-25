from flask import Flask, jsonify, send_from_directory
from flask_cors import CORS

app = Flask(__name__, static_folder="../frontend", static_url_path="/")
CORS(app)

@app.route("/")
def index():
    return send_from_directory(app.static_folder, "index.html")

@app.route("/api/reportes")
def get_reportes():
    return jsonify([
        {"nombre": "Reporte Diario SB", "estado": "Enviado"},
        {"nombre": "Control Legal", "estado": "Pendiente"}
    ])

if __name__ == "__main__":
    app.run(debug=True, port=5000)

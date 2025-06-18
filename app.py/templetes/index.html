from flask import Flask, render_template, request, jsonify
import csv
import os

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/api/alertas')
def alertas():
    municipio = request.args.get('municipio')
    resultados = []
    caminho = os.path.join('dados', 'Alertas.csv')
    with open(caminho, newline='', encoding='utf-8') as f:
        reader = csv.DictReader(f, delimiter=';')
        for row in reader:
            if municipio.lower() in row['municipio'].lower():
                resultados.append({
                    'data_hora': row['data_hora'],
                    'municipio': row['municipio'],
                    'tipo': row['tipo_alarme'],
                    'nivel': row['nivel_perigo'],
                    'mensagem': row['mensagem_texto']
                })
    return jsonify(resultados)

if __name__ == '__main__':
    app.run(debug=True)

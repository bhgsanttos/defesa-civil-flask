async function buscar() {
  const cidade = document.getElementById('cidade').value;
  const lista = document.getElementById('lista-alertas');
  lista.innerHTML = "🔄 Buscando...";

  const res = await fetch(`/api/alertas?municipio=${encodeURIComponent(cidade)}`);
  const dados = await res.json();

  lista.innerHTML = "";
  if (!dados.length) {
    lista.innerHTML = "<li>✅ Nenhum alerta encontrado.</li>";
    return;
  }

  dados.forEach(alerta => {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${alerta.tipo} (${alerta.nivel})</strong><br>
      <em>${alerta.municipio}</em><br>
      <small>${alerta.data_hora}</small><br>
      ${alerta.mensagem}
    `;
    lista.appendChild(li);
  });
}

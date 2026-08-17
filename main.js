
function enviarWhatsApp(e){
  e.preventDefault();
  const f = new FormData(e.target);
  const nombre = f.get('nombre') || '';
  const servicio = f.get('servicio') || '';
  const distrito = f.get('distrito') || '';
  const caso = f.get('caso') || '';
  const texto = `Hola Dr. Eder Montalvo. Mi nombre es ${nombre}. Servicio: ${servicio}. Distrito: ${distrito}. Mi caso: ${caso}`;
  window.open('https://wa.me/51950270280?text='+encodeURIComponent(texto),'_blank');
}

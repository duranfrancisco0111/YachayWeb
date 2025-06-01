document.addEventListener("DOMContentLoaded", () => {
  const regionesYcomunas = {
    "Arica y Parinacota": ["Arica", "Camarones", "Putre", "General Lagos"],
    "Tarapacá": ["Iquique", "Alto Hospicio", "Pozo Almonte", "Camiña", "Colchane", "Huara", "Pica"],
    "Antofagasta": ["Antofagasta", "Mejillones", "Sierra Gorda", "Taltal", "Calama", "Ollagüe", "San Pedro de Atacama"],
    "Atacama": ["Copiapó", "Caldera", "Tierra Amarilla", "Chañaral", "Diego de Almagro", "Vallenar", "Freirina", "Huasco", "Alto del Carmen"],
    "Coquimbo": ["La Serena", "Coquimbo", "Andacollo", "La Higuera", "Paiguano", "Vicuña", "Ovalle", "Monte Patria", "Combarbalá", "Punitaqui", "Río Hurtado"],
    "Valparaíso": ["Valparaíso", "Viña del Mar", "Concón", "Quilpué", "Villa Alemana", "Casablanca", "San Antonio", "Cartagena", "San Felipe", "Los Andes", "Petorca", "La Ligua", "Quillota"],
    "Metropolitana": ["Santiago", "Puente Alto", "Maipú", "La Florida", "Las Condes", "Pudahuel", "Quilicura", "San Bernardo", "Melipilla", "Colina", "Talagante"],
    "O'Higgins": ["Rancagua", "Machalí", "San Fernando", "Santa Cruz", "Rengo", "Requínoa", "Pichilemu", "Pichidegua", "Graneros"],
    "Maule": ["Talca", "Curicó", "Linares", "Cauquenes", "Parral", "Constitución", "San Javier", "San Clemente"],
    "Ñuble": ["Chillán", "San Carlos", "Bulnes", "Quirihue", "Yungay", "Coihueco", "Pemuco", "El Carmen", "San Ignacio"],
    "Biobío": ["Concepción", "Talcahuano", "San Pedro de la Paz", "Hualpén", "Coronel", "Lota", "Los Ángeles", "Cabrero", "Nacimiento", "Yumbel"],
    "Araucanía": ["Temuco", "Padre Las Casas", "Villarrica", "Angol", "Pucón", "Nueva Imperial", "Lautaro", "Traiguén", "Carahue"],
    "Los Ríos": ["Valdivia", "La Unión", "Río Bueno", "Paillaco", "Futrono", "Lanco", "Los Lagos"],
    "Los Lagos": ["Puerto Montt", "Osorno", "Castro", "Ancud", "Quellón", "Frutillar", "Purranque", "Chaitén"],
    "Aysén": ["Coyhaique", "Puerto Aysén", "Chile Chico", "Cochrane", "Lago Verde", "Guaitecas"],
    "Magallanes y la Antártica Chilena": ["Punta Arenas", "Puerto Natales", "Porvenir", "Puerto Williams"]
  };

  const selectRegion = document.getElementById("region");
  const selectComuna = document.getElementById("comuna");

  // Poblar regiones
  for (const region in regionesYcomunas) {
    const option = document.createElement("option");
    option.value = region;
    option.textContent = region;
    selectRegion.appendChild(option);
  }

  // Evento: cambiar región → cargar comunas
  selectRegion.addEventListener("change", () => {
    const comunas = regionesYcomunas[selectRegion.value] || [];

    selectComuna.innerHTML = '<option value="">Seleccione una comuna</option>';

    comunas.forEach(comuna => {
      const option = document.createElement("option");
      option.value = comuna;
      option.textContent = comuna;
      selectComuna.appendChild(option);
    });
  });
});

// Simulando datos de la plataforma
const casas = [
    { ciudad: "Madrid", titulo: "Ático luminoso y Golden Retriever", img: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=500&q=60" },
    { ciudad: "Barcelona", titulo: "Casa con jardín y dos gatos", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=500&q=60" },
    { ciudad: "Valencia", titulo: "Apartamento cerca del mar", img: "https://images.unsplash.com/photo-1560184897-ae75f418493e?auto=format&fit=crop&w=500&q=60" }
];

const grid = document.getElementById('grid-casas');

// Función para mostrar las casas
function cargarCasas() {
    grid.innerHTML = "";
    casas.forEach(casa => {
        const card = `
            <div class="card">
                <img src="${casa.img}" alt="Casa">
                <div class="card-info">
                    <h3>${casa.ciudad}</h3>
                    <p>${casa.titulo}</p>
                </div>
            </div>
        `;
        grid.innerHTML += card;
    });
}

function buscar() {
    const busqueda = document.getElementById('citySearch').value.toLowerCase();
    alert("Buscando casas en: " + busqueda + "... (Esto se conectará con tu base de datos)");
}

// Inicializar la carga
cargarCasas();
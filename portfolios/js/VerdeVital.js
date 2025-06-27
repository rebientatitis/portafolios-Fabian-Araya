const content = {
    prof: {
        title: "VerdeVital",
        bioP: "Proyecto de desarrollo web para una tienda de productos naturales y orgánicos, enfocado en la sostenibilidad y el bienestar.",
        img: "https://www.lireke.cl/cdn/shop/articles/productos_veganos.jpg?v=1675800946"
    },
    info: [
        {
            id: 1,
            title: "Características",
            explain: "Este proyecto actua como una tienda en línea que ofrece productos naturales y como medio para administrar los productos del inventario en linea.",
            img: "https://cdn.pixabay.com/photo/2025/06/24/22/28/22-28-13-404__340.png",
        },
        {
            id: 2,
            title: "Tecnologías Utilizadas",
            explain: "Se utilizan tecnologías modernas como HTML, CSS, JavaScript, node.js y bases de datos NoSQL para garantizar un rendimiento óptimo y una experiencia de usuario fluida.",
            img: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fwr0a76rldyyh0mjaj3w3.jpg",
        },
        {
            id: 3,
            title: "Interfaz de Usuario",
            explain: "la interfaz de usuario está diseñada para ser intuitiva y fácil de navegar, con un enfoque en la accesibilidad y la experiencia del usuario.",
            img: "https://cdn.pixabay.com/photo/2025/06/24/22/31/22-31-19-361__340.png",
        }
    ]
}

// Cargar datos y actualizar la UI
function cargarInfo() {
    setTimeout(() => {
        update(content);
    }, 800);
}

function update(data) {
    // Perfil
    $('#title').text(data.prof.title);
    $('#bioP').text(data.prof.bioP);
    $('#verde-img').attr('src', data.prof.img);

    // Información del proyecto
    const infoContainer = $('#verdevital-container');
    infoContainer.empty();
    data.info.forEach(info => {
        const infoCard = $(`
            <div class="project-card bg-white rounded-lg shadow-lg overflow-hidden fade-in">
                <div class="h-48 overflow-hidden">
                    <img src="${info.img}" alt="${info.title}" class="w-full h-full object-cover">
                </div>
                <div class="p-6">
                    <h3 class="text-xl font-bold mb-2">${info.title}</h3>
                    <p class="text-gray-600 mb-4">${info.explain}</p>
                </div>
            </div>
        `);
        infoContainer.append(infoCard);
    });
}

// Inicializar la app
$(document).ready(function() {
    cargarInfo();
});
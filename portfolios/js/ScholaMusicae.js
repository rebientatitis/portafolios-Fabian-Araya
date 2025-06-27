const content = {
    prof: {
        title: "Schola Musicae",
        bioP: "Este proyecto es una aplicación móvil que permite gestionar los servicios de una cadena de sucursales musicales, con funcionalidades para administrar clientes y servicios.",
        img: "https://cdn.pixabay.com/photo/2025/06/27/00/24/00-24-44-694__340.png"
    },
    info: [
        {
            id: 1,
            title: "Características",
            explain: "La aplicación permite a los usuarios gestionar distintos tipos de datos, incluyendo la administración de clientes, sucursales y servicios.",
            img: "https://cdn.pixabay.com/photo/2025/06/27/00/20/00-20-49-406__340.png",
        },
        {
            id: 2,
            title: "Tecnologías Utilizadas",
            explain: "Esta app utiliza C#, Visual Studio 2022 y Xamarin.Forms para el desarrollo móvil, lo que permite crear aplicaciones nativas para Android.",
            img: "https://cdn.pixabay.com/photo/2025/06/27/00/29/00-29-42-417__340.png",
        },
        {
            id: 3,
            title: "Interfaz de Usuario",
            explain: "La interfaz es intuitiva y está diseñada para ofrecer una experiencia de usuario fluida.",
            img: "https://cdn.pixabay.com/photo/2025/06/27/00/20/00-20-49-406__340.png",
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
    $('#PetShop-img').attr('src', data.prof.img);

    // Información del proyecto
    const infoContainer = $('#schola-container');
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
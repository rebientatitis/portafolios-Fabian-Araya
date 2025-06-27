const content = {
    prof: {
        title: "Compu Insumos",
        bioP: "Este proyecto es una app para gestionar los servicios de una tienda de insumos informáticos, con funcionalidades para administrar clientes, productos y empleados.",
        img: "https://cdn.pixabay.com/photo/2025/06/27/01/00/01-00-43-828_640.png"
    },
    info: [
        {
            id:3,
            title: "Herramientas Utilizadas",
            explain: "Este proyecto utiliza Java, MVC, SQL server y netBeans para la gestión de datos. para la gestion de datos de una tienda, monitoreado los productos, proveedores y clientes.",
            img: "https://cdn.pixabay.com/photo/2025/06/27/01/03/01-03-33-522__340.png",
        },
        {
            id:2,
            title: "Administración de Datos",
            explain: "La sección de administración permite agregar, editar y eliminar información de productos, clientes, empleados, etc. Lo que facilita la gestión de datos al cliente.",
            img: "https://cdn.pixabay.com/photo/2025/06/27/00/35/00-35-18-800__340.png",
        },
        {
            id:1,
            title: "Interfaz de Usuario",
            explain: "La interfaz es amigable y fácil de usar, con un diseño simple que .",
            img: "https://cdn.pixabay.com/photo/2025/06/27/00/57/00-57-18-221__340.png",
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
    $('#compu-img').attr('src', data.prof.img);

    // Información del proyecto
    const infoContainer = $('#compu-container');
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
//inicializar la app
$(document).ready(function() {
    cargarInfo();
});
const content = {
    prof: {
        title: "Pet Shop",
        bioP: "Este proyecto es una tienda de mascotas que muestra información sobre diferentes tipos de mascotas disponibles para adopción. Incluye un menú de navegación, junto a secciones de administracion de datos de la tienda.",
        img: "https://cdn.pixabay.com/photo/2025/06/21/20/20/20-20-12-559__340.jpg"
    },
    info: [
        {
            id:3,
            title: "Herramientas Utilizadas",
            explain: "Este proyecto utiliza C#, ASP.NET Core, Entity Framework Core, y SQL Server para la gestión de datos. También se emplean tecnologías web como HTML, CSS y JavaScript para el desarrollo del frontend.",
            img: "https://cdn.pixabay.com/photo/2025/06/21/20/20/20-20-12-559__340.jpg",
        },
        {
            id:2,
            title: "Administración de Datos",
            explain: "La sección de administración permite agregar, editar y eliminar información de mascotas, clientes, productos, empleados, etc. Lo que facilita la gestión de datos.",
            img: "https://cdn.pixabay.com/photo/2025/06/27/00/35/00-35-18-800__340.png",
        },
        {
            id:1,
            title: "Interfaz de Usuario",
            explain: "La interfaz es amigable y fácil de usar, con un diseño responsivo que se adapta a diferentes dispositivos.",
            img: "https://cdn.pixabay.com/photo/2025/06/27/00/32/00-32-52-312__340.png",
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
    const infoContainer = $('#petshop-container');
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
// coontenidos 
const contenido = {
  perfil: {
    name: "Fabian Araya",
    title: "Analista Programador",
    bio: "Hola. soy Fabian Araya, un apasionado analista programador con 2 años de experiencia en desarrollo web y móvil. Me especializo en crear aplicaciones escalables y eficientes utilizando tecnologías modernas como JavaScript, React, Node.js, C#, Java y Python. Mi enfoque está en la calidad del código, la experiencia del usuario y la entrega a tiempo.",
    img: "https://i.pinimg.com/736x/51/88/c2/5188c24e6f876b8e95e8ea38032d5512.jpg"
  },
  skills: [
    "JavaScript", "React", "Node.js", "HTML5", "CSS3", 
    "Python", "MySQLServer", "MongoDB", "Windows Server", "Java", "C#",
    "Xamarin", "SQL", "Express.js",
    "PostgreSQL", "Redux", "Git", "Linux", "Responsive Design"
  ],
  projects: [
    {
      id: 1,
      title: "CompuInsumos",
      desc: "Una aplicacion para gestionar ventas de insumos informáticos, con distintas funciones para administrar ventas, productos y usuarios.",
      img: "https://cdn.pixabay.com/photo/2019/04/26/07/14/store-4156934_1280.png",
      techs: "Java, SQL server, NetBeans",
      repoUrl: "https://github.com/rebientatitis?tab=repositories",
      url:""
    },
    {
      id: 2,
      title: "Schola Musicae",
      desc: "Una aplicacion movil que permite gestionar los servicios de una cadena de sucursales musicales, con funcionalidades para administrar clientes y servicios.",
      img: "https://cdn.pixabay.com/photo/2025/06/21/20/15/20-15-59-164_640.jpg",
      techs: "C#, Visual Studio 2022, Xamarin.Forms",
      repoUrl: "https://github.com/rebientatitis?tab=repositories",
      url:"/ScholaMusicae.html"
    },
    {
      id: 3,
      title: "Verde Vital",
      desc: "Una aplicación web para realizar compras en linea de productos veganos y que permite gestionar infomacion importante sobre la sucursal como productos e inventario.",
      img: "https://cdn.pixabay.com/photo/2025/06/21/20/25/20-25-41-326__340.png",
      techs: "JavaScript, Node.js, Express, SQLITE, Telegram Bot API",
      repoUrl: "https://github.com/rebientatitis?tab=repositories", 
      url:"/VerdeVital.html"
    },
    {
      id: 4,
      title: "PetShop",
      desc: "Una aplicación web para gestionar un negocio y Veterinaria de mascotas, con funcionalidades para administrar clientes, productos, medicos, sucursales y mascotas.",
      img: "https://cdn.pixabay.com/photo/2025/06/21/20/20/20-20-12-559__340.jpg",
      techs: "C#, ASP.NET Core, Entity Framework, SQL Server",
      repoUrl: "https://github.com/rebientatitis?tab=repositories",
      url:"/PetShop.html"
    }
  ],
  contacto: {
    email: "faazfab.dev@gmail.com",
    tel: "+56996943466"
  }
};

// Cargar datos y actualizar la UI
function cargarDatos() {
  setTimeout(() => {
    updateUI(contenido);
  }, 800);
}

// Actualizar la UI con los arreglos de datos
function updateUI(data) {
  // Perfil
  $('#name').text(data.perfil.name);
  $('#title').text(data.perfil.title);
  $('#bio').text(data.perfil.bio);
  $('#perfil-img').attr('src', data.perfil.img);

  // Habilidades
  const skillsContainer = $('#skills-container');
  skillsContainer.empty();
  data.skills.forEach(skill => {
    const skillElement = $(`
      <div class="skill-tag bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
        ${skill}
      </div>
    `);
    skillsContainer.append(skillElement);
  });

  // Proyectos
  const projectsContainer = $('#projects-container');
  projectsContainer.empty();
  data.projects.forEach(project => {
    const projectCard = $(`
      <div class="project-card bg-white rounded-lg shadow-lg overflow-hidden fade-in">
        <div class="h-48 overflow-hidden">
          <img src="${project.img}" alt="${project.title}" class="w-full h-full object-cover">
        </div>
        <div class="p-6">
          <h3 class="text-xl font-bold mb-2">${project.title}</h3>
          <p class="text-gray-600 mb-4">${project.desc}</p>
          <div class="mb-4">
            <span class="text-sm text-gray-500">${project.techs}</span>
          </div>
          <div class="flex space-x-3">
            <a href="${project.repoUrl}" class="bg-gray-800 text-white px-3 py-1 rounded text-sm hover:bg-gray-900 transition" target="_blank" rel="noopener">
              <i class="fab fa-github mr-1"></i> Repo
            </a>
            <a href="${project.url}" class="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700 transition" target="_blank" rel="noopener">  
              <i class="fas fa-external-link-alt mr-1"></i> Ver Proyecto
            </a>
          </div>
      </div>
    `);
    projectsContainer.append(projectCard);
  });

  // Contacto
  $('#email').html(`<i class="fas fa-envelope mr-2"></i>${data.contacto.email}`);
  $('#phone').html(`<i class="fas fa-phone mr-2"></i>${data.contacto.tel}`);
}

// evento de redireccion y utilidades visuales
function setupEventListeners() {
  // Menú móvil
  $('#menu-button').on('click', function() {
    $('#mobile-menu').toggleClass('hidden');
  });

  // Scroll suave para redirigir
  $('a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    const llevar = $(this.hash);
    if (llevar.length) {
      $('html, body').animate({
        scrollTop: llevar.offset().top - 70
      }, 500);
      $('#mobile-menu').addClass('hidden');
    }
  });

  // Comportamiento del navbar al hacer scroll
  $(window).on('scroll', function() {
    if ($(window).scrollTop() > 50) {
      $('#navbar').addClass('bg-white shadow-md').removeClass('bg-transparent');
    } else {
      if ($(window).scrollTop() === 0) {
        $('#navbar').removeClass('shadow-md');
      }
    }
  });

  // Formulario de contacto (solo mensaje informativo)
  $('#contacto-form').on('submit', function(e) {
    e.preventDefault();
    alert('Al enviar el formulario, se abrirá una ventana para validar que eres una persona real.');
  });
}

// Actualizar año en el footer
function ActualizarYear() {
  $('#year').text(new Date().getFullYear());
}

// Inicializar la aplicación 
$(document).ready(function() {
  ActualizarYear();
  setupEventListeners();
  cargarDatos();
}
);
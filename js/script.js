// ICONE NAV BAR

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// Verificando se a parte onde esta o site SCROLL esta de acordo com o nav, deixando ativo a parte onde passar o SCROLL

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*= " + id + "]")
          .classList.add("active");
      });
    }
  });

  //   stick navbar

  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);

  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

// Scroll reveal

ScrollReveal({ 
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portifolio-box, .contato form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img ', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content ', { origin: 'right' });

// Typed JS

const typed = new Typed('.multiple-text', {
    strings: ['Desenvolvedor FrontEnd', 'Técnico de informática', 'Professor de Skate', 'Músico'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// Envio de email

  document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário

    var templateParams = {
      from_name: document.getElementById("user_name").value,
      from_email: document.getElementById("email").value,
      message: document.getElementById("message").value,
      from_number: document.getElementById("number").value
    };

    emailjs.send("service_7udi7sk", "template_jzp5nhd", templateParams)
      .then(function(response) {
        console.log("Email enviado com sucesso!", response.status, response.text);

        // Limpando formulário
        document.getElementById("user_name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        document.getElementById("number").value = "";

        // Mostrando mensagem de alerta
        alert('Email enviado com sucesso');
      }, function(error) {
        console.error("Houve um problema ao enviar o email.", error);
        // em caso de erro, exibir uma mensagem de erro
        alert('Email não enviado com sucesso, tente novamente!', error);
      });
  });
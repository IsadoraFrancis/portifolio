// Aguarda o carregamento do DOM
document.addEventListener("DOMContentLoaded", function () {

  // === FILTRO DE PROJETOS ===
  const filterButtons = document.querySelectorAll(".filters button");
  const projectCards = document.querySelectorAll(".project-card");

  // Exibe todos os projetos inicialmente
  projectCards.forEach(card => {
    card.style.display = "block";
  });

  // Lógica de filtragem
  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      const filter = button.getAttribute("data-filter");

      projectCards.forEach(card => {
        const categories = card.getAttribute("data-cat");

        if (filter === "all" || categories.includes(filter)) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });

      // Atualiza o botão ativo
      filterButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");
    });
  });

  // === MENU DE NAVEGAÇÃO ATIVO ===
  const navLinks = document.querySelectorAll(".navbar a");

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navLinks.forEach(l => l.classList.remove("active")); // Remove de todos
      link.classList.add("active"); // Adiciona no clicado
    });
  });

  // === MENU RESPONSIVO (Mobile) ===
  const menuIcon = document.querySelector("#menu-icon");
  const navbar = document.querySelector(".navbar");

  if (menuIcon && navbar) {
    menuIcon.addEventListener("click", () => {
      navbar.classList.toggle("active");
      menuIcon.classList.toggle("bx-x"); // Troca o ícone (Boxicons)
    });
  }
});

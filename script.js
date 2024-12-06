function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
  document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Mensagem enviada com sucesso!');
  });
  
  function toggleProjectDetails(card) {
    const isExpanded = card.classList.contains('expanded');
  
    // Fecha todos os projetos expandidos
    document.querySelectorAll('.project-card').forEach((project) => {
      project.classList.remove('expanded');
      project.classList.remove('hidden');
    });
  
    if (!isExpanded) {
      // Expande o projeto clicado
      card.classList.add('expanded');
  
      // Esconde os outros projetos
      document.querySelectorAll('.project-card').forEach((project) => {
        if (project !== card) {
          project.classList.add('hidden');
        }
      });
    }
  }
  
  
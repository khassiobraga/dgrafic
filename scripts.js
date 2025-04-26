// Inicializando AOS (Animate On Scroll)
AOS.init({
    duration: 1200,
    easing: 'ease-in-out',
});

// Validação e envio do formulário
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Mensagem enviada com sucesso!');
    this.reset();
});

// Efeito de hover em serviços (JS extra, caso CSS não funcione isolado)
const serviceItems = document.querySelectorAll('.service-item');
serviceItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.transform = 'scale(1.1)';
        item.style.transition = 'transform 0.3s ease';
    });
    item.addEventListener('mouseout', () => {
        item.style.transform = 'scale(1)';
    });
});

// Botão voltar ao topo
document.addEventListener('DOMContentLoaded', () => {
    const backToTopButton = document.createElement('button');
    backToTopButton.innerText = '↑';
    backToTopButton.title = 'Voltar ao topo';
    backToTopButton.style.position = 'fixed';
    backToTopButton.style.bottom = '20px';
    backToTopButton.style.right = '20px';
    backToTopButton.style.padding = '10px 15px';
    backToTopButton.style.backgroundColor = '#e74c3c';
    backToTopButton.style.color = 'white';
    backToTopButton.style.border = 'none';
    backToTopButton.style.borderRadius = '50%';
    backToTopButton.style.cursor = 'pointer';
    backToTopButton.style.display = 'none';
    backToTopButton.style.zIndex = '1000';
    backToTopButton.style.fontSize = '18px';

    document.body.appendChild(backToTopButton);

    window.addEventListener('scroll', () => {
        backToTopButton.style.display = window.scrollY > 300 ? 'block' : 'none';
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

// Botão Dark Mode
document.addEventListener('DOMContentLoaded', () => {
    const darkToggle = document.createElement('button');
    darkToggle.innerText = '🌙';
    darkToggle.title = 'Alternar Dark Mode';
    darkToggle.style.position = 'fixed';
    darkToggle.style.bottom = '20px';
    darkToggle.style.left = '20px';
    darkToggle.style.padding = '10px 15px';
    darkToggle.style.backgroundColor = '#555';
    darkToggle.style.color = 'white';
    darkToggle.style.border = 'none';
    darkToggle.style.borderRadius = '50%';
    darkToggle.style.cursor = 'pointer';
    darkToggle.style.zIndex = '1000';
    darkToggle.style.fontSize = '18px';

    document.body.appendChild(darkToggle);

    darkToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        darkToggle.innerText = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
    });
});

// Menu mobile toggle
document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('mobile-menu-toggle');
    const navbar = document.getElementById('navbar');

    toggleBtn.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });
});

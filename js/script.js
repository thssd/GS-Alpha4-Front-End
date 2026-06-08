document.addEventListener('DOMContentLoaded', () => {

    /* ----------------------------------------
       Menu hamburguer responsivo
       ---------------------------------------- */
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');

    if (menuToggle && navList) {
        // Abre/fecha ao clicar no botão
        menuToggle.addEventListener('click', () => {
            const isOpen = navList.classList.toggle('active');
            menuToggle.setAttribute('aria-expanded', isOpen);
        });

        // Fecha ao clicar fora do menu
        document.addEventListener('click', (event) => {
            const clickedInside = menuToggle.contains(event.target) || navList.contains(event.target);
            if (!clickedInside && navList.classList.contains('active')) {
                navList.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }

    /* ----------------------------------------
       Validação do formulário de contato
       ---------------------------------------- */
    const contactForm = document.querySelector('.contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const name    = contactForm.querySelector('#name').value.trim();
            const email   = contactForm.querySelector('#email').value.trim();
            const message = contactForm.querySelector('#message').value.trim();

            if (!name || !email || !message) {
                alert('Por favor, preencha todos os campos obrigatórios.');
                return;
            }

            if (!isValidEmail(email)) {
                alert('Por favor, insira um endereço de e-mail válido.');
                return;
            }

            alert('Mensagem enviada com sucesso! Em breve entraremos em contato.');
            contactForm.reset();
        });
    }

    /* ----------------------------------------
       Funções auxiliares
       ---------------------------------------- */

    /**
     * Valida formato de e-mail.
     * @param {string} email
     * @returns {boolean}
     */
    function isValidEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

});

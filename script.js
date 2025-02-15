document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('login-form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('error-message');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        // Validation for correct credentials
        if (username === 'douae.elghailami@etu.uae.ac.ma' && password === 'douae123!') {
            window.location.href = 'second-page.html'; // Redirect to the second page
        } else {
            errorMessage.textContent = 'Identifiant ou mot de passe incorrect';
            errorMessage.style.visibility = 'visible';
        }
    });

    const navItems = document.querySelectorAll('.nav-item');
    const content = document.getElementById('content');

    navItems.forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault();
            const contentType = this.getAttribute('data-content');

            if (contentType === 'notes') {
                window.location.href = 'notes-page.html'; // Navigate to notes-page.html
            } else {
                content.innerHTML = '<p>Aucun contenu n\'est disponible ici.</p>';
            }
        });
    });
});

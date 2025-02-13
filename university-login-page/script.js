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
                content.innerHTML = `
                    <h2 style="color: darkblue;">MES NOTES |</h2>
                    <table class="notes-table">
                        <tr>
                            <th>Elément</th>
                            <th>Moyenne/20</th>
                            <th>Point de jury</th>
                            <th>Résultat</th>
                            <th>Session</th>
                            <th>Année de validation</th>
                        </tr>
                        <tr>
                            <td>Mathématiques</td>
                            <td>18</td>
                            <td>-</td>
                            <td>Validé</td>
                            <td>Normale</td>
                            <td>1ère année</td>
                        </tr>
                        <tr>
                            <td>Microéconomie</td>
                            <td>15</td>
                            <td>-</td>
                            <td>Validé</td>
                            <td>Normale</td>
                            <td>1ère année</td>
                        </tr>
                        <tr>
                            <td>Comptabilité</td>
                            <td>17</td>
                            <td>-</td>
                            <td>Validé</td>
                            <td>Normale</td>
                            <td>1ère année</td>
                        </tr>
                        <tr>
                            <td>Management</td>
                            <td>16</td>
                            <td>-</td>
                            <td>Validé</td>
                            <td>Normale</td>
                            <td>1ère année</td>
                        </tr>
                        <tr>
                            <td>Anglais</td>
                            <td>19</td>
                            <td>-</td>
                            <td>Validé</td>
                            <td>Normale</td>
                            <td>1ère année</td>
                        </tr>
                        <tr>
                            <td>Français</td>
                            <td>17</td>
                            <td>-</td>
                            <td>Validé</td>
                            <td>Normale</td>
                            <td>1ère année</td>
                        </tr>
                        <tr>
                            <td>MTU</td>
                            <td>15</td>
                            <td>-</td>
                            <td>Validé</td>
                            <td>Normale</td>
                            <td>1ère année</td>
                        </tr>
                    </table>
                `;
            } else {
                content.innerHTML = '<p>Aucun contenu n\'est disponible ici.</p>';
            }
        });
    });
});


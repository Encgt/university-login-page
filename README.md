# university-login-page
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Page - ENCGT</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <div class="left-half"></div>
        <div class="right-half">
            <div class="logos">
                <img src="logo.3a21a68b.png" alt="University Logo" class="logo-university">
                <img src="logo-encg.51be9c38.png" alt="ENCGT Logo" class="logo-encg">
            </div>
            <h2>Connectez-vous à votre compte</h2>
            <form id="login-form" action="second-page.html" method="post">
                <input type="text" id="username" placeholder="Identifiant" required>
                <input type="password" id="password" placeholder="Mot de passe" required>
                <button type="submit">Se connecter</button>
                <p id="error-message" class="error-message"></p>
            </form>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>

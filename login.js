function redirectTo(provider) {
    // Define redirection URLs based on the provider
    let redirectURL = '';
    switch (provider) {
        case 'facebook':
            redirectURL = 'https://www.facebook.com'; // Redirect to Facebook
            break;
        case 'google':
            redirectURL = 'https://www.google.com'; // Redirect to Google
            break;
        case 'apple':
            redirectURL = 'https://www.apple.com'; // Redirect to Apple
            break;
        case 'email':
            redirectURL = 'login_with_email.html'; // Redirect to email login page
            break;
        case 'signup':
            redirectURL = 'sign_up_with_email.html'; // Redirect to email sign up page
            break;
        default:
            redirectURL = 'index.html'; // Redirect to the default index page
    }
    // Redirect the user to the appropriate page
    window.location.href = redirectURL;
}

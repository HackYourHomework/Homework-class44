function hijackGoogleLogo() {
  const googleLogo = document.querySelector('.lnXdpd');
  if (googleLogo) {
    googleLogo.src = 'https://www.hackyourfuture.dk/static/logo-dark.svg';
    googleLogo.srcset = 'https://www.hackyourfuture.dk/static/logo-dark.svg';
  }
}

hijackGoogleLogo();

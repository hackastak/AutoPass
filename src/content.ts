chrome.storage.sync.get('credentials', (data) => {
  const credentials = data.credentials;
  const domain = window.location.hostname;

  if (credentials[domain]) {
    const { username, password } = credentials[domain];
    const usernameInput = document.querySelector<HTMLInputElement>('input[type="text"]');
    const passwordInput = document.querySelector<HTMLInputElement>('input[type="password"]');

    if (usernameInput && passwordInput) {
      usernameInput.value = username;
      passwordInput.value = password;
    }
  }
});

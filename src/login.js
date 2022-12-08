const username = document.getElementById('username');
const password = document.getElementById('password');
const statusLogin = document.getElementById('statusLogin');

function onSubmit(event) {
    event.preventDefault();
    data = { username: username.value, password: password.value }

    fetch('http://localhost:1234/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ user: data })
    })
        .then(res => res.json())
        .then(cred => {
            document.cookie = `token=${cred.token}; max-age=${60*60}; path=/; samesite=strict`
            if (cred.token !== 'noToken') {
                window.location.href = 'http://127.0.0.1:5500/Login/hola.html';
            } else {
                statusLogin.textContent = 'Fail username or password';
            }
        })
}
const title = document.getElementById('title')

function testData() {
    // event.preventDefault();
    const token = document.cookie.replace('token=', '');
    // console.log(token);
    fetch('http://localhost:1234/test', {
        method: 'POST',
        headers: {
            'authorization': token
        }
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if (data.msg === 'Congratulations') {
                title.textContent = `Bienvenido ${data.name}`
            } else {
                window.location.href = 'http://127.0.0.1:5500/Login/login.html';
            }
        })
    
}

testData()
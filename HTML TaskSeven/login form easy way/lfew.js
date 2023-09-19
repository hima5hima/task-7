function login() 
{
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const messageContainer = document.getElementById('messageContainer');

    if (username === 'admin' && password === '123') {
        messageContainer.textContent = 'Welcome';
    } else {
        messageContainer.textContent = 'Not registered';
    }
}

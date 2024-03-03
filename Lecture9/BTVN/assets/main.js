let submit = document.querySelector('.login-form')

submit.addEventListener('submit', function(event) {
    event.preventDefault()

    let username = document.querySelector('#username').value
    let password = document.querySelector('#password').value
    let error1 = document.querySelector('.username-error')
    let error2 = document.querySelector('.password-error')

    let testUsername = /^[a-zA-Z0-9]+$/
    let testPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}:;?/.,<>])/

    if (!testUsername.test(username)) {
        error1.innerHTML = "Username phải chỉ chứa chữ cái và số, không có dấu cách." 
    } else {
        error1.style.color = "green"
        error1.innerHTML = "Username thoã mãn" 
    }

    if (!testPassword.test(password)) {
        error2.innerHTML = "Password phải có ít nhất 8 ký tự, bao gồm chữ hoa, chữ thường, số và ký tự đặc biệt." 
    } else {
        error2.style.color = "green"
        error2.innerHTML = "Password thoã mãn" 
    }

    if (testUsername.test(username) && testPassword.test(password)) {    
        alert("Đăng nhập thành công!")
    }
})
const loginForm= document.getElementById("login-form");
const success= document.getElementById("success-message");


loginForm.addEventListener("submit",function(e){
    e.preventDefault();
    const username= document.getElementById("username").value;
    const password= document.getElementById("password").value;

    if(username === "Jorge" && password === "Jorge2008"){
        success.style.display = "block";
        success.textContent = "Login Exitoso";
    }else{
        alert("Usuario o Password no valido")
    }
})
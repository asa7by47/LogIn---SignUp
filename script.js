var result = document.querySelector(".demo");

const signUp = e => {
    const fname = document.querySelector("#fname").value;
    const email = document.querySelector("#email").value;
    const pwd = document.querySelector("#pwd").value;
    let formData = JSON.parse(localStorage.getItem('formData')) || [];
    let exist = formData.length && 
        JSON.parse(localStorage.getItem('formData')).some(data => 
            data.fname.toLowerCase() == fname.toLowerCase() 
        );
    if(!exist){
        formData.push({ fname, email, pwd });
        
        localStorage.setItem('formData', JSON.stringify(formData));
        document.querySelector('form').reset();
        document.getElementById('fname').focus();
        // 
         location.href = "signin.html";
    }
    else{
        alert("Ooopppssss... Duplicate found!!!\nYou have already sigined up");
    }
    e.preventDefault();
}
function signIn(e) {
    let email = document.getElementById('email').value,
    pwd = document.getElementById('pwd').value;
    let formData = JSON.parse(localStorage.getItem('formData')) || [];
    let exist = formData.length && 
    JSON.parse(localStorage.getItem('formData')).some(data => data.email.toLowerCase() == email && data.pwd.toLowerCase() == pwd);
    display();
    if(!exist){
        alert("Incorrect login credentials");
    }
    else{
         location.href = "index.html";
    }
    
    e.preventDefault();
}

function display() {
   result.innerHTML = email.value;


}


// THESE JS FILES ARE ABLE TO EXECUTE EXACTLY SAME TASKS WITH DIFFERENT APPROACHES
// TASKS:  
// 1-TAKE INPUTS WHICH ARE EMAIL AND PASSWORD 
// 2-CHECK THAT EMAIL EMPTY OR NOT
// 3-CHECK THAT PASSWORD IS EMPTY OR NOT IF IT IS NOT EMPTY IT HAVE TO INCLUDE MORE THAN 5 CHARACTER
// 4- IF ALL THE CONDITIONS ARE SATISFIED CREATE THE USER AND LOG THEM
const form = document.getElementById("inputs");

const createUser = (event)=>{
    event.preventDefault();
    const email = document.getElementById("exampleInputEmail1");
    const password = document.getElementById("exampleInputPassword1");
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()
    if(emailValue===""){
        alert("Email must not be empty!")
        return;
    }
    if(passwordValue.length < 6){
        alert("Password must be longer than 5 characters! ")
        return;
    }
    const user = {
        email : emailValue,
        password : passwordValue
    }
    console.log("User is created and these are credentials: ")
    console.log(user)

}

form.addEventListener("submit", createUser)
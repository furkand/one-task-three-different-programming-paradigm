// THESE JS FILES ARE ABLE TO EXECUTE EXACTLY SAME TASKS WITH DIFFERENT APPROACHES
// TASKS:  
// 1-TAKE INPUTS WHICH ARE EMAIL AND PASSWORD 
// 2-CHECK THAT EMAIL EMPTY OR NOT
// 3-CHECK THAT PASSWORD IS EMPTY OR NOT IF IT IS NOT EMPTY IT HAVE TO INCLUDE MORE THAN 5 CHARACTER
// 4- IF ALL THE CONDITIONS ARE SATISFIED CREATE THE USER AND LOG THEM
const logUser = (user) =>{
    console.log(user)
}
const createUser = (condition,email,password) =>{
    if(condition){
        const user = {
            email : email,
            password : password
        }
        logUser(user)
    }else{
        alert("wrong credentials!")
        return;
    }
    
}
const validation = (email,password,min)=>{
    const conditionOne = (email === "" ? false : true);
    const conditionTwo = (password < min ? false : true);
    return (conditionOne&&conditionTwo);

}
const takeInputs = () =>{
    const emailInput = document.getElementById("exampleInputEmail1")
    const passwordInput = document.getElementById("exampleInputPassword1")
    const email = emailInput.value.trim()
    const password = passwordInput.value.trim()
    const condition = validation(email,password,6)
    createUser(condition, email,password)
}
const checkCredentials = (event)=>{
    event.preventDefault();
    takeInputs()


}
const getForm = () => {
    const form = document.getElementById("inputs")
    form.addEventListener("submit", checkCredentials)
    
}
getForm()
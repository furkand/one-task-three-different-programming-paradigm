// THESE JS FILES ARE ABLE TO EXECUTE EXACTLY SAME TASKS WITH DIFFERENT APPROACHES
// TASKS:  
// 1-TAKE INPUTS WHICH ARE EMAIL AND PASSWORD 
// 2-CHECK THAT EMAIL EMPTY OR NOT
// 3-CHECK THAT PASSWORD IS EMPTY OR NOT IF IT IS NOT EMPTY IT HAVE TO INCLUDE MORE THAN 5 CHARACTER
// 4- IF ALL THE CONDITIONS ARE SATISFIED CREATE THE USER AND LOG THEM

class Validator {
    static required = 'required'
    static minLength = 'minLength'
    static validate(value, validatorType, min){
        if(validatorType===this.required){
            return( value === "" ? false : true);
        }
        if(validatorType===this.minLength){

            return (value.length < min ? false : true);
        }
    }
}

class User {
    constructor(email, password){
        this.email = email
        this.password = password

    }
    logUser(){
        console.log(this)
    }

}

class Form {
    constructor(){
        this.form = document.getElementById("inputs")
        this.userEmail = document.getElementById("exampleInputEmail1")
        this.userPassword = document.getElementById("exampleInputPassword1")

        this.form.addEventListener("submit", this.createUser.bind(this))
    }
    createUser(event){
        event.preventDefault();
        const email = this.userEmail.value.trim()
        const password = this.userPassword.value.trim()
        console.log("email: " + email)
        console.log("password: " + password.length)
        console.log("email validation: " + Validator.validate(email,"required"))
        console.log("password validation: " + Validator.validate(password, "minLength", 6))
        if(Validator.validate(email,"required") && Validator.validate(password, "minLength", 6) ){
            const user = new User(email,password)
            user.logUser()
        }else{
            alert("Wrong password or email")
            return;
        }

    }
}
//We need to call this class to bring it to life. We can think the classes as blueprints
new Form()

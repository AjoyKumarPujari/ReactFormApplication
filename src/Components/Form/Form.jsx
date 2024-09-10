import { useState } from 'react';
import validatePassword from '../../helper/passwordValidator';
import validateEmail from '../../helper/emailValidator';
import './From.css';
function Form(){

    const [formValues, setFormValues] = useState({//make them object
        email: "",
        password: ""
    });

    const handleValidatePassword =() =>{
        const password= formValues.password;
        if(!validatePassword(password)){
            //something
            console.log("Invalid Password");
        }
        //regex generator

    }

    const handleValidateEmail= () => {
        const email = formValues.email;
        if(!validateEmail(email)){
            //something
            console.log("Invalid Email");
        }
    }

    const handleFormSubmit = (event) => {
        event.preventDefault(); //prevented the defaukt behaviour of this particular event
        handleValidatePassword();
        handleValidateEmail()
        console.log(formValues);
    }


    return(
        <div>
            Sign Up Form
            <form onSubmit={handleFormSubmit}>
                <div className="wrapper email-input-wrapper">
                    <input 
                        type="email" 
                        value={formValues.email}
                        onChange={(event)=>setFormValues({...formValues, email:event.target.value})}
                    />
                </div>
                <div className="wrapper password-input-wrapper">
                    <input 
                        type="password" 
                        value={formValues.password}
                        onChange={(event)=>setFormValues({...formValues, password:event.target.value})}/>
                </div>
                <input type="Submit"/>
            </form>
        </div>
    )
}

export default Form;
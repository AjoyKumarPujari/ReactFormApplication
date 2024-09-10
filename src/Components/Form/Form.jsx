import './From.css';
function Form(){
    return(
        <div>
            Sign Up Form
            <form>
                <div className="wrapper email-input-wrapper">
                        <input type="email"/>
                </div>
                <div className="wrapper password-input-wrapper">
                        <input type="password"/>
                </div>
                <input type="Submit"/>
            </form>
        </div>
    )
}

export default Form;
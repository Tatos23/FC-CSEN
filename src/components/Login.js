import loginStyles from "./Login.css";

function Login (props){
    return (
        <div className="Login" style={loginStyles}>
            <div className="left-side"></div>
            <div className="right-side">
                <header className="login-header">
                    <img src="logo192.png" className="HeaderLogo"></img>
                </header>
                <div className="login-details">

                    <h1 className="login-title"> {props.role} Log in </h1>
                    <input type="text" placeholder="Username" class="username-input" required></input>
                    <br/>
                    <input type="text" placeholder="Password" class="password-input" required></input>
                </div>
                <div className="login-actions">
                    <button className="login-button"> Login </button>
                    { props.role !== "Admin" && <p className="register-redirect"> Don't have an account? <a>Create an account</a> to join our helpful community.</p>}
                </div>
            </div>
        </div>
    )
}

export default Login;
import "../../styles/intro.css";
import React from "react";
import IntroContainer from "./IntroContainer";
import IntroTitle from "./IntroTitle";

class Login extends React.Component {
    state = { register: false };

    constructor(props) {
        super(props);
        this.registerToggle = this.registerToggle.bind(this);
    }

    registerToggle() {
        this.setState({ register: true });
    }

    render() {
        return (
            <IntroContainer>
                <IntroTitle
                    title="Login to Market!"
                    subtitle="Checkout new cool stuff updated!"
                />
                <form>
                    <div className="form-group mb-3">
                        <input
                            id="inputEmail"
                            type="email"
                            placeholder="Email address"
                            required=""
                            autofocus=""
                            className="form-control rounded-pill border-0 shadow-sm px-4"
                        />
                    </div>
                    <div className="form-group mb-3">
                        <input
                            id="inputPassword"
                            type="password"
                            placeholder="Password"
                            required=""
                            className="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
                        />
                    </div>
                    <div className="custom-control custom-checkbox mb-3">
                        <input
                            id="customCheck1"
                            type="checkbox"
                            className="custom-control-input"
                        />
                        <label
                            for="customCheck1"
                            className="custom-control-label"
                        >
                            Remember password
                        </label>
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm"
                    >
                        Sign in
                    </button>
                </form>
                <div className="text-center d-flex justify-content-between mt-4">
                    <p>
                        Don't have an account?{" "}
                        <a href="" class="font-italic text-muted" onClick={}>
                            <u>Register Here!</u>
                        </a>
                    </p>
                </div>
            </IntroContainer>
        );
    }
}

export default Login;
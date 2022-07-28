import Input from "./Input";

export default function SignInForm() {
    return (
        <div className="container pt-5">
            <div className="row">
                <div className="col-12 col-md-4"></div>
                <div className="col-12 col-md-4">
                    <form>
                        <Input className="form-control" id="formEmailInput" type="email" labelName="Email address" placeholder="Enter your email"></Input>

                        <Input className="form-control" id="formPasswordInput" type="password" labelName="Password" placeholder="Enter your password"></Input>

                        <div className="row mb-4">
                            <div className="col d-flex justify-content-center">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="form2Example31" checked ></input>
                                    <label className="form-check-label" for="form2Example31"> Remember me </label>
                                </div>
                            </div>

                            <div className="col">
                                <a href="#!">Forgot password?</a>
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary btn-block mb-4">Sign in</button>
                    </form>
                </div>
                <div className="col-12 col-md-4"></div>
            </div>
        </div>

    )
}
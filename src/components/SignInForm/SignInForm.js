import './SignInForm.css';
import Logo from '../../assets/boot-shop.svg';
import { Link } from 'react-router-dom';

function SignInForm() {
    return (
        <div className="container mt-5">
            <main className="form-signin w-100 m-auto">
                <form>
                    <Link to="/bootshop"><img className="mb-4" id="c-signin-logo" src={Logo} alt="The demo logo" width="72" height="57" /></Link>
                    <h1 className="h3 mb-3 fw-normal text-center text-black">Please sign in</h1>
                    <div className="form-floating" style={{ marginBottom: '1em'}}>
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>

                    <div className="checkbox mb-3">
                        <label>
                            <input type="checkbox" value="remember-me" /> Remember me
                        </label>
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                    <Link to="/bootshop/register"><button className="w-100 btn btn-lg btn-info mt-3" type="submit">Register</button></Link>
                </form>
            </main>
        </div>
    );
}

export default SignInForm;

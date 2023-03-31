import '../SignInForm/SignInForm.css';
import Logo from '../../assets/boot-shop.svg';
import { Link } from 'react-router-dom';

function RegisterForm() {
    return (
        <div className="container mt-5">
            <main className="form-signin w-100 m-auto">
                <form>
                    <Link to="/bootshop"><img className="mb-4" id="c-signin-logo" src={Logo} alt="The demo logo" width="72" height="57" /></Link>
                    <h1 className="h3 mb-3 fw-normal text-center text-black">Create a new account</h1>

                    <div className="form-floating" style={{ marginBottom: '1em' }}>
                        <input type="text" className="form-control" id="floatingName" placeholder="Anonymous" />
                        <label htmlFor="floatingName">Name</label>
                    </div>
                    <div className="form-floating" style={{marginBottom: '1em'}}>
                        <input type="email" className="form-control" id="floatingMail" placeholder="name@example.com" />
                        <label htmlFor="floatingMail">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPasswordConfirm" placeholder="Password" />
                        <label htmlFor="floatingPasswordConfirm">Confirm password  </label>
                    </div>
                    

                    <Link to="/bootshop/register"><button className="w-100 btn btn-lg btn-info mt-3" type="submit">Sign up</button></Link>
                    <Link to="/bootshop/signin"><button className="w-100 btn btn-lg btn-primary mt-3" type="submit">Back to sign in</button></Link>
                </form>
            </main>
        </div>
    );
}

export default RegisterForm;

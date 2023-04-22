import { useState } from 'react';
import { login } from './service';
import './style/LoginPage.css';

function LoginPage({ onLogin }) {
  const [credential, setCredentials] = useState({
    email: '',
    password: '',
  });

  const [saveSession, setSaveSession] = useState('false');

  const handlechecked = event => {
    setSaveSession(event.target.checked);
  };

  const handleSubmit = async event => {
    event.preventDefault();

    await login(credential,saveSession);
    onLogin(true);
  };

  const handleChange = event => {
    setCredentials({ ...credential, [event.target.name]: event.target.value });
  };

  const buttonDisabled = !credential.email || !credential.password;
  const btnClass = !buttonDisabled ? 'btn' : 'btnDisabled';



  

  return (
    <div className="global-container">
      <div className="card login-form">
        <div className="card-body">
          <h1 className="card-title text-center">New User Register</h1>
          <div className="card-text">
            <form id="createUser" onSubmit={handleSubmit}>
              <p>
                <label>Email</label>
                <br />
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  onChange={handleChange}
                  value={credential.email}
                />
              </p>
              <p>
                <label>Password</label>
                <br />
                <input
                  type="password"
                  name="password"
                  id="password"
                  required
                  onChange={handleChange}
                  value={credential.password}
                />
              </p>
              <button
                type="submit"
                className={btnClass}
                disabled={buttonDisabled}
              >
                Sign in
              </button>

              <p>
                <input type="checkbox" onChange={handlechecked}  /> you want to
                save the session
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;

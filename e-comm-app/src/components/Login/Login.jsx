import { useState } from "react";
import "./Login.css";

const Login = () => {
  const [showSignup, setShowSignup] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  function login() {
    console.log(`Login with ${username} ${password}`);
  }

  function signUp() {
    console.log(`signUp with  ${username} ${password} ${email}`);
  }

  return (
    <div className="login">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="login-wrapper">
              <div className="title">
                <h2 className="home-title text-center">Welcome to InstaShop</h2>

                <h4 className="text-center">
                  {showSignup ? "Sign up" : "Login"}
                </h4>
              </div>
              <div className="form">
                <div className="input-group">
                  <input
                    type="text"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                    className="form-control"
                    placeholder="username"
                    id="username"
                    autoComplete="off"
                    autoFocus
                  />
                </div>
                <div className="input-group">
                  <input
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    className="form-control"
                    placeholder="password"
                    id="password"
                    autoComplete="off"
                  />
                </div>

                {showSignup && (
                  <div className="input-group">
                    <input
                      type="email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      className="form-control"
                      placeholder="email"
                      id="email"
                      autoComplete="off"
                    />
                  </div>
                )}

                <div
                  className="signup-btn"
                  onClick={() => setShowSignup(!showSignup)}
                >
                  {showSignup
                    ? "Already have an account? Login"
                    : "Don't have an account? Sign up."}
                </div>

                <div className="input-group">
                  <input
                    type="submit"
                    className="form-control btn btn-primary"
                    value={showSignup ? "Sign up" : "Login"}
                    onClick={showSignup ? signUp : login}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

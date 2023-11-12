import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const data = {
    pseudo: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [loginData, setLoginData] = useState(data);

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.id]: e.target.value });
  };

  const { pseudo, email, password, confirmPassword } = loginData;

  const btn =
    pseudo === "" ||
    email === "" ||
    password === "" ||
    password !== confirmPassword ? (
      <button disabled>Inscription</button>
    ) : (
      <button>Inscription</button>
    );

  return (
    <div className="signUpLoginBox">
      <div className="slContainer">
        <div className="formBoxLeftSignup"></div>
        <div className="formBoxRight">
          <div className="formContent">
            <h2>Inscription</h2>
            <form>
              <div className="inputBox">
                <input
                  onChange={handleChange}
                  value={pseudo}
                  type="text"
                  id="pseudo"
                  required
                />
                <label htmlFor="pseudo">Pseudo</label>
              </div>

              <div className="inputBox">
                <input
                  onChange={handleChange}
                  value={email}
                  type="email"
                  id="email"
                  required
                />
                <label htmlFor="email">email</label>
              </div>

              <div className="inputBox">
                <input
                  onChange={handleChange}
                  value={password}
                  type="password"
                  id="password"
                  required
                />
                <label htmlFor="password">Mot de passe</label>
              </div>

              <div className="inputBox">
                <input
                  onChange={handleChange}
                  value={confirmPassword}
                  type="password"
                  id="confirmPassword"
                  required
                />
                <label htmlFor="confirmPassword">Confirmer Mot de passe</label>
              </div>

              {btn}
            </form>
            <Link className="simpleLink" to="/login">Déja inscrit? Connectez-vous.</Link>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

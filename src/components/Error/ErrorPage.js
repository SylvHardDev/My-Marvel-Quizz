import React from "react";
import batman from "../../images/batman.png";


const centerH2 = {
  textAlign: "center",
  marginTop: '50px'
}

const image = {
  display: 'block',
  margin: "40px auto"
}

const ErrorPage = () => {
  return (
    <div className="quizz-bg">
      <div className="container">
        <h2 style={centerH2}>Oups, cette page n'existe pas</h2>
        <img style={image} src={batman} alt="batman" />
      </div>
    </div>
  );
};

export default ErrorPage;

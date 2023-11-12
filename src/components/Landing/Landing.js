import React, { useEffect, useRef, useState } from "react";

const Landing = () => {
  const [btn, setBtn] = useState(false);

  const wolverineRef = useRef();
  console.log(wolverineRef);

  useEffect(() => {
    wolverineRef.current.classList.add("startingImg");
    setTimeout(() => {
      wolverineRef.current.classList.remove("startingImg");
      setBtn(true);
    }, 1500);
  }, []);

  const displayBtn = btn && (
    <>
      <div className="leftBox">
        <button className="btn-welcome">Inscription</button>
      </div>
      <div className="rightBox">
        <button className="btn-welcome">Connexion</button>
      </div>
    </>
  );

  return (
    <main ref={wolverineRef} className="welcomePage">
      {displayBtn}
    </main>
  );
};

export default Landing;

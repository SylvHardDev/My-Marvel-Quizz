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

  const setLeftImg = () => {
    wolverineRef.current.classList.add("leftImg");
  };

  const setRightImg = () => {
    wolverineRef.current.classList.add("rightImg");
  };

  const clearImg = () => {
    if (wolverineRef.current.classList.contains("leftImg")) {
      wolverineRef.current.classList.remove("leftImg");
    } else if (wolverineRef.current.classList.contains("rightImg")) {
      wolverineRef.current.classList.remove("rightImg");
    }
  };

  const displayBtn = btn && (
    <>
      <div className="leftBox" onMouseOver={setLeftImg} onMouseOut={clearImg}>
        <button className="btn-welcome">Inscription</button>
      </div>
      <div className="rightBox" onMouseOver={setRightImg} onMouseOut={clearImg}>
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

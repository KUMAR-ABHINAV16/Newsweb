import React from "react";
import { useState } from "react";
import "./SignInBody.css";

function SignInBody({sign}) {
  const [showSignInBox, setShowSignInBox] = useState(true);
  // var name = document.getElementById("i1").value
  // var mail = document.getElementById("i2").value
  // var password = document.getElementById("i3").value
     
  const clicked = () =>{
        // setSign(true)
        console.log(sign)
  }

  
  return (
    <>
      {showSignInBox ? (
        <div className="signinbody_container">
          <div className="signinbody_form">
            <p className="signinbody_title">Sign In</p>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button onClick={clicked} >Sign In</button>
            {/* <button>Login as Guest User</button> */}
            <p className="signinbody_text">
              New to MovieApp?{" "}
              <span onClick={() => setShowSignInBox(false)}>SignUp Now.</span>
            </p>
          </div>
        </div>
      ) : (
        <div className="signinbody_container">
          <div className="signinbody_form">
            <p className="signinbody_title">Sign Up</p>
            <input id="i1" type="text" placeholder="Name" />
            <input id="i2 " type="email" placeholder="Email" />
            <input id= "i3" type="password" placeholder="Password" />
            <button onClick={clicked} >Sign Up</button>
            {/* <button>Login as Guest User</button> */}
            <p className="signinbody_text">
              Have an account?{" "}
              <span  onClick={() => setShowSignInBox(true)   } >SignIn Now.</span>
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default SignInBody;



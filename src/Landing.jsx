
import { useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import { useEffect } from "react";

function Landing() {
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.currentUser === null) {
      navigate("/");
    }
  }, []);

  return (
    <>
     <div className="name">
       <h1>Welcome  {auth.currentUser && auth.currentUser.displayName} !!! </h1>
     </div>
    </>
  )
}

export default Landing
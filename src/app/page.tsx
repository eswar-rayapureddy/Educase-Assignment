"use client";
import "./Home.css";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();

  return (
    <div className="homeContainer">
      <div className="welcomeCard">
        <div className="emptyBlock"></div>
        <h2>Welcome to PopX</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>

        <div className="buttonBlock">
          <button
            className="signInBtn"
            onClick={() => router.push("/register")}
          >
            Create Account
          </button>
          <br />
          <button
            className="logInBtn"
            onClick={() => router.push("/login")}
          >
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;

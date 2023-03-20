import React, { useState } from "react";
import { authService } from "fbase";
import { async } from "@firebase/util";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(true);
  const [error, setError] = useState("");
  const auth = getAuth();

  const onChange = (e) => {
    const {
      target: { name, value },
    } = e;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      // let data;
      if (newAccount) {
        const data = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        //  create acoount
        console.log(data);
      } else {
        const data = await signInWithEmailAndPassword(auth, email, password);
        console.log(data);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const toggleAccount = () => {
    setNewAccount((prev) => !prev);
  };

  const onSocialClick = (e) => {
    console.log(e.target.name);
    const {
      target: { name },
    } = e;
    let provider;
    if(name === "google"){

    }else if(name === "github"){

    }
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="email"
          type="text"
          placeholder="Email"
          required
          value={email}
          onChange={onChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={onChange}
        />
        <input type="submit" value={newAccount ? "Create Account" : "Log in"} />
        {error}
      </form>
      <span onClick={toggleAccount}>
        {newAccount ? "Log in" : "Create Account"}
      </span>
      <button onClick={onSocialClick} name="google">
        continue with Google
      </button>
      <button onClick={onSocialClick} name="github">
        continue with Github
      </button>
    </div>
  );
};

export default Auth;

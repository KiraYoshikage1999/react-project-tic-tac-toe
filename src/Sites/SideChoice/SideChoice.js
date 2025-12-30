import React from "react";
import "./SideChoice.css";
import { User } from "../../ComponentsTest/User";
import { useNavigate } from "react-router-dom";

export default function SideChoice() {
    let userObject = new User();
    const navigate = useNavigate();

    function handleUser(userChoice) {
      localStorage.setItem("side", userChoice);
      navigate("/");
    }
  return (
    <div className="page">
      <div className="container">
        <h1 className="title">Выбор стороны</h1>

        <div className="buttons">
          <button className="choice-button" onClick={() => handleUser("X")}>X</button>
          <button className="choice-button" onClick={() => handleUser("O")}>O</button>
        </div>
      </div>
    </div>
  );
}

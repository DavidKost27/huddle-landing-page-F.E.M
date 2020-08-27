import React from "react";
import "./register-button.scss";

export default function button(props) {
  const { text } = props;
  return <button className="register-button">{text}</button>;
}

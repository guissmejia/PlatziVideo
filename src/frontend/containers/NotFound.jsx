import React from "react";
import Header from "../components/Header";
import image404 from "../assets/static/notFound.png";
import "../assets/styles/containers/NotFound.scss";

const NotFound = () => (
  <>
    <Header />
    <div className="NotFound__container">
      <img className="NotFound-image" src={image404} alt="Not Found" />
      <h2>Hmmmm... No encontramos lo que buscas</h2>
    </div>
  </>
);

export default NotFound;

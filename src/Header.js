import React from "react";
import { Link } from "react-router-dom";
export default function Header()
{
  return(
    <div className="container-fluid p-0 nav-bar">
        <nav className="navbar navbar-expand-lg bg-none navbar-dark py-3">
            <a href="index.html" className="navbar-brand px-lg-4 m-0">
                <h1 className="m-0 display-4 text-uppercase text-white">KOPPEE</h1>
            </a>
            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                <div className="navbar-nav ml-auto p-4">
                    <Link to="hello" className="nav-item nav-link active">Home</Link>
                    <Link to="add" className="nav-item nav-link">About</Link>
                    <a href="service.html" className="nav-item nav-link">Service</a>
                    <a href="menu.html" className="nav-item nav-link">Menu</a>
                    <div className="nav-item dropdown">
                        <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Pages</a>
                        <div className="dropdown-menu text-capitalize">
                            <a href="reservation.html" className="dropdown-item">Reservation</a>
                            <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                        </div>
                    </div>
                    <a href="contact.html" className="nav-item nav-link">Contact</a>
                </div>
            </div>
        </nav>
    </div>)
}
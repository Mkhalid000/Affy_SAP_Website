import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import $ from 'jquery'; // Import jQuery if not already imported
import "../App.css"
import logo from "../img/affy_logo.png"

export const Navbar = () => {
    const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(true);
    const [isSolutionsOpen, setIsSolutionsOpen] = useState(false); // State to track Solutions dropdown

    useEffect(() => {
        // Sticky Navbar
        const handleScroll = () => {
            if ($(window).scrollTop() > 45) {
                $('.navbar').addClass('sticky-top shadow-sm');
            } else {
                $('.navbar').removeClass('sticky-top shadow-sm');
            }
        };

        $(window).on('scroll', handleScroll);

        // Cleanup on unmount
        return () => {
            $(window).off('scroll', handleScroll);
        };
    }, []);

    const handleToggle = () => {
        setIsNavbarCollapsed(!isNavbarCollapsed);
    };

    const handleSolutionsToggle = () => {
        setIsSolutionsOpen(!isSolutionsOpen); // Toggle the Solutions dropdown
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0">
            <a href="/" className="navbar-brand p-0">
                <img className='logo_img' src={logo} alt="Logo"></img>
            </a>
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse"
                aria-controls="navbarCollapse"
                aria-expanded={!isNavbarCollapsed}
                aria-label="Toggle navigation"
                onClick={handleToggle}
            >
                <span className="fa fa-bars"></span>
            </button>
            <div className={`collapse navbar-collapse ${isNavbarCollapsed ? '' : 'show'}`}>
                <div className="navbar-nav ms-auto navvvv py-0">
                    <Link to="/" className="nav-item nav-link active">Home</Link>
                    <Link to="/about" className="nav-item nav-link">About</Link>
                    <div className={`nav-item dropdown ${isSolutionsOpen ? 'show' : ''}`}>
                        <a  className="nav-link dropdown-toggle" onClick={handleSolutionsToggle}>Solutions</a>
                        <div className={`dropdown-menu m-0 ${isSolutionsOpen ? 'show' : ''}`}>
                            <Link to='/sap_hxm' className="dropdown-item">SAP SuccessFactors (HXM)</Link>
                            <Link to='/hana' className="dropdown-item">SAP S/4 HANA</Link>
                            <Link to="/analytics" className="dropdown-item">SAP Analytics Cloud</Link>
                            <Link to='/business' className="dropdown-item">SAP Business Technology Platform</Link>
                            <Link to="/customer" className="dropdown-item">SAP Customer Experience (CX)</Link>
                            <Link to="/cloud" className="dropdown-item">SAP Cloud Platform and ABAP Factory</Link>
                            <Link to="/Sales_force" className="dropdown-item">Sales Force</Link>
                            <Link to="/Sales_cloud" className="dropdown-item"> SAP Sales Cloud</Link>
                        </div>
                    </div>
                    <a href="https://affyclouditsolutions.com/" target="_blank"  className="nav-item nav-link">IT Solutions</a>
                    <Link to="/contact" className="nav-item nav-link">Contact</Link>
                </div>
            </div>
        </nav>
    )
}

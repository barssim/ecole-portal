import React from 'react';
import fr from "../locales/header/fr.json";
import ar from "../locales/header/ar.json";
import "../App.css";
import { useNavigate } from "react-router-dom";

const Header = ({ language, toggleLanguage, cartItemCount }) => {
	const content = language === "fr" ? fr : ar;
	const navigate = useNavigate();
	const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
	const loggedIn = localStorage.getItem("LoggedIn");
	return (
		<header
			style={{
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
				padding: "10px 20px",
				boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
				backgroundColor: "#ffffff",
			}}
		>
			{/* Logo Section */}
			<div className="header-logo">
				<img
					src="../images/logoS.png"
					alt="Logo"
					style={{
						width: "70px",
						height: "50px",
						padding: "5px 10px",
					}}
				/>
			</div>

			{/* Navigation Links */}
			<nav style={{ display: "flex", gap: "15px" }}>
				<a href="/Home" className="linkStyle">{content.home}</a>
				<a href="/about" className="linkStyle">{content.about}</a>
				<a href="/contact" className="linkStyle">{content.contact}</a>
			</nav>

			{/* Action Buttons */}
			<div style={{ display: "flex", gap: "10px", alignItems: "center" }}>

				{isLoggedIn && (
					<button className="inactiveButton">
						Welcome, {loggedIn} {/* Display welcome message styled as an inactive button */}
					</button>
				)}
				<button className="buttonStyle" onClick={() => (window.location.href = isLoggedIn ? "/logout" : "/login")}>
					{isLoggedIn ? content.logout : content.login}
				</button>
				{!isLoggedIn && (
					<button
						className="buttonStyle"
						onClick={() => (window.location.href = "/inscription")}
					>
						{content.inscription}
					</button>
				)}
				<button
					className="language-toggle"
					onClick={toggleLanguage}
					style={{
						backgroundImage: `url(${language === "ar" ? "../images/frensh.jpg" : "../images/maroc.jpg"})`,
						backgroundSize: "cover",
						backgroundPosition: "center",
						width: "40px",
						height: "40px",
						padding: 0,
						borderRadius: "50%",
					}}
				/>
			</div>
		</header>
	);
};

export default Header;

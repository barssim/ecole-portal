// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState } from "react";
import { useEffect } from "react";
import Header from './components/Header';
import Footer from './components/Footer';
import ChatApp from './components/ChatApp';
import PostInvoice from './components/PostInvoice';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Inscription from './pages/Inscription';
import Contact from './pages/Contact';
import fr from "./locales/fr.json";
import ar from "./locales/ar.json";
import en from "./locales/en.json";
import "./App.css";
import ecole from './ecoleLoader';
import SchoolInvoicePreview from './components/SchoolInvoicePreview';

function App() {
	const [language, setLanguage] = useState("fr"); // Track current language
	let content;
	const fees = [
        { description: "Tuition - July", amount: 1000 },
        { description: "Books & Materials", amount: 300 },
        { description: "Transport", amount: 200 },
      ];

if (language === "fr") {
  content = fr;
} else if (language === "en") {
  content = en;
} else {
  content = ar;
};
	const toggleLanguage = () => {
      setLanguage((prevLang) => {
        if (prevLang === "fr") return "ar";
        if (prevLang === "ar") return "en";
        return "fr"; // from "en" back to "fr"
      });
    };
	return (
		<Router>
			<Header language={language} toggleLanguage={toggleLanguage}/>;
			<div style={{ display: "flex", alignItems: "center" }}>
				{/* Left Menu */}
				<div style={{ width: "15%", padding: "10px", textAlign: "left", borderRight: "1px solid #ccc" }}>
					<Home language={language} toggleLanguage={toggleLanguage} />
				</div>

				{/* Right Content */}
				<div style={{ display: "flex",flexDirection: "column", gap: "10px" }}>

               <div
                               style={{
                                 width: "fit-content",
                                 height: "fit-content",
                                 padding: "10px",
                                 alignItems: "center"
                               }}
                             >
                   <h1>{content.whatWeDo}{ecole.name[language] || ecole.name["fr"]}</h1>
                   <h4>{content.whatYouFind}</h4>
                 </div>

              <div
                style={{
                  width: "fit-content",
                  height: "fit-content",
                  padding: "10px",
                }}
              >
                   <Routes>
                     <Route path="/finance/factures" element={<PostInvoice />} />
                     <Route
                       path="/finance/payments"
                       element={
                         <SchoolInvoicePreview
                           studentName="Yasmine El Idrissi"
                           studentClass="5ème année"
                           invoiceNumber="INV-2025-07-001"
                           invoiceDate="2025-07-06"
                           dueDate="2025-07-15"
                           fees={fees}
                         />
                       }
                     />
                   </Routes>
                 </div>
                </div>
               <div
                 style={{
                   width: "15%",
                   padding: "10px",
                   textAlign: "center", // optional
                 }}
               >
                 <img
                   src={ecole.image}
                   alt="ecole image"
                   style={{ width: "100%", height: "auto" }}
                 />
</div>
			</div>

			<br />
			<Routes>
				<Route path="/about" element={<About language={language} toggleLanguage={toggleLanguage} />} />
				<Route path="/contact" element={<Contact language={language} toggleLanguage={toggleLanguage} />} />
				<Route path="/login" element={<Login language={language} toggleLanguage={toggleLanguage} />} />
				<Route path="/logout" element={<Logout language={language} toggleLanguage={toggleLanguage} />} />
				<Route path="/inscription" element={<Inscription language={language} toggleLanguage={toggleLanguage} />} />
			</Routes>
			<ChatApp language={language} toggleLanguage={toggleLanguage} />
			<Footer language={language} toggleLanguage={toggleLanguage} />
		</Router>
	);
}

export default App;

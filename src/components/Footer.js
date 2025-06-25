import React from 'react';
import fr from "../locales/footer/fr.json";
import ar from "../locales/footer/ar.json";
import en from "../locales/footer/en.json";
import { COMPANYNAME , COMPANYPHONE, COMPANYEMAIL} from "../globals.js";

const Footer = ({ language, toggleLanguage }) => {
	let content;

if (language === "fr") {
  content = fr;
} else if (language === "en") {
  content = en;
} else {
  content = ar;
};
   return (
       <footer className="footer">
           <p>&copy; 2024 {COMPANYNAME} </p>
           <div>
               <a href={content.facebook_link} target="_blank" rel="noopener noreferrer" style={{ marginRight: '10px' }}>Facebook</a>
               <a href={content.twitter_link} target="_blank" rel="noopener noreferrer">Twitter</a>
           </div>
           <address>
               {content.companyAdresse}
               <br />
               Phone: {COMPANYPHONE}
               <br />
               Email: {COMPANYEMAIL}
           </address>
       </footer>
   );
};

export default Footer;

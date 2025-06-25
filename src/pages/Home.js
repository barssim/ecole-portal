import React from "react";
import "../App.css"; // External CSS file for styling
import fr from "../locales/fr.json";
import ar from "../locales/ar.json";
import en from "../locales/en.json";

const Home = ({ language }) => {
    let content;

if (language === "fr") {
  content = fr;
} else if (language === "en") {
  content = en;
} else {
  content = ar;
};

    return (
            <div className="menu-item">
                <a
                    href="/administration"
                    title="Administration"
                    className="menu-item administration"
                >
                    {content.administration}
                </a>
                 <a
                    href="/enseignement"
                    title="Enseignement"
                    className="menu-item enseignement"
                 >
                    {content.enseignement}
                 </a>
<a
                    href="/services"
                    title="Services"
                    className="menu-item services"
                >
                    {content.services}
                </a>
                 <a
                    href="/finance"
                    title="Finance"
                    className="menu-item finance"
                 >
                    {content.finance}
                 </a>
<a
                    href="/annonces"
                    title="Annonces"
                    className="menu-item annonces"
                >
                    {content.annonces}
                </a>
                 <a
                    href="/activités"
                    title="Activités"
                    className="menu-item activités"
                 >
                    {content.activités}
                 </a>
            </div>
    );
}

export default Home;

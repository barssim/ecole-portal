import React from "react";
import "../App.css"; // External CSS file for styling
import fr from "../locales/fr.json";
import ar from "../locales/ar.json";

const Home = ({ language }) => {
    const content = language === "fr" ? fr : ar;
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

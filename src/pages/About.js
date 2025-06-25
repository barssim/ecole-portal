import React from 'react';
import styles from '../cssFiles/styles.css';
import fr from "../locales/header/fr.json";
import ar from "../locales/header/ar.json";

const About = ({ language }) => {
	const content = language === "fr" ? fr : ar;
	return (
		<div style={{ flex: 1, padding: "10px", textAlign: "center" }}>
			<h1 style={styles.heading}> {content.group_gardinia}</h1>
	   </div>
   );
};

export default About;

const hostname = window.location.hostname;

let ecoleConfig;

if (hostname.includes("gardinia")) {
  ecoleConfig = require("./customizations/gardinia").default;
} else if (hostname.includes("qods")) {
  ecoleConfig = require("./customizations/qods").default;
} else {
  ecoleConfig = {
    name: "Default Ecole",
    logo: "/images/solideLogo.jpg",
    primaryColor: "#333",
    footerText: "© 2025 Default Ecole",
  };
}

export default ecoleConfig;


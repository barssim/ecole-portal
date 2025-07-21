import "../App.css";
import fr from "../locales/fr.json";
import ar from "../locales/ar.json";
import en from "../locales/en.json";
import AdminBlock from "./MenuBlocks/AdminBlock";
import TeacherBlock from "./MenuBlocks/TeacherBlock";
import StudentBlock from "./MenuBlocks/StudentBlock";
import ParentBlock from "./MenuBlocks/ParentBlock";
import FinanceBlock from "./MenuBlocks/FinanceBlock";
import ServicesBlock from "./MenuBlocks/ServicesBlock";

const Menu = ({ language }) => {
  const content = language === "fr" ? fr : language === "en" ? en : ar;
  const userRoles = JSON.parse(localStorage.getItem("user_roles") || "[]");
  const adminRoles = ["admin", "manager"];
    const isAdminAuthorized = adminRoles.some(role => userRoles.includes(role));

    const teacherRoles = ["teacher", "manager"];
    const isTeacherAuthorized = teacherRoles.some(role => userRoles.includes(role));

    const studentRoles = ["student", "manager"];
    const isStudentAuthorized = studentRoles.some(role => userRoles.includes(role));

    const parentRoles = ["parent", "manager"];
        const isParentAuthorized = parentRoles.some(role => userRoles.includes(role));
        const financeRoles = ["finance", "manager"];
                const isFinanceAuthorized = financeRoles.some(role => userRoles.includes(role));

     const servicesRoles = ["student", "teacher" , "admin",  "manager"];
            const isServicesAuthorized = servicesRoles.some(role => userRoles.includes(role));

  return (
    <div className="menu space-y-4 p-6 bg-sky-200 min-h-screen">
        <AdminBlock isAuthorized={isAdminAuthorized} content={content} />
        <TeacherBlock isAuthorized={isTeacherAuthorized} content={content} />
        <StudentBlock isAuthorized={isStudentAuthorized} content={content} />
        <ParentBlock isAuthorized={isParentAuthorized} content={content} />
        <ServicesBlock isAuthorized={isServicesAuthorized} content={content} />
        <FinanceBlock isAuthorized={isFinanceAuthorized} content={content} />
    </div>

  );
};

export default Menu;


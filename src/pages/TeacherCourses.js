import React, { useState, useEffect } from "react";

const TeacherCourses = () => {
  const [courses, setCourses] = useState([]);
  const [newCourse, setNewCourse] = useState({ name: "", language: "", schedule: "" });
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_GATEWAY_URL}/api/teachercourses?teacher=${userId}`)
      .then(res => res.json())
      .then(data => setCourses(data))
      .catch(err => console.error("Error loading courses", err));
  }, [userId]);

  const handleAddCourse = () => {
    if (!newCourse.name || !newCourse.language || !newCourse.schedule) return;
    setCourses([...courses, newCourse]);
    setNewCourse({ name: "", language: "", schedule: "" });
  };

  const handleEditCourse = (index) => {
    const updatedName = prompt("Enter new course name:", courses[index].name);
    const updatedLanguage = prompt("Enter new language:", courses[index].language);
    const updatedSchedule = prompt("Enter new schedule:", courses[index].schedule);

    if (updatedName && updatedLanguage && updatedSchedule) {
      const updatedCourses = [...courses];
      updatedCourses[index] = {
        name: updatedName,
        language: updatedLanguage,
        schedule: updatedSchedule,
      };
      setCourses(updatedCourses);
    }
  };

  const handleRemoveCourse = (index) => {
    const confirmDelete = window.confirm("Are you sure you want to remove this course?");
    if (confirmDelete) {
      const updatedCourses = courses.filter((_, i) => i !== index);
      setCourses(updatedCourses);
    }
  };

  return (
    <div className="teacher-courses">
      <h2>📚 Mes Cours</h2>
      <ul>
        {courses.map((course, idx) => (
          <li key={idx}>
            <strong>{course.name}</strong><br />
            Chapiter: {course.language}<br />
            🗓️ {course.schedule}<br />
            <button onClick={() => handleEditCourse(idx)}>✏️ Edit</button>
            <button onClick={() => handleRemoveCourse(idx)}>🗑️ Remove</button>
          </li>
        ))}
      </ul>

      <hr />
      <h3>➕ Add New Course</h3>
      <input
        type="text"
        placeholder="Course name"
        value={newCourse.name}
        onChange={(e) => setNewCourse({ ...newCourse, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Language"
        value={newCourse.language}
        onChange={(e) => setNewCourse({ ...newCourse, language: e.target.value })}
      />
      <input
        type="text"
        placeholder="Schedule"
        value={newCourse.schedule}
        onChange={(e) => setNewCourse({ ...newCourse, schedule: e.target.value })}
      />
      <button onClick={handleAddCourse}>Add Course</button>
    </div>
  );
};

export default TeacherCourses;

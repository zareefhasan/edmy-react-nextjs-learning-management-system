"use client";

import React from "react"; 
import CourseCard from "../Shared/CourseCard";

const CategoryCourses = ({ currentUser, courses, lang }) => {
  return (
    <>
      <div className="pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            {courses &&
              courses.map((course) => (
                <CourseCard
                  key={course.id}
                  currentUser={currentUser}
                  {...course}
                  lang={lang}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryCourses;

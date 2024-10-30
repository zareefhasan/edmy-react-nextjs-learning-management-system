"use client";

import React from "react";
import CourseCard from "../Shared/CourseCard";

const PopularCourses = ({
  currentUser,
  courses,
  lang,
}) => {
  return (
    <>
      <div className="courses-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span className="top-title">Popular Courses</span>
            <h2>Expand Your Career Opportunity With Our Courses</h2>
          </div>

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

export default PopularCourses;

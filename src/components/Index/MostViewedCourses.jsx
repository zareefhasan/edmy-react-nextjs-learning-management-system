"use client";

import React from "react";
import Link from "next/link";
import CourseCard from "../Shared/CourseCard";

const MostViewedCourses = ({ currentUser, courses, lang }) => {
  return (
    <>
      <div className="feature-dcourses-area bg-color-f6fafb pb-70">
        <div className="container">
          <div className="title-btn d-flex justify-content-between align-items-center">
            <div className="section-title left-title">
              <span className="top-title">Most Viewed Courses</span>
              <h2>Students Are Also Viewing</h2>
            </div>

            <Link href={`/${lang}/courses`} className="default-btn">
              View All
            </Link>
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

export default MostViewedCourses;

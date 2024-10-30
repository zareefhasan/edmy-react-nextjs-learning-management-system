"use client";

import React from "react";
import Link from "next/link";
import dateFormat from "@/utils/dateFormat";
import BuyCourseBtn from "./BuyCourseBtn";
import CourseOverview from "./Course/CourseOverview";
import CourseVideo from "./Course/CourseVideo";
import WhatYouWillLearn from "./Course/WhatYouWillLearn";
import Requirements from "./Course/Requirements";
import WhoIsThisCourseFor from "./Course/WhoIsThisCourseFor";
import InstructorProfile from "./Course/InstructorProfile";
import CoursesDetailsSidebar from "./CoursesDetailsSidebar";
import { couponCode } from "@/store/coupon";
import { calculateDiscount } from "@/utils/calculateDiscount";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const CoursesDetailsContent = ({ currentUser, course, lang }) => {
  const { discount } = couponCode((state) => state);

  const {
    // title,
    slug,
    image,
    overview,
    what_you_will_learn,
    who_is_this_course_for,
    requirements,
    regular_price,
    updated_at,
    category,
    user,
    enrolments,
  } = course;

  return (
    <>
      <div className="courses-details-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="course-details-content">
                <h2 className="title">{course.title}</h2>

                <ul className="best-seller">
                  <li>{category && <Link href={`/category/${category.slug}`}>{category.name}</Link>}</li>
                  <li>
                    <span>{enrolments && enrolments.length}</span> Students
                    Enrolled
                  </li>
                  <li>
                    Last Updated <span>{dateFormat(updated_at)}</span>
                  </li>
                </ul>

                <div className="gap-mb-30"></div>

                <InstructorProfile instructor={user} />

                <div className="gap-mb-30"></div>

                <div className="this-course-content">
                  <WhatYouWillLearn what_you_will_learn={what_you_will_learn} />
                </div>

                <div className="gap-mb-50"></div>

                <Tabs className="course-tab">
                  <TabList>
                    <Tab>Overview</Tab>
                    <Tab>Requirements</Tab>
                    <Tab>Who Is This Course For</Tab>
                  </TabList>

                  <TabPanel className="course-contents">
                    <CourseOverview overview={overview} />

                    <div className="mt-4">
                      {slug && (
                        <CourseVideo
                          currentUser={currentUser}
                          course={course}
                        />
                      )}
                    </div>
                  </TabPanel>

                  <TabPanel className="course-contents">
                    <Requirements requirements={requirements} />
                  </TabPanel>

                  <TabPanel className="course-contents">
                    <WhoIsThisCourseFor
                      who_is_this_course_for={who_is_this_course_for}
                    />
                  </TabPanel>
                </Tabs>

                {/* <div className="col-lg-4 col-md-12">
                  <div className="courses-price">
                    <div className="price">
                      $
                      {discount
                        ? calculateDiscount(discount, regular_price)
                        : regular_price}
                    </div>

                    <BuyCourseBtn
                      currentUser={currentUser}
                      {...course}
                      lang={lang}
                    />
                  </div>
                </div>
                 */}
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <CoursesDetailsSidebar {...course} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoursesDetailsContent;

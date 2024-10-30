"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { stripHtmlAndTruncate } from "@/utils/stripHtmlAndTruncate";
import HeartButton from "../HeartButton";
import AddToCartButton from "../SingleCourses/AddToCartButton";

const CourseCard = ({
  currentUser,
  id,
  title,
  slug,
  overview,
  regular_price,
  before_price,
  image,
  duration,
  lessons,
  access_time,
  user,
  lang,
}) => {
  return (
    <div className="col-lg-3 col-md-6">
      <div className="single-courses">
        <div className="courses-main-img">
          <Image width={750} height={599} src={image} alt={title} />
        </div>

        <div className="courses-content">
          <h3>
            <Link href={`/${lang}/course/${slug}`} title={title}>
              {title.slice(0, 50)}...
            </Link>
          </h3>

          <ul className="admin">
            <li>
              <Image
                src={
                  user.profile_photo ? user.profile_photo : "/images/user6.jpg"
                }
                width={200}
                height={200}
                className="rounded-circle"
                alt="image"
              />
            </li>
            <li>
              <span>By</span>
            </li>
            <li>
              <span>{`${user.name}`}</span>
            </li>
          </ul>

          <h4>
            {before_price > 0 && <del>${before_price}</del>} ${regular_price}
          </h4>
        </div>

        <div className="courses-hover-content">
          <div className="sk">
            <div>
              <h3>
                <Link href={`/${lang}/course/${slug}`} title={title}>
                  {title.slice(0, 30)}...
                </Link>
              </h3>

              <p>{stripHtmlAndTruncate(overview, 15)}</p>
              
              <div className="courses-btn d-flex justify-content-between align-items-center">
                <AddToCartButton 
                  id={id} 
                  title={title} 
                  slug={slug} 
                  regular_price={regular_price} 
                  before_price={before_price} 
                  duration={duration} 
                  lessons={lessons} 
                  access_time={access_time} 
                  image={image}  
                />
                

                <HeartButton currentUser={currentUser} courseId={id} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;

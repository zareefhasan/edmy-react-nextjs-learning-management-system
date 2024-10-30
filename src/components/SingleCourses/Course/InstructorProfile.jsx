"use client";

import Image from "next/image";
import React from "react";
import userImg from "../../../../public/images/avatar.jpg";

const InstructorProfile = ({ instructor }) => {
  const { name, image } = instructor;
  // console.log(instructor);
  return (
    <>
      <div className="admin-info d-flex align-items-center mb-1">
        <Image
          src={image ? image : userImg}
          width={200}
          height={200}
          className="shadow-sm rounded-circle"
          alt={name}
        />
        <span>Created By</span> <span className="theme-color">{name}</span>
      </div> 
    </>
  );
};

export default InstructorProfile;

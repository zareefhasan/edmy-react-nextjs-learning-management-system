"use client";

import React from "react";

const CourseOverview = ({ overview }) => {
	return (
		<div className="courses-details-desc-style-two"> 
			<div dangerouslySetInnerHTML={{ __html: overview }}></div>
		</div>
	);
};

export default CourseOverview;

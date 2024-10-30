"use client";

import React from "react";

const WhoIsThisCourseFor = ({ who_is_this_course_for }) => {
	return (
		<> 
			<div
				dangerouslySetInnerHTML={{ __html: who_is_this_course_for }}
			></div>
		</>
	);
};

export default WhoIsThisCourseFor;

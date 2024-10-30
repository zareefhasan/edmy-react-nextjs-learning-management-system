"use client";

import React from "react";

const Requirements = ({ requirements }) => {
	return (
		<> 
			<div dangerouslySetInnerHTML={{ __html: requirements }}></div>
		</>
	);
};

export default Requirements;

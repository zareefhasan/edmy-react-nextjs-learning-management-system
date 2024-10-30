"use client";

import React, { useState } from "react";
import { useRouter, useParams } from "next/navigation";

const SearchForm = ({ searchCourses, lang }) => {
	const [search, setSearch] = useState("");
	const router = useRouter();

	const handleSearch = (e) => {
		e.preventDefault();
		router.push(`/${lang}/courses?q=${search}`);
	};
	return (
		<form className="search-form style1" onSubmit={handleSearch}>
			<input
				type="text"
				className="form-control"
				placeholder={searchCourses}
				name="search"
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>
			<button type="submit" className="src-btn">
				<i className="flaticon-search"></i>
			</button>
		</form>
	);
};

export default SearchForm;

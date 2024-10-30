import ConfirmEmail from "@/components/Auth/ConfirmEmail";
import PageBanner from "@/components/Shared/PageBanner";
import React from "react";

export const metadata = {
	title: "Send COnfirmation Email | Edmy - React Nextjs Learning Management System",
};

const page = async ({ params: { lang } }) => {
	return (
		<>
			<PageBanner
				pageTitle="Send Confirmation Email"
				homePageUrl="/"
				homePageText="Home"
				activePageText="Send Confirmation Email"
				lang={lang}
			/>

			<ConfirmEmail />
		</>
	);
};

export default page;

import PageBanner from "@/components/Shared/PageBanner";
import PolicyContent from "./PolicyContent";

export const metadata = {
	title: "Privacy Policy | Edmy - React Nextjs Learning Management System",
};

const page = async ({ params: { lang } }) => {
	return (
		<>
			<PageBanner
				pageTitle="Privacy Policy"
				homePageUrl="/"
				homePageText="Home"
				activePageText="Privacy Policy"
				lang={lang}
			/>

			<PolicyContent />
		</>
	);
};

export default page;

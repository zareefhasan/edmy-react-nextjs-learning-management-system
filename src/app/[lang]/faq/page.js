import PageBanner from "@/components/Shared/PageBanner";
import FaqContent from "./FaqContent";
import Business from "@/components/Index/Business";

export const metadata = {
	title: "FAQ's | Edmy - React Nextjs Learning Management System",
};

const page = async ({ params: { lang } }) => {
	return (
		<>
			<PageBanner
				pageTitle="Frequently Asked Questions"
				homePageUrl="/"
				homePageText="Home"
				activePageText="FAQ's"
				lang={lang}
			/>

			<FaqContent />

			<Business />
		</>
	);
};

export default page;

import ContactForm from "@/components/ContactUs/ContactForm";
import ContactInfo from "@/components/ContactUs/ContactInfo";
import GoogleMap from "@/components/ContactUs/GoogleMap";
import PageBanner from "@/components/Shared/PageBanner";

export const metadata = {
	title: "Contact | Edmy - React Nextjs Learning Management System",
};

const page = ({ params: { lang } }) => {
	return (
		<>
			<PageBanner
				pageTitle="Contact Us"
				homePageUrl="/"
				homePageText="Home"
				activePageText="Contact Us"
				lang={lang}
			/>

			<ContactInfo />

			<ContactForm lang={lang} />

			<GoogleMap />
		</>
	);
};

export default page;

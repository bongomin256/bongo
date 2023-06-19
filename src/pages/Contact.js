import ContactHome from "../component/contact/ContactHome";
import PageSection from "../component/constants/PageSection";
import ContactForm from "../component/contact/ContactForm";

const Contact = () => {
  return (
    // <div>Contact</div>
    <PageSection>
      <h2 className="text-white text-xl text-center mb-14 capitalize">
        <span className="text-pink-main">/</span>contact
      </h2>
      <ContactForm />
    </PageSection>
  );
};

export default Contact;

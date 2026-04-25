import Banner from "@/components/Banner";
import ContactForm from "@/components/contact-us/ContactForm";
import React from "react";

const ContactUsPage = () => {
  return (
    <div>
      <Banner
        label="Contact"
        title="Get in Touch"
        subtitle="Have a project in mind or need expert consultation? Reach out to us and let’s build something powerful together."
        image="/contact-banner.jpg"
      />
      <ContactForm />
    </div>
  );
};

export default ContactUsPage;

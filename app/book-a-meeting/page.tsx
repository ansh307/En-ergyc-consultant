import BookingSection from "@/components/book-a-meeting/BookingSection";
import Banner from "@/components/Banner";
import React from "react";

const BookAMeetingPage = () => {
  return (
    <div>
      <Banner
        label="Consultation"
        title="Book a Meeting"
        subtitle="Schedule a consultation with our experts and take the first step towards powering your next project."
        image="/cta-3.jpg"
      />
      <BookingSection />
    </div>
  );
};

export default BookAMeetingPage;

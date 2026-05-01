import ReviewsSlider from "./ReviewsSlider";

export default function GoogleReviews() {
  const reviews = [
    {
      name: "Michael Turner",
      time: "2 months ago",
      text: "We partnered with Dynabolt for a multi-residential project, and their electrical design work was exceptional. The team was responsive, detail-oriented, and helped us avoid costly revisions during approvals.",
    },
    {
      name: "Priya Sharma",
      time: "5 months ago",
      text: "Their expertise in HVAC and plumbing design made a huge difference in our commercial build. Everything was well-coordinated, and the execution was smooth from start to finish.",
    },
    {
      name: "David Chen",
      time: "3 months ago",
      text: "Dynabolt guided us through EV charging infrastructure planning for our facility. Their knowledge of current standards and future scalability gave us a lot of confidence.",
    },
    {
      name: "Amit Verma",
      time: "6 months ago",
      text: "Very professional team with strong technical knowledge. They handled our fire alarm and life safety system design efficiently and ensured full compliance with regulations.",
    },
    {
      name: "Sarah Collins",
      time: "4 months ago",
      text: "Clear communication, practical solutions, and timely delivery. Working with Dynabolt made our project coordination much easier.",
    },
  ];
  return (
    <section className="w-full bg-[#f5f5f5] py-10 md:py-28 px-6 md:px-32">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="grid md:grid-cols-3 gap-4 items-start">
          <p className="text-sm text-gray-500 mb-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-green-600 rounded-full" />
            Google Reviews
          </p>

          <div className="max-w-lg md:mb-32 text-balance md:mx-auto col-span-2 xl:col-span-1">
            <h2 className="text-3xl md:text-5xl font-medium text-gray-900 leading-tight">
              EXCELLENT
            </h2>

            <div className="mt-2 flex items-center gap-2 text-sm text-gray-600">
              <span className="font-medium">Google</span>
              <span>• Based on 15 reviews</span>
            </div>
          </div>
        </div>

        {/* CLIENT SLIDER */}
        <ReviewsSlider reviews={reviews} />
      </div>
    </section>
  );
}

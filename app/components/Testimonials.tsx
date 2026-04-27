const testimonials = [
  {
    company: "ADP",
    logoClass: "text-[#c0392b]",
    quote:
      "We would like to thank Accredian for the wonderful support and the beautiful journey. The team turned our vision into reality with unparalleled dedication, service, and expertise throughout the entire process."
  },
  {
    company: "BAYER",
    logoClass: "text-[#15314f]",
    quote:
      "Accredian's commitment to excellence is unmatched. They consistently go the extra mile to ensure our needs are met and exceeded, providing reliable support and high-quality service every step of the way."
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-white py-20">
      <div className="section-shell">
        <div className="text-center">
          <h2 className="text-5xl font-extrabold tracking-tight text-gray-950">
            Testimonials from <span className="text-blue">Our Partners</span>
          </h2>
          <p className="mt-5 text-2xl font-bold text-gray-600">
            What <span className="text-blue">Our Clients</span> Are Saying
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {testimonials.map((testimonial) => (
            <article key={testimonial.company} className="min-h-[310px] rounded-xl border border-gray-300 bg-white px-12 py-12">
              <div className={`text-4xl font-black ${testimonial.logoClass}`}>{testimonial.company}</div>
              <blockquote className="mt-12 text-2xl font-bold leading-relaxed text-gray-600">
                &quot;{testimonial.quote}&quot;
              </blockquote>
            </article>
          ))}
        </div>

        <div className="mt-8 flex justify-center gap-3" aria-label="Testimonial pagination">
          <span className="h-3 w-3 rounded-full bg-blue" />
          <span className="h-3 w-3 rounded-full bg-gray-300" />
        </div>
      </div>
    </section>
  );
}

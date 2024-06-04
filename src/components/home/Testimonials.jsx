import React from "react";

const testimonialsData = [
  {
    name: "Jane Doe",
    image:
      "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
    quote: "This is the best product I have ever used. Highly recommend!",
    rating: 5,
  },
  {
    name: "John Smith",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
    quote: "Excellent quality and fantastic customer service.",
    rating: 4,
  },

  {
    name: "Alice Johnson",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww",
    quote: "Great value for money. I will definitely buy again!",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-12 bg-gray-100 min-h-[70vh]">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold mb-8">
          Customer Testimonials
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img
                src={testimonial.image}
                alt={`${name}'s picture`}
                className="w-16 h-16 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-center mb-2">
                {testimonial.name}
              </h3>
              <p className="text-gray-600 text-center mb-4">
                {testimonial.quote}
              </p>
              <div className="flex justify-center">
                {Array(testimonial.rating)
                  .fill()
                  .map((_, i) => (
                    <svg
                      key={i}
                      className="w-6 h-6 text-yellow-500"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .587l3.668 7.568L24 9.751l-6 5.848L19.336 24 12 20.025 4.664 24 6 15.599 0 9.751l8.332-1.596z" />
                    </svg>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

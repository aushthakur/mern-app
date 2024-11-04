import React from 'react';

const testimonials = [
  {
    id: 1,
    title: 'McNeese Home Inspections',
    stats: ['52.54% increase in organic users in 5 months', '48% increase in user engagement'],
  },
  {
    id: 2,
    title: 'Graniteheroes.com',
    stats: ['262 keywords ranking #1', '303.40% increase in organic traffic in 8 months'],
  },
  {
    id: 3,
    title: 'Tej Mander',
    review: 'Great service, good quality, very competitive pricing, and easy to work with. Highly recommended.',
    rating: 5,
  },
  {
    id: 4,
    title: 'Clean in Time',
    stats: ['343.7% increase in organic new users', '134.6% improvement in organic sessions'],
  },
  {
    id: 5,
    title: 'Allison McGuire Salon',
    stats: ['64.28% keywords are in the top 10 rankings', '1614.28% organic goals improved'],
  },
  {
    id: 6,
    title: 'Doris Rodriguez',
    review: 'Professional and timely! Tailored to my own style and vision, Digital Rafter did an amazing job.',
    rating: 5,
  },
  // Add more testimonials as needed
];

function App() {
  return (
    <div className="min-h-screen bg-pink-50 py-8">
      <h1 className="text-4xl font-bold text-center mb-12 text-orange-600">
        Results our clients can <span className="text-orange-500">feel</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-8">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">{testimonial.title}</h2>
            {testimonial.stats ? (
              <div className="space-y-2">
                {testimonial.stats.map((stat, index) => (
                  <p key={index} className="text-gray-600">{stat}</p>
                ))}
              </div>
            ) : (
              <div>
                <p className="text-gray-600 mb-4 italic">{testimonial.review}</p>
                <div className="flex items-center">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.975a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.385 2.457a1 1 0 00-.364 1.118l1.287 3.975c.3.921-.755 1.688-1.54 1.118l-3.385-2.457a1 1 0 00-1.175 0l-3.385 2.457c-.785.57-1.84-.197-1.54-1.118l1.286-3.975a1 1 0 00-.364-1.118L2.71 9.402c-.784-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.975z" />
                    </svg>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

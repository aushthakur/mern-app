import React, { useState } from 'react';
import logo from '../img/Untitled design (8).png';

const loremText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ".repeat(5).trim();


const caseStudies = [
  { id: 1, title: 'Bluecore', description: loremText, result: '550+' },
  { id: 2, title: 'Rankwatch', description: loremText, result: '400%' },
  { id: 3, title: 'TCMD', description: loremText, result: '292%' },
  { id: 4, title: 'RR Metals', description: loremText, result: '379%' },
  { id: 5, title: 'Shopify', description: loremText, result: '320%' },
  { id: 6, title: 'Metify', description: loremText, result: '600+' },
  { id: 7, title: 'Nextgen', description: loremText, result: '250%' },
];

const CaseStudiesSolarSystem = () => {
  const [hoveredCaseStudy, setHoveredCaseStudy] = useState(null);
  const radius = 225; // Radius for the orbit

  return (
    <div className="flex h-screen bg-white relative overflow-hidden">
      {/* Central Logo (Sun) */}
      <div
        className="absolute flex items-center justify-center z-10"
        style={{
          left: '17%', // Centered in the left portion
          top: '57%',
          transform: 'translateY(-50%)',
          zIndex: 10,
        }}
      >
        <img src={logo} alt="Logo" className="w-64 h-24" /> {/* Adjust size as necessary */}
      </div>

      {/* Revolving Case Studies with Bounce Effect */}
      {caseStudies.map((caseStudy, index) => {
        const angle = (360 / caseStudies.length) * index; // Evenly distribute items around the circle
        const x = Math.cos((angle * Math.PI) / 180) * radius;
        const y = Math.sin((angle * Math.PI) / 180) * radius;

        return (
          <div
            key={caseStudy.id}
            style={{
              position: 'absolute',
              top: `calc(50% + ${y}px)`,
              left: `calc(20% + ${x}px)`, // Align with the left logo
              transformOrigin: `-${x}px -${y}px`,
              animation: `orbit 10s infinite linear, bounce 2s ease-in-out infinite`,
              backgroundColor: '#ffffff',
              padding: '1rem',
              borderRadius: '50%',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              width: '8rem',
              height: '8rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
            }}
            className="hover:scale-110 transform transition-transform duration-300"
            onMouseEnter={() => setHoveredCaseStudy(caseStudy.id)}
            onMouseLeave={() => setHoveredCaseStudy(null)}
          >
            <h3 className="text-xs font-semibold">{caseStudy.title}</h3>
            <p className="text-red-500 text-lg font-bold">{caseStudy.result}</p>
          </div>
        );
      })}

      {/* Explanation Box */}
      {hoveredCaseStudy && (
        <div
          className="absolute right-96 top-1/2 transform -translate-y-1/2 bg-white p-4 shadow-lg rounded-lg"
          style={{
            width: '300px',
            transition: 'opacity 0.3s ease',
          }}
        >
          <h4 className="text-lg font-semibold">
            {caseStudies.find(cs => cs.id === hoveredCaseStudy).title}
          </h4>
          <p className="text-gray-700">
            {caseStudies.find(cs => cs.id === hoveredCaseStudy).description}
          </p>
          <p className="text-red-500 font-bold">
            Growth: {caseStudies.find(cs => cs.id === hoveredCaseStudy).result}
          </p>
        </div>
      )}

      {/* Inline CSS for custom animations */}
      <style>{`
        /* Keyframes for orbiting effect */
        @keyframes orbit {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        /* Keyframes for bounce effect */
        @keyframes bounce {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
      `}</style>
    </div>
  );
};

export default CaseStudiesSolarSystem;

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import attendanceImage from '../images/mobile-attendance.jpg';
import faceRecognitionImage from '../images/face-recognition.jpg';
import laundrySystemImage from '../images/smart-laundry.jpg';
import SolutionModal from './SolutionModal';

function SolutionsSection() {
  const [selectedSolution, setSelectedSolution] = useState(null);
  const solutionsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in', 'animate-reflection');
          }
        });
      },
      { threshold: 0.1 }
    );

    solutionsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const solutions = [
    {
      title: "Mobile Attendance System",
      description: "An intuitive mobile app that makes clocking in and out seamless for employees.",
      image: attendanceImage,
      details: "Our Mobile Attendance System revolutionizes how employees record their work hours. With geolocation features and real-time synchronization, it ensures accurate timekeeping while providing managers with instant insights into team attendance patterns.",
      chartData: [
        { name: 'Jan', users: 4000 },
        { name: 'Feb', users: 3000 },
        { name: 'Mar', users: 5000 },
        { name: 'Apr', users: 4500 },
        { name: 'May', users: 6000 },
        { name: 'Jun', users: 6500 },
      ]
    },
    {
      title: "Face Recognition Attendance System",
      description: "Advanced face recognition technology for accurate attendance tracking.",
      image: faceRecognitionImage,
      details: "Our Face Recognition Attendance System uses state-of-the-art AI to provide touchless, secure, and rapid attendance tracking. It integrates seamlessly with existing security systems and can handle high-volume foot traffic with ease.",
      chartData: [
        { name: 'Jan', users: 3000 },
        { name: 'Feb', users: 3500 },
        { name: 'Mar', users: 4000 },
        { name: 'Apr', users: 4800 },
        { name: 'May', users: 5500 },
        { name: 'Jun', users: 7000 },
      ]
    },
    {
      title: "Smart Laundry System",
      description: "Receive weekly QR codes to activate laundry machines with ease.",
      image: laundrySystemImage,
      details: "The Smart Laundry System brings convenience to shared laundry facilities. Users receive unique QR codes weekly, allowing them to easily activate machines, track their laundry status, and receive notifications when their cycle is complete.",
      chartData: [
        { name: 'Jan', users: 2000 },
        { name: 'Feb', users: 2500 },
        { name: 'Mar', users: 3000 },
        { name: 'Apr', users: 3800 },
        { name: 'May', users: 4500 },
        { name: 'Jun', users: 5500 },
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 text-center">Our Smart Solutions</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              ref={(el) => (solutionsRef.current[index] = el)}
              className="solution-card bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedSolution(solution)}
            >
              <div className="card-content">
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="mx-auto mb-6 w-32 h-32 object-contain rounded-full shadow-md"
                />
                <h3 className="text-xl font-semibold mb-3 text-center">{solution.title}</h3>
                <p className="text-gray-600 text-center">{solution.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <SolutionModal
        solution={selectedSolution}
        isOpen={!!selectedSolution}
        onClose={() => setSelectedSolution(null)}
      />
    </section>
  );
}

export default SolutionsSection;
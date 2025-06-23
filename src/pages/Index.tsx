
import React, { useState } from 'react';
import { ChevronDown, Plus, Minus } from 'lucide-react';

const Index = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const careerCategories = [
    {
      title: "Customer Service",
      subtitle: "Connecting businesses with customers",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=300&h=200&fit=crop"
    },
    {
      title: "Technology/IT",
      subtitle: "Live Work. Learn. Earn.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=200&fit=crop"
    },
    {
      title: "Sales & Marketing",
      subtitle: "Growth through strategic sales",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop"
    },
    {
      title: "Education & Training",
      subtitle: "Empowering minds, shaping futures",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=300&h=200&fit=crop"
    },
    {
      title: "Healthcare & Wellness",
      subtitle: "Caring for community health",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=200&fit=crop"
    },
    {
      title: "Creative Arts & Design",
      subtitle: "Bringing imagination to life",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=300&h=200&fit=crop"
    },
    {
      title: "Business & Administration",
      subtitle: "Managing operations efficiently",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop"
    },
    {
      title: "Engineering & Construction",
      subtitle: "Building tomorrow's infrastructure",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop"
    }
  ];

  const testimonials = [
    {
      name: "James Nsubuga",
      role: "Product Developer",
      company: "7+ James | Product Developer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      text: "E-Africa Has Completely Revolutionised How I Approach Career Growth! The Opportunities Are Limitless, Their Mentorship Sessions, Publish Courses, Or Connect With Industry Professionals To Explore Your Full Potential!"
    },
    {
      name: "Grace Nakato",
      role: "Software Developer",
      company: "1+ James | Product Developer",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      text: "E-Africa Has Completely Revolutionised How I Approach Career Growth! The New Approach Career Growth! It's A Revolutionary Platform That Empowers Self The Accountability Partner System Keeps Me So Have With My Goals. It's A Game-Changer For Professional Development."
    },
    {
      name: "Michael Ssali",
      role: "Product Designer",
      company: "7+ James | Product Designer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      text: "E-Africa Has Completely Revolutionised How I Approach Career Growth! The And The Accountability Partner System Keeps Me So Have With My Goals. It's A Professional Development."
    }
  ];

  const faqs = [
    {
      question: "What is e-africa, and how does it work?",
      answer: "E-Africa is a comprehensive career development platform that connects job seekers with opportunities across various industries in Africa."
    },
    {
      question: "Who Can Benefit From E-Africa?",
      answer: "Anyone looking to advance their career, from fresh graduates to experienced professionals seeking new opportunities."
    },
    {
      question: "How do I book a mentorship session?",
      answer: "You can book mentorship sessions through your dashboard after creating an account and selecting from our available mentors."
    },
    {
      question: "Can Employees Post Jobs On The Platform?",
      answer: "Yes, employers can post job opportunities and connect with qualified candidates through our platform."
    },
    {
      question: "What is e-africa, and how does it work?",
      answer: "E-Africa streamlines the job search and career development process through AI-powered matching and comprehensive resources."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">E</span>
                </div>
                <span className="text-xl font-bold text-gray-900">AFRICA</span>
              </div>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-emerald-600">About Us</a>
              <a href="#" className="text-gray-700 hover:text-emerald-600">For Candidates</a>
              <a href="#" className="text-gray-700 hover:text-emerald-600">For Companies</a>
              <a href="#" className="text-gray-700 hover:text-emerald-600">Freelance</a>
              <a href="#" className="text-gray-700 hover:text-emerald-600">Blogs</a>
            </nav>

            <div className="flex items-center space-x-4">
              <button className="text-gray-700 hover:text-emerald-600">Sign In</button>
              <button className="bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-100 to-gray-200 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                Candidates
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Unlock Your Potential: Opportunities, Mentorship, and Growth Await
              </h1>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop" 
                alt="Professional woman working" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Career Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Explore Diverse Career Paths
            </h2>
            <p className="text-gray-600">
              Find Job Opportunities Across Industries Tailored To Your Skills And Aspirations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {careerCategories.map((category, index) => (
              <div key={index} className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-semibold text-lg mb-1">{category.title}</h3>
                  <p className="text-sm opacity-90">{category.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 Steps Section */}
      <section className="py-16 bg-emerald-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border border-white rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 border border-white rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white rounded-full"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Just 3 Simple Steps To Kickstart Your Journey!
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-white text-emerald-600 rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Sign Up And Create Your Profile</h3>
                  <p className="text-emerald-100">
                    Start By Joining Us And Creating A Detailed Profile That Showcases Your Professional Skills And Career Goals. Whether You're A Recent Graduate, A Career Changer, Or An Experienced Professional Looking To Connect With The Right Opportunities And People Online Platform.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:pl-8">
              <div className="bg-white p-4 rounded-lg shadow-lg max-w-sm mx-auto">
                <div className="bg-gray-100 p-6 rounded-lg">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-900 font-medium">Sign Up</span>
                      <span className="text-gray-500">or continue with email</span>
                    </div>
                    <div className="space-y-3">
                      <input 
                        type="text" 
                        placeholder="Full Name" 
                        className="w-full p-3 border border-gray-300 rounded-md"
                      />
                      <input 
                        type="email" 
                        placeholder="Email Address" 
                        className="w-full p-3 border border-gray-300 rounded-md"
                      />
                      <button className="w-full bg-emerald-600 text-white p-3 rounded-md hover:bg-emerald-700">
                        Continue
                      </button>
                    </div>
                    <p className="text-xs text-gray-500 text-center">
                      Or continue with
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Unlock Your Earning Potential With E-Africa
            </h2>
            <p className="text-gray-600 max-w-4xl mx-auto">
              E-Africa Is More Than Just A Platform — It's Your Launchpad To Diverse Income Streams. Whether You're Building A Career Or Starting Freelance, Their Opportunities Are Limitless, Their Mentorship Sessions, Publish Courses, Or Connect With Industry Professionals To Explore Your Full Potential.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center space-x-4 mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">{testimonial.text}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8 space-x-4">
            <button className="bg-emerald-600 text-white px-6 py-2 rounded-md hover:bg-emerald-700">
              Hiring Manager
            </button>
            <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-50">
              Virtual Assistant
            </button>
            <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-50">
              Content Writer
            </button>
            <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-50">
              Software Developer
            </button>
            <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-50">
              Copy Writer
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                FREQUENTLY ASKED QUESTIONS
              </h2>
              <button className="bg-emerald-600 text-white px-6 py-3 rounded-md hover:bg-emerald-700">
                Get started for free
              </button>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
                  >
                    <span className="font-medium text-gray-900">{faq.question}</span>
                    {openFAQ === index ? (
                      <Minus className="w-5 h-5 text-gray-500" />
                    ) : (
                      <Plus className="w-5 h-5 text-gray-500" />
                    )}
                  </button>
                  {openFAQ === index && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gray-900 text-white relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=600&fit=crop')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-3xl font-bold mb-4">Join Us Today</h2>
          <p className="text-xl mb-6">
            Be A Part Of The Movement Shaping Africa's Future. Whether You're A Job Seeker, Student, Professional, Or Industry Expert, E-Africa Is Here To Help You Thrive.
          </p>
          <p className="mb-8 text-lg">
            Together, We'll Empower A Billion Talents.
          </p>
          <button className="bg-emerald-600 text-white px-8 py-3 rounded-md hover:bg-emerald-700 text-lg">
            Get started for free
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Logo Column */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">E</span>
                </div>
                <span className="text-xl font-bold text-gray-900">AFRICA</span>
              </div>
              <p className="text-sm text-gray-600 mb-4">JOIN US ON</p>
              <div className="flex space-x-3">
                <div className="w-8 h-8 bg-gray-200 rounded"></div>
                <div className="w-8 h-8 bg-gray-200 rounded"></div>
                <div className="w-8 h-8 bg-gray-200 rounded"></div>
                <div className="w-8 h-8 bg-gray-200 rounded"></div>
              </div>
            </div>

            {/* About Us */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">About Us</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-emerald-600">Our Mission</a></li>
                <li><a href="#" className="hover:text-emerald-600">Our Team</a></li>
                <li><a href="#" className="hover:text-emerald-600">Our Values</a></li>
                <li><a href="#" className="hover:text-emerald-600">Reviews</a></li>
                <li><a href="#" className="hover:text-emerald-600">Blog</a></li>
              </ul>
            </div>

            {/* Candidates */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Candidates</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-emerald-600">Job Search</a></li>
                <li><a href="#" className="hover:text-emerald-600">How To Apply</a></li>
                <li><a href="#" className="hover:text-emerald-600">Resume Building</a></li>
                <li><a href="#" className="hover:text-emerald-600">All Interview Questions</a></li>
              </ul>
            </div>

            {/* Companies */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Companies</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-emerald-600">Hire Talents</a></li>
                <li><a href="#" className="hover:text-emerald-600">Post A Job</a></li>
              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Contact us</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p>📧 info@e-africa-online.com</p>
                <p>📞 (+256) 703 - 4950</p>
                <p>📍 174 Hamdem St, Suit W1W SB5</p>
                <p>🌍 Plot 67, Jama Place, Bugolobi, Uganda</p>
              </div>
            </div>
          </div>

          <div className="border-t pt-8 mt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-gray-600">Copyright © 2024 E-Africa</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-sm text-gray-600 hover:text-emerald-600">All Rights Reserved</a>
                <a href="#" className="text-sm text-gray-600 hover:text-emerald-600">Terms and Conditions</a>
                <a href="#" className="text-sm text-gray-600 hover:text-emerald-600">Privacy Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

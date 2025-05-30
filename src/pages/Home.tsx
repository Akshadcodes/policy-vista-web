import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ShieldCheck, FileCheck, LifeBuoy, User, Users, Car, Plane, Home as HomeIcon, Ship } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';
import { useSpring, animated, useTrail } from 'react-spring';
import { AnimatedWords, FadeIn, SlideIn, FloatingAnimation } from '@/hooks/use-text-animation';
import { BackgroundGradientAnimation } from '@/components/ui/gradient-animations';
import { WavyBackground } from '@/components/ui/wavy-background';
import { HeroParallax } from '@/components/ui/hero-parallax';
import { motion } from 'framer-motion';

const insuranceCategories = [
  { icon: Car, title: "Auto Insurance", color: "from-orange-400 to-red-600" },
  { icon: LifeBuoy, title: "Health Insurance", color: "from-blue-400 to-purple-600" },
  { icon: HomeIcon, title: "Home Insurance", color: "from-green-400 to-emerald-600" },
  { icon: Plane, title: "Travel Insurance", color: "from-violet-400 to-fuchsia-600" },
  { icon: Ship, title: "Marine Insurance", color: "from-cyan-400 to-sky-600" }
];

const Home = () => {
  // Logo animation
  const logoAnimation = useSpring({
    from: { opacity: 0, scale: 0.8, rotate: -10 },
    to: { opacity: 1, scale: 1, rotate: 0 },
    config: { mass: 5, tension: 500, friction: 80 },
    delay: 300,
  });
  
  // Headline animation
  const headlineAnimation = useSpring({
    from: { opacity: 0, y: 30 },
    to: { opacity: 1, y: 0 },
    config: { tension: 300, friction: 30 },
    delay: 500,
  });
  
  // Subtitle animation
  const subtitleAnimation = useSpring({
    from: { opacity: 0, y: 20 },
    to: { opacity: 1, y: 0 },
    config: { tension: 300, friction: 30 },
    delay: 700,
  });
  
  // Button animations
  const buttonAnimations = useTrail(2, {
    from: { opacity: 0, y: 30 },
    to: { opacity: 1, y: 0 },
    config: { mass: 1, tension: 280, friction: 60 },
    delay: 900,
  });
  
  // Category icons animation
  const categoryTrail = useTrail(insuranceCategories.length, {
    from: { opacity: 0, scale: 0.8, y: 30 },
    to: { opacity: 1, scale: 1, y: 0 },
    config: { mass: 2, tension: 280, friction: 50 },
    delay: 1100,
  });
  
  return (
    <>
      {/* Hero Section with animated background and wave pattern */}
      <WavyBackground className="pt-32 pb-32 lg:min-h-screen flex flex-col justify-center items-center relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="flex flex-col items-center text-center mb-12">
            <animated.div style={logoAnimation} className="mb-8">
              <img src="/SKIS-uploads/logo.png" alt="SKIS - SHRI KRISHNA INSURANCE SERVICE Logo" className="w-32 h-32 object-contain rounded-full shadow-lg bg-white" />
            </animated.div>
            
            <animated.h1 style={headlineAnimation} className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700">
              Secure Your Future with SKIS
            </animated.h1>
            
            <animated.p style={subtitleAnimation} className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-8 max-w-2xl">
              Comprehensive insurance solutions tailored to protect what matters most to you and your family
            </animated.p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <animated.div style={buttonAnimations[0]}>
                <Button 
                  size="lg" 
                  className="bg-orange-500 hover:bg-orange-600 text-white shadow-[0_4px_14px_0_rgb(249_115_22_/_30%)] hover:shadow-[0_6px_20px_rgb(249_115_22_/_40%)] transition-all duration-300 hover:translate-y-[-2px]"
                >
                  Explore Plans
                  <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                  </svg>
                </Button>
              </animated.div>
              <animated.div style={buttonAnimations[1]}>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300"
                >
                  Get a Free Quote
                </Button>
              </animated.div>
            </div>
          </div>
          
          {/* Floating Insurance Category Icons */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-12">
            {categoryTrail.map((style, i) => (
              <animated.div key={i} style={style}>
                <FloatingAnimation 
                  className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-4 flex flex-col items-center justify-center text-center cursor-pointer hover:shadow-2xl transition-all duration-300 hover:scale-105"
                  duration={3 + i * 0.5}
                  distance={10}
                >
                  <div className={`p-4 mb-3 rounded-full bg-gradient-to-br ${insuranceCategories[i].color}`}>
                    {React.createElement(insuranceCategories[i].icon, { className: "h-12 w-12 text-white" })}
                  </div>
                  <h3 className="font-medium">{insuranceCategories[i].title}</h3>
                </FloatingAnimation>
              </animated.div>
            ))}
          </div>
        </div>
      </WavyBackground>

      {/* Features Section with animated cards */}
      <section className="section py-24 bg-gradient-to-b from-white to-orange-50">
        <div className="container-custom">
          <SectionHeading 
            title="Why Choose SKIS"
            subtitle="We offer comprehensive insurance solutions with a client-first approach and personalized service."
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: ShieldCheck,
                title: "Complete Protection",
                description: "Our policies provide extensive coverage to ensure you're protected against all potential risks."
              },
              {
                icon: FileCheck,
                title: "Fast Claims Processing",
                description: "Our efficient claims process ensures quick payments without unnecessary hassle."
              },
              {
                icon: Users,
                title: "Family-First Approach",
                description: "We treat each client like family, providing personalized solutions for your unique needs."
              }
            ].map((feature, index) => (
              <SlideIn 
                key={index}
                direction="up" 
                className="h-full"
                delay={0.1 * index}
              >
                <motion.div 
                  className="h-full bg-white rounded-2xl p-6 shadow-[0_0_20px_rgba(249,115,22,0.07)] border border-orange-100 transition-all duration-300 hover:shadow-[0_20px_40px_rgba(249,115,22,0.1)] hover:border-orange-200 hover:translate-y-[-5px] flex flex-col items-center text-center"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <motion.div 
                    className={`mb-4 p-4 rounded-full inline-block
                      ${index === 0 && 'bg-gradient-to-br from-blue-400 to-purple-400'}
                      ${index === 1 && 'bg-gradient-to-br from-green-400 to-cyan-400'}
                      ${index === 2 && 'bg-gradient-to-br from-yellow-400 to-red-400'}
                    `}
                    animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 4 + index * 0.5 }}
                  >
                    {React.createElement(feature.icon, { className: "h-8 w-8 text-white" })}
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              </SlideIn>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview with Gradient Background Animation */}
      <BackgroundGradientAnimation>
        <div className="py-24 w-full">
          <div className="container-custom relative z-10">
            <SectionHeading 
              title="Our Insurance Services"
              subtitle="Discover our comprehensive range of insurance products designed to protect you and your family"
            />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <ServiceCard 
                title="Life Insurance" 
                description="Protect your family's financial future with our comprehensive life insurance plans."
                icon={ShieldCheck}
              />
              <ServiceCard 
                title="Health Insurance" 
                description="Get access to quality healthcare with our flexible health insurance policies."
                icon={LifeBuoy}
              />
              <ServiceCard 
                title="Property Insurance" 
                description="Safeguard your home and belongings against unexpected damages and losses."
                icon={FileCheck}
              />
            </div>
            
            <div className="text-center mt-12">
              <Button asChild className="bg-orange-500 hover:bg-orange-600 shadow-[0_4px_14px_0_rgb(249_115_22_/_30%)] hover:shadow-[0_6px_20px_rgb(249_115_22_/_40%)] transition-all duration-300 hover:translate-y-[-2px]">
                <Link to="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </BackgroundGradientAnimation>

      {/* CTA Section with gradient background */}
      <section className="py-24 bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedWords 
              text="Ready to Get Protected?"
              className="text-3xl md:text-4xl font-bold mb-6 leading-tight"
              once={true}
              delay={0.1}
            />
            <p className="text-lg mb-8 text-white/90">
              Don't wait until it's too late. Contact our team today for a free consultation and quote.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                className="bg-white text-orange-600 hover:bg-white/90 shadow-lg transition-all duration-300 hover:shadow-xl hover:translate-y-[-2px]" 
                size="lg"
              >
                Get a Free Quote
              </Button>
              <Button 
                className="bg-white text-orange-600 hover:bg-white/90 shadow-lg transition-all duration-300 hover:shadow-xl hover:translate-y-[-2px]" 
                size="lg"
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials with animated cards */}
      <section className="section bg-white py-24">
        <div className="container-custom">
          <SectionHeading 
            title="What Our Clients Say"
            subtitle="Don't just take our word for it. Here's what our satisfied clients have to say about SKIS."
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FadeIn delay={0.1}>
              <TestimonialCard 
                quote="SKIS helped me find the perfect life insurance plan for my family. Their advisors were knowledgeable and patient throughout the process."
                name="Sarah Johnson"
                position="Client since 2019"
                image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
              />
            </FadeIn>
            <FadeIn delay={0.3}>
              <TestimonialCard 
                quote="I've saved over 30% on my insurance premiums after switching to SKIS. Their customer service is exceptional."
                name="Michael Rodriguez"
                position="Client since 2020"
                image="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
              />
            </FadeIn>
            <FadeIn delay={0.5}>
              <TestimonialCard 
                quote="When my home was damaged in a storm, SKIS processed my claim quickly and efficiently. I couldn't be happier with their service."
                name="Emily Chen"
                position="Client since 2018"
                image="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
              />
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;


import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ShieldCheck, FileCheck, LifeBuoy, User, Users, DollarSign, CheckCircle, ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';

const Home = () => {
  return (
    <>
      {/* Hero Section with gradient background and wave pattern */}
      <section className="pt-28 pb-20 lg:min-h-[90vh] lg:flex lg:items-center relative overflow-hidden bg-gradient-to-r from-primary/5 to-primary/10">
        {/* Background wave pattern */}
        <div className="absolute inset-0 z-0 opacity-30">
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" className="w-full h-full">
            <defs>
              <pattern id="wave" width="200" height="200" patternUnits="userSpaceOnUse">
                <path fill="none" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="2"
                  d="M0,100 C40,80 60,120 100,100 C140,80 160,120 200,100 C240,80 260,120 300,100 C340,80 360,120 400,100"
                  transform="translate(0, 0)" />
                <path fill="none" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="2"
                  d="M0,100 C40,80 60,120 100,100 C140,80 160,120 200,100 C240,80 260,120 300,100 C340,80 360,120 400,100"
                  transform="translate(0, 20)" />
                <path fill="none" stroke="rgba(59, 130, 246, 0.1)" strokeWidth="2"
                  d="M0,100 C40,80 60,120 100,100 C140,80 160,120 200,100 C240,80 260,120 300,100 C340,80 360,120 400,100"
                  transform="translate(0, 40)" />
              </pattern>
            </defs>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#wave)" />
          </svg>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in order-2 md:order-1">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Insurance Solutions <span className="text-primary">You Can Trust</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
                We provide expert guidance to protect what matters most to you. Get personalized insurance solutions tailored to your unique needs.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 shadow-md transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg"
                >
                  Get a Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
            <div className="relative animate-fade-in order-1 md:order-2">
              <div className="absolute top-[-2rem] right-[-2rem] w-32 h-32 bg-accent/20 rounded-full"></div>
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl transform transition-transform duration-500 hover:scale-[1.02] hover:shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1721322800607-8c38375eef04" 
                  alt="Insurance Protection" 
                  className="w-full h-auto rounded-2xl" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl"></div>
              </div>
              <div className="absolute bottom-[-2rem] left-[-2rem] w-24 h-24 bg-primary/10 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section bg-white py-20">
        <div className="container-custom">
          <SectionHeading 
            title="Why Choose PolicyVista"
            subtitle="We offer comprehensive insurance solutions with a focus on client satisfaction and personalized service."
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <ShieldCheck className="h-8 w-8 text-primary" />,
                title: "Comprehensive Protection",
                description: "Our policies provide all-around coverage to ensure you're protected against all potential risks."
              },
              {
                icon: <DollarSign className="h-8 w-8 text-primary" />,
                title: "Affordable Premiums",
                description: "We offer competitive rates that provide the best value for the coverage you receive."
              },
              {
                icon: <CheckCircle className="h-8 w-8 text-primary" />,
                title: "Fast Claims Processing",
                description: "Our streamlined claims process ensures you get your payment quickly and hassle-free."
              },
              {
                icon: <Users className="h-8 w-8 text-primary" />,
                title: "Expert Advisors",
                description: "Our team of experienced professionals provides personalized guidance tailored to your needs."
              },
              {
                icon: <FileCheck className="h-8 w-8 text-primary" />,
                title: "Transparent Policies",
                description: "We ensure you fully understand your coverage with clear, jargon-free policy documents."
              },
              {
                icon: <User className="h-8 w-8 text-primary" />,
                title: "Personalized Service",
                description: "We treat each client as unique, providing customized solutions that address your specific concerns."
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-6 shadow-soft border border-gray-100 transition-all duration-300 hover:shadow-md hover:border-primary/10 hover:translate-y-[-5px]"
              >
                <div className="mb-4 p-3 bg-primary/10 rounded-lg inline-block">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section bg-insurance-gray py-20">
        <div className="container-custom">
          <SectionHeading 
            title="Our Insurance Services"
            subtitle="Discover our range of insurance products designed to protect you, your family, and your assets"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
            <Button asChild className="transition-all duration-300 hover:translate-y-[-2px]">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section with gradient background */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/90 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Protected?</h2>
            <p className="text-lg mb-8 text-white/90">
              Don't wait until it's too late. Contact our team today for a free consultation and quote.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                className="bg-white text-primary hover:bg-white/90 transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px]" 
                size="lg"
              >
                Get a Free Quote
              </Button>
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-primary transition-all duration-300" 
                size="lg"
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-white py-20">
        <div className="container-custom">
          <SectionHeading 
            title="What Our Clients Say"
            subtitle="Don't just take our word for it. Here's what our satisfied clients have to say about our services."
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard 
              quote="PolicyVista helped me find the perfect life insurance plan for my family. Their advisors were knowledgeable and patient throughout the process."
              name="Sarah Johnson"
              position="Client since 2019"
              image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
            />
            <TestimonialCard 
              quote="I've saved over 30% on my insurance premiums after switching to PolicyVista. Their customer service is exceptional."
              name="Michael Rodriguez"
              position="Client since 2020"
              image="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
            />
            <TestimonialCard 
              quote="When my home was damaged in a storm, PolicyVista processed my claim quickly and efficiently. I couldn't be happier with their service."
              name="Emily Chen"
              position="Client since 2018"
              image="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

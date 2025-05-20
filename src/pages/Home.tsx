
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ShieldCheck, FileCheck, LifeBuoy, User, Users, DollarSign, CheckCircle } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-16 bg-gradient-to-r from-primary/5 to-primary/10">
        <div className="container-custom grid md:grid-cols-2 gap-8 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Insurance Solutions <span className="text-primary">You Can Trust</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
              We provide expert guidance to protect what matters most to you. Get personalized insurance solutions tailored to your unique needs.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90">Get a Free Quote</Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
          <div className="relative animate-fade-in">
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent/20 rounded-full"></div>
            <img 
              src="https://images.unsplash.com/photo-1721322800607-8c38375eef04" 
              alt="Insurance Protection" 
              className="w-full h-auto rounded-2xl shadow-lg relative z-10" 
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section bg-white">
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
              <div key={index} className="bg-white rounded-xl p-6 shadow-soft border border-gray-100">
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
      <section className="section bg-insurance-gray">
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
            <Button asChild>
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Protected?</h2>
            <p className="text-lg mb-8 text-white/80">
              Don't wait until it's too late. Contact our team today for a free consultation and quote.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-white text-primary hover:bg-white/90" size="lg">Get a Free Quote</Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary" size="lg">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-white">
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

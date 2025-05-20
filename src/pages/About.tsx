
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import SectionHeading from '@/components/SectionHeading';
import { CheckCircle, Award, TrendingUp, Users } from 'lucide-react';

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary/5 py-20 lg:py-28">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About PolicyVista</h1>
            <p className="text-xl text-muted-foreground">Your trusted partner in insurance solutions since 2005.</p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2005, PolicyVista began with a simple mission: to make insurance accessible, understandable, and beneficial for everyone. We recognized that many people find insurance confusing and overwhelming, so we set out to change that perception.
              </p>
              <p className="text-gray-600 mb-4">
                Our founder, John Smith, had experienced firsthand the challenges of navigating insurance claims after a personal loss. This experience inspired him to create a company that would prioritize transparency, simplicity, and customer service.
              </p>
              <p className="text-gray-600 mb-6">
                Over the years, we've grown from a small local agency to a respected name in the insurance industry, but our commitment to our clients has never wavered. We continue to put people first in everything we do.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild>
                  <Link to="/services">Our Services</Link>
                </Button>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white" asChild>
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent/20 rounded-full"></div>
              <img 
                src="https://images.unsplash.com/photo-1483058712412-4245e9b90334" 
                alt="PolicyVista Office" 
                className="rounded-2xl shadow-lg relative z-10" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section bg-insurance-gray">
        <div className="container-custom">
          <SectionHeading 
            title="Our Core Values"
            subtitle="These principles guide our decisions and define how we serve our clients every day."
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <CheckCircle className="h-10 w-10 text-primary" />,
                title: "Integrity",
                description: "We conduct business with honesty and transparency in every interaction."
              },
              {
                icon: <Users className="h-10 w-10 text-primary" />,
                title: "Client-Focused",
                description: "Our clients' needs and satisfaction are at the center of everything we do."
              },
              {
                icon: <Award className="h-10 w-10 text-primary" />,
                title: "Excellence",
                description: "We strive for excellence in our service, products, and customer support."
              },
              {
                icon: <TrendingUp className="h-10 w-10 text-primary" />,
                title: "Innovation",
                description: "We continuously improve and adapt to better serve our clients' evolving needs."
              }
            ].map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-soft text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full inline-block">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section">
        <div className="container-custom">
          <SectionHeading 
            title="Our Leadership Team"
            subtitle="Meet the experts who are dedicated to providing you with the best insurance solutions."
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "John Smith",
                position: "CEO & Founder",
                image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
                bio: "With over 25 years of experience in the insurance industry, John founded PolicyVista with a vision to transform insurance services."
              },
              {
                name: "Sarah Johnson",
                position: "Chief Operations Officer",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
                bio: "Sarah oversees all operational aspects of PolicyVista, ensuring we deliver exceptional service to every client."
              },
              {
                name: "Michael Chen",
                position: "Chief Financial Officer",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
                bio: "Michael brings 15 years of financial expertise to ensure PolicyVista remains financially strong and stable."
              },
              {
                name: "Emily Rodriguez",
                position: "Head of Client Services",
                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
                bio: "Emily leads our client services team, focusing on delivering personalized support and solutions to every client."
              }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-soft overflow-hidden">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary mb-4">{member.position}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section bg-primary text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "15+", label: "Years of Experience" },
              { number: "10,000+", label: "Satisfied Clients" },
              { number: "98%", label: "Claims Approval Rate" },
              { number: "24/7", label: "Customer Support" }
            ].map((stat, index) => (
              <div key={index} className="p-6">
                <p className="text-4xl md:text-5xl font-bold mb-2 text-accent">{stat.number}</p>
                <p className="text-lg text-white/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-insurance-gray">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Work with Us?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of satisfied clients who trust PolicyVista with their insurance needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link to="/contact">Contact Us Today</Link>
              </Button>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white" size="lg" asChild>
                <Link to="/services">Explore Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

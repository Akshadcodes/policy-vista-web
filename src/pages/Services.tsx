import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import SectionHeading from '@/components/SectionHeading';
import ServiceCard from '@/components/ServiceCard';
import { ShieldCheck, FileCheck, LifeBuoy, Home, DollarSign, CreditCard, Users } from 'lucide-react';
import { WavyBackground } from '@/components/ui/wavy-background';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Life Insurance",
      description: "Protect your loved ones' financial future with our comprehensive life insurance plans tailored to your specific needs and budget.",
      icon: ShieldCheck,
      features: ["Term life insurance", "Whole life insurance", "Universal life insurance", "Variable life insurance"]
    },
    {
      id: 2,
      title: "Health Insurance",
      description: "Access quality healthcare with our flexible health insurance policies that cover medical expenses, critical illnesses, and more.",
      icon: LifeBuoy,
      features: ["Individual health plans", "Family health coverage", "Critical illness coverage", "Dental and vision plans"]
    },
    {
      id: 3,
      title: "Property Insurance",
      description: "Safeguard your home and belongings against unexpected damages and losses with our comprehensive property insurance solutions.",
      icon: Home,
      features: ["Homeowner's insurance", "Renter's insurance", "Flood insurance", "Natural disaster coverage"]
    },
    {
      id: 4,
      title: "Auto Insurance",
      description: "Drive with confidence knowing you're protected by our reliable auto insurance policies that cover accidents, theft, and liability.",
      icon: FileCheck,
      features: ["Liability coverage", "Collision coverage", "Comprehensive coverage", "Uninsured motorist protection"]
    },
    {
      id: 5,
      title: "Business Insurance",
      description: "Protect your business assets, employees, and operations with our tailored business insurance solutions for companies of all sizes.",
      icon: CreditCard,
      features: ["General liability", "Professional liability", "Workers' compensation", "Business interruption"]
    },
    {
      id: 6,
      title: "Group Insurance",
      description: "Offer your employees valuable benefits with our group insurance plans that include health, life, and disability coverage options.",
      icon: Users,
      features: ["Group health plans", "Group life insurance", "Disability insurance", "Retirement plans"]
    },
  ];

  return (
    <>
      {/* Hero Section with Wavy Background */}
      <WavyBackground className="py-20 lg:py-28">
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 text-transparent bg-clip-text animate-pulse">Our Services</h1>
            <p className="text-xl text-muted-foreground animate-fade-in">Comprehensive insurance solutions to protect what matters most to you.</p>
          </div>
        </div>
      </WavyBackground>

      {/* Services Overview */}
      <section className="section">
        <div className="container-custom">
          <SectionHeading 
            title="Insurance Solutions"
            subtitle="We offer a wide range of insurance products designed to protect individuals, families, and businesses."
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard 
                key={service.id}
                title={service.title} 
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Service */}
      <section className="section bg-primary/5">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Personalized Insurance Consultation</h2>
              <p className="text-gray-600 mb-6">
                Not sure what insurance coverage you need? Our expert advisors provide personalized consultations to help you find the perfect insurance solutions for your unique situation.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "One-on-one sessions with insurance experts",
                  "Comprehensive needs analysis",
                  "Customized insurance recommendations",
                  "Regular policy reviews and updates"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2 mt-1 text-primary">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.3334 4L6.00008 11.3333L2.66675 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <Button asChild>
                <Link to="/contact">Schedule a Consultation</Link>
              </Button>
            </div>
            <div className="relative">
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-full"></div>
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                alt="Insurance Consultation" 
                className="rounded-2xl shadow-lg relative z-10" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Details Accordion */}
      <section className="section">
        <div className="container-custom">
          <SectionHeading 
            title="Detailed Service Information"
            subtitle="Learn more about our insurance offerings and how they can benefit you."
          />
          
          <div className="space-y-6">
            {services.map((service, index) => (
              <motion.div 
                key={service.id}
                className="border border-gray-200 rounded-xl overflow-hidden bg-white/90 hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                whileHover={{ translateY: -5 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="bg-white p-6">
                  <div className="flex items-start gap-4">
                    <motion.div 
                      className={`p-3 rounded-lg inline-block
                        ${index === 0 && 'bg-gradient-to-br from-orange-400 to-pink-400'}
                        ${index === 1 && 'bg-gradient-to-br from-blue-400 to-violet-400'}
                        ${index === 2 && 'bg-gradient-to-br from-green-400 to-cyan-400'}
                        ${index === 3 && 'bg-gradient-to-br from-yellow-400 to-red-400'}
                        ${index === 4 && 'bg-gradient-to-br from-purple-400 to-indigo-400'}
                        ${index === 5 && 'bg-gradient-to-br from-teal-400 to-lime-400'}
                      `}
                      animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.2, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                    >
                      <service.icon className="h-6 w-6 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <h4 className="font-medium mb-2">Key Features:</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center">
                            <span className="mr-2 text-primary">
                              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.3334 4L6.00008 11.3333L2.66675 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-insurance-gray">
        <div className="container-custom">
          <SectionHeading 
            title="Our Process"
            subtitle="Getting insured with PolicyVista is simple and straightforward."
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Initial Consultation",
                description: "We start with understanding your needs and goals."
              },
              {
                step: "02",
                title: "Custom Analysis",
                description: "Our experts analyze your requirements and assess potential risks."
              },
              {
                step: "03",
                title: "Tailored Solutions",
                description: "We create personalized insurance solutions just for you."
              },
              {
                step: "04",
                title: "Ongoing Support",
                description: "We provide continuous service and regular policy reviews."
              }
            ].map((process, index) => (
              <motion.div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-soft text-center hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                whileHover={{ translateY: -5 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
              >
                <motion.div 
                  className={`text-2xl font-bold mb-4 inline-block 
                    ${index === 0 && 'bg-gradient-to-br from-orange-500 to-pink-500 text-white p-2 rounded-md'}
                    ${index === 1 && 'bg-gradient-to-br from-blue-500 to-violet-500 text-white p-2 rounded-md'}
                    ${index === 2 && 'bg-gradient-to-br from-green-500 to-cyan-500 text-white p-2 rounded-md'}
                    ${index === 3 && 'bg-gradient-to-br from-yellow-500 to-red-500 text-white p-2 rounded-md'}
                  `}
                  animate={{ scale: [1, 1.1, 1], transition: { duration: 1, repeat: Infinity, repeatDelay: 3 + index * 0.5 } }}
                >
                  {process.step}
                </motion.div>
                <h3 className="text-xl font-semibold mb-3">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Protected?</h2>
            <p className="text-xl mb-8 text-white/80">
              Contact us today to discuss your insurance needs and get a free quote.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-white text-primary hover:bg-white/90 shadow-lg transition-all duration-300 hover:shadow-xl hover:translate-y-[-2px]" size="lg">
                Get a Free Quote
              </Button>
              <Button className="bg-white text-primary hover:bg-white/90 shadow-lg transition-all duration-300 hover:shadow-xl hover:translate-y-[-2px]" size="lg" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;

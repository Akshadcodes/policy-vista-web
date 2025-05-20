
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import ContactForm from '@/components/ContactForm';

const Contact = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary/5 py-20 lg:py-28">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-muted-foreground">
              Have questions or need assistance? We're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info and Form */}
      <section className="section">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Address</h3>
                    <p className="text-gray-600">123 Insurance Ave, Financial District<br />New York, NY 10001</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-gray-600">contact@policyvista.com</p>
                    <p className="text-gray-600">support@policyvista.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-gray-600">(123) 456-7890</p>
                    <p className="text-gray-600">(123) 456-7891</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-primary/5 p-6 rounded-xl">
                <h3 className="font-semibold mb-4">Business Hours</h3>
                <ul className="space-y-2">
                  <li className="flex items-center justify-between">
                    <span className="text-gray-600">Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="text-gray-600">Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="text-gray-600">Sunday</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section bg-insurance-gray">
        <div className="container-custom">
          <SectionHeading 
            title="Our Location"
            subtitle="Visit us at our office or contact us online – we're always ready to assist you."
          />
          
          <div className="aspect-[16/9] w-full rounded-xl overflow-hidden shadow-lg">
            {/* For a real site, you would integrate Google Maps here. This is a placeholder. */}
            <div className="w-full h-full bg-gray-300 flex items-center justify-center">
              <p className="text-lg text-gray-600">Interactive Map Would Be Here</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section">
        <div className="container-custom">
          <SectionHeading 
            title="Frequently Asked Questions"
            subtitle="Find quick answers to common questions about our insurance services."
          />
          
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            {[
              {
                question: "How do I file an insurance claim?",
                answer: "You can file a claim by calling our customer service line, using our online portal, or visiting our office in person. Our claims processing team will guide you through the necessary steps."
              },
              {
                question: "How long does it take to process a claim?",
                answer: "Most claims are processed within 5-7 business days. Complex claims may take longer. We prioritize quick and efficient claims processing to minimize any inconvenience to our clients."
              },
              {
                question: "Can I customize my insurance policy?",
                answer: "Yes, we offer customized insurance solutions tailored to your specific needs. Our advisors will work with you to create a policy that provides the right coverage for your unique situation."
              },
              {
                question: "Do you offer discounts for multiple policies?",
                answer: "Yes, we offer multi-policy discounts when you bundle different insurance products with us. This can result in significant savings across all your insurance needs."
              },
              {
                question: "How often should I review my insurance coverage?",
                answer: "We recommend reviewing your insurance coverage annually or whenever you experience significant life changes such as marriage, buying a home, or having children."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept various payment methods including credit/debit cards, bank transfers, checks, and online payment systems. We also offer flexible payment plans to suit your budget."
              }
            ].map((faq, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import emailjs from "emailjs-com";
import {  toast } from "sonner";
interface FormData {
  name: string;
  email: string;
  project: string;
  message: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    project: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    emailjs
      .send(
        "service_2qv16z9", // ← replace with your EmailJS service ID
        "template_2m9i20i", // ← replace with your EmailJS template ID
        {
          from_email: formData.email,
          project_type: formData.project,
          message: formData.message,
          to_email: "kuldeepgwnd21@gmail.com",
        },
        "ov140DLWkOk0PR6U3" // ← replace with your EmailJS public key
      )
      .then(() => {
        
        toast.success("Message Send Successfully!")
        setFormData({ name: "", email: "", project: "", message: "" });
        setIsSubmitting(false);
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000); // Reset message
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        toast.warning(error+ "Failed to send message.");
        setIsSubmitting(false);
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000); // Reset message
      });
      
  };

  
  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);
    
  //   // Simulate form submission
  //   setTimeout(() => {
  //     setIsSubmitting(false);
  //     setSubmitted(true);
  //     setFormData({ name: '', email: '', project: '', message: '' });
      
  //     // Reset submission status after 5 seconds
  //     setTimeout(() => setSubmitted(false), 5000);
  //   }, 1500);
  // };

  return (
    <section id="contact" className="bg-gray-950 py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 text-center">Get in Touch</h2>
        <div className="w-16 h-0.5 bg-amber-500 mx-auto mb-4"></div>
        <p className="text-gray-300 text-center max-w-2xl mx-auto mb-16">
          Interested in working together? Contact me to discuss your project requirements and vision.
        </p>
        
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Contact Info */}
          <div className="lg:w-1/3 space-y-8">
            <div className="bg-black border border-gray-800 p-6">
              <h3 className="text-xl text-white font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gray-900 p-3 rounded-sm">
                    <Mail className="text-amber-500 w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <a href="mailto:kuldeepgwnd21@gmail.com" className="text-white hover:text-amber-500 transition-colors">
                    kuldeepgwnd21@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-gray-900 p-3 rounded-sm">
                    <Phone className="text-amber-500 w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <a href="tel: +917721015939" className="text-white hover:text-amber-500 transition-colors">
                     +917721015939
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-gray-900 p-3 rounded-sm">
                    <MapPin className="text-amber-500 w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white">Goregaon East, Mumbai</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 border-t border-gray-800 pt-6">
                <p className="text-gray-400 mb-4">Follow me on social media</p>
                <div className="flex space-x-4">
                  <a href="https://www.facebook.com/share/1By4vV2iws/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="bg-gray-900 p-2 rounded-sm text-gray-400 hover:text-amber-500 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/_cooldeep__/profilecard/?igsh=MWJ5MHRpYzdjc3cy" target="_blank" rel="noopener noreferrer" className="bg-gray-900 p-2 rounded-sm text-gray-400 hover:text-amber-500 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                  <a href="https://x.com/kuldeep17186314?s=21&t=SZR9oycoYtR8PgKX_D8z1w" target="_blank" rel="noopener noreferrer"  className="bg-gray-900 p-2 rounded-sm text-gray-400 hover:text-amber-500 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                    </svg>
                  </a>
                  {/* <a href="#" className="bg-gray-900 p-2 rounded-sm text-gray-400 hover:text-amber-500 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.21c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.755zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd"></path>
                    </svg>
                  </a> */}
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:w-2/3">
            <div className="bg-black border border-gray-800 p-6 md:p-8">
              <h3 className="text-xl text-white font-semibold mb-6">Send a Message</h3>
              
              {submitted ? (
                <div className="bg-green-900/30 border border-green-700 p-4 text-green-400 rounded">
                  Thank you for your message! I'll get back to you as soon as possible.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-400 mb-2 text-sm">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-gray-900 border border-gray-700 p-3 text-white focus:border-amber-500 focus:outline-none transition-colors"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-gray-400 mb-2 text-sm">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-gray-900 border border-gray-700 p-3 text-white focus:border-amber-500 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="project" className="block text-gray-400 mb-2 text-sm">
                      Project Type
                    </label>
                    <select
                      id="project"
                      name="project"
                      value={formData.project}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-900 border border-gray-700 p-3 text-white focus:border-amber-500 focus:outline-none transition-colors"
                    >
                      <option value="">Select Project Type</option>
                      <option value="Feature Film">Feature Film</option>
                      <option value="Short Film">Short Film</option>
                      <option value="Commercial">Commercial</option>
                      <option value="Music Video">Music Video</option>
                      <option value="Documentary">Documentary</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-gray-400 mb-2 text-sm">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-900 border border-gray-700 p-3 text-white focus:border-amber-500 focus:outline-none transition-colors"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-amber-500 hover:bg-amber-600 text-black px-6 py-3 flex items-center justify-center gap-2 transition-colors"
                  >
                    {isSubmitting ? (
                      <>Processing...</>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
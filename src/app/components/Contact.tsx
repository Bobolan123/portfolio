import React, { useState, useRef } from "react";
import { motion } from "motion/react";
import { Mail, Send, Phone, MapPin, CheckCircle2 } from "lucide-react";
import { Button } from "./ui/button";
import emailjs from "@emailjs/browser";

export function Contact() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle");
  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    setFormState("submitting");

    try {
      // Your actual EmailJS credentials
      const serviceId = "service_2sgqkka";
      const templateId = "template_g4gkdds";
      const publicKey = "CZ6DGBHruWAXf0sZf";

      await emailjs.sendForm(serviceId, templateId, form.current, publicKey);

      setFormState("success");
      form.current.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      setFormState("idle");
      alert("Oops! There was a problem sending your message. Please check your EmailJS credentials or try again later.");
    }
    
    // Reset success state after a few seconds
    setTimeout(() => setFormState("idle"), 5000);
  };

  return (
    <section className="py-24 px-4 bg-gray-50 dark:bg-gray-900/50 transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="text-blue-600 dark:text-blue-400">
              <Mail className="w-10 h-10" />
            </span>
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">Get In Touch</h2>
          </div>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Have a project in mind or just want to say hi? Feel free to reach out. I'm always open to new opportunities!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8"
          >
            <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 flex-1 flex flex-col">
              <h3 className="text-2xl font-bold mb-8 text-gray-800 dark:text-gray-100">Contact Information</h3>
              
              <div className="space-y-6 flex-1 flex flex-col justify-center">
                <ContactDetail 
                  icon={<Mail className="w-6 h-6" />} 
                  title="Email" 
                  content="logannguyenlan@gmail.com"
                  href="mailto:logannguyenlan@gmail.com"
                />
                <ContactDetail 
                  icon={<Phone className="w-6 h-6" />} 
                  title="Phone" 
                  content="+84 778 900 551"
                  href="tel:+84778900551"
                />
                <ContactDetail 
                  icon={<MapPin className="w-6 h-6" />} 
                  title="Location" 
                  content="Da Nang, Viet Nam"
                />
              </div>
            </div>

            {/* Decorative Card */}
            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-8 rounded-3xl shadow-xl text-white relative overflow-hidden h-32 flex items-center">
              <div className="relative z-10">
                <h4 className="text-xl font-bold mb-1">Let's build something great!</h4>
                <p className="text-blue-100 text-sm">I usually respond within 24 hours.</p>
              </div>
              <Mail className="absolute -right-4 -bottom-4 w-24 h-24 opacity-10 rotate-12" />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex"
          >
            <form 
              ref={form}
              onSubmit={handleSubmit}
              className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 space-y-6 w-full flex flex-col"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">Your Name</label>
                  <input 
                    name="from_name"
                    required
                    type="text" 
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all dark:text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">Email Address</label>
                  <input 
                    name="from_email"
                    required
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all dark:text-white"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">Subject</label>
                <input 
                  name="subject"
                  required
                  type="text" 
                  placeholder="Inquiry about project"
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all dark:text-white"
                />
              </div>

              <div className="space-y-2 flex-1 flex flex-col">
                <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">Message</label>
                <textarea 
                  name="message"
                  required
                  rows={5}
                  placeholder="How can I help you?"
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all dark:text-white resize-none flex-1"
                />
              </div>

              <Button
                type="submit"
                disabled={formState !== "idle"}
                className={`w-full py-6 rounded-xl font-bold text-lg shadow-lg transition-all duration-300 ${
                  formState === "success" 
                    ? "bg-green-500 hover:bg-green-600 text-white" 
                    : "bg-blue-600 hover:bg-blue-700 text-white shadow-blue-600/20"
                }`}
              >
                {formState === "idle" && (
                  <span className="flex items-center gap-2">
                    Send Message <Send className="w-5 h-5" />
                  </span>
                )}
                {formState === "submitting" && (
                  <span className="flex items-center gap-2">
                    Sending... <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  </span>
                )}
                {formState === "success" && (
                  <span className="flex items-center gap-2">
                    Message Sent! <CheckCircle2 className="w-5 h-5" />
                  </span>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
function ContactDetail({ icon, title, content, href }: { icon: React.ReactNode; title: string; content: string; href?: string }) {
  const Wrapper = href ? "a" : "div";
  return (
    <Wrapper 
      href={href}
      className={`flex items-start gap-4 p-4 rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors group ${href ? 'cursor-pointer' : ''}`}
    >
      <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <div>
        <h4 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">{title}</h4>
        <p className="text-lg font-semibold text-gray-800 dark:text-gray-100">{content}</p>
      </div>
    </Wrapper>
  );
}


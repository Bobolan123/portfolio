import React, { useState, useRef } from "react";
import { motion } from "motion/react";
import { Mail, Send, Phone, MapPin, CheckCircle2, Terminal } from "lucide-react";
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
      // Accessing EmailJS credentials from environment variables (Vite)
      const env = (import.meta as any).env;
      const serviceId = env.VITE_EMAILJS_SERVICE_ID;
      const templateId = env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("Missing EmailJS environment variables");
      }

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
    <section className="py-24 px-4 bg-[#020617] relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono mb-4">
            <Mail className="w-3 h-3" />
            <span>contact.initiate()</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Get In <span className="text-blue-500">Touch</span></h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            <div className="bg-slate-900/40 border border-slate-800 p-10 rounded-3xl flex-1 flex flex-col">
              <h3 className="text-2xl font-bold mb-8 text-white">Contact Information</h3>
              
              <div className="space-y-8 flex-1 flex flex-col justify-center">
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

            {/* Decorative Terminal Card */}
            <div className="bg-[#0f172a] border border-slate-800 p-6 rounded-2xl relative overflow-hidden group">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-slate-700"></div>
                  <div className="w-2 h-2 rounded-full bg-slate-700"></div>
                  <div className="w-2 h-2 rounded-full bg-slate-700"></div>
                </div>
                <span className="text-[10px] font-mono text-slate-600">terminal.log</span>
              </div>
              <p className="text-blue-400 font-mono text-sm leading-relaxed">
                &gt; I'm currently seeking new opportunities. 
                Feel free to reach out for collaborations or just a quick chat about tech!
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex"
          >
            <form 
              ref={form}
              onSubmit={handleSubmit}
              className="bg-slate-900/40 border border-slate-800 p-10 rounded-3xl space-y-6 w-full flex flex-col"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-mono text-slate-500 uppercase tracking-widest ml-1">Name</label>
                  <input 
                    name="from_name"
                    required
                    type="text" 
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/50 border border-slate-800 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 outline-none transition-all text-slate-200 font-mono text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono text-slate-500 uppercase tracking-widest ml-1">Email</label>
                  <input 
                    name="from_email"
                    required
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/50 border border-slate-800 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 outline-none transition-all text-slate-200 font-mono text-sm"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono text-slate-500 uppercase tracking-widest ml-1">Subject</label>
                <input 
                  name="subject"
                  required
                  type="text" 
                  placeholder="Inquiry about project"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950/50 border border-slate-800 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 outline-none transition-all text-slate-200 font-mono text-sm"
                />
              </div>

              <div className="space-y-2 flex-1 flex flex-col">
                <label className="text-xs font-mono text-slate-500 uppercase tracking-widest ml-1">Message</label>
                <textarea 
                  name="message"
                  required
                  rows={5}
                  placeholder="How can I help you?"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950/50 border border-slate-800 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 outline-none transition-all text-slate-200 font-mono text-sm resize-none flex-1"
                />
              </div>

              <Button
                type="submit"
                disabled={formState !== "idle"}
                className={`w-full py-6 rounded-xl font-bold text-sm uppercase tracking-widest transition-all duration-300 ${
                  formState === "success" 
                    ? "bg-green-600 hover:bg-green-700 text-white" 
                    : "bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/20"
                }`}
              >
                {formState === "idle" && (
                  <span className="flex items-center gap-2">
                    Send Message <Send className="w-4 h-4" />
                  </span>
                )}
                {formState === "submitting" && (
                  <span className="flex items-center gap-2">
                    Processing... <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  </span>
                )}
                {formState === "success" && (
                  <span className="flex items-center gap-2">
                    Sent Successfully <CheckCircle2 className="w-4 h-4" />
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
      className={`flex items-start gap-5 group ${href ? 'cursor-pointer' : ''}`}
    >
      <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-blue-400 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
        {icon}
      </div>
      <div>
        <h4 className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-1">{title}</h4>
        <p className="text-lg font-bold text-slate-200 group-hover:text-blue-400 transition-colors">{content}</p>
      </div>
    </Wrapper>
  );
}


import React, { useState, useRef } from "react";
import { Mail, Send, Phone, MapPin, CheckCircle2, Terminal } from "lucide-react";
import { Button } from "./ui/button";
import emailjs from "@emailjs/browser";
import { useLanguage } from "../context/useLanguage";
import { motion } from "framer-motion";

export function Contact() {
  const { t } = useLanguage();
  const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle");
  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    // ... logic remains same ...
  };

  return (
    <section className="py-24 px-4 bg-background relative transition-colors duration-500">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted dark:bg-slate-900 border border-border dark:border-slate-800 text-blue-600 dark:text-blue-400 text-xs font-mono mb-4 shadow-sm">
            <Mail className="w-3 h-3" />
            <span>{t.contact.badge}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">{t.contact.titlePrefix} <span className="text-blue-600 dark:text-blue-500">{t.contact.titleSuffix}</span></h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
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
            <div className="bg-card dark:bg-slate-900/40 border border-border dark:border-slate-800 p-10 rounded-3xl flex-1 flex flex-col shadow-sm">
              <h3 className="text-2xl font-bold mb-8 text-foreground">{t.contact.infoTitle}</h3>
              
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
                  content={t.hero.locationLong}
                />
              </div>
            </div>

            {/* Decorative Terminal Card */}
            <div className="bg-muted dark:bg-slate-950 border border-border dark:border-slate-800 p-6 rounded-2xl relative overflow-hidden group shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-red-500/40"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-500/40"></div>
                  <div className="w-2 h-2 rounded-full bg-green-500/40"></div>
                </div>
                <span className="text-[10px] font-mono text-muted-foreground dark:text-slate-600">terminal.log</span>
              </div>
              <p className="text-foreground dark:text-blue-400 font-mono text-sm leading-relaxed">
                <span className="text-blue-600 dark:text-pink-500">&gt;</span> {t.contact.terminalPrompt}
                <span className="inline-block w-2 h-4 bg-blue-600 dark:bg-pink-500 ml-1 animate-pulse" />
              </p>
            </div>
          </motion.div>

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
              className="bg-card dark:bg-slate-900/40 border border-border dark:border-slate-800 p-10 rounded-3xl space-y-6 w-full flex flex-col shadow-sm"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-mono text-muted-foreground uppercase tracking-widest ml-1">{t.contact.form.name}</label>
                  <input 
                    name="from_name"
                    required
                    type="text" 
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-muted/50 dark:bg-slate-950/50 border border-border dark:border-slate-800 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 outline-none transition-all text-foreground font-mono text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono text-muted-foreground uppercase tracking-widest ml-1">{t.contact.form.email}</label>
                  <input 
                    name="from_email"
                    required
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-muted/50 dark:bg-slate-950/50 border border-border dark:border-slate-800 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 outline-none transition-all text-foreground font-mono text-sm"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono text-muted-foreground uppercase tracking-widest ml-1">{t.contact.form.subject}</label>
                <input 
                  name="subject"
                  required
                  type="text" 
                  placeholder="Inquiry about project"
                  className="w-full px-4 py-3 rounded-xl bg-muted/50 dark:bg-slate-950/50 border border-border dark:border-slate-800 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 outline-none transition-all text-foreground font-mono text-sm"
                />
              </div>

              <div className="space-y-2 flex-1 flex flex-col">
                <label className="text-xs font-mono text-muted-foreground uppercase tracking-widest ml-1">{t.contact.form.message}</label>
                <textarea 
                  name="message"
                  required
                  rows={5}
                  placeholder="How can I help you?"
                  className="w-full px-4 py-3 rounded-xl bg-muted/50 dark:bg-slate-950/50 border border-border dark:border-slate-800 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 outline-none transition-all text-foreground font-mono text-sm resize-none flex-1"
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
                    {t.contact.form.send} <Send className="w-4 h-4" />
                  </span>
                )}
                {formState === "submitting" && (
                  <span className="flex items-center gap-2">
                    {t.contact.form.processing} <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  </span>
                )}
                {formState === "success" && (
                  <span className="flex items-center gap-2">
                    {t.contact.form.success} <CheckCircle2 className="w-4 h-4" />
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
      <div className="w-12 h-12 rounded-xl bg-muted dark:bg-slate-800 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
        {icon}
      </div>
      <div>
        <h4 className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest mb-1">{title}</h4>
        <p className="text-lg font-bold text-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{content}</p>
      </div>
    </Wrapper>
  );
}

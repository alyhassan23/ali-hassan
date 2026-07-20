import React from "react";
import { Mail, MapPin, Phone, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: "alih.bsse@gmail.com",
    href: "mailto:alih.bsse@gmail.com",
    color: "accent",
    shadow: "hover:shadow-[0_0_20px_rgba(99,102,241,0.2)]",
    hoverBorder: "hover:border-accent/40",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Connect with me",
    href: "https://www.linkedin.com/in/ali-hassan-696b11306",
    color: "highlight",
    shadow: "hover:shadow-[0_0_20px_rgba(245,158,11,0.2)]",
    hoverBorder: "hover:border-highlight/40",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+92 3374848230",
    href: "tel:+923374848230",
    color: "green-400",
    shadow: "hover:shadow-[0_0_20px_rgba(74,222,128,0.2)]",
    hoverBorder: "hover:border-green-500/40",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Lahore, Pakistan",
    href: null,
    color: "pink-400",
    shadow: "hover:shadow-[0_0_20px_rgba(244,114,182,0.2)]",
    hoverBorder: "hover:border-pink-500/40",
  },
];

const iconColorMap = {
  accent: "text-accent group-hover:bg-accent",
  highlight: "text-highlight group-hover:bg-highlight",
  "green-400": "text-green-400 group-hover:bg-green-500",
  "pink-400": "text-pink-400 group-hover:bg-pink-500",
};

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-28 bg-transparent relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/15 to-transparent" />

      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <SectionReveal className="text-center mb-16">
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">Let's Talk</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-textMain mb-5">
            Get in{" "}
            <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-textMuted text-lg max-w-xl mx-auto">
            Available for new opportunities. Let's build something great together.
          </p>
        </SectionReveal>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {contactItems.map((item, idx) => {
            const Icon = item.icon;
            const colorClasses = iconColorMap[item.color] || "text-accent group-hover:bg-accent";
            const Wrapper = item.href ? "a" : "div";
            const wrapperProps = item.href
              ? { href: item.href, target: item.href.startsWith("http") ? "_blank" : undefined, rel: item.href.startsWith("http") ? "noreferrer" : undefined }
              : {};

            return (
              <SectionReveal key={item.label} delay={idx * 0.1} yOffset={30}>
                <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}>
                  <Wrapper
                    {...wrapperProps}
                    className={`group relative glass-card p-6 rounded-2xl border transition-all duration-300 ${item.shadow} ${item.hoverBorder} overflow-hidden block shadow-card`}
                  >
                    {/* Shimmer sweep on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/4 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />

                    <div className="flex items-center gap-4 relative z-10">
                      <div className={`p-3.5 bg-white/5 rounded-xl group-hover:text-white transition-colors shadow-inner border border-white/5 ${colorClasses}`}>
                        <Icon size={22} />
                      </div>
                      <div className="overflow-hidden">
                        <h3 className="text-textMain font-bold text-sm mb-0.5 font-display">{item.label}</h3>
                        <p className="text-textMuted text-sm truncate">{item.value}</p>
                      </div>
                    </div>
                  </Wrapper>
                </motion.div>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;

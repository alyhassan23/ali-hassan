import React from "react";
import { Mail, MapPin, Phone, Linkedin, Copy } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 bg-primary border-t border-white/5 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-textMain mb-3">
            Get in Touch
          </h2>
          <p className="text-textMuted text-sm">
            Available for new opportunities. Let's build something great.
          </p>
        </div>

        {/* COMPACT GRID SYSTEM */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Email Card */}
          <a
            href="mailto:alihassan5025a@gmail.com"
            className="group relative bg-secondary/50 hover:bg-secondary p-5 rounded-xl border border-white/5 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
          >
            {/* Hover Gradient Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/10 to-accent/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>

            <div className="flex items-center gap-4 relative z-10">
              <div className="p-3 bg-primary rounded-lg text-accent group-hover:text-white group-hover:bg-accent transition-colors shadow-lg">
                <Mail size={20} />
              </div>
              <div className="overflow-hidden">
                <h3 className="text-white font-semibold text-sm">Email</h3>
                <p className="text-textMuted text-xs truncate">
                  alihassan5025a@gmail.com
                </p>
              </div>
            </div>
          </a>

          {/* LinkedIn Card */}
          <a
            href="https://www.linkedin.com/in/ali-hassan-696b11306"
            target="_blank"
            rel="noreferrer"
            className="group relative bg-secondary/50 hover:bg-secondary p-5 rounded-xl border border-white/5 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-highlight/0 via-highlight/10 to-highlight/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>

            <div className="flex items-center gap-4 relative z-10">
              <div className="p-3 bg-primary rounded-lg text-highlight group-hover:text-white group-hover:bg-highlight transition-colors shadow-lg">
                <Linkedin size={20} />
              </div>
              <div>
                <h3 className="text-white font-semibold text-sm">LinkedIn</h3>
                <p className="text-textMuted text-xs">Connect with me</p>
              </div>
            </div>
          </a>

          {/* Phone Card */}
          <a
            href="tel:+923000000000" // Update this
            className="group relative bg-secondary/50 hover:bg-secondary p-5 rounded-xl border border-white/5 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/0 via-green-500/10 to-green-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>

            <div className="flex items-center gap-4 relative z-10">
              <div className="p-3 bg-primary rounded-lg text-green-500 group-hover:text-white group-hover:bg-green-500 transition-colors shadow-lg">
                <Phone size={20} />
              </div>
              {/* <div>
                <h3 className="text-white font-semibold text-sm">Phone</h3>
                <p className="text-textMuted text-xs">+92 337 4848230</p>
              </div> */}
            </div>
          </a>

          {/* Location Card */}
          <div className="group relative bg-secondary/50 p-5 rounded-xl border border-white/5 transition-all duration-300 hover:-translate-y-1 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-purple-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>

            <div className="flex items-center gap-4 relative z-10">
              <div className="p-3 bg-primary rounded-lg text-purple-500 group-hover:text-white group-hover:bg-purple-500 transition-colors shadow-lg">
                <MapPin size={20} />
              </div>
              <div>
                <h3 className="text-white font-semibold text-sm">Location</h3>
                <p className="text-textMuted text-xs">Lahore, Pakistan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

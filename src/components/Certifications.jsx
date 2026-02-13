import React from "react";
import { Award, ExternalLink, Calendar, CheckCircle } from "lucide-react";
import { CERTIFICATIONS } from "../data";

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="py-24 bg-secondary relative overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-textMain mb-4">
            Licenses & Certifications
          </h2>
          <p className="text-textMuted max-w-2xl mx-auto">
            Professional credentials validating my expertise in Data Science,
            AI, and Engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.id}
              className="group bg-primary p-6 rounded-2xl border border-white/5 hover:border-accent/30 transition-all duration-300 hover:shadow-xl hover:shadow-accent/5 flex flex-col sm:flex-row gap-6 items-start"
            >
              {/* Logo / Icon Placeholder */}
              <div className="shrink-0 w-16 h-16 rounded-xl bg-secondary border border-white/5 flex items-center justify-center text-2xl font-bold text-white group-hover:bg-white group-hover:text-primary transition-colors">
                {cert.logo === "Google" ? (
                  <span className="text-blue-500">G</span>
                ) : cert.logo === "IBM" ? (
                  <span className="text-blue-600">IBM</span>
                ) : (
                  <Award className="text-accent" />
                )}
              </div>

              {/* Content */}
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                  {cert.title}
                </h3>
                <p className="text-textMuted text-sm mb-4">{cert.issuer}</p>

                <div className="flex flex-wrap gap-4 text-xs text-textMuted mb-6">
                  <span className="flex items-center gap-1 bg-secondary/50 px-2 py-1 rounded">
                    <Calendar size={14} /> Issued {cert.date}
                  </span>
                  {cert.credentialId && (
                    <span className="flex items-center gap-1 bg-secondary/50 px-2 py-1 rounded">
                      <CheckCircle size={14} className="text-highlight" /> ID:{" "}
                      {cert.credentialId}
                    </span>
                  )}
                </div>

                {/* Verify Button */}
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-white transition-colors group/btn"
                >
                  Show Credential
                  <ExternalLink
                    size={16}
                    className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;

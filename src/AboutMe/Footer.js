import { ExternalLink, Mail } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 py-20">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white mb-6">
          Let's Build Something Amazing
        </h2>
        <p className="text-xl text-blue-100 mb-8 leading-relaxed">
          I'm always excited to collaborate on innovative projects and explore
          new technological frontiers.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:jasshah9513@gmail.com"
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            <Mail className="w-5 h-5" />
            Get In Touch
          </a>
          <a
            href="https://github.com/Arbiter09"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
          >
            <ExternalLink className="w-5 h-5" />
            View My Work
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

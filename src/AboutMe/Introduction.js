import { Github, Linkedin, Mail } from "lucide-react";
import React from "react";

const Introduction = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-8">About Me</h2>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              I'm a passionate full-stack developer and data science graduate
              student at Stony Brook University, with a strong focus on building
              scalable, innovative solutions that make a real impact.
            </p>
            <p>
              With experience spanning from traditional web development to
              cutting-edge Web3 technologies, I've had the privilege of working
              on diverse projects that challenge the status quo and push
              technological boundaries.
            </p>
            <p>
              My recent achievement of winning 2nd place at ETHDenver 2025 in
              the Story Protocol track demonstrates my commitment to innovation
              in the blockchain space, while my professional experience shows my
              ability to deliver production-ready solutions.
            </p>
          </div>

          {/* Contact Links */}
          <div className="flex gap-4 mt-10">
            <a
              href="https://github.com/Arbiter09"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/jas-shah-709854233"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
            <a
              href="mailto:jasshah9513@gmail.com"
              className="inline-flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
            >
              <Mail className="w-5 h-5" />
              Email
            </a>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Stats</h3>
          <div className="grid grid-cols-2 gap-6">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">3.89</div>
              <div className="text-sm text-gray-600">CGPA</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">40%</div>
              <div className="text-sm text-gray-600">Performance Boost</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">2nd</div>
              <div className="text-sm text-gray-600">ETHDenver Place</div>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <div className="text-3xl font-bold text-orange-600 mb-2">10+</div>
              <div className="text-sm text-gray-600">Technologies</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;

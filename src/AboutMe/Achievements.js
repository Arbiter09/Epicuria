import React from "react";
import { Award } from "lucide-react";
import { achievements } from "../utils/AboutMe";

const Achievements = () => {
  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Achievements
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-100"
            >
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 rounded-full p-3">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-700 mb-2">
                    {achievement.description}
                  </p>
                  <span className="text-sm text-blue-600 font-medium">
                    {achievement.date}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;

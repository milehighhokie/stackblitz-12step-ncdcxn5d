import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Users, BookHeart, Clock } from 'lucide-react';

function HomePage() {
  return (
    <div className="page-container">
      <h1 className="page-title">Recovery Awaits</h1>
      <h2 className="page-help">
        If you need immediate help, please call 911 or 988. The world needs you.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link
          to="/my-journey"
          className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="flex items-center mb-4">
            <Clock className="w-6 h-6 text-blue-600" />
            <h2 className="text-xl font-semibold ml-2">My Journey</h2>
          </div>
          <p className="text-gray-600">
            Follow my path through recovery and personal growth.
          </p>
        </Link>

        <Link
          to="/oa-resources"
          className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="flex items-center mb-4">
            <BookOpen className="w-6 h-6 text-blue-600" />
            <h2 className="text-xl font-semibold ml-2">
              My Recovery Resources
            </h2>
          </div>
          <p className="text-gray-600">
            Access my collection of resources and materials.
          </p>
        </Link>

        <Link
          to="/other-programs"
          className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="flex items-center mb-4">
            <Users className="w-6 h-6 text-blue-600" />
            <h2 className="text-xl font-semibold ml-2">
              12 Step Programs
            </h2>
          </div>
          <p className="text-gray-600">
            Explore 12 step programs and their resources.
          </p>
        </Link>

        <Link
          to="/prayers"
          className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="flex items-center mb-4">
            <BookHeart className="w-6 h-6 text-blue-600" />
            <h2 className="text-xl font-semibold ml-2">
              Meditations and Prayers
            </h2>
          </div>
          <p className="text-gray-600">
            Find comfort in a collection of meditations and prayers.
          </p>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;

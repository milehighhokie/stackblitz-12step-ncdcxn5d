import React from 'react';
import { Clock } from 'lucide-react';

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
}

function MyJourneyPage() {
  const events: TimelineEvent[] = [
    {
      title: "Parent's Divorce",
      description: "I think this is where I started finding comfort in food.",
      date: "Age 6"
    },
    {
      title: "High School Restricting",
      description: "One summer I ate nothing but a handful of pretzel sticks everyday.  My favorite teacher then commented I had lost too much weight.",
      date: "Age 15"
    },
    {
      title: "Rock Bottom",
      description: "While my family was out of town, I decided to order pizzas for my meals for the entire Memorial Day weekend.  I had planned servings to cover 6 meals.  By 10 PM, both pizzas were done.  I did not know where to turn to or if my weight would go past 400 punds.",
      date: "May 24, 2024"
    },
    {
      title: "Hope",
      description: "My first Overeaters Anonymous meeting",
      date: "May 31, 2024"
    }
  ];

  return (
    <div className="page-container">
      <h1 className="page-title">My Journey</h1>
      
      <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:-translate-x-px before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent">
        {events.map((event, index) => (
          <div key={index} className="relative flex items-center">
            <div className="absolute left-0 mt-1 h-4 w-4 rounded-full border-2 border-blue-600 bg-white"></div>
            <div className="ml-10 bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 w-full">
              <div className="flex items-center mb-2">
                <Clock className="w-5 h-5 text-blue-600 mr-2" />
                <span className="font-semibold text-blue-600">{event.date}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
              <p className="text-gray-600">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyJourneyPage;
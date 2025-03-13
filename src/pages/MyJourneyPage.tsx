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
      description: 'I think this is where I started finding comfort in food.',
      date: 'Age 6',
    },
    {
      title: 'High School Restricting',
      description:
        'One summer I ate nothing but a handful of pretzel sticks and water everyday.  My favorite teacher then commented I had lost too much weight.',
      date: 'Age 15',
    },
    {
      title: 'Freshman Fifteen? Pfff',
      description:
        'I have no idea how much weight I put on freshman year, but it was not just 15 pounds.',
      date: 'Age 18',
    },
    {
      title: 'Internship Money Fueled Binges',
      description:
        'After a couple of corporate internships, I was unfortunately flush with cash.  Binging on food and alcohol became the norm.  Unfortunately, my cashflow ran dry and I began charging everything possible to credit cards.',
      date: 'Age 21',
    },
    {
      title: 'Starving for Corporate America',
      description:
        'I was encouraged/scared by a family member to get my weight below 200 pounds before a corporate physical.  They told me if I did not hit that target then my job offer would probably be rescinded.  I starved myself in the days leading up to the physical.  I got down to 201 pounds, but my other vitals were so out of whack the nurse questioned them.',
      date: 'Age 23',
    },
    {
      title: 'The Yo-Yo Years',
      description:
        'I tried three nutritionists and too many diets to count.  Every time, I would lose weight, life would throw me a curveball, the diet was tossed, my weight was more than before.',
      date: 'Age 24 to 54',
    },
    {
      title: 'Highest Weight',
      description:
        "After spending five weeks at my mom's condo, I return home weighing 392 pounds.  I am needing extensions for my seatbelt in both cars.",
      date: 'Nov 2023',
    },
    {
      title: 'Tried Ozempic',
      description:
        'My doctor recommended Ozempic.  At first, I was not hungry and I lost 10 pounds.  But I kept eating between meals and in the middle of the night.  I was never hungry, but I just kept eating.  As the weight returned, I stopped the drug cold turkey (not recommended).',
      date: 'Dec 2023',
    },
    {
      title: 'Rock Bottom',
      description:
        'While my family was out of town, I decided to order pizzas for my meals for the entire Memorial Day weekend.  I had planned servings to cover 6 meals.  By 10 PM, both pizzas were gone.  I did not know where to turn.  Was it just a matter of time until my weight would go past 400 pounds?  My wife suggested group therapy.  I Googled overeating groups and found OA.',
      date: 'May 24, 2024',
    },
    {
      title: 'Hope',
      description:
        "My first Overeaters Anonymous meeting.  It was a speaker meeting where I heard someone's struggles with food and depression.  And I heard their message of hope.",
      date: 'May 31, 2024',
    },
    {
      title: 'Connecting With My Sponsor',
      description:
        'My first one-on-one meeting with my OA sponsor.  I am so thankful for her words of wisdom (the first of many).',
      date: 'Jun 28, 2024',
    },
    {
      title: 'Recovery Circle',
      description:
        'Joined a recovery circle with three of Fellows.  Great way to get into deeper sharing and deeper understanding of our issues.',
      date: 'Jul 3, 2024',
    },
    {
      title: 'Layoffs Announced',
      description:
        'CRAP!  My contract will be over in September.  In the past, I would have binged and stopped whatever diet I was on because if I could not follow it perfectly then why do it?  Thanks to the support I have in OA, I do not binge.',
      date: 'Jul 19, 2024',
    },
    {
      title: 'Goodbye Dear Friend',
      description:
        'My family and I said goodbye to our beloved dog. Again, with the support I have in OA, I do not binge.  I am absolutely miserable and heartbroken.',
      date: 'Aug 17, 2024',
    },
    {
      title: 'Action and Food Plans',
      description:
        'In order to snap out of my misery, I started tracking a daily plan for my food and what actions I would undertake towards recovery.  While my sponsor is impressed with my thoroughness, she suggests I pull back to target three action items and track three meals and 2 snacks a day.',
      date: 'Aug 19, 2024',
    },
    {
      title: 'The Siren Call of the Scale',
      description:
        'All summer, I was still struggling with a lingering dieting compulsion - the bathroom scale.  I was wanting to weigh myself multiple times a day.  I am now committed to monthly weigh-ins.  It is just a number.  I try to act as if whatever the number on the scale could be, it will be the perfect number for that day, so then why should I even bother getting on the scale?',
      date: 'Oct 1, 2024',
    },
    {
      title: 'On the Path',
      description:
        'My 300th Overeaters Anonymous meeting.  I have cut my Metformin and blood pressure dosages.',
      date: 'Dec 13, 2024',
    },
    {
      title: 'Nine Months In',
      description:
        "270 days in Overeaters Anonymous.  I have stopped all blood pressure medicine (under doctor's instructions/monitoring).  This led to some water weight gain, but I feel healthier.",
      date: 'Feb 24, 2025',
    },
    {
      title: 'Launch My Website',
      description:
        'Thank you for reading this.  I hope it gives you a look at what recovery can look like.',
      date: 'March 7, 2025',
    },
  ];

  return (
    <div className="page-container">
      <h1 className="page-title">My Journey</h1>
      <div className="mt-6 relative space-y-8 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:-translate-x-px before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent">
        {events.map((event, index) => (
          <div key={index} className="relative flex items-center">
            <div className="absolute left-0 mt-1 h-4 w-4 rounded-full border-2 border-blue-600 bg-white"></div>
            <div className="ml-10 bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 w-full">
              <div className="flex items-center mb-2">
                <Clock className="w-5 h-5 text-blue-600 mr-2" />
                <span className="font-semibold text-blue-600">
                  {event.date}
                </span>
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

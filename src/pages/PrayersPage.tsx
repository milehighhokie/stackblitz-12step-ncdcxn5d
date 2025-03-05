import React from 'react';
import { ExternalLink, BookHeart, Globe, Heart } from 'lucide-react';

interface Meditation {
  title: string;
  description: string;
  website: string;
}

interface Prayer {
  title: string;
  prayer: string;
  website: string;
}

function PrayersPage() {
  const meditations: Meditation[] = [
    {
      title: "@2:50 - 10 Meditation",
      description: "Unguided meditation for 10 minutes at 2:50 PM EET, ET, and PT.",
      website: "https://at250.org/"
    },
    {
      title: "Tara Brach",
      description: "Guided meditations",
      website: "https://www.tarabrach.com/guided-meditations/"
    }
  ]

  const prayers: Prayer[] = [
    {
      title: "The Serenity Prayer",
      prayer: "God, grant me the serenity to accept the things I cannot change, courage to change the things I can, and the wisdom to know the difference.",
      website: "https://www.164andbeyond.org/prayers/"
    },    
    {
      title: "Set Aside Prayer",
      prayer: "God, please set aside everything I think I know about myself, my disease, the 12 Steps and You, for an open mind and a new experience of myself, my disease, the 12 Steps and especially You! Please help me to see the truth.",
      website: "https://brandywineintergroup.org/"
    },
    {
      title: "Sick Man's Prayer",
      prayer: "God, when a person offends me, help me to remember this is a sick person. Help me show the same tolerance, pity, and patience that we would cheerfully grant a sick friend. Show me how can I help them. Save me from being angry. Thy will be done.",
      website: "https://www.164andbeyond.org/prayers/"
    }
  ]
  
  return (
    <div className="page-container">
      <h1 className="page-title">Meditations</h1>
      <h2 className="disclaimer">Overeaters Anonymous has nothing to do with this site.  All opinions are my own and should not be used as medical advice.</h2>

      <div className="space-y-6">
        {meditations.map((meditation) => (
          <div key={meditation.title} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <Heart className="w-6 h-6 text-blue-600" />
              <div className="h-8 bg-blue-50 rounded-md px-3 py-1 font-medium text-gray-800 ml-2 shadow-sm">
                {meditation.title}
              </div>
            </div>
            <div className="space-y-3">
              <div className="bg-gray-100 rounded-md p-3 shadow-inner text-gray-700">
                {meditation.description}
              </div>
              <a
                href={meditation.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
              >
                <Globe className="w-4 h-4 mr-2" />
                Visit Website
                <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        ))}
      </div>

      <h1 className="page-title mt-10">Prayers</h1>
      
      <div className="space-y-6">
        {prayers.map((prayer) => (
          <div key={prayer.title} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <BookHeart className="w-6 h-6 text-blue-600" />
              <div className="h-8 bg-blue-50 rounded-md px-3 py-1 font-medium text-gray-800 ml-2 shadow-sm">
                {prayer.title}
              </div>
            </div>
            <div className="space-y-3">
              <div className="bg-gray-100 rounded-md p-3 shadow-inner text-gray-700">
                {prayer.prayer}
              </div>
              <a
                href={prayer.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
              >
                <Globe className="w-4 h-4 mr-2" />
                Reference Website
                <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PrayersPage
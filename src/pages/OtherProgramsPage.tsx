import React from 'react';
import { ExternalLink, Heart, Users, Calendar, Globe } from 'lucide-react';

interface Program {
  name: string;
  description: string;
  website: string;
  founded: string;
  focus: string;
}

function OtherProgramsPage() {
  const programs: Program[] = [
    {
      name: 'Alcoholics Anonymous (AA)',
      description:
        'A fellowship of people who share their experience, strength and hope with each other to solve their common problem and help others recover from alcoholism.',
      website: 'https://www.aa.org',
      founded: '1935',
      focus: 'Alcohol addiction recovery',
    },
    {
      name: 'Overeaters Anonymous (OA)',
      description:
        'A community of people who support each other in order to recover from compulsive eating and food behaviors. We welcome everyone who feels they have a problem with food.',
      website: 'https://www.oa.org',
      founded: '1960',
      focus: 'Compulsive eating and food behaviors recovery',
    },
    {
      name: 'Narcotics Anonymous (NA)',
      description:
        'A nonprofit fellowship of people who share their recovery from the effects of addiction through working the 12 steps.',
      website: 'https://www.na.org',
      founded: '1953',
      focus: 'Drug addiction recovery',
    },
    {
      name: 'Al-Anon',
      description:
        "Provides support to those affected by someone else's drinking, including family and friends of alcoholics.",
      website: 'https://al-anon.org',
      founded: '1951',
      focus: 'Support for friends and families of alcoholics',
    },
    {
      name: 'Gamblers Anonymous (GA)',
      description:
        'A fellowship of men and women who share their experience, strength and hope to solve their common problem of compulsive gambling.',
      website: 'https://www.gamblersanonymous.org',
      founded: '1957',
      focus: 'Gambling addiction recovery',
    },
    {
      name: 'Codependents Anonymous (CoDA)',
      description:
        'A fellowship of men and women whose common purpose is to develop healthy relationships.',
      website: 'https://coda.org',
      founded: '1986',
      focus: 'Codependency recovery',
    },
    {
      name: 'Cocaine Anonymous (CA)',
      website: 'https://www.cocaineanonymous.org',
      description:
        'A fellowship providing support for people recovering from cocaine and other stimulant addictions through regular meetings and shared experiences.',
      founded: '1982',
      focus: 'Cocaine and stimulant addiction recovery',
    },
    {
      name: 'Sex Addicts Anonymous (SAA)',
      website: 'https://www.sexaddictsanonymous.org',
      description:
        'A fellowship for individuals seeking recovery from sexual addiction, providing a structured program of self-reflection and mutual support through the 12 steps.',
      founded: '1976',
      focus: 'Sexual addiction recovery',
    },
    {
      name: 'Debtors Anonymous (DA)',
      website: 'https://www.debtorsanonymous.org',
      description:
        'A self-help program that assists individuals in overcoming compulsive spending and financial mismanagement by addressing the emotional and behavioral roots of debt.',
      founded: '1971',
      focus: 'Compulsive spending and financial mismanagement',
    },
    {
      name: 'Co-Dependents Anonymous (CoDA)',
      website: 'https://coda.org',
      description:
        'A fellowship designed for people who share common patterns of codependency, enabling them to develop healthier, more balanced relationships by working through the 12-step program.',
      founded: '1986',
      focus: 'Codependency and relationship issues',
    },
    {
      name: 'Nar-Anon Family Groups (Nar-Anon)',
      website: 'https://www.nar-anon.org',
      description:
        'A 12-step program for the friends and families of individuals who struggle with drug addiction, offering a supportive environment to help members manage the challenges that come with a loved one’s substance abuse.',
      founded: '1977',
      focus: 'Family support for drug addiction',
    },
    {
      name: 'Emotions Anonymous (EA)',
      website: 'https://www.emotionsanonymous.org',
      description:
        'A fellowship based on the 12-step model aimed at helping individuals address and recover from emotional challenges and mental health issues by sharing their personal experiences in a confidential setting.',
      founded: '1991',
      focus: 'Emotional and mental health recovery',
    },
    {
      name: 'Workaholics Anonymous (WA)',
      website: 'https://workaholicsanonymous.org',
      description:
        'A support group for those who struggle with work addiction, helping members recognize the negative impact of compulsive working and guiding them toward a balanced, healthier lifestyle using the 12-step framework.',
      founded: '1983',
      focus: 'Work addiction recovery',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <header className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            12 Step Recovery Programs
          </h1>
          <h2 className="disclaimer">Overeaters Anonymous has nothing to do with this site.  All opinions are my own and should not be used as medical advice.</h2>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Other fellowship programs dedicated to recovery and healing through
            the Twelve Steps
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program) => (
            <div
              key={program.name}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  {program.name}
                </h2>
                <p className="text-gray-600 mb-4">{program.description}</p>

                <div className="space-y-2">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>Founded: {program.founded}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Heart className="w-4 h-4 mr-2" />
                    <span>Focus: {program.focus}</span>
                  </div>
                  <a
                    href={program.website}
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
            </div>
          ))}
        </div>

        <footer className="mt-16 text-center text-gray-600">
          <div className="flex items-center justify-center space-x-2">
            <Users className="w-5 h-5" />
            <p>
              If you're struggling, you're not alone. These programs are here to
              help.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default OtherProgramsPage;

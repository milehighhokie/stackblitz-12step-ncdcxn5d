import React from 'react';
import { Footprints, ListChecks } from 'lucide-react';

interface Step {
    title: string;
    description: string;
    resources: string[];
}

function MyFirstStepsPage() {
    const steps: Step[] = [
        {
            title: 'Finding OA',
            description:
                'After hitting rock bottom with my eating, I found OA.org through a Google search. I was hesitant to attend my first meeting, but I knew I needed help.',
            resources: [
                'I used the Find A Meeting button on ooa.org to find a Zoom meeting that fit my schedule',
                'I attended a speaker meeting where I was amazed to hear my story from someone else',
                'I asked questions at the after meeting and was told to check out 5 or 6 other meetings to find what worked best for me',
                'It was also recommended I try to get to 90 meetings in 90 days. What I said?!?',
                'I committed to coming back next week, but was unsure of the 90 in 90 idea',
            ],
        },
        {
            title: 'Day 2',
            description:
                'Luckily for me, the day after my first meeting was a Virtual OA newcomer open house.',
            resources: [
                'I was in awe with another speaker telling me a similar story of her struggle with food and depression',
                'I asked questions at the after meeting and she recommended 90 meetings in 90 days',
                'I then committed to going to 90 meetings in 90 days',
            ],
        },
        {
            title: 'First 90 Days',
            description:
                'I committed to attending 90 meetings in 90 days. This helped me understand the program and find meetings that resonated with me.',
            resources: [
                'I tried different meeting formats (speaker, literature, hybrid)',
                'I collected phone numbers from other members',
                'I bought OA literature on Amazon with Kindle credits I had',
                'My perfectionism/obsession took over and I attend over a 100 meetings (just to be safe)',
            ],
        },
        {
            title: 'Recovery Circle Seminar',
            description:
                'About three weeks into recovery, a seminar was offered discussing recovery cicrles',
            resources: [
                'We were taught that recovery circles are like mini-meetings, but without the formalities of most meetings',
                'The attendees were split up into groups of around five people',
                'We talked about what we were looking for in support.  Some people switched rooms to find a group that fit',
                'Once we settled in, we set up a regular weekly meeting on Zoom that fit our schedules',
            ],
        },
        {
            title: 'Getting a Sponsor',
            description:
                'After a month of meetings, I found someone whose recovery I admired and asked them to be my sponsor.',
            resources: [
                'I listened for someone who had what I wanted',
                'I approached them after the meeting if they were open to sponsoring me',
                'We set up regular check-ins via email and Zoom',
            ],
        },
        {
            title: 'Accountability Buddies',
            description:
                'When I want a daily check-in with someone that also needs support of checking in with someone.',
            resources: [
                'I needed help keeping to an exercise schedule.  An OA Fellow wanted help with her daily food plan',
                'I set up a shared Google Sheet to track my exercise and our food plans',
                'If I do not update the sheet for a couple of days, my buddy texts me - and vice versa',
            ],
        },
        {
            title: 'Working the Steps',
            description:
                "With my sponsor's guidance, I began working through the 12 steps, starting with Step 1: Admitting I was powerless over food.",
            resources: [
                'I got a copy of the 12 & 12 Workbook',
                'I started volunteering for service positions at meetings',
                'I began journaling everyday',
            ],
        },
    ];

    return (
        <div className="page-container">
            <h1 className="page-title">My OA First Steps</h1>

            <div className="space-y-6">
                {steps.map((step, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md p-6">
                        <div className="flex items-center mb-4">
                            <Footprints className="w-6 h-6 text-blue-600" />
                            <h2 className="text-xl font-semibold ml-2">{step.title}</h2>
                        </div>
                        <p className="text-gray-600 mb-4">{step.description}</p>
                        <div className="bg-gray-50 rounded-lg p-4">
                            <div className="flex items-center mb-2">
                                <ListChecks className="w-5 h-5 text-blue-600" />
                                <h3 className="font-medium ml-2">What I Did:</h3>
                            </div>
                            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                                {step.resources.map((resource, idx) => (
                                    <li key={idx}>{resource}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MyFirstStepsPage;

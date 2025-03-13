import React from 'react';
import {
    Calendar,
    CheckCircle2,
    Clock,
    BookHeart,
    Book,
    Fuel,
    AlarmClock,
    Mail,
    BarChart4,
} from 'lucide-react';

interface DailyTask {
    time: string;
    title: string;
    description: string;
    type:
    | 'meditation'
    | 'action'
    | 'work'
    | 'meeting'
    | 'reading'
    | 'food'
    | 'alert'
    | 'mail';
}

function MyDailyRecoveryPage() {
    const dailyTasks: DailyTask[] = [
        {
            time: '5:00 AM',
            title: 'Morning Alarm',
            description:
                'I wake up feeling grateful to be alive and think about the day ahead.',
            type: 'alert',
        },
        {
            time: '5:15 AM',
            title: 'Breakfast',
            description:
                'I enjoy my planned, abstinent breakfast of rocks and twigs (just kidding - actual food).',
            type: 'food',
        },
        {
            time: '5:45 AM',
            title: 'Email Sponsor',
            description:
                'Update my sponsor on how I was with my recovery yesterday and what I have planned today.',
            type: 'mail',
        },
        {
            time: '6:00 AM',
            title: 'Morning Meeting',
            description:
                'Read one page from For Today and write in my journal about how it applies to my recovery.',
            type: 'meeting',
        },
        {
            time: '7:30 AM',
            title: 'Work',
            description:
                'The morning activity begins.  Having a meeting under my belt, I am ready to what the day holds.',
            type: 'work',
        },
        {
            time: '11:00 AM',
            title: 'Lunch',
            description:
                'I enjoy my planned, abstinent lunch of a protein and a large salad.',
            type: 'food',
        },
        {
            time: '11:30 AM',
            title: 'Work',
            description:
                'Work it!  Having fueled up at lunch, I am ready for the afternoon.',
            type: 'work',
        },
        {
            time: '2:50 PM',
            title: '@2:50 Meditation',
            description: 'Join the global @2:50 meditation for 10 minutes of peace.',
            type: 'meditation',
        },
        {
            time: '3:00 PM',
            title: 'Snack Time',
            description: 'After a moment of peace, a perfect time for some fruit.',
            type: 'food',
        },
        {
            time: '6:00 PM',
            title: 'Dinner',
            description:
                'Ahhhhhh... A delicious and abstinent dinner after a good day of work.',
            type: 'food',
        },
        {
            time: '7:00 PM',
            title: 'Evening Meeting?',
            description:
                'Most nights I attend another group meeting online depending on the day.',
            type: 'meeting',
        },
        {
            time: '9:00 PM',
            title: 'Bedtime',
            description:
                'Think of my gratitudes of the day.',
            type: 'action',
        },
    ];

    const getIcon = (type: DailyTask['type']) => {
        switch (type) {
            case 'meditation':
                return <BookHeart className="w-6 h-6 text-purple-600" />;
            case 'action':
                return <CheckCircle2 className="w-6 h-6 text-green-600" />;
            case 'meeting':
                return <Calendar className="w-6 h-6 text-blue-600" />;
            case 'reading':
                return <Book className="w-6 h-6 text-brown-600" />;
            case 'food':
                return <Fuel className="w-6 h-6 text-green-600" />;
            case 'alert':
                return <AlarmClock className="w-6 h-6 text-red-600" />;
            case 'mail':
                return <Mail className="w-6 h-6 text-orange-600" />;
            case 'work':
                return <BarChart4 className="w-6 h-6 text-orange-600" />;
            default:
                return <Clock className="w-6 h-6 text-gray-600" />;
        }
    };

    return (
        <div className="page-container">
            <h1 className="page-title">My Daily Recovery</h1>

            <div className="space-y-4">
                {dailyTasks.map((task, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md p-6">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center">
                                {getIcon(task.type)}
                                <h2 className="text-xl font-semibold ml-2">{task.title}</h2>
                            </div>
                            <div className="flex items-center">
                                <Clock className="w-5 h-5 text-gray-400 mr-2" />
                                <span className="text-gray-600 font-medium">{task.time}</span>
                            </div>
                        </div>
                        <p className="text-gray-600">{task.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MyDailyRecoveryPage;

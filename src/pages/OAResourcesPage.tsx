import React from 'react';
import { Link, ExternalLink, Globe } from 'lucide-react';
interface Resource {
  title: string;
  description: string;
  website: string;
}
function OAResourcesPage() {
  const resources: Resource[] = [
    {
      title: "Riven Wood Books",
      description: "Non-OA and non-AA books for recovery.",
      website: "https://rivenwoodbooks.com/"
    },
    {
      title: "OA Lifeline",
      description: "The official OA Lifeline web magazine.",
      website: "https://www.oalifeline.org/"
    },
    {
      title: "Alcoholics Anonymous Big Book (Blue Book)",
      description: "The Big Book of Alcoholics Anonymous, a foundational text for OA.",
      website: "https://www.aa.org/the-big-book"
    },
    {
      title: "11 Reasons Overeating Can Be So Difficult to Manage",
      description: "An article discussing the challenges of managing overeating.",
      website: "https://www.psychologytoday.com/intl/blog/mindfulness-insights/202408/11-reasons-overeating-can-be-so-difficult-to-manage"
    },
    {
      title: "East Bay (California) OA",
      description: "Podcasts from a local OA intergroup with resources and support.",
      website: "https://www.eastbayoa.org/podcasts.html"
    },
    {
      title: "Putting Together a Plan of Eating",
      description: "A guide to creating a personalized plan of eating.",
      website: "https://oasv.org/putting-together-a-plan-of-eating/"
    },
    {
      title: "The Truth About Starchy Vegetables",
      description: "A discussion on the role of starchy vegetables in a healthy diet.",
      website: "https://hopkinsdiabetesinfo.org/the-truth-about-starchy-vegetables/"
    },
    {
      title: "Strong Abstinence Checklist and Writing Exercise",
      description: "A checklist and writing exercise to help maintain strong abstinence.",
      website: "https://oa.org/app/uploads/2021/08/strong-abstinence-checklist-and-writing-exercise.pdf"
    },
    {
      title: "Glycemic Index of Foods",
      description: "How much sugar is in foods and their glycemic index.",
      website: "https://www.healthline.com/nutrition/glycemic-index#gi-of-foods"
    },
    {
      title: "Good Character Traits",
      description: "A list of positive character traits to help you journal on your own positive qualities.",
      website: "https://www.goodgoodgood.co/articles/good-character-traits"
    },
    {
      title: "Feelings Wheel",
      description: "A useful tool for identifying and expressing emotions.",
      website: "https://feelingswheel.com/"
    },
    {
      title: "Late Night Eating",
      description: "Is Eating Before Bed Bad for You?  The best approach to late-night snacking.",
      website: "https://health.clevelandclinic.org/is-eating-before-bed-bad-for-you"
    }
  ]
  return (
    <div className="page-container">
      <h1 className="page-title">My Recovery Resources</h1>
      <h2 className="disclaimer">Overeaters Anonymous has nothing to do with this site.  All opinions are my own and should not be used as medical advice.</h2>

      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Resources</h2>
          <div className="space-y-4">
            {resources.map((resource) => (
              <div key={resource.title} className="p-4 border border-gray-200 rounded-md hover:shadow-md transition-shadow duration-300">
                <div className="mb-3">
                  <div className="h-8 bg-blue-50 rounded-md px-3 py-1 font-medium text-gray-800 shadow-sm">
                    {resource.title}
                  </div>
                </div>
                <div className="bg-gray-100 rounded-md p-3 shadow-inner text-gray-700 mb-4">{resource.description}</div>
                <a
                  href={resource.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
                >
                  <Globe className="w-4 h-4 mr-2" />
                  Visit Website
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OAResourcesPage
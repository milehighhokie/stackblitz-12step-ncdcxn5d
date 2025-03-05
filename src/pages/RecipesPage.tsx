import React from 'react';
import { Utensils } from 'lucide-react';

function RecipesPage() {
  return (
    <div className="page-container">
      <h1 className="page-title">Recipes</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Placeholder recipe cards */}
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <Utensils className="w-5 h-5 text-blue-600" />
              <div className="h-6 bg-gray-100 rounded w-3/4 ml-2"></div>
            </div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-100 rounded w-full"></div>
              <div className="h-4 bg-gray-100 rounded w-5/6"></div>
              <div className="h-4 bg-gray-100 rounded w-4/6"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecipesPage
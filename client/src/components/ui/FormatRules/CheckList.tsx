import React, { useState } from "react";

interface CheckListItem {
  id: string;
  text: string;
  checked: boolean;
}

const CheckList: React.FC = () => {
  const [items, setItems] = useState<CheckListItem[]>([
    // Equipment Requirements
    { id: "1", text: "Drone is a quadcopter (four rotors)", checked: false },
    { id: "2", text: "Aircraft wheelbase is maximum 180mm", checked: false },
    {
      id: "3",
      text: "Battery-based flight time of at least 5 minutes",
      checked: false,
    },
    {
      id: "4",
      text: "Takeoff weight is less than 250g (including protective guard and battery)",
      checked: false,
    },
    {
      id: "5",
      text: "Drone has fully enclosed protective guard for flight safety",
      checked: false,
    },
    {
      id: "6",
      text: "Drone can be controlled via physical remote controller",
      checked: false,
    },
  ]);

  const toggleCheck = (id: string) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item,
      ),
    );
  };

  const CheckmarkIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4 text-white"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );

  const completedCount = items.filter((item) => item.checked).length;
  const completionPercentage = (completedCount / items.length) * 100;

  return (
    <section className="mx-auto max-w-md">
      {/* Main Card Container */}
      <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg">
        {/* Header Section */}
        <div className="border-b border-gray-100 bg-white px-8 py-6">
          <h2 className="subtitle mb-2 text-gray-800">
            Equipment Requirements Checklist
          </h2>

          {/* Progress Indicator */}
          <div className="caption mb-3 flex items-center justify-between text-gray-600">
            <span className="font-medium">
              {completedCount} of {items.length} completed
            </span>
            <span className="medium-md font-semibold text-blue-600">
              {Math.round(completionPercentage)}%
            </span>
          </div>

          {/* Progress Bar */}
          <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
            <div
              className="h-full rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 transition-all duration-500 ease-out"
              style={{ width: `${completionPercentage}%` }}
            />
          </div>
        </div>

        {/* Checklist Items */}
        <div className="p-6">
          <div className="space-y-3">
            {items.map((item, index) => (
              <div key={item.id}>
                {/* Section Divider */}
                {index === 6 && (
                  <div className="flex items-center gap-3 py-3">
                    <div className="h-px flex-1 bg-gray-300"></div>
                    <span className="caption font-medium text-gray-500">
                      Items to Bring
                    </span>
                    <div className="h-px flex-1 bg-gray-300"></div>
                  </div>
                )}

                <div
                  className={`group flex cursor-pointer items-center gap-4 rounded-xl p-4 transition-all duration-200 ${
                    item.checked
                      ? "border border-green-200 bg-green-50"
                      : "border border-transparent bg-gray-50 hover:border-blue-200 hover:bg-blue-50 hover:shadow-sm"
                  }`}
                  onClick={() => toggleCheck(item.id)}
                >
                  {/* Custom Checkbox */}
                  <div className="flex-shrink-0">
                    <div
                      className={`flex h-6 w-6 items-center justify-center rounded-lg border-2 transition-all duration-200 ${
                        item.checked
                          ? "border-blue-600 bg-blue-600 shadow-md"
                          : "border-gray-300 bg-white group-hover:border-blue-400"
                      }`}
                    >
                      {item.checked && (
                        <div className="scale-110 transform">
                          <CheckmarkIcon />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Item Text */}
                  <span
                    className={`body-sm flex-1 select-none transition-all duration-200 ${
                      item.checked
                        ? "text-green-700 line-through"
                        : "text-gray-800 group-hover:text-blue-800"
                    }`}
                  >
                    {item.text}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Section */}
        {completionPercentage === 100 && (
          <div className="border-t border-green-100 bg-gradient-to-r from-green-50 to-emerald-50 px-6 py-4">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-green-600">
                <CheckmarkIcon />
              </div>
              <div>
                <p className="body-lg text-green-800">
                  Equipment ready! Your drone meets all requirements
                </p>
                <p className="caption text-green-700">
                  Remember: All equipment will be inspected by organizers. Good
                  luck! 🚁
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Motivational Footer */}
        {completionPercentage < 100 && (
          <div className="border-t border-gray-100 bg-gray-50 px-6 py-4">
            <p className="caption text-center text-gray-600">
              <span className="font-medium text-gray-800">
                {items.length - completedCount} requirements remaining
              </span>{" "}
              • Ensure your drone meets all specifications before competition！
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default CheckList;

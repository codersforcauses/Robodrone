import React, { useState } from "react";

interface CheckListItem {
  id: string;
  text: string;
  checked: boolean;
}

const CheckList: React.FC = () => {
  const [items, setItems] = useState<CheckListItem[]>([
    { id: "1", text: "<250g, fully enclosed guard drone", checked: false },
    { id: "2", text: "Physical remote controller", checked: false },
    { id: "3", text: "Your teammate", checked: false },
    { id: "4", text: "Team identification", checked: false },
    { id: "5", text: "Charged batteries (5+ min flight)", checked: false },
    { id: "6", text: "Water bottle", checked: false },
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
          <h2 className="mb-2 text-2xl font-bold text-gray-800">
            Bring-on-the-day Checklist
          </h2>

          {/* Progress Indicator */}
          <div className="mb-3 flex items-center justify-between text-sm text-gray-600">
            <span className="font-medium">
              {completedCount} of {items.length} completed
            </span>
            <span className="font-semibold text-blue-600">
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
              <div
                key={item.id}
                className={`group relative flex cursor-pointer items-center gap-4 rounded-xl p-4 transition-all duration-200 ${
                  item.checked
                    ? "border border-green-200 bg-green-50"
                    : "border border-transparent bg-gray-50 hover:border-blue-200 hover:bg-blue-50 hover:shadow-sm"
                }`}
                onClick={() => toggleCheck(item.id)}
              >
                {/* Custom Checkbox */}
                <div className="relative flex-shrink-0">
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

                  {/* Subtle animation ring for completed items */}
                  {item.checked && (
                    <div className="absolute inset-0 animate-ping rounded-lg border-2 border-blue-300 opacity-25" />
                  )}
                </div>

                {/* Item Text */}
                <span
                  className={`flex-1 select-none text-base font-medium transition-all duration-200 ${
                    item.checked
                      ? "text-green-700 line-through"
                      : "text-gray-800 group-hover:text-blue-800"
                  }`}
                >
                  {item.text}
                </span>
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
                <p className="font-semibold text-green-800">
                  All set! You're ready for the tournament
                </p>
                <p className="text-sm text-green-700">
                  Good luck and fly safe! 🚁
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Motivational Footer */}
        {completionPercentage < 100 && (
          <div className="border-t border-gray-100 bg-gray-50 px-6 py-4">
            <p className="text-center text-sm text-gray-600">
              <span className="font-medium text-gray-800">
                {items.length - completedCount} items remaining
              </span>{" "}
              • Make sure you have everything before the competitiont！
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default CheckList;

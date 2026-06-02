interface StepperProps {
  currentStep: number;
  steps: { label: string; icon: React.ReactNode }[];
}

export default function Stepper({ currentStep, steps }: StepperProps) {
  return (
    <div className="w-full bg-white rounded-xl border border-gray-200 px-6 py-4 shadow-sm">
      {/* Desktop: horizontal */}
      <div className="hidden md:flex items-center justify-between">
        {steps.map((step, index) => {
          const isActive = index === currentStep;
          const isCompleted = index < currentStep;
          const isLast = index === steps.length - 1;

          return (
            <div key={index} className="flex items-center flex-1">
              <div className="flex items-center gap-3">
                <div
                  className={`
                    w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold shrink-0
                    transition-all duration-300
                    ${
                      isActive
                        ? "bg-teal-500 text-white shadow-md shadow-teal-500/30"
                        : isCompleted
                          ? "bg-teal-500 text-white"
                          : "bg-gray-100 text-gray-400 border border-gray-200"
                    }
                  `}
                >
                  {isCompleted ? (
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  ) : (
                    step.icon
                  )}
                </div>
                <span
                  className={`
                    text-sm font-medium whitespace-nowrap
                    ${
                      isActive
                        ? "text-teal-600"
                        : isCompleted
                          ? "text-gray-700"
                          : "text-gray-400"
                    }
                  `}
                >
                  {step.label}
                </span>
              </div>

              {!isLast && (
                <div className="flex-1 mx-4">
                  <div className="h-[2px] w-full bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-teal-500 transition-all duration-500 ${
                        isCompleted ? "w-full" : "w-0"
                      }`}
                    />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Mobile/Tablet: vertical stack */}
      <div className="flex md:hidden flex-col gap-3">
        {steps.map((step, index) => {
          const isActive = index === currentStep;
          const isCompleted = index < currentStep;
          const isLast = index === steps.length - 1;

          return (
            <div key={index} className="flex items-start gap-3">
              {/* Circle + vertical line */}
              <div className="flex flex-col items-center">
                <div
                  className={`
                    w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold shrink-0
                    transition-all duration-300
                    ${
                      isActive
                        ? "bg-teal-500 text-white shadow-md shadow-teal-500/30"
                        : isCompleted
                          ? "bg-teal-500 text-white"
                          : "bg-gray-100 text-gray-400 border border-gray-200"
                    }
                  `}
                >
                  {isCompleted ? (
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  ) : (
                    step.icon
                  )}
                </div>
                {!isLast && (
                  <div className="w-[2px] h-4 bg-gray-200 rounded-full overflow-hidden mt-1">
                    <div
                      className={`w-full bg-teal-500 transition-all duration-500 ${
                        isCompleted ? "h-full" : "h-0"
                      }`}
                    />
                  </div>
                )}
              </div>

              {/* Label */}
              <span
                className={`
                  text-sm font-medium pt-1.5
                  ${
                    isActive
                      ? "text-teal-600"
                      : isCompleted
                        ? "text-gray-700"
                        : "text-gray-400"
                  }
                `}
              >
                {step.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

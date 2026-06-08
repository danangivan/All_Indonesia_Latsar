const fs = require('fs');

let content = fs.readFileSync('app/page.tsx', 'utf8');

// 1. Add isSubmitted state
if (!content.includes('const [isSubmitted, setIsSubmitted] = useState(false);')) {
  content = content.replace(
    'const [customsForm, setCustomsForm] = useState({',
    'const [isSubmitted, setIsSubmitted] = useState(false);\n  const [customsForm, setCustomsForm] = useState({'
  );
}

// 2. Add Early Return for Summary Page
if (!content.includes('if (isSubmitted) {')) {
  content = content.replace(
    'return (',
    `if (isSubmitted) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
        <Header />
        <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 animate-in fade-in zoom-in duration-500">
          <SummaryPage 
            travelers={travelers} 
            travelDetails={travelDetails} 
            declarations={declarations} 
            onReset={() => {
              setIsSubmitted(false);
              setCurrentStep(0);
              setTravelers([{ fullName: "", passportNo: "", passportCountry: "", gender: "", birthDate: "", passportExpiry: "", email: "", phoneCode: "+62", phone: "", isGroupLeader: true }]);
            }}
          />
        </main>
        <Footer />
      </div>
    );
  }

  return (`
  );
}

// 3. Remove "Simpan" button inside the Deklarasi form
const simpanButtonRegex = /\{\/\* Submit \/ Back to list \*\/\}[\\s\\S]*?<\/div>/;
content = content.replace(simpanButtonRegex, '');

// 4. Update Navigation Bar to include "Kirim" button on Step 2
const navBarTarget = `{currentStep < steps.length - 1 ? (
              <button
                onClick={() => {
                  setCurrentStep(Math.min(steps.length - 1, currentStep + 1));
                  setDeclarationView({ mode: "list", index: 0 });
                }}
                className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-teal-500 rounded-lg hover:bg-teal-600 transition-colors shadow-sm shadow-teal-500/20"
              >
                {t("next")}
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </button>
            ) : (
              <div />
            )}`;

const navBarReplacement = `{currentStep < steps.length - 1 ? (
              <button
                onClick={() => {
                  setCurrentStep(Math.min(steps.length - 1, currentStep + 1));
                  setDeclarationView({ mode: "list", index: 0 });
                }}
                className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-teal-500 rounded-lg hover:bg-teal-600 transition-colors shadow-sm shadow-teal-500/20"
              >
                {t("next")}
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </button>
            ) : currentStep === steps.length - 1 ? (
              <button
                onClick={() => setIsSubmitted(true)}
                className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-teal-500 rounded-lg hover:bg-teal-600 transition-colors shadow-sm shadow-teal-500/20"
              >
                Kirim
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </button>
            ) : (
              <div />
            )}`;

content = content.replace(navBarTarget, navBarReplacement);

// 5. Add import for SummaryPage at top
if (!content.includes('import SummaryPage')) {
  content = content.replace(
    'import { FormSection } from "./components/FormElements";',
    'import { FormSection } from "./components/FormElements";\nimport SummaryPage from "./components/SummaryPage";'
  );
}

fs.writeFileSync('app/page.tsx', content, 'utf8');
console.log("Updated app/page.tsx with Kirim button and Summary Page flow");

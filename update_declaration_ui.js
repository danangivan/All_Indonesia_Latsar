const fs = require('fs');
const path = require('path');
const pagePath = path.join(__dirname, 'app', 'page.tsx');
let pageContent = fs.readFileSync(pagePath, 'utf8');

// 1. Replace the list item button opening tag
const btnOpenRegex = /<button[\s\n]*key=\{idx\}[\s\n]*type="button"[\s\n]*onClick=\{[\s\S]*?\}[\s\n]*className=\{`w-full text-left rounded-xl border-2 px-6 py-5 transition-all duration-200 hover:shadow-md \$\{[\s\n]*complete[\s\n]*\? "border-teal-200 bg-teal-50\/30 hover:border-teal-300"[\s\n]*: "border-gray-200 bg-white hover:border-gray-300"[\s\n]*\}`\}[\s\n]*>/;

const newDivOpen = `<div
                              key={idx}
                              className={\`w-full text-left rounded-xl border-2 px-6 py-5 transition-all duration-200 \${
                                complete
                                  ? "border-blue-500 bg-blue-50/10"
                                  : "border-red-500 bg-red-50/10"
                              }\`}
                            >`;

if (pageContent.match(btnOpenRegex)) {
  pageContent = pageContent.replace(btnOpenRegex, newDivOpen);
} else {
  console.log("Could not match the opening button regex.");
}

// 2. Replace the checkmark with an edit button
const checkmarkRegex = /<div className="ml-4">[\s\S]*?<\/div>[\s\n]*<\/div>[\s\n]*<\/button>/;

const editButton = `<div className="ml-4 flex-shrink-0">
                                  <button
                                    type="button"
                                    onClick={() => setDeclarationView({ mode: "form", index: idx })}
                                    className="px-5 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors shadow-sm"
                                  >
                                    {complete ? t("edit") || "Edit" : t("isiData") || "Isi Data"}
                                  </button>
                                </div>
                              </div>
                            </div>`;

if (pageContent.match(checkmarkRegex)) {
  pageContent = pageContent.replace(checkmarkRegex, editButton);
} else {
  console.log("Could not match the checkmark regex.");
}

// 3. Disable the main "Kirim" button if not all declarations are complete
const kirimRegex = /<button[\s\n]*onClick=\{\(\) => setIsSubmitted\(true\)\}[\s\n]*className="flex items-center gap-2 px-5 py-2\.5 text-sm font-semibold text-white bg-teal-500 rounded-lg hover:bg-teal-600 transition-colors shadow-sm shadow-teal-500\/20"[\s\n]*>/;

const disabledKirim = `const allComplete = declarations.length === travelers.length && declarations.every(d => d && isDeclarationComplete(d));
              return (
              <button
                onClick={() => setIsSubmitted(true)}
                disabled={!allComplete}
                className={\`flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white rounded-lg transition-colors shadow-sm \${
                  allComplete 
                    ? "bg-teal-500 hover:bg-teal-600 shadow-teal-500/20" 
                    : "bg-gray-400 cursor-not-allowed"
                }\`}
              >`;

// Wait, the "Kirim" button is inside a ternary expression:
// ) : currentStep === steps.length - 1 && declarationView.mode === "list" ? (
// If I inject `const allComplete = ...; return (` there, it will break the JSX!
// I must put `disabled` and the class logic directly inline!
const inlineDisabledKirim = `<button
                onClick={() => setIsSubmitted(true)}
                disabled={!(declarations.length === travelers.length && declarations.every(d => d && isDeclarationComplete(d)))}
                className={\`flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white rounded-lg transition-colors shadow-sm \${
                  (declarations.length === travelers.length && declarations.every(d => d && isDeclarationComplete(d)))
                    ? "bg-teal-500 hover:bg-teal-600 shadow-teal-500/20"
                    : "bg-gray-400 cursor-not-allowed"
                }\`}
              >`;

if (pageContent.match(kirimRegex)) {
  pageContent = pageContent.replace(kirimRegex, inlineDisabledKirim);
} else {
  console.log("Could not match the Kirim button regex.");
}

fs.writeFileSync(pagePath, pageContent, 'utf8');
console.log("Update complete.");

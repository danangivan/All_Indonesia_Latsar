const fs = require('fs');
const path = require('path');
const pagePath = path.join(__dirname, 'app', 'page.tsx');
let pageContent = fs.readFileSync(pagePath, 'utf8');

const targetStr = `          {/* Navigation buttons */}
          <div className="flex items-center justify-between mt-6 mb-8">
            <button`;

const replacementStr = `          {/* Navigation buttons */}
          {(currentStep !== 2 || declarationView.mode === "list") && (
            <div className="flex items-center justify-between mt-6 mb-8">
              <button`;

pageContent = pageContent.split(targetStr).join(replacementStr);

const endTargetStr = `              </button>
            ) : currentStep === steps.length - 1 ? (
              <button
                onClick={() => setIsSubmitted(true)}
                className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-teal-500 rounded-lg hover:bg-teal-600 transition-colors shadow-sm shadow-teal-500/20"
              >
                {t("kirim") || "Kirim"}
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
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </button>
            ) : null}
          </div>
        </main>
      </div>`;

// Wait, the "Kirim" text might just be "Kirim" not `{t("kirim") || "Kirim"}`.
// Let's replace the closing tag. We just need to add `)}` after `</div>`

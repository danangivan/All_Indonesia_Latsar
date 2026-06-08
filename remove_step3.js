const fs = require('fs');
let content = fs.readFileSync('app/page.tsx', 'utf8');

const targetContent = `    {
      label: t("step3"),
      icon: (
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
            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
          />
        </svg>
      ),
    },
`;

if (content.includes(targetContent)) {
    content = content.replace(targetContent, '');
    fs.writeFileSync('app/page.tsx', content, 'utf8');
    console.log("Successfully removed step3!");
} else {
    // try to find it dynamically
    const step3Idx = content.indexOf('label: t("step3")');
    if (step3Idx !== -1) {
        const startIdx = content.lastIndexOf('    {', step3Idx);
        const endIdx = content.indexOf('    },', step3Idx) + 7;
        content = content.substring(0, startIdx) + content.substring(endIdx);
        fs.writeFileSync('app/page.tsx', content, 'utf8');
        console.log("Successfully removed step3 dynamically!");
    } else {
        console.log("Could not find step3 at all.");
    }
}

const fs = require('fs');
let content = fs.readFileSync('app/page.tsx', 'utf8');

// The Moda Transportasi block is labeled "PAGE 2: Moda Transportasi & Alamat"
// It ends before "PAGE 3: Deklarasi"

const step2StartMarker = '{/* PAGE 2: Moda Transportasi & Alamat */}';
const step3StartMarker = '{/* PAGE 3: Deklarasi */}';

const step2StartIdx = content.indexOf(step2StartMarker);
const step3StartIdx = content.indexOf(step3StartMarker);

if (step2StartIdx === -1 || step3StartIdx === -1) {
    console.error("Could not find markers!");
    process.exit(1);
}

// Find the start of the currentStep === 2 conditional
const currentStep2Idx = content.lastIndexOf('{currentStep === 2 && (', step2StartIdx);

// The block ends at the closing tags before PAGE 3
const blockEndIdx = content.lastIndexOf(')}\n', step3StartIdx) + 3;

const modaBlockFull = content.substring(currentStep2Idx, blockEndIdx);

// Extract just the inner content of modaBlockFull (inside <> and </>)
const innerStart = modaBlockFull.indexOf('<>') + 2;
const innerEnd = modaBlockFull.lastIndexOf('</>');
const modaInnerContent = modaBlockFull.substring(innerStart, innerEnd).trim();

// Now find where to insert it: end of PAGE 0
const step0EndMarker = '{/* PAGE 1: Detail Perjalanan */}';
const step0EndIdx = content.indexOf(step0EndMarker);

// Find the closing </> for step 0
const step0ClosingTags = content.lastIndexOf('</>', step0EndIdx);

// Construct new content:
// 1. Everything up to step0ClosingTags
// 2. The modaInnerContent
// 3. Everything from step0ClosingTags to currentStep2Idx (the start of the block to remove)
// 4. Everything from blockEndIdx to the end

let newContent = content.substring(0, step0ClosingTags) + '\n' + modaInnerContent + '\n' + content.substring(step0ClosingTags, currentStep2Idx) + content.substring(blockEndIdx);

// Now update the step numbers
// currentStep === 3 becomes currentStep === 2
newContent = newContent.replace(/currentStep === 3/g, 'currentStep === 2');
// PAGE 3 becomes PAGE 2
newContent = newContent.replace(/\{\/\* PAGE 3: Deklarasi \*\/\}/g, '{/* PAGE 2: Deklarasi */}');

// Finally, remove "step3" from the steps array definition
// The steps array has labels: step1, step2, step3, step4
// We need to remove the step3 object block
const step3LabelIdx = newContent.indexOf('label: t("step3")');
if (step3LabelIdx !== -1) {
    const step3ObjStart = newContent.lastIndexOf('{\n', step3LabelIdx);
    // Find the end of this object '},\n'
    let step3ObjEnd = newContent.indexOf('},\n', step3LabelIdx);
    
    // We also need to get the indent spaces correctly
    const indentMatch = newContent.substring(step3ObjStart - 10, step3ObjStart).match(/[ \t]+$/);
    const indent = indentMatch ? indentMatch[0] : '    ';
    
    if (step3ObjStart !== -1 && step3ObjEnd !== -1) {
        newContent = newContent.substring(0, step3ObjStart) + newContent.substring(step3ObjEnd + 3);
        // Change step4 to step3
        newContent = newContent.replace('label: t("step4")', 'label: t("step3")');
    }
}

fs.writeFileSync('app/page.tsx', newContent, 'utf8');
console.log('Moda Transportasi moved successfully!');

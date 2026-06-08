const fs = require('fs');
let content = fs.readFileSync('app/page.tsx', 'utf8');

// The Moda Transportasi block is labeled "PAGE 2: Moda Transportasi & Alamat"
const step2StartMarker = '{/* PAGE 2: Moda Transportasi & Alamat */}';
const step2EndMarker = '              )}';
const step3StartMarker = '{/* PAGE 3: Deklarasi */}';

const step2StartIdx = content.indexOf(step2StartMarker);
const step3StartIdx = content.indexOf(step3StartMarker);

// Find the exact closing tags of step 2 before step 3
const step2ClosingTagsIdx = content.lastIndexOf(')}', step3StartIdx) + 2;

// The full step 2 block to remove:
const step2Block = content.substring(step2StartIdx, step2ClosingTagsIdx + 1);

// Get the inner content of step 2
const innerStart = step2Block.indexOf('<>') + 2;
const innerEnd = step2Block.lastIndexOf('</>');
const innerContent = step2Block.substring(innerStart, innerEnd).trim();

// Find where to insert it: right before the closing tags of step 0
const step1StartMarker = '{/* PAGE 1: Detail Perjalanan */}';
const step1StartIdx = content.indexOf(step1StartMarker);

const step0ClosingTagsIdx = content.lastIndexOf('</>', step1StartIdx);

let newContent = content.substring(0, step0ClosingTagsIdx) + 
                 '  ' + innerContent + '\n                ' + 
                 content.substring(step0ClosingTagsIdx, step2StartIdx) + 
                 content.substring(step2ClosingTagsIdx + 1);

// Now update the step numbers
// currentStep === 3 becomes currentStep === 2
newContent = newContent.replace(/currentStep === 3/g, 'currentStep === 2');
// PAGE 3 becomes PAGE 2
newContent = newContent.replace(/\{\/\* PAGE 3: Deklarasi \*\/\}/g, '{/* PAGE 2: Deklarasi */}');

// Remove step3 from the steps array definition
const step3LabelIdx = newContent.indexOf('label: t("step3")');
if (step3LabelIdx !== -1) {
    const step3ObjStart = newContent.lastIndexOf('{\n', step3LabelIdx);
    let step3ObjEnd = newContent.indexOf('},\n', step3LabelIdx);
    
    if (step3ObjStart !== -1 && step3ObjEnd !== -1) {
        newContent = newContent.substring(0, step3ObjStart) + newContent.substring(step3ObjEnd + 3);
        // Change step4 to step3
        newContent = newContent.replace('label: t("step4")', 'label: t("step3")');
    }
}

fs.writeFileSync('app/page.tsx', newContent, 'utf8');
console.log('Moda Transportasi moved successfully v4!');

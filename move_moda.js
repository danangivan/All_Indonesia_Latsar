const fs = require('fs');
const content = fs.readFileSync('app/page.tsx', 'utf8');
const lines = content.split('\n');

console.log('Total lines:', lines.length);

// === Step 1: Remove step3 from the steps array (lines 330-347, 0-indexed: 329-346) ===
// step3 object: lines 330-347 in 1-indexed
// That is:   {
//       label: t("step3"),
//       ...
//     },
// We need to remove from line 330 to 347 (1-indexed), i.e. index 329 to 346

const step3ArrayStart = 329; // line 330 (0-indexed)
const step3ArrayEnd = 346; // line 347 (0-indexed)
console.log('Step3 array entry:', lines[step3ArrayStart], '...', lines[step3ArrayEnd]);

// === Step 2: Identify the content to move ===
// Step 2 content (inner): lines 1029-1455 (1-indexed), the FormSections inside <>...</>
// The wrapper is lines 1026-1457 (including the comment, conditional, and <> </>)
// Inner content to copy: lines 1029-1455 (1-indexed) => 1028-1454 (0-indexed)
const modaInnerStart = 1028; // line 1029 (0-indexed)
const modaInnerEnd = 1454; // line 1455 (0-indexed)
console.log('Moda inner start:', lines[modaInnerStart].trim().substring(0, 60));
console.log('Moda inner end:', lines[modaInnerEnd].trim().substring(0, 60));

// === Step 3: Where to insert (end of step 0, before </> on line 867) ===
// Line 867 is </> closing step 0 fragment
// Insert before that line. 0-indexed: 866
const insertBeforeLine = 866; // line 867 (0-indexed)
console.log('Insert before:', lines[insertBeforeLine].trim());

// === Step 4: The step 2 wrapper to remove completely (lines 1025-1457) ===
// 1025 is blank, 1026 is comment, 1027 is conditional, ..., 1456 is </>, 1457 is )}
// 0-indexed: 1024-1456
const removeStart = 1024; // line 1025 (0-indexed) - blank line before
const removeEnd = 1456; // line 1457 (0-indexed) - closing )}
console.log('Remove block start:', JSON.stringify(lines[removeStart]));
console.log('Remove block end:', JSON.stringify(lines[removeEnd]));

// === Step 5: Identify currentStep === 3 line to change ===
// Line 1460: {currentStep === 3 && ( => should become {currentStep === 2 && (
// Also line 1459: comment PAGE 3 => PAGE 2

// Now build the new file
let newLines = [];

// Lines 1 to 329 (0-indexed: 0 to 328) - keep as is
for (let i = 0; i < step3ArrayStart; i++) {
  newLines.push(lines[i]);
}

// Skip step3 array entry (0-indexed 329-346)
// Lines 348 onwards (0-indexed 347+) until insert point
// But we need to adjust for the removed lines
// After removing step3 from array, lines shift by -(step3ArrayEnd - step3ArrayStart + 1) = -18

// Continue from after step3 array entry to insertBeforeLine
for (let i = step3ArrayEnd + 1; i < insertBeforeLine; i++) {
  newLines.push(lines[i]);
}

// Insert the moda content here (lines 1029-1455, 0-indexed 1028-1454)
const modaLines = [];
for (let i = modaInnerStart; i <= modaInnerEnd; i++) {
  modaLines.push(lines[i]);
}
newLines.push(...modaLines);

// Continue from insertBeforeLine to removeStart (exclusive)
for (let i = insertBeforeLine; i < removeStart; i++) {
  newLines.push(lines[i]);
}

// Skip the old step 2 block (0-indexed removeStart to removeEnd)
// Continue from after removeEnd
for (let i = removeEnd + 1; i < lines.length; i++) {
  newLines.push(lines[i]);
}

// Now join and do string replacements
let result = newLines.join('\n');

// Replace currentStep === 3 with currentStep === 2
result = result.replace(/currentStep === 3/g, 'currentStep === 2');

// Replace PAGE 3 comment with PAGE 2
result = result.replace('{/* PAGE 3: Deklarasi */}', '{/* PAGE 2: Deklarasi */}');

// Replace step4 label with step3 in the steps array
result = result.replace('label: t("step4")', 'label: t("step3")');

fs.writeFileSync('app/page.tsx', result, 'utf8');

const newLineCount = result.split('\n').length;
console.log('New file has', newLineCount, 'lines (was', lines.length, ')');
console.log('Done!');

const fs = require('fs');
const path = 'd:/LATSAR IVA/Aktualisasi/all-indonesia-redesign/app/form/page.tsx';

let content = fs.readFileSync(path, 'utf8');

content = content.replace(/from "\.\/components/g, 'from "../components');
content = content.replace(/from "\.\/context/g, 'from "../context');
content = content.replace(/from "\.\/lib/g, 'from "../lib');

fs.writeFileSync(path, content, 'utf8');
console.log('Imports updated.');

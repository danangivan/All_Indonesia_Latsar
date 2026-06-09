const fs = require('fs');
const path = require('path');

const pagePath = path.join(__dirname, 'app', 'page.tsx');
let pageContent = fs.readFileSync(pagePath, 'utf8');

const summaryPageCall = `          <SummaryPage
            travelers={travelers}
            travelDetails={travelDetails}
            declarations={declarations}
            healthDecl={healthDecl}`;

const newSummaryPageCall = `          <SummaryPage
            travelers={travelers}
            travelDetails={travelDetails}
            declarations={declarations}
            healthDecl={healthDecl}
            transport={transport}
            address={address}`;

if (pageContent.includes(summaryPageCall)) {
  pageContent = pageContent.replace(summaryPageCall, newSummaryPageCall);
  fs.writeFileSync(pagePath, pageContent, 'utf8');
  console.log("Updated page.tsx to pass transport and address");
} else {
  console.log("Could not find summary page call in page.tsx");
}

// 2. Update SummaryPage.tsx props
const summaryPagePath = path.join(__dirname, 'app', 'components', 'SummaryPage.tsx');
let summaryContent = fs.readFileSync(summaryPagePath, 'utf8');

const summaryProps = `export default function SummaryPage({
  travelers,
  travelDetails,
  declarations,
  healthDecl,
  onReset,
}: {
  travelers: any[];
  travelDetails: any[];
  declarations: any[];
  healthDecl: any[];
  onReset: () => void;
}) {`;

const newSummaryProps = `import { useState } from "react";

export default function SummaryPage({
  travelers,
  travelDetails,
  declarations,
  healthDecl,
  transport,
  address,
  onReset,
}: {
  travelers: any[];
  travelDetails: any[];
  declarations: any[];
  healthDecl: any[];
  transport: any;
  address: any;
  onReset: () => void;
}) {
  const [openTransport, setOpenTransport] = useState(false);
  const [openAddress, setOpenAddress] = useState(false);`;

// Handle the import
// Wait, SummaryPage.tsx already imports React at the top `import React from "react";`.
// I can just replace `export default function SummaryPage` and add `const [open...` inside.

const summaryPropsToReplace = `export default function SummaryPage({
  travelers,
  travelDetails,
  declarations,
  healthDecl,
  onReset,
}: {
  travelers: any[];
  travelDetails: any[];
  declarations: any[];
  healthDecl: any[];
  onReset: () => void;
}) {
  const mainTraveler = travelers[0] || {};`;

const newSummaryPropsContent = `export default function SummaryPage({
  travelers,
  travelDetails,
  declarations,
  healthDecl,
  transport,
  address,
  onReset,
}: {
  travelers: any[];
  travelDetails: any[];
  declarations: any[];
  healthDecl: any[];
  transport: any;
  address: any;
  onReset: () => void;
}) {
  const [openTransport, setOpenTransport] = React.useState(false);
  const [openAddress, setOpenAddress] = React.useState(false);
  const mainTraveler = travelers[0] || {};`;

if (summaryContent.includes(summaryPropsToReplace)) {
  summaryContent = summaryContent.replace(summaryPropsToReplace, newSummaryPropsContent);
} else {
  console.log("Could not find props in SummaryPage.tsx");
}

// 3. Update the Modals / Accordions
const transportAccordion = `<div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
             <div className="p-4 border-b border-gray-100 flex items-center justify-between cursor-pointer hover:bg-gray-50">
               <h3 className="font-bold text-sm text-gray-900">Moda Transportasi</h3>
               <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
             </div>
          </div>`;

const newTransportAccordion = `<div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
             <div 
                className="p-4 border-b border-gray-100 flex items-center justify-between cursor-pointer hover:bg-gray-50"
                onClick={() => setOpenTransport(!openTransport)}
             >
               <h3 className="font-bold text-sm text-gray-900">Moda Transportasi</h3>
               <svg className={\`w-4 h-4 text-gray-400 transition-transform duration-200 \${openTransport ? 'rotate-180' : ''}\`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
             </div>
             {openTransport && (
               <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8 bg-gray-50/30">
                 <div>
                   <p className="text-xs text-gray-400 font-medium mb-1">Moda Transportasi</p>
                   <p className="text-sm text-gray-900 font-medium uppercase">{transport?.mode || "UDARA"}</p>
                 </div>
                 {transport?.airlineName && (
                   <div>
                     <p className="text-xs text-gray-400 font-medium mb-1">Maskapai Penerbangan</p>
                     <p className="text-sm text-gray-900 font-medium uppercase">{transport.airlineName}</p>
                   </div>
                 )}
                 {transport?.shipName && (
                   <div>
                     <p className="text-xs text-gray-400 font-medium mb-1">Nama Kapal</p>
                     <p className="text-sm text-gray-900 font-medium uppercase">{transport.shipName}</p>
                   </div>
                 )}
                 {(transport?.flightNumber || transport?.flightCode) && (
                   <div>
                     <p className="text-xs text-gray-400 font-medium mb-1">Nomor Penerbangan</p>
                     <p className="text-sm text-gray-900 font-medium uppercase">{transport.flightCode} {transport.flightNumber}</p>
                   </div>
                 )}
               </div>
             )}
          </div>`;

if (summaryContent.includes(transportAccordion)) {
  summaryContent = summaryContent.replace(transportAccordion, newTransportAccordion);
} else {
  console.log("Could not find transport accordion");
}

const addressAccordion = `<div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
             <div className="p-4 border-b border-gray-100 flex items-center justify-between cursor-pointer hover:bg-gray-50">
               <h3 className="font-bold text-sm text-gray-900">Alamat di Indonesia</h3>
               <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
             </div>
          </div>`;

const newAddressAccordion = `<div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
             <div 
                className="p-4 border-b border-gray-100 flex items-center justify-between cursor-pointer hover:bg-gray-50"
                onClick={() => setOpenAddress(!openAddress)}
             >
               <h3 className="font-bold text-sm text-gray-900">Alamat di Indonesia</h3>
               <svg className={\`w-4 h-4 text-gray-400 transition-transform duration-200 \${openAddress ? 'rotate-180' : ''}\`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
             </div>
             {openAddress && (
               <div className="p-5 grid grid-cols-1 gap-y-6 bg-gray-50/30">
                 <div>
                   <p className="text-xs text-gray-400 font-medium mb-1">Tipe Akomodasi</p>
                   <p className="text-sm text-gray-900 font-medium uppercase">{address?.accommodationType || "-"}</p>
                 </div>
                 {address?.hotelLabel && (
                   <div>
                     <p className="text-xs text-gray-400 font-medium mb-1">Nama Hotel / Tempat Menginap</p>
                     <p className="text-sm text-gray-900 font-medium uppercase">{address.hotelLabel}</p>
                   </div>
                 )}
                 <div>
                   <p className="text-xs text-gray-400 font-medium mb-1">Alamat Lengkap</p>
                   <p className="text-sm text-gray-900 font-medium uppercase">
                     {address?.fullAddress}
                     {address?.city && \`, \${address.city}\`}
                     {address?.province && \`, \${address.province}\`}
                   </p>
                 </div>
               </div>
             )}
          </div>`;

if (summaryContent.includes(addressAccordion)) {
  summaryContent = summaryContent.replace(addressAccordion, newAddressAccordion);
} else {
  console.log("Could not find address accordion");
}

fs.writeFileSync(summaryPagePath, summaryContent, 'utf8');
console.log("Updated SummaryPage.tsx with Accordions");

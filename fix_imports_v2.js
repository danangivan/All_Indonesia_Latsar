const fs = require('fs');

let content = fs.readFileSync('app/page.tsx', 'utf8');

const replacement = `"use client";

import { useState, useMemo } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Stepper from "./components/Stepper";
import {
  FormSection,
  FormField,
  TextInput,
  SelectInput,
  DateInput,
  PhoneInput,
  RadioInput,
  SearchableSelect,
  ReadOnlyField,
} from "./components/FormElements";
import SummaryPage from "./components/SummaryPage";
import { LanguageProvider, useLanguage } from "./context/LanguageContext";
import {
  indonesianAirports,
  indonesianPorts,
  worldAirlines,
  indonesianProvinces,
  travelPurposes,
  airTransportTypes,
  shipTypes,
  accommodationTypes,
  indonesianHotels,
  getCitiesByProvince,
  getImmigrationOffice,
} from "./lib/data";

function PageContent() {`;

// We replace everything from "use client"; to function PageContent() {
content = content.replace(/"use client";[\s\S]*?function PageContent\(\) \{/, replacement);

fs.writeFileSync('app/page.tsx', content, 'utf8');

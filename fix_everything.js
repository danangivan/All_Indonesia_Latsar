const fs = require('fs');
const path = require('path');

const pagePath = path.join(__dirname, 'app', 'page.tsx');
let pageContent = fs.readFileSync(pagePath, 'utf8');

// 1. Hotel Options
const hotelOptionsOld = \`  const hotelOptions = useMemo(
    () =>
      indonesianHotels.map((h) => ({
        value: h.value,
        label: h.label,
        subtitle: \\\`\\\${\h\.city}, \\\${\h\.province}\\\`,
      })),
    [],
  );\`;
const hotelOptionsNew = \`  const hotelOptions = useMemo(
    () => [
      ...indonesianHotels.map((h) => ({
        value: h.value,
        label: h.label,
        subtitle: \\\`\\\${\h\.city}, \\\${\h\.province}\\\`,
      })),
      {
        value: "other_hotel",
        label: t("hotelLainnya") || "Hotel Lainnya (Ketik Manual)",
      },
    ],
    [indonesianHotels, t],
  );\`;
pageContent = pageContent.replace(hotelOptionsOld, hotelOptionsNew);

// 2. Hotel Searchable Select
const hotelSelectOld = \`                            <SearchableSelect
                              id="hotel-name"
                              placeholder={t("phNamaHotel")}
                              options={hotelOptions}
                              value={address.hotelValue}
                              onChange={(value, opt) => {
                                handleAddressChange("hotelValue", value);
                                handleAddressChange(
                                  "hotelLabel",
                                  opt?.label || "",
                                );
                                const hotel = indonesianHotels.find(
                                  (h) => h.value === value,
                                );
                                if (hotel) {
                                  handleAddressChange("hotelCity", hotel.city);
                                  handleAddressChange(
                                    "hotelProvince",
                                    hotel.province,
                                  );
                                }
                              }}
                            />\`;
const hotelSelectNew = \`                            <SearchableSelect
                              id="hotel-name"
                              placeholder={t("phNamaHotel")}
                              options={hotelOptions}
                              value={address.hotelValue}
                              allowCustom={true}
                              customLabel="Ketik Manual"
                              onCustomClick={() => {
                                handleAddressChange("hotelValue", "other_hotel");
                                handleAddressChange("hotelLabel", "");
                                handleAddressChange("hotelCity", "");
                                handleAddressChange("hotelProvince", "");
                                handleAddressChange("fullAddress", "");
                              }}
                              onChange={(value, opt) => {
                                handleAddressChange("hotelValue", value);
                                if (value === "other_hotel") {
                                  handleAddressChange("hotelLabel", "");
                                  handleAddressChange("hotelCity", "");
                                  handleAddressChange("hotelProvince", "");
                                  handleAddressChange("fullAddress", "");
                                } else {
                                  handleAddressChange("hotelLabel", opt?.label || "");
                                  const hotel = indonesianHotels.find((h) => h.value === value);
                                  if (hotel) {
                                    handleAddressChange("hotelCity", hotel.city);
                                    handleAddressChange("hotelProvince", hotel.province);
                                  }
                                }
                              }}
                            />
                            {address.hotelValue === "other_hotel" && (
                              <div className="mt-4 animate-in slide-in-from-top-2">
                                <TextInput
                                  id="custom-hotel-name"
                                  placeholder={t("phKetikNamaHotel") || "Ketik nama hotel beserta alamatnya..."}
                                  value={address.hotelLabel}
                                  onChange={(e) => {
                                    handleAddressChange("hotelLabel", e.target.value);
                                    handleAddressChange("fullAddress", e.target.value);
                                  }}
                                />
                              </div>
                            )}\`;
pageContent = pageContent.replace(hotelSelectOld, hotelSelectNew);

// 3. Arrival Date Options
const arrivalDateOld = \`                              options={[
                                {
                                  value: "today",
                                  label: new Date().toLocaleDateString(
                                    "id-ID",
                                    {
                                      day: "2-digit",
                                      month: "long",
                                      year: "numeric",
                                    },
                                  ),
                                },
                                {
                                  value: "tomorrow",
                                  label: new Date(
                                    Date.now() + 86400000,
                                  ).toLocaleDateString("id-ID", {
                                    day: "2-digit",
                                    month: "long",
                                    year: "numeric",
                                  }),
                                },
                                {
                                  value: "custom",
                                  label: t("tanggalLainnya"),
                                },
                              ]}\`;
const arrivalDateNew = \`                              options={[
                                {
                                  value: "yesterday",
                                  label: new Date(
                                    Date.now() - 86400000,
                                  ).toLocaleDateString("id-ID", {
                                    day: "2-digit",
                                    month: "long",
                                    year: "numeric",
                                  }),
                                },
                                {
                                  value: "today",
                                  label: new Date().toLocaleDateString(
                                    "id-ID",
                                    {
                                      day: "2-digit",
                                      month: "long",
                                      year: "numeric",
                                    },
                                  ),
                                },
                                {
                                  value: "tomorrow",
                                  label: new Date(
                                    Date.now() + 86400000,
                                  ).toLocaleDateString("id-ID", {
                                    day: "2-digit",
                                    month: "long",
                                    year: "numeric",
                                  }),
                                },
                                {
                                  value: "day_after_tomorrow",
                                  label: new Date(
                                    Date.now() + 2 * 86400000,
                                  ).toLocaleDateString("id-ID", {
                                    day: "2-digit",
                                    month: "long",
                                    year: "numeric",
                                  }),
                                },
                              ]}\`;
pageContent = pageContent.replace(arrivalDateOld, arrivalDateNew);

// 4. Visa Red Box & Link
const visaOld = \`                            {detail.documentStatus === "active" && (
                              <div className="mt-3 p-3 bg-green-50 border border-green-100 rounded-lg animate-in fade-in zoom-in duration-300">
                                <div className="text-sm text-green-700 font-medium flex items-center gap-2">
                                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                                    <svg
                                      className="w-4 h-4 text-green-600"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2.5}
                                        d="M5 13l4 4L19 7"
                                      />
                                    </svg>
                                  </div>
                                  {t("visaAktifDitemukan")}
                                </div>
                              </div>
                            )}\`;
const visaNew = \`                            {detail.documentStatus === "active" && (
                              <div className="mt-3 p-3 bg-red-50 border border-red-200 rounded-lg animate-in fade-in zoom-in duration-300">
                                <div className="text-sm text-red-700 font-medium flex items-center gap-2">
                                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                                    <svg
                                      className="w-4 h-4 text-red-600"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                    >
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                    </svg>
                                  </div>
                                  {t("visaAktifDitemukan")}
                                </div>
                                <div className="mt-2 ml-8 text-xs text-red-800 font-medium leading-relaxed">
                                  Mohon konfirmasi visa anda pada web <a href="https://evisa.imigrasi.go.id/web/applications/stay-permit/claim" className="underline font-bold hover:text-red-900 transition-colors" target="_blank" rel="noopener noreferrer">https://evisa.imigrasi.go.id/web/applications/stay-permit/claim</a>
                                </div>
                              </div>
                            )}\`;
pageContent = pageContent.replace(visaOld, visaNew);

// 5. Health Declaration SearchableSelect
const healthSelectOld = \`                              <SelectInput
                                id={\\\`health-countries-\\\${\idx}\\\`\}
                                placeholder={t("phPilih")}
                                options={countryOptions}
                                value=""
                                onChange={(e) => {
                                  const val = e.target.value;
                                  if (
                                    val &&
                                    !(
                                      healthDecl[idx]?.countriesVisited || []
                                    ).includes(val)
                                  ) {
                                    handleCountryVisitedToggle(idx, val);
                                  }
                                }}
                              />\`;
const healthSelectNew = \`                              <SearchableSelect
                                id={\\\`health-countries-\\\${\idx}\\\`\}
                                placeholder={t("phPilih")}
                                options={countryOptions}
                                value=""
                                onChange={(val) => {
                                  if (
                                    val &&
                                    !(
                                      healthDecl[idx]?.countriesVisited || []
                                    ).includes(val)
                                  ) {
                                    handleCountryVisitedToggle(idx, val);
                                  }
                                }}
                              />\`;
pageContent = pageContent.replace(healthSelectOld, healthSelectNew);

// 6. Quarantine Condition Wrap for Q2 and Country
const quarantineOld = \`                                        idx,
                                        "commodityQuantity",
                                        e.target.value,
                                      )
                                    }
                                  />
                                </FormField>
                              </div>
                            )}

                            {/* Q2: Certificate */}
                            <div className="mb-6">
                              <p className="text-xs font-semibold text-navy-800 mb-3">
                                {t("dekKarantinaQ2")}{" "}
                                <span className="text-red-500 ml-0.5">*</span>
                              </p>
                              <RadioInput
                                name={\\\`quar-cert-\\\${\idx}\\\`\}
                                id={\\\`quar-cert-\\\${\idx}\\\`\}
                                options={[
                                  { value: "ya", label: t("ya") },
                                  { value: "tidak", label: t("tidak") },
                                ]}
                                value={
                                  (
                                    quarantineDecl[idx] || {
                                      hasCertificate: "",
                                    }
                                  ).hasCertificate
                                }
                                onChange={(value) =>
                                  handleQuarantineDeclChange(
                                    idx,
                                    "hasCertificate",
                                    value,
                                  )
                                }
                              />
                            </div>

                            {/* Country of origin */}
                            <div className="mb-2">
                              <FormField label={t("dekKarantinaDariNegara")}>
                                <SearchableSelect
                                  id={\\\`quar-origin-country-\\\${\idx}\\\`\}
                                  placeholder={t("dekKarantinaPhDariNegara")}
                                  options={countryOptions}
                                  value={
                                    (
                                      quarantineDecl[idx] || {
                                        originCountry: "",
                                      }
                                    ).originCountry
                                  }
                                  onChange={(value) =>
                                    handleQuarantineDeclChange(
                                      idx,
                                      "originCountry",
                                      value,
                                    )
                                  }
                                />
                              </FormField>
                            </div>
                          </FormSection>\`;

const quarantineNew = \`                                        idx,
                                        "commodityQuantity",
                                        e.target.value,
                                      )
                                    }
                                  />
                                </FormField>
                              
                                {/* Q2: Certificate */}
                                <div className="mt-6 mb-6">
                                  <p className="text-xs font-semibold text-navy-800 mb-3">
                                    {t("dekKarantinaQ2")}{" "}
                                    <span className="text-red-500 ml-0.5">*</span>
                                  </p>
                                  <RadioInput
                                    name={\\\`quar-cert-\\\${\idx}\\\`\}
                                    id={\\\`quar-cert-\\\${\idx}\\\`\}
                                    options={[
                                      { value: "ya", label: t("ya") },
                                      { value: "tidak", label: t("tidak") },
                                    ]}
                                    value={
                                      (
                                        quarantineDecl[idx] || {
                                          hasCertificate: "",
                                        }
                                      ).hasCertificate
                                    }
                                    onChange={(value) =>
                                      handleQuarantineDeclChange(
                                        idx,
                                        "hasCertificate",
                                        value,
                                      )
                                    }
                                  />
                                </div>

                                {/* Country of origin */}
                                <div className="mb-2">
                                  <FormField label={t("dekKarantinaDariNegara")}>
                                    <SearchableSelect
                                      id={\\\`quar-origin-country-\\\${\idx}\\\`\}
                                      placeholder={t("dekKarantinaPhDariNegara")}
                                      options={countryOptions}
                                      value={
                                        (
                                          quarantineDecl[idx] || {
                                            originCountry: "",
                                          }
                                        ).originCountry
                                      }
                                      onChange={(value) =>
                                        handleQuarantineDeclChange(
                                          idx,
                                          "originCountry",
                                          value,
                                        )
                                      }
                                    />
                                  </FormField>
                                </div>
                              </div>
                            )}
                          </FormSection>\`;
pageContent = pageContent.replace(quarantineOld, quarantineNew);

fs.writeFileSync(pagePath, pageContent, 'utf8');
console.log('Script completed.');

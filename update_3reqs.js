const fs = require('fs');
const path = require('path');

const pagePath = path.join(__dirname, 'app', 'page.tsx');
let pageContent = fs.readFileSync(pagePath, 'utf8').replace(/\\r\\n/g, '\\n');

// 1. Hotel Options
const hotelOptionsMatch = \`  // Hotel options for SearchableSelect
  const hotelOptions = useMemo(
    () =>
      indonesianHotels.map((h) => ({
        value: h.value,
        label: h.label,
        subtitle: \\\`\\\${\h.city}, \\\${\h.province}\\\`,
      })),
    [],
  );\`.replace(/\\r\\n/g, '\\n');

const newHotelOptions = \`  // Hotel options for SearchableSelect
  const hotelOptions = useMemo(
    () => [
      ...indonesianHotels.map((h) => ({
        value: h.value,
        label: h.label,
        subtitle: \\\`\\\${\h.city}, \\\${\h.province}\\\`,
      })),
      { value: "other_hotel", label: "Hotel Lainnya (Ketik Manual)", subtitle: "Ketik nama hotel Anda sendiri" }
    ],
    [indonesianHotels],
  );\`.replace(/\\r\\n/g, '\\n');

if (pageContent.includes(hotelOptionsMatch)) {
  pageContent = pageContent.replace(hotelOptionsMatch, newHotelOptions);
  console.log("Replaced hotelOptions successfully.");
} else {
  console.log("Could not find hotelOptions match.");
}

// 2. Hotel OnChange and Custom Field
const hotelOnChangeMatch = \`                            <SearchableSelect
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
                            />\`.replace(/\\r\\n/g, '\\n');

const newHotelOnChange = \`                            <SearchableSelect
                              id="hotel-name"
                              placeholder={t("phNamaHotel")}
                              options={hotelOptions}
                              value={address.hotelValue}
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
                                    handleAddressChange("fullAddress", hotel.address);
                                  }
                                }
                              }}
                            />
                          </FormField>

                          {address.hotelValue === "other_hotel" && (
                            <div className="mt-4 animate-in slide-in-from-top-2 md:col-span-2">
                              <FormField label={t("namaHotel") || "Nama Hotel"} required>
                                <TextInput
                                  id="custom-hotel-name"
                                  placeholder={t("phKetikNamaHotel") || "Ketik nama hotel beserta alamatnya..."}
                                  value={address.hotelLabel}
                                  onChange={(e) => {
                                    handleAddressChange("hotelLabel", e.target.value);
                                    handleAddressChange("fullAddress", e.target.value);
                                  }}
                                />
                              </FormField>
                            </div>
                          )}\`.replace(/\\r\\n/g, '\\n');

if (pageContent.includes(hotelOnChangeMatch)) {
  pageContent = pageContent.replace(hotelOnChangeMatch, newHotelOnChange);
  console.log("Replaced hotelOnChange successfully.");
} else {
  console.log("Could not find hotelOnChange match.");
}

// 3. Arrival Date Options
const arrivalDateMatch = \`                              options={[
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
                              ]}\`.replace(/\\r\\n/g, '\\n');

const newArrivalDate = \`                              options={[
                                {
                                  value: "yesterday",
                                  label: new Date(Date.now() - 86400000).toLocaleDateString("id-ID", { day: "2-digit", month: "long", year: "numeric" }),
                                },
                                {
                                  value: "today",
                                  label: new Date().toLocaleDateString("id-ID", { day: "2-digit", month: "long", year: "numeric" }),
                                },
                                {
                                  value: "tomorrow",
                                  label: new Date(Date.now() + 86400000).toLocaleDateString("id-ID", { day: "2-digit", month: "long", year: "numeric" }),
                                },
                                {
                                  value: "day_after_tomorrow",
                                  label: new Date(Date.now() + 2 * 86400000).toLocaleDateString("id-ID", { day: "2-digit", month: "long", year: "numeric" }),
                                },
                              ]}\`.replace(/\\r\\n/g, '\\n');

if (pageContent.includes(arrivalDateMatch)) {
  pageContent = pageContent.replace(arrivalDateMatch, newArrivalDate);
  console.log("Replaced arrivalDate successfully.");
} else {
  console.log("Could not find arrivalDate match.");
}

// 4. Visa Warning
const visaWarningMatch = \`                                  {t("visaAktifDitemukan")}
                                </div>
                              </div>
                            )}\`.replace(/\\r\\n/g, '\\n');

const newVisaWarning = \`                                  {t("visaAktifDitemukan")}
                                </div>
                                <div className="mt-2 ml-8 text-xs text-green-800 font-medium leading-relaxed">
                                   Mohon konfirmasi visa anda pada web <a href="https://evisa.imigrasi.go.id/web/applications/stay-permit/claim" className="underline font-bold hover:text-green-900 transition-colors" target="_blank" rel="noopener noreferrer">https://evisa.imigrasi.go.id/web/applications/stay-permit/claim</a>
                                </div>
                              </div>
                            )}\`.replace(/\\r\\n/g, '\\n');

let count = 0;
while (pageContent.includes(visaWarningMatch)) {
  pageContent = pageContent.replace(visaWarningMatch, newVisaWarning);
  count++;
}
if (count > 0) {
  console.log("Replaced visaWarning successfully (" + count + " times).");
} else {
  console.log("Could not find visaWarning match.");
}

fs.writeFileSync(pagePath, pageContent, 'utf8');
console.log("Script executed.");

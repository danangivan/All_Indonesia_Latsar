const fs = require('fs');

let content = fs.readFileSync('app/page.tsx', 'utf8');

const targetContent = `                              <div className="flex flex-wrap gap-2">
                                {[
                                  {
                                    key: "TIDAK_ADA",
                                    label: t("dekKesehatanTidakAda"),
                                  },
                                  {
                                    key: "BATUK",
                                    label: t("dekKesehatanBatuk"),
                                  },
                                  {
                                    key: "DEMAM",
                                    label: t("dekKesehatanDemam"),
                                  },
                                  { key: "LESI", label: t("dekKesehatanLesi") },
                                  {
                                    key: "PILEK",
                                    label: t("dekKesehatanPilek"),
                                  },
                                  {
                                    key: "TENGGOROKAN",
                                    label: t("dekKesehatanTenggorokan"),
                                  },
                                  {
                                    key: "SESAK",
                                    label: t("dekKesehatanSesak"),
                                  },
                                ].map((symptom) => {
                                  const checked =
                                    symptom.key === "TIDAK_ADA"
                                      ? (healthDecl[idx] || { hasSymptoms: "" })
                                          .hasSymptoms === "tidak"
                                      : (healthDecl[idx] || { hasSymptoms: "" })
                                          .hasSymptoms === "ya" &&
                                        (
                                          healthDecl[idx]?.symptoms || []
                                        ).includes(symptom.key);

                                  return (
                                    <button
                                      key={symptom.key}
                                      type="button"
                                      onClick={() => {
                                        if (symptom.key === "TIDAK_ADA") {
                                          handleHealthDeclChange(
                                            idx,
                                            "hasSymptoms",
                                            "tidak",
                                          );
                                          handleHealthDeclChange(
                                            idx,
                                            "symptoms",
                                            [],
                                          );
                                        } else {
                                          handleHealthDeclChange(
                                            idx,
                                            "hasSymptoms",
                                            "ya",
                                          );
                                          handleSymptomToggle(idx, symptom.key);

                                          // If unchecking the last symptom, maybe we don't automatically set "tidak"
                                          // because the user might just be correcting a mistake.
                                        }
                                      }}
                                      className={\`px-3 py-1.5 text-xs font-medium rounded-lg border transition-all duration-200 \${
                                        checked
                                          ? "bg-teal-50 border-teal-300 text-teal-700 shadow-sm"
                                          : "bg-white border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50"
                                      }\`}
                                    >
                                      {symptom.label}
                                    </button>
                                  );
                                })}
                              </div>`;

const replacementContent = `                              <RadioInput
                                name={\`symptoms-\${idx}\`}
                                id={\`symptoms-\${idx}\`}
                                options={[
                                  { value: "ya", label: t("ya") },
                                  { value: "tidak", label: t("tidak") },
                                ]}
                                value={(healthDecl[idx] || { hasSymptoms: "" }).hasSymptoms}
                                onChange={(value) => {
                                  handleHealthDeclChange(
                                    idx,
                                    "hasSymptoms",
                                    value,
                                  );
                                  if (value === "tidak") {
                                    handleHealthDeclChange(idx, "symptoms", []);
                                  }
                                }}
                              />

                              {healthDecl[idx]?.hasSymptoms === "ya" && (
                                <div className="mt-4 flex flex-wrap gap-2 animate-in slide-in-from-top-2 fade-in duration-200">
                                  {[
                                    {
                                      key: "BATUK",
                                      label: t("dekKesehatanBatuk"),
                                    },
                                    {
                                      key: "DEMAM",
                                      label: t("dekKesehatanDemam"),
                                    },
                                    { key: "LESI", label: t("dekKesehatanLesi") },
                                    {
                                      key: "PILEK",
                                      label: t("dekKesehatanPilek"),
                                    },
                                    {
                                      key: "TENGGOROKAN",
                                      label: t("dekKesehatanTenggorokan"),
                                    },
                                    {
                                      key: "SESAK",
                                      label: t("dekKesehatanSesak"),
                                    },
                                  ].map((symptom) => {
                                    const checked = (
                                      healthDecl[idx]?.symptoms || []
                                    ).includes(symptom.key);

                                    return (
                                      <button
                                        key={symptom.key}
                                        type="button"
                                        onClick={() => {
                                          handleSymptomToggle(idx, symptom.key);
                                        }}
                                        className={\`px-3 py-1.5 text-xs font-medium rounded-lg border transition-all duration-200 \${
                                          checked
                                            ? "bg-teal-50 border-teal-300 text-teal-700 shadow-sm"
                                            : "bg-white border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50"
                                        }\`}
                                      >
                                        {symptom.label}
                                      </button>
                                    );
                                  })}
                                </div>
                              )}`;

content = content.replace(targetContent, replacementContent);
fs.writeFileSync('app/page.tsx', content, 'utf8');
console.log("Replaced symptom buttons with radio Ya/Tidak logic");

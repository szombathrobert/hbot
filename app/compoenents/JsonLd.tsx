export const JsonLd = () => {
    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "MedicalClinic",
                "@id": "https://oxigenkamra.hu/#clinic",
                "name": "Endolife Longevity Magánorvosi Centrum",
                "url": "https://oxigenkamra.hu/",
                "logo": "https://oxigenkamra.hu/logo.webp",
                "image": "https://oxigenkamra.hu/hero.webp",
                "description": "Székesfehérvár vezető longevity központja. Hiperbárikus oxigénterápia (HBOT), agyi regeneráció, poszt-COVID krónikus kimerültség (brain fog) és sejtszintű anti-aging kezelések orvosi felügyelettel.",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Budai út 318.",
                    "addressLocality": "Székesfehérvár",
                    "postalCode": "8000",
                    "addressCountry": "HU"
                },
                "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": "47.1932",
                    "longitude": "18.4357"
                },
                "telephone": "+3622999640",
                "email": "recepcio@endo-kapszula.hu",
                "priceRange": "25000 HUF - 699000 HUF",
                "medicalSpecialty": [
                    "Hyperbaric Medicine",
                    "Regenerative Medicine",
                    "Neurological Rehabilitation",
                    "Sports Medicine"
                ],
                "employee": [
                    {
                        "@type": "Physician",
                        "name": "Dr. Prof. Madácsy László",
                        "jobTitle": "Belgyógyász, Gasztroenterológus és Longevity szakértő",
                        "url": "https://oxigenkamra.hu/#szakmai-hatter",
                        "identifier": [
                            {
                                "@type": "PropertyValue",
                                "name": "Magyar Orvosi Kamara",
                                "value": "45326"
                            }
                        ]
                    }
                ]
            },
            {
                "@type": "TherapeuticProcedure",
                "@id": "https://oxigenkamra.hu/#procedure",
                "name": "Hiperbárikus Oxigénterápia és Neuro-regeneráció",
                "provider": { "@id": "https://oxigenkamra.hu/#clinic" },
                "description": "Sejtszintű regenerációs eljárás 1.3-1.5 ATA nyomáson. Elősegíti az angiogenezist, növeli a telomerhosszt és csökkenti a neuroinflammációt.",
                "indication": [
                    { "@id": "https://oxigenkamra.hu/#postcovid" },
                    { "@id": "https://oxigenkamra.hu/#brainfog" }
                ],
                "howItWorks": "A hyperoxic-hypoxic paradoxon révén aktiválja a szervezet öngyógyító folyamatait és az őssejt-mobilizációt.",
                "citation": [
                    "https://pubmed.ncbi.nlm.nih.gov/33206062/",
                    "https://pubmed.ncbi.nlm.nih.gov/35821512/",
                    "https://pubmed.ncbi.nlm.nih.gov/21262744/"
                ]
            },
            {
                "@type": "MedicalCondition",
                "@id": "https://oxigenkamra.hu/#postcovid",
                "name": "Poszt-COVID Szindróma",
                "alternateName": "Long COVID és Krónikus Kimerültség",
                "description": "Vírusfertőzések után visszamaradó krónikus fáradtság, gyulladás és mitokondriális diszfunkció, amelyet alvással nem lehet kipihenni.",
                "possibleTreatment": { "@id": "https://oxigenkamra.hu/#procedure" }
            },
            {
                "@type": "MedicalCondition",
                "@id": "https://oxigenkamra.hu/#brainfog",
                "name": "Agyköd (Brain Fog)",
                "alternateName": "Kognitív Diszfunkció",
                "description": "Koncentrációs zavarok, lassult gondolkodás és memóriaproblémák, amelyeket az agyi hajszálerek csökkent vérellátása és neuroinflammáció okoz.",
                "possibleTreatment": { "@id": "https://oxigenkamra.hu/#procedure" }
            },
            {
                "@type": "FAQPage",
                "@id": "https://oxigenkamra.hu/#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Mi az a hiperbárikus oxigénterápia és milyen problémákon segít?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "A hiperbárikus oxigénterápia során 100%-os tisztaságú oxigént lélegez be megnövelt (1.3 ATA) nyomáson. Ez drasztikusan megnöveli a vérplazmában oldott oxigén szintjét. Kiválóan alkalmazható agyi regenerációra, poszt-COVID 'brain fog' (agyköd) kezelésére, sport-rehabilitációra, valamint a sejtek öregedésének (anti-aging) lassítására."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Miért egyedi a komplex Longevity program (HBOT + PEMF + NIR)?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Klinikánkon a terápiát pulzált elektromágneses (PEMF) és közeli infravörös (NIR-PBM) technológiával ötvözzük. Míg az oxigénkamra az 'üzemanyagot' (oxigént) biztosítja, a PEMF megnyitja a hajszálereket, a NIR pedig beindítja a sejtek energiaközpontjait (mitokondriumok), így a regeneráció szinergiában, többszörös hatékonysággal megy végbe."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Hány kezelés szükséges a tartós eredményhez?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "A regenerációs hatás kumulatív, azaz összeadódik. Általános egészségmegőrzésre napi 1-2 alkalom is frissítő, de a sejtszintű változásokhoz (mint a telomerhossz növekedése) heti 3-5 alkalom javasolt egy 6-12 hetes cikluson belül. Orvosaink minden esetben egyéni, személyre szabott protokollt javasolnak."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Hogyan készüljek fel a kezelésre? (Biztonsági szabályok)",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Tiltott tárgyak: Szigorúan tilos tüzet, gyúlékony anyagokat (benzin, alkohol, olajok, öngyújtó), valamint hegyes tárgyakat a kamrába vinni! Étkezés: Étkezés után 1-2 órával javasolt a használat, ne lépjen be puffasztó ételek fogyasztása után. Fülpattogás: A nyomás növekedésekor füldugulást érezhet (mint a repülőn). Nyeljen nagyokat, mozgassa az állkapcsát, vagy befogott orral fújjon enyhén levegőt a fülébe. Légzés: Lélegezzen normálisan, a nyomáscsökkentéskor tilos visszatartani a lélegzetet!"
                        }
                    }
                ]
            }
        ]
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
    )
}
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
                "description": "Székesfehérvár vezető longevity központja. Hiperbárikus oxigénterápia (HBOT), agyi regeneráció, poszt-COVID rehabilitáció és sejtszintű anti-aging kezelések orvosi felügyelettel.",
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
                "priceRange": "45000 Ft - 120000 Ft",
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
                        "url": "https://oxigenkamra.hu/#szakmai-hatter"
                    }
                ]
            },
            {
                "@type": "TherapeuticProcedure",
                "@id": "https://oxigenkamra.hu/#procedure",
                "name": "Hiperbárikus Oxigénterápia és Neuro-regeneráció",
                "provider": { "@id": "https://oxigenkamra.hu/#clinic" },
                "description": "Sejtszintű regenerációs eljárás 1.3-1.5 ATA nyomáson. Elősegíti az angiogenezist, növeli a telomerhosszt és csökkenti a neuroinflammációt.",
                "indication": ["Post-COVID brain fog", "Chronic fatigue", "Cognitive decline", "Anti-aging"],
                "howItWorks": "A hyperoxic-hypoxic paradoxon révén aktiválja a szervezet öngyógyító folyamatait és az őssejt-mobilizációt.",
                "citation": [
                    "https://pubmed.ncbi.nlm.nih.gov/33206062/",
                    "https://pubmed.ncbi.nlm.nih.gov/35821512/",
                    "https://pubmed.ncbi.nlm.nih.gov/21262744/"
                ]
            },
            {
                "@type": "FAQPage",
                "@id": "https://oxigenkamra.hu/#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Mire jó a hiperbárikus oxigénterápia (HBOT)?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "A hiperbárikus oxigénterápia (HBOT) egy olyan orvosi eljárás, amely során a páciens 100%-os tisztaságú oxigént lélegzik be megnövelt légköri nyomáson. Ez akár 8-szorosára növeli a vérplazmában oldott oxigén szintjét, ami beindítja az új erek képződését (angiogenezis), serkenti az őssejt-termelést, és csökkenti a gyulladásokat. Klinikánkon poszt-COVID agyköd, sport-regeneráció és anti-aging (longevity) folyamatok támogatására alkalmazzuk."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Hogyan segít a HBOT a brain fog (agyköd) esetén?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "A HBOT csökkenti az agyi gyulladást és javítja a mikrokeringést, így közvetlenül támogatja a kognitív funkciók helyreállítását poszt-COVID szindróma esetén."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Milyen hatása van a terápiának a hosszú életre (longevity)?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Kutatások igazolják, hogy a protokollszerű HBOT kezelés képes növelni a telomerek hosszát és csökkenteni a szeneszcens, azaz öregedő sejtek számát a szervezetben."
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
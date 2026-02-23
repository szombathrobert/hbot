export const JsonLd = () => {
    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            // 1. A KLINIKA (MedicalClinic) - A valós székesfehérvári adatokkal
            {
                "@type": "MedicalClinic",
                "@id": "https://endo-kapszula.hu/#clinic",
                "name": "Endo-Kapszula Magánorvosi Centrum",
                "url": "https://endo-kapszula.hu",
                "logo": "https://endo-kapszula.hu/logo.png",
                "image": "https://endo-kapszula.hu/hero.webp",
                "description": "Székesfehérvár prémium hiperbárikus oxigénterápiás központja. Orvosi felügyelet, 1.5 ATA nyomás, poszt-COVID és regenerációs kezelések.",
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
                "openingHoursSpecification": [
                    {
                        "@type": "OpeningHoursSpecification",
                        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                        "opens": "08:00",
                        "closes": "20:00"
                    }
                ],
                "medicalSpecialty": [
                    {
                        "@type": "MedicalSpecialty",
                        "name": "Hiperbárikus Medicina",
                        "alternateName": "Hyperbaric Oxygen Therapy"
                    },
                    {
                        "@type": "MedicalSpecialty",
                        "name": "Rehabilitáció",
                        "alternateName": "Post-COVID Rehabilitation"
                    },
                    {
                        "@type": "MedicalSpecialty",
                        "name": "Sportorvoslás",
                        "alternateName": "Sports Recovery"
                    }
                ]
            },

            {
                "@type": "TherapeuticProcedure",
                "@id": "https://endo-kapszula.hu/#procedure",
                "name": "Hiperbárikus Oxigénterápia (HBOT)",
                "provider": { "@id": "https://endo-kapszula.hu/#clinic" },
                "description": "Orvosi tisztaságú oxigén belégzése emelt nyomáson (max 1.5 ATA). Segíti a sejtszintű regenerációt, gyulladáscsökkentést és a sebgyógyulást.",
                "bodyLocation": "Whole body",
                "procedureType": "Noninvasive",
                "status": "Active",
                "instrument": {
                    "@type": "MedicalDevice",
                    "name": "Hard Shell Hyperbaric Chamber",
                    "description": "Merevfalú, professzionális, légkondicionált kapszula."
                }
            },

            {
                "@type": "HowTo",
                "@id": "https://endo-kapszula.hu/#process",
                "name": "Hogyan zajlik egy HBOT kezelés az Endo-Kapszulánál?",
                "step": [
                    {
                        "@type": "HowToStep",
                        "position": 1,
                        "name": "Érkezés és Konzultáció",
                        "text": "Orvosi állapotfelmérés és kontraindikációk kizárása."
                    },
                    {
                        "@type": "HowToStep",
                        "position": 2,
                        "name": "Elhelyezkedés a kamrában",
                        "text": "Beszállás a tágas kabinba kényelmes ruházatban."
                    },
                    {
                        "@type": "HowToStep",
                        "position": 3,
                        "name": "Nyomásnövelés (Merülés)",
                        "text": "A nyomás fokozatos emelése a terápiás szintre (pl. 1.3 - 1.5 ATA)."
                    },
                    {
                        "@type": "HowToStep",
                        "position": 4,
                        "name": "Oxigénterápia",
                        "text": "Tiszta oxigén belégzése maszkon keresztül 30-60 percig."
                    }
                ]
            },

            {
                "@type": "FAQPage",
                "@id": "https://endo-kapszula.hu/#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Fájdalmas a hiperbárikus oxigénterápia?",
                        "acceptedAnswer": { "@type": "Answer", "text": "Nem, a kezelés teljesen fájdalommentes. A nyomásváltozáskor enyhe füldugulás érezhető, ami nyeléssel könnyen kiegyenlíthető." }
                    },
                    {
                        "@type": "Question",
                        "name": "Hány alkalom szükséges?",
                        "acceptedAnswer": { "@type": "Answer", "text": "Általános regenerációhoz 5-10 alkalom, krónikus problémák esetén hosszabb kúra javasolt az orvosi konzultáció alapján." }
                    },
                    {
                        "@type": "Question",
                        "name": "Mennyibe kerül a kezelés?",
                        "acceptedAnswer": { "@type": "Answer", "text": "Egy 5 alkalmas bérlet 45.000 Ft, a 10 alkalmas 85.000 Ft. Az árak tartalmazzák az orvosi konzultációt is." }
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
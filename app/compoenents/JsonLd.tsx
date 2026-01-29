export const JsonLd = () => {
    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            // 1. HERO & ABOUT & TRUST - A Klinika és az Entitás
            {
                "@type": "MedicalClinic",
                "@id": "https://oxigenterapia.hu/#clinic",
                "name": "Oxigénterápia.hu - Orvosi Hiperbárikus Centrum",
                "url": "https://oxigenterapia.hu",
                "logo": "https://oxigenterapia.hu/logo.png",
                "image": "https://oxigenterapia.hu/hero-image.jpg",
                "description": "Magyarország vezető hiperbárikus oxigénterápiás központja. Orvosi tisztaságú oxigén, 1.5 ATA nyomás, keményfalú kamra.",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Példa utca 5.",
                    "addressLocality": "Budapest",
                    "postalCode": "1024",
                    "addressCountry": "HU"
                },
                "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": "47.5135",
                    "longitude": "19.0142"
                },
                "telephone": "+36 1 234 5678",
                "priceRange": "$$",
                // TRUST.TSX adataiból (AggregateRating)
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "5.0",
                    "reviewCount": "500",
                    "bestRating": "5"
                },
                // BENEFITS.TSX kulcsszavai (Specialties)
                "medicalSpecialty": [
                    {
                        "@type": "MedicalSpecialty",
                        "name": "Post-COVID Rehabilitáció",
                        "alternateName": "Long-COVID Treatment"
                    },
                    {
                        "@type": "MedicalSpecialty",
                        "name": "Sportorvoslás",
                        "alternateName": "Sports Injury Recovery"
                    },
                    {
                        "@type": "MedicalSpecialty",
                        "name": "Anti-aging Medicina",
                        "alternateName": "Sejtregeneráció"
                    }
                ]
            },

            // 2. ABOUT HBOT - A konkrét szolgáltatás (Tudományos háttér)
            {
                "@type": "TherapeuticProcedure",
                "@id": "https://oxigenterapia.hu/#procedure",
                "name": "Hiperbárikus Oxigénterápia (HBOT)",
                "provider": { "@id": "https://oxigenterapia.hu/#clinic" },
                "description": "Túlnyomásos oxigénterápia, amely a Henry-törvény alapján fizikailag oldja az oxigént a vérplazmában. Segíti a neovaszkularizációt és az őssejt-aktivációt.",
                "bodyLocation": "Whole body",
                "procedureType": "Noninvasive",
                "status": "Active",
                // A BENEFITS.TSX technikai adatai ide kerülnek
                "mechanismOfAction": "Hyperbaric Oxygenation (Henry's Law)",
                "instrument": {
                    "@type": "MedicalDevice",
                    "name": "Hard Shell Hyperbaric Chamber (Keményfalú Kamra)",
                    "description": "Klinikai szintű, 1.5 ATA nyomásra képes, légkondicionált kapszula."
                }
            },

            // 3. PROCESS - A Kezelés Menete (HowTo Schema)
            {
                "@type": "HowTo",
                "@id": "https://oxigenterapia.hu/#process",
                "name": "Hogyan zajlik a hiperbárikus oxigénterápia?",
                "description": "A kezelés menete lépésről lépésre a hbot.hu rendelőjében.",
                "step": [
                    {
                        "@type": "HowToStep",
                        "position": 1,
                        "name": "Érkezés és Konzultáció",
                        "text": "Állapotfelmérés, kontraindikációk kizárása és a nyomás beállítása."
                    },
                    {
                        "@type": "HowToStep",
                        "position": 2,
                        "name": "Elhelyezkedés",
                        "text": "Beszállás a tágas kabinba. Telefon, könyv bevihető."
                    },
                    {
                        "@type": "HowToStep",
                        "position": 3,
                        "name": "A Merülés (Nyomásnövelés)",
                        "text": "Fokozatos nyomásnövelés 1.3 - 1.5 ATA szintre. Füldugulás nyeléssel kompenzálható."
                    },
                    {
                        "@type": "HowToStep",
                        "position": 4,
                        "name": "Oxigénfürdő",
                        "text": "30-60 perces tiszta oxigén belégzés maszkon keresztül."
                    }
                ]
            },

            // 4. FAQ - Gyakori Kérdések
            {
                "@type": "FAQPage",
                "@id": "https://oxigenterapia.hu/#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Fájdalmas a kezelés?",
                        "acceptedAnswer": { "@type": "Answer", "text": "Nem, teljesen fájdalommentes. Csak enyhe füldugulás érezhető az elején." }
                    },
                    {
                        "@type": "Question",
                        "name": "Hány alkalom szükséges?",
                        "acceptedAnswer": { "@type": "Answer", "text": "Frissítésre 1-3 alkalom, regenerációhoz 5-10 alkalom javasolt." }
                    },
                    {
                        "@type": "Question",
                        "name": "Klausztrofóbiások használhatják?",
                        "acceptedAnswer": { "@type": "Answer", "text": "Igen, a kabin tágas, átlátható és folyamatos a kapcsolat a kezelővel." }
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
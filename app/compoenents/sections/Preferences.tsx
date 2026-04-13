'use client'

import React from 'react';
import { Activity, Moon, Sparkles } from 'lucide-react';

export default function Preferences() {
    return (
        <section
            id="mindennapi-elonyok"
            aria-label="A hiperbár oxigénterápia mindennapi előnyei"
            className="relative w-full py-24 overflow-hidden flex items-center justify-center"
        >
            <div className="container mx-auto px-4 md:px-6 relative z-10">

                {/* Címsor szekció */}
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <h2 className="text-sm font-bold text-cyan-400 tracking-widest uppercase mb-4">
                        Életmód és Prevenció
                    </h2>
                    <h3 className="text-3xl md:text-5xl font-light text-white leading-tight mb-6">
                        További <span className="font-bold">mindennapi előnyök</span> a szervezet számára
                    </h3>
                    <p className="text-lg text-slate-400 leading-relaxed">
                        A hiperbárikus oxigénterápia (HBOT) nemcsak a poszt-COVID és kognitív problémák esetén nyújt megoldást, hanem a hivatalos leírás alapján az általános életminőség, a regeneráció és a szépségápolás terén is kulcsszerepet játszik.
                    </p>
                </div>

                {/* Kártyák Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Sport kártya */}
                    <div className="relative p-8 rounded-3xl backdrop-blur-sm bg-slate-900/40 border border-slate-700/50 hover:bg-slate-800/60 hover:border-cyan-400/30 transition-all duration-300 group">
                        <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-cyan-400/10 group-hover:scale-110 transition-transform duration-300">
                            <Activity className="w-7 h-7 text-cyan-400" />
                        </div>
                        <h4 className="text-xl font-bold text-white mb-4">Sport és Rehabilitáció</h4>
                        <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                            Gyorsan enyhíti az intenzív testmozgás okozta izomfeszültséget és felgyorsítja a tejsav lebomlását. Enyhíti az ágyéki, gerinc- és ízületi fájdalmakat, valamint elősegíti a csonttörések és ficamok gyorsabb gyógyulását, segítve a kalcium felszívódását.
                        </p>
                    </div>

                    {/* Életmód kártya */}
                    <div className="relative p-8 rounded-3xl backdrop-blur-sm bg-slate-900/40 border border-slate-700/50 hover:bg-slate-800/60 hover:border-cyan-400/30 transition-all duration-300 group">
                        <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-cyan-400/10 group-hover:scale-110 transition-transform duration-300">
                            <Moon className="w-7 h-7 text-cyan-400" />
                        </div>
                        <h4 className="text-xl font-bold text-white mb-4">Alvás, Stressz és Immunitás</h4>
                        <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                            Növeli a test ellenállóképességét (immunitását). Javítja az alvás minőségét, relaxálja az elmét, hatékonyan csökkenti a felgyülemlett szellemi és fizikai fáradtságot, valamint támogatja az idegrendszert a munkahelyi stressz leküzdésében.
                        </p>
                    </div>

                    {/* Anti-aging kártya */}
                    <div className="relative p-8 rounded-3xl backdrop-blur-sm bg-slate-900/40 border border-slate-700/50 hover:bg-slate-800/60 hover:border-cyan-400/30 transition-all duration-300 group">
                        <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-cyan-400/10 group-hover:scale-110 transition-transform duration-300">
                            <Sparkles className="w-7 h-7 text-cyan-400" />
                        </div>
                        <h4 className="text-xl font-bold text-white mb-4">Anti-aging és Méregtelenítés</h4>
                        <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                            Oxigénnel látja el a bőrsejteket, javítja a sejtanyagcserét és lassítja az öregedést. Antibakteriális hatású, emellett elősegíti a káros anyagok és gázok (pl. alkohol, nikotin) kiürülését, így kiváló méregtelenítő.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
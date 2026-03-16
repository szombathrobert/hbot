'use client'

import { ExternalLink } from 'lucide-react'

export const References = () => {
    return (
        <section className="relative w-full py-12 flex items-center justify-center border-t border-white/10">
            <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-4xl">
                <div className="text-center mb-8">
                    <h3 className="text-xl font-bold text-white/60 uppercase tracking-widest">Tudományos Referenciák</h3>
                    <p className="text-sm text-white/40 mt-2">A terápiánkat alátámasztó nemzetközi orvosi publikációk (PubMed / NCBI)</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <a href="https://pubmed.ncbi.nlm.nih.gov/33206062/" target="_blank" rel="noopener noreferrer nofollow" className="group flex items-start gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 transition-all">
                        <ExternalLink className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                        <div>
                            <h4 className="text-sm text-white/90 font-medium group-hover:text-cyan-400 transition-colors">A HBOT hatása a telomerhosszra és az öregedésre</h4>
                            <p className="text-xs text-white/50 mt-1">Hachmo Y, et al. (2020)</p>
                        </div>
                    </a>

                    <a href="https://pubmed.ncbi.nlm.nih.gov/35821512/" target="_blank" rel="noopener noreferrer nofollow" className="group flex items-start gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 transition-all">
                        <ExternalLink className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                        <div>
                            <h4 className="text-sm text-white/90 font-medium group-hover:text-cyan-400 transition-colors">HBOT poszt-COVID neurokognitív tünetekre</h4>
                            <p className="text-xs text-white/50 mt-1">Zilberman-Itskovich S, et al. (2022)</p>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    )
}
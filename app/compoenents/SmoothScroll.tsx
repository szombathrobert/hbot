'use client'
import { ReactLenis, useLenis } from 'lenis/react'
import { useEffect } from 'react'

export const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
    const lenis = useLenis();

    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const link = target.closest('a');

            if (link && link.hash && link.origin === window.location.origin) {
                e.preventDefault();
                const targetElement = document.querySelector(link.hash);
                if (targetElement && lenis) {
                    lenis.scrollTo(link.hash, {
                        lerp: 0.1,
                        duration: 1.5,
                    });
                }
            }
        };

        window.addEventListener('click', handleClick);
        return () => window.removeEventListener('click', handleClick);
    }, [lenis]);

    return (
        <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
            {children}
        </ReactLenis>
    )
}
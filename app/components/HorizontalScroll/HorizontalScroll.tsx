"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Header, OutlineHeader } from "../header/Header";
import { title } from "process";

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalScroll({ header, children, className }: { header: {}, children: React.ReactNode, className?: string }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        const wrapper = wrapperRef.current;

        if (!container || !wrapper) return;

        const totalWidth = wrapper.scrollWidth;
        const viewportWidth = window.innerWidth;
        const scrollDistance = totalWidth - viewportWidth;

        gsap.to(wrapper, {
            x: -scrollDistance,
            ease: "none",
            scrollTrigger: {
                trigger: container,
                start: "top top",
                end: () => `+=${scrollDistance}`,
                scrub: 1,
                pin: true,
                anticipatePin: 1,
            },
        });
    }, []);

    return (
        <div ref={containerRef} className={`relative w-full h-screen overflow-hidden flex justify-center flex-col ${className}`}>
            <Header className={'mb-8 '}>
                {header.fill}
                <OutlineHeader>{header.outline}</OutlineHeader>
            </Header>
            <div ref={wrapperRef} className="flex flex-row gap-1 ">
                {children}
            </div>
        </div>
    );
}

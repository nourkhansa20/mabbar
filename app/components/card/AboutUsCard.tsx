'use client';
import React, { useEffect, useRef, ReactNode } from 'react';
import { Header, OutlineHeader } from '../header/Header';
import Button from '../button';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ImageAnimationConfig {
    id: string;
    gsapFrom?: gsap.TweenVars;
    gsapTo?: gsap.TweenVars;
}

interface AboutUsCardProps {
    description?: string;
    img?: string;
    component?: ReactNode;
    index: number;
    header: { fill: string; outline: string };
    imageAnimations?: ImageAnimationConfig[];
}

const AboutUsCard = ({ description, img, component, index, header, imageAnimations }: AboutUsCardProps) => {
    const contentRef = useRef<HTMLDivElement>(null);
    const imageContainerRef = useRef<HTMLDivElement>(null);
    const imageRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

    useEffect(() => {
        if (imageContainerRef.current) {
            const direction = index % 2 === 0 ? 1 : -1;


            gsap.from(imageContainerRef.current, {
                x: direction * -100,
                duration: 4,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: imageContainerRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse',
                },
            });


            gsap.to(imageContainerRef.current, {
                duration: 2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: imageContainerRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
            });
        }


        if (component && imageAnimations) {
            imageAnimations.forEach(({ id, gsapFrom, gsapTo }) => {
                if (id) {
                    const imageElement = document.getElementById(id);
                    if (imageElement) {
                        gsap.fromTo(
                            imageElement,
                            gsapFrom,
                            {
                                ...(gsapTo),
                                scrollTrigger: {
                                    trigger: imageElement,
                                    start: "top 80%",
                                    toggleActions: "play none none reverse",
                                },
                            }
                        );
                    }
                }
            });
        }
    }, [index, component, imageAnimations]);

    return (
        <div className={`flex flex-col lg:flex-row justify-around items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
            <div >
                {component ? (
                    <div>
                        {React.Children.map(component, (child, i) => {
                            if (React.isValidElement(child) && child.type === Image) {
                                const id = child.props.id;
                                return React.cloneElement(child, {
                                    ref: (el: HTMLDivElement | null) => (imageRefs.current[id] = el),
                                });
                            }
                            return child;
                        })}
                    </div>
                ) : img ? (
                    <Image
                        ref={imageContainerRef}
                        src={img}
                        alt="about_us"
                        width={400}
                        height={400}
                        className="w-[200px] h-[200px] lg:w-[400px] lg:h-[400px] lg:w-[400px] lg:h-[400px]"
                    />
                ) : null}
            </div>

            <div ref={contentRef} className='lg:w-[70ex] px-4 lg:px-0'>
                <Header>
                    {header.fill}
                    <OutlineHeader>{header.outline}</OutlineHeader>
                </Header>
                <p className='my-6'>{description}</p>
                <Button className='hidden lg:flex'>Learn More</Button>
            </div>
        </div>
    );
};

export default AboutUsCard;
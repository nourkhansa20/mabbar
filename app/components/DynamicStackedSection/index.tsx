'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { Header, OutlineHeader } from '../header/Header';


gsap.registerPlugin(ScrollTrigger);

interface SectionData {
  title: string;
  Component: React.ComponentType<any>;
  content: any;
  backgroundColor?: string;
}

interface DynamicStackedSectionProps {
  sections: SectionData[];
  titleHeight?: number;
  headerClassName?: string;
  header: string,
}

const DynamicStackedSection = ({ sections, titleHeight = 70, headerClassName, header }: DynamicStackedSectionProps) => {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const totalHeight = sections.length * 100; 

  useEffect(() => {
    sectionRefs.current.forEach((section, index) => {
      if (section && index < sections.length - 1) {
        gsap.to(section, {
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
          },
          y: '-100%',
        });
      }
    });
  }, [sections.length]);

  return (
    <div style={{ position: 'relative', height: `${totalHeight}vh` }}>
      <Header className={'px-8 mb-8'}>
        {header.fill}
        <OutlineHeader>{header.outline}</OutlineHeader>
      </Header>
      {sections.map((section, index) => {
        const topPosition = index * titleHeight;
        const isLastSection = index === sections.length - 1;
        const SectionComponent = section.Component; 
        const divHeight = 100 - (index * titleHeight)
     
        return (
          <div
            key={index}
            style={{
              position: 'sticky',
              top: `${topPosition}px`,
              height: isLastSection ? '90vh' : 'fit-content',
              backgroundColor: section.backgroundColor || '#ffff',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              overflow: 'hidden',
            }}
          >
            <h1
              style={{
                position: 'sticky',
                zIndex: sections.length - index,
                height: titleHeight,
                width: '100%',
                margin: 0,
              }}
              className={headerClassName}
            >
              {section.title}
            </h1>

            <div
              style={{
                flex: 1,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                width: '100%',
                overflow: 'hidden',
                
              }}
            >
              <SectionComponent {...section.content} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DynamicStackedSection;
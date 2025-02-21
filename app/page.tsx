import Image from "next/image";
import YouTubeEmbed from "./components/YouTubeEmbed";
import PodcastCard from "./components/card/PodcastCard";
import SocialMediaCard from "./components/card/SocialMediaCard";
import Button from "./components/button";
import AboutUsCard from "./components/card/AboutUsCard";
import HorizontalScroll from "./components/HorizontalScroll/HorizontalScroll";
import { Header, OutlineHeader } from "./components/header/Header";
import ProjectCard from "./components/card/ProjectCard";
import DynamicStackedSection from "./components/DynamicStackedSection";
import HoverCard from "./components/card/HoverCard";
import ColoredImageCard from "./components/card/ColoredImageCard";
import { sections } from './data/sectionsData'

export default function Home() {

  return (
    <main className="">

      <section className="relative w-full h-screen">
        <div className="bg-black z-20 absolute top-0 opacity-75 size-full " />
        <Image src="/NoisePhoto.jpg" alt="noise_photo" fill className="object-cover z-10 opacity-60" />
        <Image src="/MainBackgroundphoto.png" alt="main_photo" fill className="object-cover" />

        <div className="absolute flex justify-center flex-col size-full z-30 px-12">
          <h2 className="text-secondary font-bold text-2xl lg:-mb-3">A PODCAST</h2>
          <h1 className="text-primary font-bold text-4xl lg:text-[8ex] max-w-[20ch] leading-tight">
            Retracing <span className="text-secondary">Lebanon</span>'s Modern History
          </h1>
          <Image src="/MainPhoto.png" alt="main_photo" width={700} height={400} className="object-cover absolute -bottom-2 w-[350px] h-[200px] lg:w-[700px] lg:h-[400px] right-5 lg:right-16 z-40 " />

        </div>
      </section>

      <section className="mt-5 px-4 lg:px-8">
        <div className="flex justify-between py-5 ">
          <span className="text-sm lg:text-lg">PODCAST AVILABLE ON</span>
          <SocialMediaCard containerClassName="!gap-3" iconClassName="size-[30px] lg:size-[40px]" />
        </div>
        <div className="flex flex-col lg:flex-row gap-10 mt-16">
          <YouTubeEmbed videoId="Jq09wcYC4_E" className="lg:w-[65%] lg:h-[60ex]" />
          <div className="lg:max-w-[40ex] text-wrap balance lg:self-end">
            <h3 className="font-bold text-2xl">Announcement Title</h3>
            <p className="leading-snug text-xl">
              An on-going podcast series tracing the modern history of Lebanon through the stories of those who have lived it.
              Cutting across two genres—Oral History and Documentary—the cascade of stories paints a people-centered,
              multi-perspective view of what took place and the meanings they carry.
            </p>
          </div>
        </div>
      </section>

      <section className=" mt-12 lg:my-28 overflow-hidden px-4 lg:px-8">
        <Header className={'mb-8'}>
          New RELEASE <OutlineHeader>OUT NOW</OutlineHeader>
        </Header>
        <div className="flex  gap-5 justify-between w-full overflow-auto ">
          <PodcastCard />
          <PodcastCard />
          <PodcastCard />
        </div>
      </section>

      <section className="mt-7 overflow-hidden">
        <div className="backgroundImage bg-cover lg:bg-contain">
          <AboutUsCard
            component={
              <div className="relative w-[380px] h-[380px]">
                <ColoredImageCard
                  altText="what_is_maabar"
                  cardHeight={{ lg: 400, default: 380 }}
                  cardWidth={{ lg: 400, default: 380 }}
                  id="what_is_maabar"
                  imageSrc="/WhatIsMaabar.png"
                  className=" absolute right-0"
                />
              </div>
            }
            imageAnimations={[
              {
                id: "what_is_maabar",
                gsapFrom: { x: 200, fill: "none" },
                gsapTo: {
                  x: 0, opacity: 1, duration: 3, fill: '#c9bc8a'
                },
              }]}
            header={{ fill: 'WHAT IS', outline: 'MAABAR' }}
            index={1}
            description="An on-going podcast series tracing the modern history of Lebanon through the stories of those who have lived it. Cutting across two genres – Oral History and Documentary – the cascade of stories paints a people-centered, multi-perspective view of what took place and the meaning it carries."
          />

          <AboutUsCard
            component={
              <div id='why_is_maabar'>
                <Image src="/WhyIsMaabar.png" alt="why_is_maabar" width={400} height={400} className="w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] lg:w-[400px] lg:h-[400px]" />
              </div>
            }
            header={{ fill: 'WHY IS ', outline: 'MAABAR' }}
            index={2}
            description="An on-going podcast series tracing the modern history of Lebanon through the stories of those who have lived it. Cutting across two genres – Oral History and Documentary – the cascade of stories paints a people-centered, multi-perspective view of what took place and the meaning it carries."
            imageAnimations={[
              {
                id: "why_is_maabar",
                gsapFrom: { x: -150, fill: "none", },
                gsapTo: {
                  x: 0, opacity: 1, duration: 2, fill: "#537862c9"
                },
              },
            ]
            }
          />
        </div>

        <AboutUsCard
          component={
            <div className="relative w-[350px] h-[350px] mt-32 lg:mt-0">

              <ColoredImageCard
                altText="how_is_maabar"
                cardHeight={{ lg: 486, default: 390 }}
                cardWidth={{ lg: 393, default: 310 }}
                id="image1"
                imageSrc="/HowIsMaabar2.png"
                className="-top-[18ex] -right-[5ex] lg:-top-[25ex] lg:-right-28 absolute "
              />

              <ColoredImageCard
                altText="how_is_maabar"
                cardHeight={{ lg: 420, default: 350 }}
                cardWidth={{ lg: 380, default: 350 }}
                id="image2"
                imageSrc="/HowIsMaabar3.png"
                className="-top-[5ex] -right-[9ex] lg:-top-[4ex] lg:-right-[14ex] absolute"
              />

              <ColoredImageCard
                altText="image3"
                cardHeight={{ lg: 380, default: 350 }}
                cardWidth={{ lg: 316, default: 350 }}
                id="image3"
                imageSrc="/HowIsMaabar1.png"
                className="-top-[5ex] -left-[15ex] lg:top-[5ex] lg:-left-[10ex] absolute "
              />

            </div>
          }
          header={{ fill: 'HOW IS ', outline: 'MAABAR' }}
          index={3}
          description="An on-going podcast series tracing the modern history of Lebanon through the stories of those who have lived it."
          imageAnimations={[
            {
              id: "image1",
              gsapFrom: { y: -100, fill: "none", },
              gsapTo: {
                y: 0, opacity: 1, duration: 2, fill: "#537862c9"
              },
            },
            {
              id: "image2",
              gsapFrom: { x: 100, fill: "none" },
              gsapTo: { x: 0, duration: 3, fill: '#dd9b58' },
            },
            {
              id: "image3",
              gsapFrom: { x: -50, fill: "none" },
              gsapTo: {
                x: 0,
                duration: 3,
                fill: '#be754c'
              },
            },
          ]}
        />

        <AboutUsCard
          component={
            <div className="relative w-[320px] lg:w-[400px] h-[320px] lg:h-[400px] ">
              <Image className="absolute left-12 top-0 w-[200px] lg:w-[300px]" src="/ShareYourStory1.png" alt="share_your_story" width={300} height={300} />
              <Image className="absolute right-12 bottom-9 lg:-bottom-5 lg:right-9 w-[70px] lg:w-[80px]" src="/ShareYourStory2.png" alt="share_your_story" width={80} height={80} />
            </div>
          }
          header={{ fill: 'SHARE ', outline: 'YOUR STORY' }} index={4} description="An on-going podcast series tracing the modern history of Lebanon through the stories of those who have lived it. Cutting across two genres – Oral History and Documentary – the cascade of stories paints a people-centered, multi-perspective view of what took place and the meaning it carries." />

      </section>

      <section>
        <HorizontalScroll header={{ fill: 'OUR', outline: 'PROJECTS' }} className="px-4 lg:px-8 max-w-screen  backgroundImage bg-cover lg:bg-contain">
          {Array.from({ length: 10 }).map((_, index) => (
            <ProjectCard
              key={index}
              img={`/ProjectImage.png`}
              title={`Project ${index + 1}`}
              desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam quia ratione sapiente eum accusantium totam reiciendis eligendi dignissimos eius quidem voluptates laboriosam esse dicta exercitationem, quod enim iusto distinctio eveniet!"
            />
          ))}
        </HorizontalScroll>
      </section>

      <section className="mt-20">
        <DynamicStackedSection
          header={{ fill: 'ALL', outline: 'SEASONS' }}
          headerClassName="bg-black text-3xl text-white font-bold px-7 border-b-[6px] border-green-900 flex items-center border-t-0 border-y-0"
          sections={sections}
        />
      </section>

      <section className="px-4 lg:px-8 mt-6 lg:mt-20">
        <Header className={''}>
          LATEST <OutlineHeader>UPDATES</OutlineHeader>
        </Header>
        <div className="flex flex-col mt-8 lg:flex-row justify-center items-center gap-5">

          {Array.from({ length: 9 }).map((_, index) => (
            <HoverCard
              key={index}
              mediaUrl="/LastUpdatePhoto.png"
              metadata={{
                date: "1 January 2025",
                title: "Default Card Title",
                description: "Default card description text"
              }}
            />
          ))}
        </div>
      </section>

      <section className="mt-12 lg:mt-24 px-8 flex flex-col lg:flex-row justify-between">
        <div>
          <Header className={'mb-8'}>
            Support <OutlineHeader>MAABAR</OutlineHeader>
          </Header>
          <p className="w-full lg:w-[50ex] text-2xl ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, cum illum? Fugiat blanditiis ut dolor cupiditate repellendus. Officia fugit aut quidem tempora ea sapiente! Doloremque maiores quasi omnis quae architecto.</p>
          <Button className="mt-4">Subscribe</Button>
        </div>
        <div className="w-full lg:w-fit flex justify-center">
          <Image src={'/logo/patreon-logo.png'} alt="patreon" width={500} height={500} className="w-[300px] lg:w-[500px]  mr-0 lg:mr-10 mt-5 lg:mt-0" />
        </div>
      </section>

    </main >

  );
}



"use client"

import Testimonial from "@/components/home/Testimonials";
import FeatureCard from "@/components/home/FeatureCards";
import ShuffleHero from "@/components/home/HeroMain";


export default function Home() {
  return (
    <>
     <ShuffleHero navActive={true} />
     <FeatureCard/>
     <Testimonial/>
     
    </>
  );
}

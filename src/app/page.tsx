"use client"
import ShiftingContactForm from "@/components/home/ContactUs";
import Testimonial from "@/components/home/Testimonials";
import { Content } from "@/components/home/summarizer";
import Workflow from "@/components/home/FeatureCards";


export default function Home() {
  return (
    <>
     <Content/>
     <Workflow/>
     <Testimonial/>
     <ShiftingContactForm/>
    </>
  );
}

"use client"

import Card from "@/components/home/Card";
import ShiftingContactForm from "@/components/home/ContactUs";
import Testimonial from "@/components/home/Testimonials";
import { Content } from "@/components/home/summarizer";



export default function Home() {
  return (
    <>
     <Content/>
     <Card/>
     <Testimonial/>
     <ShiftingContactForm/>
    </>
  );
}

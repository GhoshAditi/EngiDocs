"use client"
import Image from "next/image";
import {Content}  from '../components/home/summarizer';
import Card from "../components/home/Card";
import ShiftingContactForm from "../components/home/ContactUs";
import Testimonial from "@/components/home/Testimonial";


export default function Home() {
  return (
    <>
      <Content />
      <Card />
      <Testimonial />
      <ShiftingContactForm />
    </>
  );
}

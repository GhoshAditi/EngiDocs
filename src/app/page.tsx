"use client"
import Image from "next/image";
import {Content}  from '../components/home/summarizer';
import Example from "../components/home/features";
import Example1 from "../components/home/testimonial";

export default function Home() {
  return (
    <>
      
      <Content />
      <Example />
      <Example1 />
    </>
  );
}

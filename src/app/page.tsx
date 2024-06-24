"use client"
import Image from "next/image";
import {Content}  from '../components/common/summarizer';
import Example from "../components/common/features";
import Example1 from "../components/common/testimonial";

export default function Home() {
  return (
    <>
      
      <Content />
      <Example />
      <Example1 />
    </>
  );
}

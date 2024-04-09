'use client'

import About from "@/components/sections/About";
import Banner from "@/components/sections/Banner";
import Glance from "@/components/sections/Glance";
import Layout from "@/layout/Layout";
import Gallery from "@/components/sections/Gallery";
import Pricing from "@/components/sections/Pricing";
import ContactForm from "@/components/sections/ContactForm";
import HeroSection from "@/components/sections/HeroSection";
import AboutUs from "@/components/sections/AboutUs";
import ImaginAIrium from "@/components/sections/ImaginAIrium";
import VelociTrade from "@/components/sections/VelociTrade";

export default function Home() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <HeroSection />
        {/* <Banner /> */}
        <AboutUs />
        <Glance />
        <ImaginAIrium />
        <VelociTrade />
        {/* <ImageSection /> */}
        {/* <VideoSection /> */}
        {/* <CodeSection /> */}
        <Gallery />
        <Pricing />
        <ContactForm />
      </Layout>
    </>
  )
}
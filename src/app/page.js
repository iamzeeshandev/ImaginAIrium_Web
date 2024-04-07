import About from "@/components/sections/About";
import Banner from "@/components/sections/Banner";
import ImageSection from "@/components/sections/Image";
import Glance from "@/components/sections/Glance";
import Layout from "@/layout/Layout";
import VideoSection from "@/components/sections/Video";
import CodeSection from "@/components/sections/Code";
import Gallery from "@/components/sections/Gallery";
import Pricing from "@/components/sections/Pricing";
import ContactForm from "@/components/sections/ContactForm";

export default function Home() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <Banner />
        <About />
        <Glance />
        <ImageSection />
        <VideoSection />
        <CodeSection />
        <Gallery />
        <Pricing />
        <ContactForm />
      </Layout>
    </>
  )
}
import Layout from "@/components/layout";
import Hero from "@/components/hero";
import Content from "@/components/content";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <Layout class="no-scrollbar">
      <NextSeo
        title="350lab"
        description="350Lab is a creative studio with design and development expertise.
              We partner with brands by developing solutions through strategy &
              design."
      />
      <LazyMotion features={domAnimation}>
        <m.div initial="initial" animate="enter" exit="exit">
          <Hero />
          <Content />
        </m.div>
      </LazyMotion>
    </Layout>
  );
}

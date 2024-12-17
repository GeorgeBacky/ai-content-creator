'use client';
import Features from "@/components/Features";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Pricing from "@/components/pricing/Pricing";
import Testimonials from "@/components/testimonials/Testimonials";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer"
import { useEffect } from "react";

const AnimatedSection = ({ children }: { children: React.ReactNode }) => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <motion.section
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 }
      }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  )
}


export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <AnimatedSection>
          <Hero />
        </AnimatedSection>
        <AnimatedSection>
          <Features />
        </AnimatedSection>
        <AnimatedSection>
          <Testimonials />
        </AnimatedSection>
        <AnimatedSection>
          <Pricing />
        </AnimatedSection>
      </main>
    </div>
  );
}

import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Logos from "@/components/Logos";
import Benefits from "@/components/Benefits/Benefits";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";
import WhyUs from "@/components/WhyUs";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Logos />
      <Container>
        <Section id="Why Us" title="Why Us" description="">
          <WhyUs />
        </Section>
        <Section
          id="Our Core Service"
          title="Our Core Service"
          description="Solutions tailored for your business's unique needs."
        >
          <Benefits />
        </Section>
        <Section
          id="testimonials"
          title="What Our Clients Say"
          description="Hear from those who have partnered with us."
        >
          <Testimonials />
        </Section>
        <Stats />
        <CTA />
      </Container>
    </>
  );
};

export default HomePage;

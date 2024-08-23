import React from "react";
import { Script } from "gatsby";
import {
  AboutSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  const hardCodedGoogleTrackingId = "G-07R4E822M3";
  return (
    <>
      <Seo title="The Portfolio Website of Antonio Palmeira" />
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${hardCodedGoogleTrackingId}`}
        strategy="off-main-thread"
      />
      <Script id="gtag-config" strategy="off-main-thread" forward={[`gtag`]}>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments)};
          gtag('js', new Date());
          gtag('config', '${hardCodedGoogleTrackingId}')
        `}
      </Script>
      <Page>
        <HeroSection sectionId="hero" />
        <AboutSection sectionId="about" heading="About" />
        <InterestsSection sectionId="skills" heading="Skills" />
        <ProjectsSection sectionId="work" heading="Work Philosophy" />
        <ContactSection sectionId="contact" heading="Get in touch" />
      </Page>
    </>
  );
}

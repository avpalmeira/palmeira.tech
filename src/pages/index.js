import React from "react";
import {
  AboutSection,
  ArticlesSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="The Portfolio Website of Antonio Palmeira" />
      <Page>
        <HeroSection sectionId="hero" />
        <ArticlesSection
          sectionId="articles"
          heading="Latest Articles"
          sources={["Blog"]}
        />
        <AboutSection sectionId="about" heading="About" />
        <InterestsSection sectionId="skills" heading="Skills" />
        <ProjectsSection sectionId="work" heading="Work Philosophy" />
        <ContactSection sectionId="contact" heading="Get in touch" />
      </Page>
    </>
  );
}

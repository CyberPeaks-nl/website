import React from "react";
import { About } from "./components/About";
import { BannerImage } from "./components/BannerImage";
import { Collaboration } from "./components/Collaboration";
import { Contact } from "./components/Contact";
import { Header } from "./components/Header";
import { GitHub, LinkedIn, PDF } from "./components/Icons";
import { Information } from "./components/Information";
import { Technology } from "./components/Technology";
import { UniqueSellingPoints } from "./components/UniqueSellingPoints";
import {
  COLLABORATION_LOGOS,
  COMPANY_NAME,
  FULL_NAME,
  SNIPPET,
  TAG_LINE,
  TECHNOLOGY_LOGOS,
  UNIQUE_SELLING_POINTS,
} from "./constants";

const Page: React.FC = () => {
  return (
    <main className="bg-white">
      <Header
        logo={{ label: COMPANY_NAME, path: "./img/logo.png", size: [231, 41] }}
      />
      <BannerImage path="./img/mountain-peaks.png" />
      <About
        title={TAG_LINE}
        iconLinks={[
          [LinkedIn, "LinkedIn", "https://linkedin.com/in/tzengerink"],
          [GitHub, "GitHub", "https://github.com/tzengerink"],
          [PDF, "Curriculum Vitae", "./CV-Teun-Zengerink-CyberPeaks.pdf"],
        ]}
      >
        {SNIPPET}
      </About>
      <Technology
        title="Experienced in developing with a variety of technologies"
        logos={TECHNOLOGY_LOGOS}
      />
      <Contact
        title="Get in touch?"
        avatar={{
          label: FULL_NAME,
          path: "./img/avatar.png",
          size: [460, 460],
        }}
        fullName={FULL_NAME}
        emailAddress="teun@cyberpeaks.nl"
        phoneNumber="+31654716572"
      />
      <UniqueSellingPoints
        title="Guiding organisations towards their next digital peak"
        usps={UNIQUE_SELLING_POINTS}
      />
      <Collaboration
        title="Proud to have collaborated with some awesome companies"
        logos={COLLABORATION_LOGOS}
      />
      <Information
        companyName={COMPANY_NAME}
        infoLines={[
          "Van Bossestraat 48-2",
          "1051 KA Amsterdam",
          "KVK: 90761014",
          "BTW: NL004841594B67",
          "IBAN: NL79ASNB8821989690",
        ]}
      />
    </main>
  );
};

export default Page;

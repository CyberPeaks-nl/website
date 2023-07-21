import React from "react";
import { About } from "./components/About";
import { BannerImage } from "./components/BannerImage";
import { Collaboration } from "./components/Collaboration";
import { Contact } from "./components/Contact";
import { Header } from "./components/Header";
import { GitHub, LinkedIn, PDF } from "./components/Icons";
import { Information } from "./components/Information";
import { COMPANY_NAME, FULL_NAME, SNIPPET, TAG_LINE } from "./constants";

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
      <Contact
        avatar={{
          label: FULL_NAME,
          path: "./img/avatar.png",
          size: [460, 460],
        }}
        fullName={FULL_NAME}
        emailAddress="teun@cyberpeaks.nl"
        phoneNumber="+31654716572"
      />
      <Collaboration
        title="Proud to have collaborated with some awesome companies"
        logos={[
          {
            label: "Rabobank",
            path: "./img/company-logos/rabobank.png",
            size: [1135, 200],
          },
          {
            label: "Grandvision",
            path: "./img/company-logos/grandvision.png",
            size: [418, 200],
          },
          {
            label: "MyWheels",
            path: "./img/company-logos/mywheels.png",
            size: [1012, 200],
          },
          {
            label: "Usabilla",
            path: "./img/company-logos/usabilla.png",
            size: [425, 200],
          },
        ]}
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

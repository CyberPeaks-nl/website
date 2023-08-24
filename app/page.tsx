import React from "react";
import { About } from "./components/About";
import { BannerImage } from "./components/BannerImage";
import { Collaboration } from "./components/Collaboration";
import { Contact } from "./components/Contact";
import { Header } from "./components/Header";
import { GitHub, LinkedIn, PDF } from "./components/Icons";
import { Information } from "./components/Information";
import { Technology } from "./components/Technology";
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
      <Technology
        title="Experience in developing with a variety of technologies"
        logos={[
          {
            label: "TypeScript",
            path: "./img/technologies/typescript.svg",
            size: [50, 50],
          },
          {
            label: "JavaScript",
            path: "./img/technologies/javascript.svg",
            size: [50, 50],
          },
          {
            label: "React",
            path: "./img/technologies/react.svg",
            size: [50, 50],
          },
          {
            label: "Angular",
            path: "./img/technologies/angular.svg",
            size: [50, 50],
          },
          {
            label: "Vue.js",
            path: "./img/technologies/vue.svg",
            size: [50, 50],
          },
          {
            label: "Next.js",
            path: "./img/technologies/nextjs.svg",
            size: [50, 50],
          },
          {
            label: "GraphQL",
            path: "./img/technologies/graphql.svg",
            size: [50, 50],
          },
          {
            label: "Redux",
            path: "./img/technologies/redux.svg",
            size: [50, 50],
          },
          {
            label: "RxJS",
            path: "./img/technologies/rxjs.svg",
            size: [50, 50],
          },
          {
            label: "CSS3",
            path: "./img/technologies/css3.svg",
            size: [50, 50],
          },
          {
            label: "Tailwind",
            path: "./img/technologies/tailwind.svg",
            size: [50, 50],
          },
          {
            label: "Sass",
            path: "./img/technologies/sass.svg",
            size: [50, 50],
          },
          {
            label: "HTML5",
            path: "./img/technologies/html5.svg",
            size: [50, 50],
          },
          {
            label: "Node.js",
            path: "./img/technologies/nodejs.svg",
            size: [50, 50],
          },
          {
            label: "Jest",
            path: "./img/technologies/jest.svg",
            size: [50, 50],
          },
          {
            label: "Playwright",
            path: "./img/technologies/playwright.svg",
            size: [50, 50],
          },
          {
            label: "Git",
            path: "./img/technologies/git.svg",
            size: [50, 50],
          },
          {
            label: "Webpack",
            path: "./img/technologies/webpack.svg",
            size: [50, 50],
          },
          {
            label: "AWS",
            path: "./img/technologies/aws.svg",
            size: [50, 50],
          },
          {
            label: "Azure",
            path: "./img/technologies/azure.svg",
            size: [50, 50],
          },
          {
            label: "Kubernetes",
            path: "./img/technologies/kubernetes.svg",
            size: [50, 50],
          },
          {
            label: "Figma",
            path: "./img/technologies/figma.svg",
            size: [50, 50],
          },
          {
            label: "Adobe",
            path: "./img/technologies/adobe.svg",
            size: [50, 50],
          },
          {
            label: "VSCode",
            path: "./img/technologies/vscode.svg",
            size: [50, 50],
          },
        ]}
      />
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

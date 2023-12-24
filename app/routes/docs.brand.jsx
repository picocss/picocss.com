import { useRef } from "react";
import metaData from "~/data/meta";

import Header from "~/components/docs/Header";
import TableOfContents from "~/components/docs/TableOfContents";
import Content from "~/components/docs/Content";
import Heading from "~/components/Heading";

import lightLogoSvg from "~/images/brand-assets/pico-logo-light.svg";
import lightLogoPng from "~/images/brand-assets/pico-logo-light.png";
import darkLogoSvg from "~/images/brand-assets/pico-logo-dark.svg";
import darkLogoPng from "~/images/brand-assets/pico-logo-dark.png";
import lightIconSvg from "~/images/brand-assets/pico-mark-light.svg";
import lightIconPng from "~/images/brand-assets/pico-mark-light.png";
import darkIconSvg from "~/images/brand-assets/pico-mark-dark.svg";
import darkIconPng from "~/images/brand-assets/pico-mark-dark.png";

const { titleSuffix } = metaData();

export const meta = () => [
  { title: `Brand ${titleSuffix}` },
  {
    name: "description",
    content: "Pico CSS brand assets and usage guidelines.",
  },
];

export default function Brand() {
  const logoRef = useRef();
  const iconRef = useRef();
  const nameRef = useRef();
  const usageAgreementRef = useRef();

  return (
    <>
      {/* Header */}
      <Header title="Brand" description="Pico CSS brand assets and usage guidelines." />

      {/* Table of contents */}
      <TableOfContents
        data={[
          {
            anchor: "",
            title: "Logo",
            ref: logoRef,
          },
          {
            anchor: "icon",
            title: "Icon",
            ref: iconRef,
          },
          {
            anchor: "name",
            title: "Name",
            ref: nameRef,
          },
          {
            anchor: "usage-agreement",
            title: "Usage agreement",
            ref: usageAgreementRef,
          },
        ]}
      />

      {/* Content */}
      <Content>
        <section ref={logoRef}>
          <Heading level={2}>Logo</Heading>
          <p>
            These assets are provided for use in situations like articles and video tutorials.
            Please do not use the logo in any way that could be confusing for customers or imply any
            affiliation with Pico&nbsp;CSS.
          </p>
          <p>Do not modify the logo and make sure it has enough spacing.</p>
          <div className="grid">
            <article data-theme="light">
              <a href={lightLogoSvg} download>
                <img src={lightLogoSvg} alt="Pico CSS logo" />
              </a>
              <footer>
                <a href={lightLogoSvg} role="button" className="secondary" download>
                  SVG
                </a>
                <a href={lightLogoPng} role="button" className="secondary" download>
                  PNG
                </a>
              </footer>
            </article>
            <article data-theme="dark">
              <a href={darkLogoSvg} download>
                <img src={darkLogoSvg} alt="Pico CSS logo" />
              </a>
              <footer>
                <a href={darkLogoSvg} role="button" className="secondary" download>
                  SVG
                </a>
                <a href={darkLogoPng} role="button" className="secondary" download>
                  PNG
                </a>
              </footer>
            </article>
          </div>
        </section>

        <section ref={iconRef}>
          <Heading level={2} anchor="icon">
            Icon
          </Heading>
          <p>
            If the situation prevents otherwise, the icon mark may be used instead of the full logo.
          </p>
          <div className="grid">
            <article data-theme="light">
              <a href={lightIconSvg} download>
                <img src={lightIconSvg} alt="Pico CSS icon" />
              </a>
              <footer>
                <a href={lightIconSvg} role="button" className="secondary" download>
                  SVG
                </a>
                <a href={lightIconPng} role="button" className="secondary" download>
                  PNG
                </a>
              </footer>
            </article>
            <article data-theme="dark">
              <a href={darkIconSvg} download>
                <img src={darkIconSvg} alt="Pico CSS icon" />
              </a>
              <footer>
                <a href={darkIconSvg} role="button" className="secondary" download>
                  SVG
                </a>
                <a href={darkIconPng} role="button" className="secondary" download>
                  PNG
                </a>
              </footer>
            </article>
          </div>
        </section>

        <section ref={nameRef}>
          <Heading level={2} anchor="name">
            Name
          </Heading>
          <p>
            When referring to Pico&nbsp;CSS, the correct brand name is “Pico&nbsp;CSS”. You can also
            use “Pico” or “Pico&nbsp;✨” if you prefer.
          </p>
          <p>
            The CSS stylesheet can be referred as “pico.css”. However, please avoid using “PicoCss”,
            “PicoCSS”, “Pico.css", or “pico”.
          </p>
        </section>

        <section ref={usageAgreementRef}>
          <Heading level={2} anchor="usage-agreement">
            Usage agreement
          </Heading>
          <p>Pico CSS brand name and logo are protected under intellectual property law.</p>
          <p>
            You can use the Pico CSS name as part of the name of your open-source and non-commercial
            project, such as 'Pico-React', but using the name in commercial projects without
            permission is not allowed.
          </p>
          <p>
            You cannot use the Pico CSS logo for open or closed source projects, but you're welcome
            to use it in articles or documentation as long as proper credit is given.
          </p>
          <p>
            The use of the Pico CSS brand name and logo on merchandise, such as t-shirts or
            stickers, requires explicit written consent.
          </p>
        </section>
      </Content>
    </>
  );
}

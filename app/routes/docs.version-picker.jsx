import { Outlet } from "@remix-run/react";
import { useRef } from "react";
import Content from "~/components/docs/Content";
import EditOnGithub from "~/components/docs/EditOnGithub";
import Header from "~/components/docs/Header";
import TableOfContents from "~/components/docs/TableOfContents";
import Customization from "~/components/docs/VersionPickerCustomization";
import Usage from "~/components/docs/VersionPickerUsage";
import { VersionPickerProvider } from "~/contexts/VersionPickerContext";
import metaData from "~/data/meta";
import colorPickerStyles from "~/styles/css/docs/color-picker.css";

const { titleSuffix } = metaData;

export const meta = () => [
  { title: `Version picker ${titleSuffix}` },
  {
    name: "description",
    content: "Easily select the ideal Pico CSS version variant to match your project's needs.",
  },
];

export function links() {
  return [{ rel: "stylesheet", href: colorPickerStyles }];
}

export default function ThemeGenerator() {
  const themeRef = useRef();
  const customizationRef = useRef();
  const usageFromCdnRef = useRef();
  const usageWithSaasRef = useRef();
  const starterHtmlTemplateRef = useRef();

  return (
    <>
      {/* Header */}
      <Header
        title="Version picker"
        description="Easily select the ideal Pico CSS version variant to match your project's needs."
      />

      {/* Table of content */}
      <TableOfContents
        data={[
          {
            anchor: "",
            title: "Theme",
            ref: themeRef,
          },
          {
            anchor: "configuration",
            title: "Configuration",
            ref: customizationRef,
          },
          {
            anchor: "usage-from-cdn",
            title: "Usage from CDN",
            ref: usageFromCdnRef,
          },
          {
            anchor: "usage-with-sass",
            title: "Usage with Sass",
            ref: usageWithSaasRef,
          },
          {
            anchor: "starter-html-template",
            title: "Starter HTML template",
            ref: starterHtmlTemplateRef,
          },
        ]}
      />

      {/* Content */}
      <Content>
        <VersionPickerProvider
          value={{
            themeRef,
            customizationRef,
            usageFromCdnRef,
            usageWithSaasRef,
            starterHtmlTemplateRef,
          }}
        >
          <Outlet />
          <Customization />
          <Usage />

          {/* Edit on GitHub */}
          <EditOnGithub file="docs.version-picker.jsx" />
        </VersionPickerProvider>
      </Content>
    </>
  );
}

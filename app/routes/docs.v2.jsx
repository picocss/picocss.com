import { useRef } from "react";
import Code from "~/components/Code";
import Heading from "~/components/Heading";
import Link from "~/components/Link";
import Content from "~/components/docs/Content";
import Header from "~/components/docs/Header";
import TableOfContents from "~/components/docs/TableOfContents";
import metaData from "~/data/meta";

const { titleSuffix } = metaData;

export const meta = () => [
  { title: `v2.0 ${titleSuffix}` },
  {
    name: "description",
    content:
      "Pico v2.0 features better accessibility, easier customization with SASS, a complete color palette, and a new group component.",
  },
];

export default function Classless() {
  const newLookAndFeelRef = useRef();
  const easierCustomisationRef = useRef();
  const colorPaletteRef = useRef();
  const betterBreakpointsRef = useRef();
  const newGroupComponentRef = useRef();
  const breakingChangesRef = useRef();

  return (
    <>
      {/* Header */}
      <Header
        title="What’s new in v2?"
        description="Pico v2.0 features better accessibility, easier customization with SASS, a complete color palette, and a new group component."
      />

      {/* Table of content */}
      <TableOfContents
        data={[
          {
            anchor: "new-look-and-feel",
            title: "New look and feel",
            ref: newLookAndFeelRef,
          },
          {
            anchor: "easier-customisation",
            title: "Easier customization",
            ref: easierCustomisationRef,
          },
          {
            anchor: "color-palette",
            title: "Color palette",
            ref: colorPaletteRef,
          },
          {
            anchor: "better-breakpoints",
            title: "Better breakpoints",
            ref: betterBreakpointsRef,
          },
          {
            anchor: "new-group-component",
            title: "New group component",
            ref: newGroupComponentRef,
          },
          {
            anchor: "breaking-changes",
            title: "Breaking changes",
            ref: breakingChangesRef,
          },
        ]}
      />

      {/* Content */}
      <Content>
        <section>
        <article>Documentation in progress...</article>
        
          <Heading level={2} ref={newLookAndFeelRef} anchor="new-look-and-feel">
            New look and feel
          </Heading>
          <p>
            All colors have been carefully and manually redefined for a more contrasted, neutral
            (less bluish) look and feel.
          </p>
          <p>
            The default color theme is much more accessible, with most colors now following the WCAG
            2.1 AAA standard. Some secondary muted colors follow the WCAG 2.1 AA standard.
          </p>
          <p>Focus states have been improved for more consistency and contrast.</p>
        </section>

        <section>
          <Heading level={2} ref={easierCustomisationRef} anchor="easier-customisation">
            Easier customization
          </Heading>
          <p>
            We have refactored all <code>.scss</code> files to make it easier for you to compile
            your own version of Pico with <Link to="/docs/sass">SASS</Link>. All modules can now be
            enabled or disabled using @use and vars.
          </p>
        </section>

        <section>
          <Heading level={2} ref={colorPaletteRef} anchor="color-palette">
            Color palette
          </Heading>
          <p>
            Pico v2 comes with <Link to="/docs/colors">380 manually crafted colors</Link> to help
            you personalize your brand design system. The colors can be imported into any{" "}
            <code>.scss</code>
            file, and a new stylesheet with all the color utilities is provided.
          </p>
        </section>

        <section>
          <Heading level={2} ref={betterBreakpointsRef} anchor="better-breakpoints">
            Better breakpoints
          </Heading>
          <p>
            We have updated the <Link to="/docs/container">breakpoints</Link> to follow the width of
            standard devices and added a new breakpoint for larger screens.
          </p>
        </section>

        <section>
          <Heading level={2} ref={newGroupComponentRef} anchor="new-group-component">
            New group component
          </Heading>
          <p>
            With <Link to="/docs/group">group</Link> (
            <Code display="inline" language="css">
              role="group"
            </Code>
            ), you can now stack forms elements and buttons horizontally.
          </p>
        </section>

        <section>
          <Heading level={2} ref={breakingChangesRef} anchor="breaking-changes">
            Breaking changes
          </Heading>

          <Heading level={3}>CSS Vars</Heading>
          <p>
            All <Link to="/docs/css-variables">CSS custom properties</Link> are prefixed with{" "}
            <code>pico-</code>
            to avoid collisions with other CSS frameworks or your own vars. We also added new CSS
            variables and renamed some to follow a consistent pattern
            <code>{`{component}-{state}-{property}`}</code>.
          </p>

          <Heading level={3}>SCSS files</Heading>
          <p>
            We renamed and moved many <code>.scss</code> files. If you import Pico modules, you need
            to update your paths.
          </p>

          <Heading level={3}>Buttons</Heading>
          <p>
            <Link to="/docs/button">Buttons</Link> are not{" "}
            <Code display="inline" language="css">
              width: 100%;
            </Code>{" "}
            by default anymore. Only form buttons are full-width to be consistent with other form
            elements.
          </p>

          <Heading level={3}>Table</Heading>
          <p>
            The <code>.striped</code> class is now used for the striped{" "}
            <Link to="/docs/table">table</Link>’s style.
          </p>

          <Heading level={3}>Dropdowns</Heading>
          <p>
            While accordions are still classless, <Link to="/docs/dropdown">dropdowns</Link> now use
            <code>.dropdown</code>. We also removed the experimental syntax that allowed dropdowns
            in the nav using nested lists.
          </p>

          <Heading level={3}>Grid</Heading>
          <p>
            <Link to="/docs/grid">Grid</Link> columns now collapse on small devices (
            <code>{`<768px`}</code>).
          </p>
        </section>
      </Content>
    </>
  );
}

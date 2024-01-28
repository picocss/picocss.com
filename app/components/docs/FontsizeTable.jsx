import { useState } from "react";
import Code from "~/components/Code";

const fontSizesTableData = {
  rootFontSize: [
    {
      key: "xs",
      name: "Extra small",
      fontSize: 100,
      fontUnit: "%",
      breakpoint: "< 576px",
    },
    {
      key: "sm",
      name: "Small",
      fontSize: 106.25,
      fontUnit: "%",
      breakpoint: "≥ 576px",
    },
    {
      key: "md",
      name: "Medium",
      fontSize: 112.5,
      fontUnit: "%",
      breakpoint: "≥ 768px",
    },
    {
      key: "lg",
      name: "Large",
      fontSize: 118.75,
      fontUnit: "%",
      breakpoint: "≥ 1024px",
    },
    {
      key: "xl",
      name: "Extra large",
      fontSize: 125,
      fontUnit: "%",
      breakpoint: "≥ 1280px",
    },
    {
      key: "xxl",
      name: "Extra extra large",
      fontSize: 131.25,
      fontUnit: "%",
      breakpoint: "≥ 1536px",
    },
  ],
  htmlElements: [
    {
      name: "h1",
      fontSize: 2,
      fontUnit: "rem",
    },
    {
      name: "h2",
      fontSize: 1.75,
      fontUnit: "rem",
    },
    {
      name: "h3",
      fontSize: 1.5,
      fontUnit: "rem",
    },
    {
      name: "h4",
      fontSize: 1.25,
      fontUnit: "rem",
    },
    {
      name: "h5",
      fontSize: 1.125,
      fontUnit: "rem",
    },
    {
      name: "h6",
      fontSize: 1,
      fontUnit: "rem",
    },
    {
      name: "small",
      fontSize: 0.875,
      fontUnit: "em",
    },
  ],
};

export default function FontsizeTable(props) {
  const [fontSizeInRem, setFontSizeInRem] = useState(false);

  const toggleFontSizeInRem = (event) => {
    const isChecked = event.target.checked;
    setFontSizeInRem(!!isChecked);
  };

  return (
    <>
      <div className="overflow-auto" {...props}>
        <table className="striped" id="responsive-font-sizes">
          <caption>Responsive font sizes</caption>
          {/* Devices */}
          <thead>
            <tr>
              <th>Breakpoint</th>
              {fontSizesTableData.rootFontSize.map((device) => (
                <th key={device.key}>
                  <span
                    data-tooltip={`${device.name} ${device.breakpoint}`}
                    data-placement="bottom"
                  >
                    {device.key}
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {/* Base font size */}
            <tr>
              <th>Base</th>
              {fontSizesTableData.rootFontSize.map((breakpoint) => {
                const percent = breakpoint.fontSize;
                const pixel = (percent * 16) / 100;
                const formula = `${breakpoint.fontSize}${breakpoint.fontUnit} * 16px`;
                return (
                  <td key={breakpoint.key}>
                    {fontSizeInRem ? (
                      <>
                        {percent}
                        <small>%</small>
                      </>
                    ) : (
                      <span data-tooltip={formula} data-placement="bottom">
                        {pixel}
                        <small>px</small>
                      </span>
                    )}
                  </td>
                );
              })}
            </tr>

            {/* HTML elements */}
            {fontSizesTableData.htmlElements.map((htmlElement) => {
              return (
                <tr key={htmlElement.name}>
                  <th>
                    <Code display="inline">{`<${htmlElement.name}>`}</Code>
                  </th>
                  {fontSizesTableData.rootFontSize.map((breakpoint) => {
                    const breakpointPercent = breakpoint.fontSize;
                    const breakpointPixel = (breakpointPercent * 16) / 100;
                    const htmlElementPixel = breakpointPixel * htmlElement.fontSize;
                    const formula = `${breakpoint.fontSize}${breakpoint.fontUnit} * ${htmlElement.fontSize}${htmlElement.fontUnit} * 16px`;
                    return (
                      <td key={breakpoint.key}>
                        {fontSizeInRem ? (
                          <>
                            <small>x&nbsp;</small>
                            {htmlElement.fontSize}
                            <small>{htmlElement.fontUnit}</small>
                          </>
                        ) : (
                          <span data-tooltip={formula} data-placement="bottom">
                            {htmlElementPixel}
                            <small>px</small>
                          </span>
                        )}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <p>
        <label>
          <input
            type="checkbox"
            role="switch"
            name="toggle-font-size-in-rem"
            {...(fontSizeInRem ? { checked: "checked" } : {})}
            onChange={toggleFontSizeInRem}
          />
          <span>Display in rem</span>
        </label>
      </p>
    </>
  );
}

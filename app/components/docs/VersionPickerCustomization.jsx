import parse, { domToReact } from "html-react-parser";
import Heading from "~/components/Heading";
import Link from "~/components/Link";
import { useVersionPicker } from "~/contexts/VersionPickerContext";

const parseOptions = {
  replace(domNode) {
    if (domNode.name === "a") {
      const { href, ...rest } = domNode.attribs;
      return (
        <Link to={href} {...rest}>
          {domToReact(domNode.children, parseOptions)}
        </Link>
      );
    }
  },
};

export default function Customization() {
  const {
    baseConfiguration,
    baseIndex,
    conditionalIndex,
    conditionalConfiguration,
    customizationRef,
    setBaseIndex,
    setConditionalIndex,
  } = useVersionPicker();

  const handleCheckboxChange = (event) => {
    setConditionalIndex(event.target.checked ? 1 : 0);
  };
  return (
    <section ref={customizationRef}>
      <Heading level={2} anchor="configuration">
        Configuration
      </Heading>
      <select name="configuration" onChange={(e) => setBaseIndex(e.target.value)}>
        {baseConfiguration.map(({ name }, index) => (
          <option key={index} value={index}>
            {parse(name)}
          </option>
        ))}
      </select>
      <small>{parse(baseConfiguration[baseIndex].description, parseOptions)}</small>
      <fieldset>
        <label>
          <input name="conditional" type="checkbox" role="switch" onChange={handleCheckboxChange} />
          Conditional Styling
        </label>
      </fieldset>
      <small>{parse(conditionalConfiguration[conditionalIndex].description, parseOptions)}</small>
    </section>
  );
}

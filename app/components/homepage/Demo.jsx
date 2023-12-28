import { useEffect, useRef, useState } from "react";
import TypeIt from "typeit-react";

// Display HTML tag
const tag = (value) => {
  return `<span class="token tag">${value}</span>`;
};

// Display HTML attribute
const attr = (value) => {
  return `<span class="token tag attr-name">${value}</span>`;
};

// Display HTML value
const value = (value) => {
  return `<span class="token tag attr-value">${value}</span>`;
};

// Demo
export default function Demo() {
  // Speed and delay
  const deleteIsInstant = false;
  const delay = {
    type: 20,
    delete: 0,
    pause: 200,
    displayComponent: 5000,
  };

  // Form states
  const formRef = useRef(null);
  const [formRole, setFormRole] = useState(false);
  const [formIsBusy, setFormIsBusy] = useState(true);
  const [formGroupIsFocused, setFormGroupIsFocused] = useState(false);

  // Input states
  const [displayInput, setDisplayInput] = useState(false);
  const [iputPlaceholder, setInputPlaceholder] = useState(null);
  const [inputInvalid, setInputInvalid] = useState(null);
  const [inputClass, setInputClass] = useState(null);
  const [inputType, setInputType] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [displayedInputValue, setDisplayedInputValue] = useState("");
  const [inputIsDisabled, setInputIsDisabled] = useState(false);
  const [inputIsFocused, setInputIsFocused] = useState(false);

  // Input displayed value
  useEffect(() => {
    const isInputValueADate = inputValue.match(/^\d{4}-\d{2}-\d{2}$/);
    if (isInputValueADate || !inputValue) {
      setDisplayedInputValue(inputValue);
      return;
    }

    let i = 0;
    const interval = setInterval(() => {
      setDisplayedInputValue((prev) => prev + inputValue[i]);
      i++;
      if (i === inputValue.length) {
        clearInterval(interval);
        setTimeout(() => {
          setInputIsFocused(false);
        }, delay.displayComponent / 4);
      }
    }, delay.type);
  }, [delay.displayComponent, delay.type, inputValue]);

  // Input helper states
  const [inputHelper, setInputHelper] = useState(null);
  const [inputHelperClass, setInputHelperClass] = useState(null);

  // Select states
  const [displaySelect, setDisplaySelect] = useState(false);

  // Checkbox states
  const [displayCheckbox, setDisplayCheckbox] = useState(false);
  const [checkboxIsChecked, setCheckboxIsChecked] = useState(false);
  const [checkboxClass, setCheckboxClass] = useState(null);
  const [checkboxRole, setCheckboxRole] = useState(null);

  // Button states
  const [displayButton, setDisplayButton] = useState(false);
  const [buttonType, setButtonType] = useState(null);
  const [buttonLabel, setButtonLabel] = useState(null);
  const [buttonClass, setButtonClass] = useState(null);
  const [buttonIsBusy, setButtonIsBusy] = useState(false);
  const [buttonIsFocused, setButtonIsFocused] = useState(false);

  // Footer
  const footerRef = useRef(null);

  // Demo input date (yyyy-MM-dd)
  const todayForInputDate = new Date().toISOString().slice(0, 10);

  // Demo height
  const [demoHeight, setDemoHeight] = useState(null);
  useEffect(() => {
    const calculateHeight = () => {
      if (!footerRef.current || !formRef.current) return;
      const footerHeight = footerRef.current.clientHeight;
      const formHeight = formRef.current.clientHeight;
      setDemoHeight(footerHeight + formHeight);
    };

    const calculateHeightIntervalId = setInterval(calculateHeight, 10);
    calculateHeight();

    return () => {
      clearInterval(calculateHeightIntervalId);
    };
  }, []);

  return (
    <article
      className="demo component"
      aria-label="Demo"
      style={{ "--demo-height": `${demoHeight}px` }}
    >
      {/* Example */}
      <main>
        <form
          ref={formRef}
          {...(formRole && { role: formRole })}
          aria-busy={formIsBusy}
          className={formGroupIsFocused ? "is-focused" : ""}
        >
          {displayInput && (
            <input
              type={inputType}
              placeholder={iputPlaceholder}
              className={`${inputClass}${inputIsFocused ? " is-focused" : ""}`}
              disabled={inputIsDisabled}
              value={displayedInputValue}
              onChange={(e) => setInputValue(e.target.value)}
              {...(inputInvalid !== null ? { "aria-invalid": inputInvalid } : {})}
            />
          )}
          {inputHelper && <small className={inputHelperClass}>{inputHelper}</small>}
          {displaySelect && (
            <select defaultValue="" required>
              <option disabled value="">
                Select...
              </option>
            </select>
          )}
          {displayCheckbox && (
            <label className={checkboxClass}>
              <input
                type="checkbox"
                {...(checkboxRole && { role: checkboxRole })}
                checked={checkboxIsChecked}
                onChange={(e) => setCheckboxIsChecked(e.target.checked)}
              />
              Publish on my profile
            </label>
          )}
          {displayButton && (
            <button
              {...(buttonType && { type: buttonType })}
              className={`${buttonClass}${buttonIsFocused ? " is-focused" : ""}`}
              aria-busy={buttonIsBusy}
            >
              {buttonLabel}
            </button>
          )}
        </form>
      </main>

      {/* Code */}
      <footer className="code">
        <pre ref={footerRef}>
          <code>
            <TypeIt
              options={{
                speed: delay.type,
                deleteSpeed: delay.delete,
              }}
              getBeforeInit={(instance) => {
                instance
                  // Form busy
                  .type(
                    `&lt;${tag("form")} ${attr("aria-busy")}=${value('"true"')}&gt;&lt;/${tag(
                      "form",
                    )}&gt;`,
                    { instant: true },
                  )

                  // Email input
                  .pause(delay.displayComponent)
                  .move(-8, { instant: true, delay: delay.pause })
                  .delete(17, { instant: deleteIsInstant, delay: delay.pause })
                  .move(1, { instant: true, delay: delay.pause })
                  .type("<br />   <br />", { instant: true, delay: delay.pause })
                  .move(-2, { instant: true, delay: delay.pause })
                  .type(`&lt;${tag("input")} /&gt;`)
                  .move(-3, { instant: true, delay: delay.pause })
                  .type("<br />     <br /> ", { instant: true, delay: delay.pause })
                  .move(-3, { instant: true, delay: delay.pause })
                  .type(`${attr("type")}=${value('"email"')}`)
                  .type("<br />    ", { instant: true, delay: delay.pause })
                  .type(`${attr("placeholder")}=${value('"Enter your email"')}`)
                  .exec(() => {
                    setFormIsBusy(false);
                    setDisplayInput(true);
                    setInputPlaceholder("Enter your email");
                    setInputType("email");
                    setInputClass("fadeIn");
                    setTimeout(() => {
                      setInputIsFocused(true);
                      setTimeout(() => {
                        setInputValue("invalid@example");
                      }, delay.displayComponent / 4);
                    }, delay.displayComponent / 4);
                  })

                  // Invalid email input
                  .pause(delay.displayComponent)
                  .type("<br />    ", { instant: true, delay: delay.pause })
                  .type(`${attr("aria-invalid")}=${value('"true"')}`)
                  .exec(() => {
                    setInputInvalid(true);
                    setInputClass("");
                  })

                  // Invalid email input helper
                  .pause(delay.displayComponent)
                  .move(6, { instant: true, delay: delay.pause })
                  .type("<br />  ", { instant: true, delay: delay.pause })
                  .type(`&lt;${tag("small")}&gt;&lt;/${tag("small")}&gt;`)
                  .move(-8, { instant: true, delay: delay.pause })
                  .type("<br />    <br />  ", { instant: true, delay: delay.pause })
                  .move(-3, { instant: true, delay: delay.pause })
                  .type("Please enter a valid email!")
                  .exec(() => {
                    setInputHelper("Please enter a valid email!");
                    setInputHelperClass("fadeIn");
                  })

                  // Email input with submit button
                  .pause(delay.displayComponent)
                  .move(11, { instant: true, delay: delay.pause })
                  .delete(53, { instant: deleteIsInstant, delay: delay.pause })
                  .move(-6, { instant: true, delay: delay.pause })
                  .delete(24, { instant: deleteIsInstant, delay: delay.pause })
                  .move(-62, { instant: true, delay: delay.pause })
                  .type(` ${attr("role")}=${value('"group"')}`)
                  .move(68, { instant: true, delay: delay.pause })
                  .type("<br />  ", { instant: true, delay: delay.pause })
                  .type(
                    `&lt;${tag("button")} ${attr("type")}=${value('"submit"')}&gt;&lt;/${tag(
                      "button",
                    )}&gt;`,
                  )
                  .move(-9, { instant: true, delay: delay.pause })
                  .type("<br />    <br />  ", { instant: true, delay: delay.pause })
                  .move(-3, { instant: true, delay: delay.pause })
                  .type("Subscribe")
                  .exec(() => {
                    setFormRole("group");
                    setInputInvalid(null);
                    setInputValue("");
                    setInputHelper(null);
                    setDisplayButton(true);
                    setButtonType("submit");
                    setButtonLabel("Subscribe");
                    setButtonClass("fadeIn");
                  })

                  // Search input with button
                  .pause(delay.displayComponent)
                  .move(-107, { instant: true, delay: delay.pause })
                  .delete(7, { instant: deleteIsInstant, delay: delay.pause })
                  .type(`${value('"search"')}`)
                  .move(27, { instant: true, delay: delay.pause })
                  .delete(7, { instant: deleteIsInstant, delay: delay.pause })
                  .type(`${value('"search"')}`)
                  .move(35, { instant: true, delay: delay.pause })
                  .delete(18, { instant: deleteIsInstant, delay: delay.pause })
                  .type(`${value('"Search"')}`)
                  .move(45, { instant: true, delay: delay.pause })
                  .delete(8, { instant: deleteIsInstant, delay: delay.pause })
                  .type("earch")
                  .exec(() => {
                    setFormRole("search");
                    setInputType("search");
                    setInputPlaceholder("Search");
                    setButtonLabel("Search");
                  })

                  // Search input and button submitted
                  .pause(delay.displayComponent)
                  .move(-42, { instant: true, delay: delay.pause })
                  .type("<br />    ", { instant: true, delay: delay.pause })
                  .type(attr("disabled"))
                  .move(16, { instant: true, delay: delay.pause })
                  .type("<br />   ", { instant: true, delay: delay.pause })
                  .move(14, { instant: true, delay: delay.pause })
                  .type("<br />    <br />  ", { instant: true, delay: delay.pause })
                  .move(-3, { instant: true, delay: delay.pause })
                  .type(`${attr("aria-busy")}=${value('"true"')}`)
                  .move(15, { instant: true, delay: delay.pause })
                  .type("...")
                  .exec(() => {
                    setButtonIsFocused(true);
                    setFormGroupIsFocused(true);
                    setButtonIsBusy(true);
                    setInputIsDisabled(true);
                    setButtonLabel("Search...");
                  })

                  // Date input
                  .pause(delay.displayComponent)
                  .move(12, { instant: true, delay: delay.pause })
                  .delete(79, { instant: deleteIsInstant, delay: delay.pause })
                  .move(-3, { instant: true, delay: delay.pause })
                  .delete(59, { instant: deleteIsInstant, delay: delay.pause })
                  .type(` ${attr("type")}=${value('"date"')}`)
                  .move(-22, { instant: true, delay: delay.pause })
                  .delete(14, { instant: deleteIsInstant, delay: delay.pause })
                  .exec(() => {
                    setFormRole(null);
                    setDisplayButton(false);
                    setButtonIsFocused(false);
                    setButtonClass("");
                    setButtonIsBusy(false);
                    setInputType("date");
                    setInputValue(todayForInputDate);
                    setInputPlaceholder(null);
                    setInputIsDisabled(false);
                  })

                  // Date input with Next button
                  .pause(delay.displayComponent)
                  .move(25, { instant: true, delay: delay.pause })
                  .type("<br />  ", { instant: true, delay: delay.pause })
                  .type(`&lt;${tag("button")}&gt;Next&lt;/${tag("button")}&gt;`)
                  .exec(() => {
                    setDisplayButton(true);
                    setButtonLabel("Next");
                    setButtonClass("fadeIn");
                  })

                  // Select
                  .pause(delay.displayComponent)
                  .move(-24, { instant: true, delay: delay.pause })
                  .delete(21, { instant: deleteIsInstant, delay: delay.pause })
                  .type(`&lt;${tag("select")}&gt;&lt;/${tag("select")}&gt;`)
                  .move(-9, { instant: true, delay: delay.pause })
                  .type("<br />    <br />  ", { instant: true, delay: delay.pause })
                  .move(-3, { instant: true, delay: delay.pause })
                  .type(`&lt;${tag("option")}&gt;Select...&lt;/${tag("option")}&gt;`)
                  .exec(() => {
                    setDisplayInput(false);
                    setDisplaySelect(true);
                  })

                  // Checkbox
                  .pause(delay.displayComponent)
                  .move(12, { instant: true, delay: delay.pause })
                  .delete(50, { instant: deleteIsInstant, delay: delay.pause })
                  .type(`${tag("label")}&gt;&lt;/${tag("label")}&gt;`)
                  .move(-8, { instant: true, delay: delay.pause })
                  .type("<br />    <br />  ", { instant: true, delay: delay.pause })
                  .move(-3, { instant: true, delay: delay.pause })
                  .type(`&lt;${tag("input")} ${attr("type")}=${value('"checkbox"')} /&gt;`)
                  .type("<br />    ", { instant: true, delay: delay.pause })
                  .type("Publish on my profile")
                  .move(35, { instant: true, delay: delay.pause })
                  .delete(24, { instant: deleteIsInstant, delay: delay.pause })
                  .exec(() => {
                    setDisplaySelect(false);
                    setDisplayButton(false);
                    setDisplayCheckbox(true);
                    setCheckboxClass("fadeIn");
                  })

                  // Checkbox checked
                  .pause(delay.displayComponent)
                  .move(-40, { instant: true, delay: delay.pause })
                  .type(` ${attr("checked")}`)
                  .exec(() => {
                    setCheckboxIsChecked(true);
                  })

                  // Switch checked
                  .pause(delay.displayComponent)
                  .move(1, { instant: true, delay: delay.pause })
                  .type("<br />    ", { instant: true, delay: delay.pause })
                  .move(-14, { instant: true, delay: delay.pause })
                  .type("<br />     ", { instant: true, delay: delay.pause })
                  .move(-22, { instant: true, delay: delay.pause })
                  .type("<br />     ", { instant: true, delay: delay.pause })
                  .move(16, { instant: true, delay: delay.pause })
                  .type("<br />      ", { instant: true, delay: delay.pause })
                  .type(`${attr("role")}=${value('"switch"')}`)
                  .exec(() => {
                    setCheckboxRole("switch");
                  })

                  // Switch not checked
                  .pause(delay.displayComponent)
                  .move(14, { instant: true, delay: delay.pause })
                  .delete(14, { instant: deleteIsInstant, delay: delay.pause })
                  .exec(() => {
                    setCheckboxIsChecked(false);
                  });

                return instance;
              }}
            />
          </code>
        </pre>
      </footer>
    </article>
  );
}

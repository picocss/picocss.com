import { useEffect, useRef, useState } from "react";
import TypeIt from "typeit-react";
import parse from "html-react-parser";

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

// Initial Demo Code
const initialDemoCode = [
  `&lt;${tag("form")}&gt;`,
  `<br />  &lt;${tag("input")}`,
  `<br />    ${attr("type")}=${value('"email"')}`,
  `<br />    ${attr("placeholder")}=${value('"Enter your email"')}`,
  `<br />  /&gt;`,
  `<br />&lt;/${tag("form")}&gt;`,
];

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
  const [formIsBusy, setFormIsBusy] = useState(false);
  const [formGroupIsFocused, setFormGroupIsFocused] = useState(false);

  // Input states
  const [displayInput, setDisplayInput] = useState(true);
  const [iputPlaceholder, setInputPlaceholder] = useState("Enter your email");
  const [inputInvalid, setInputInvalid] = useState(null);
  const [inputClass, setInputClass] = useState("");
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
  const [inputHelperClass, setInputHelperClass] = useState("");

  // Select states
  const [displaySelect, setDisplaySelect] = useState(false);

  // Checkbox states
  const [displayCheckbox, setDisplayCheckbox] = useState(false);
  const [checkboxIsChecked, setCheckboxIsChecked] = useState(false);
  const [checkboxClass, setCheckboxClass] = useState("");
  const [checkboxRole, setCheckboxRole] = useState(null);
  const [checkboxIsFocused, setCheckboxIsFocused] = useState(false);

  // Range states
  const [displayRange, setDisplayRange] = useState(false);
  const [rangeValue, setRangeValue] = useState(0);
  const [rangeIsFocused, setRangeIsFocused] = useState(false);

  // Button states
  const [displayButton, setDisplayButton] = useState(false);
  const [buttonType, setButtonType] = useState(null);
  const [buttonLabel, setButtonLabel] = useState(null);
  const [buttonClass, setButtonClass] = useState("");
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

  // Reset TypeIt instance
  const manualLoop = (instance) => {
    instance.reset();
    instance.go();
  };

  return (
    <div className="demo">
      <article
        className="component"
        aria-label="Demo"
        style={demoHeight && { "--demo-height": `${demoHeight}px` }}
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
                  className={checkboxIsFocused ? "is-focused" : ""}
                  onChange={(e) => setCheckboxIsChecked(e.target.checked)}
                />
                Publish on my profile
              </label>
            )}
            {displayRange && (
              <label>
                Brightness
                <input
                  type="range"
                  value={rangeValue}
                  className={rangeIsFocused ? "is-focused" : ""}
                  onChange={(e) => setRangeValue(e.target.value)}
                />
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
              <noscript>{parse(initialDemoCode.join(""))}</noscript>
              <TypeIt
                options={{
                  speed: delay.type,
                  deleteSpeed: delay.delete,
                  startDelay: 0,
                  afterComplete: (instance) => manualLoop(instance),
                }}
                getBeforeInit={(instance) => {
                  instance
                    // Email input
                    .empty()
                    .type(initialDemoCode[0], { instant: true })
                    .type(initialDemoCode[1], { instant: true })
                    .type(initialDemoCode[2], { instant: true })
                    .type(initialDemoCode[3], { instant: true })
                    .type(initialDemoCode[4], { instant: true })
                    .type(initialDemoCode[5], { instant: true })
                    .move(-13, { instant: true })
                    .pause(delay.displayComponent)
                    .exec(() => {
                      setInputType("email");
                      setTimeout(() => {
                        setInputIsFocused(true);
                        setTimeout(() => {
                          setInputValue("invalid@example");
                        }, delay.pause * 2);
                      }, delay.pause);
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
                    .type("  <br />", { instant: true, delay: delay.pause })
                    .move(-1, { instant: true, delay: delay.pause })
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
                    .move(-5, { instant: true, delay: delay.pause })
                    .delete(24, { instant: deleteIsInstant, delay: delay.pause })
                    .move(-62, { instant: true, delay: delay.pause })
                    .type(` ${attr("role")}=${value('"group"')}`)
                    .move(67, { instant: true, delay: delay.pause })
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
                    .move(-106, { instant: true, delay: delay.pause })
                    .delete(7, { instant: deleteIsInstant, delay: delay.pause })
                    .type(`${value('"search"')}`)
                    .move(27, { instant: true, delay: delay.pause })
                    .delete(7, { instant: deleteIsInstant, delay: delay.pause })
                    .type(`${value('"search"')}`)
                    .move(35, { instant: true, delay: delay.pause })
                    .delete(18, { instant: deleteIsInstant, delay: delay.pause })
                    .type(`${value('"Search"')}`)
                    .move(44, { instant: true, delay: delay.pause })
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
                    .move(-26, { instant: true, delay: delay.pause })
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
                    .move(-2, { instant: true, delay: delay.pause })
                    .delete(46, { instant: deleteIsInstant, delay: delay.pause })
                    .type(` ${attr("type")}=${value('"date"')} `)
                    .move(-23, { instant: true, delay: delay.pause })
                    .delete(14, { instant: deleteIsInstant, delay: delay.pause })
                    .exec(() => {
                      setFormRole(null);
                      setDisplayButton(false);
                      setButtonIsFocused(false);
                      setButtonClass("");
                      setButtonIsBusy(false);
                      setInputType("date");
                      setDisplayedInputValue(todayForInputDate);
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
                      setCheckboxIsFocused(true);
                      setTimeout(function () {
                        setCheckboxIsChecked(true);
                        setTimeout(function () {
                          setCheckboxIsFocused(false);
                        }, delay.pause * 2);
                      }, delay.pause);
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
                      setCheckboxIsFocused(true);
                      setTimeout(function () {
                        setCheckboxIsChecked(false);
                        setTimeout(function () {
                          setCheckboxIsFocused(false);
                        }, delay.pause * 2);
                      }, delay.pause);
                    })

                    // Range
                    .pause(delay.displayComponent)
                    .move(34, { instant: true, delay: delay.pause })
                    .delete(26, { instant: deleteIsInstant, delay: delay.pause })
                    .move(-56, { instant: true, delay: delay.pause })
                    .type("    <br />    ", { instant: true, delay: delay.pause })
                    .move(-9, { instant: true, delay: delay.pause })
                    .type("Brightness")
                    .move(37, { instant: true, delay: delay.pause })
                    .delete(10, { instant: deleteIsInstant, delay: delay.pause })
                    .type(value('"range"'))
                    .move(20, { instant: true, delay: delay.pause })
                    .delete(13, { instant: deleteIsInstant, delay: delay.pause })
                    .type(`${attr("value")}=${value('"25"')}`)
                    .exec(() => {
                      setDisplayCheckbox(false);
                      setDisplayRange(true);
                      setRangeValue(25);
                    })

                    // Range to 50
                    .pause(delay.displayComponent / 4)
                    .delete(4, { instant: deleteIsInstant, delay: delay.pause })
                    .type(value('"50"'))
                    .exec(() => {
                      setRangeIsFocused(true);
                      setTimeout(function () {
                        setRangeValue(50);
                        setTimeout(function () {
                          setRangeIsFocused(false);
                        }, delay.pause * 2);
                      }, delay.pause);
                    })

                    // Form busy
                    .pause(delay.displayComponent)
                    .move(20, { instant: true, delay: delay.pause })
                    .delete(96, { instant: deleteIsInstant, delay: delay.pause })
                    .move(-1, { instant: true, delay: delay.pause })
                    .type(` ${attr("aria-busy")}=${value('"true"')}`)
                    .exec(() => {
                      setDisplayRange(false);
                      setFormIsBusy(true);
                    })

                    // Loop to input email
                    .pause(delay.displayComponent)
                    .delete(17, { instant: deleteIsInstant, delay: delay.pause })
                    .move(1, { instant: true, delay: delay.pause })
                    .type(`${initialDemoCode[1]}<br />`)
                    .move(-1, { instant: true, delay: delay.pause })
                    .type(initialDemoCode[2])
                    .type(initialDemoCode[3])
                    .type(initialDemoCode[4])
                    .type(" ", { instant: true })
                    .delete(1, { instant: true })
                    .exec(() => {
                      setFormIsBusy(false);
                      setDisplayInput(true);
                      setInputClass("fadeIn");
                      setInputType("email");
                      setInputValue("");
                      setDisplayedInputValue("");
                      setInputPlaceholder("Enter your email");
                    })
                    .pause(delay.displayComponent);

                  return instance;
                }}
              />
            </code>
          </pre>
        </footer>
      </article>
    </div>
  );
}

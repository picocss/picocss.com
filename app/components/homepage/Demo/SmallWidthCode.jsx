import parse from "html-react-parser";
import { useEffect } from "react";
import TypeIt from "typeit-react";
import { useDemo } from "./DemoContext";

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
export default function Code(props) {
  const {
    // Form states
    setFormRole,
    setFormIsBusy,
    setFormGroupIsFocused,

    // Input states
    setDisplayInput,
    setInputPlaceholder,
    setInputInvalid,
    setInputClass,
    setInputType,
    setInputValue,
    setDisplayedInputValue,
    setInputIsDisabled,
    setInputIsFocused,

    // Input helper states
    setInputHelper,
    setInputHelperClass,

    // Select states
    setDisplaySelect,

    // Checkbox states
    setDisplayCheckbox,
    setCheckboxIsChecked,
    setCheckboxClass,
    setCheckboxRole,
    setCheckboxIsFocused,

    // Range states
    setDisplayRange,
    setRangeValue,
    setRangeIsFocused,
    setRangeClass,

    // Button states
    setDisplayButton,
    setButtonType,
    setButtonLabel,
    setButtonClass,
    setButtonIsBusy,
    setButtonIsFocused,

    // Demo input date (yyyy-MM-dd)
    todayForInputDate,

    // Speed and delay
    delay,

    // Reset TypeIt instance
    manualLoop,

    // Reset all the form and input states
    resetForm,
  } = useDemo();

  const delOpts = { instant: true, delay: delay.pause };
  const delInstant = { instant: true, delay: 0 };
  const moveOpts = { instant: true, delay: delay.pause };
  const moveInstant = { instant: true, delay: 0 };

  // Reset form on load
  useEffect(() => {
    resetForm();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <code {...props}>
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
            .type(initialDemoCode[0], { instant: true })
            .type(initialDemoCode[1], { instant: true })
            .type(initialDemoCode[2], { instant: true })
            .type(initialDemoCode[3], { instant: true })
            .type(initialDemoCode[4], { instant: true })
            .type(initialDemoCode[5], { instant: true })
            .move(-13, { instant: true })
            .pause(delay.displayComponent / 2)
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
            .pause(delay.displayComponent / 2)
            .type("<br />    ", moveOpts)
            .type(`${attr("aria-invalid")}=${value('"true"')}`)
            .exec(() => {
              setInputInvalid(true);
              setInputClass("");
            })

            // Invalid email input helper
            .pause(delay.displayComponent)
            .move(6, moveOpts)
            .type("  <br />", moveOpts)
            .move(-1, moveOpts)
            .type(`&lt;${tag("small")}&gt;&lt;/${tag("small")}&gt;`)
            .move(-8, moveOpts)
            .type("<br />    <br />  ", moveOpts)
            .move(-3, moveOpts)
            .type("Please enter a valid email!")
            .exec(() => {
              setInputHelper("Please enter a valid email!");
              setInputHelperClass("fade-in");
            })

            // Email input with submit button
            .pause(delay.displayComponent)
            .move(11, moveOpts)
            .delete(53, delOpts)
            .move(-5, moveOpts)
            .delete(24, delOpts)
            .move(-58, moveOpts)
            .type("<br />  ", moveOpts)
            .move(-3, moveOpts)
            .type(`&lt;${tag("fieldset")} ${attr("role")}=${value('"group"')}&gt;`)
            .move(66, moveOpts)
            .type("<br />  ", moveOpts)
            .type(`&lt;/${tag("fieldset")}&gt;`)
            .move(-16, moveInstant)
            .type(`  `, moveInstant)
            .move(-36, moveInstant)
            .type(`  `, moveInstant)
            .move(-19, moveInstant)
            .type(`  `, moveInstant)
            .move(-12, moveInstant)
            .type(`  `, moveInstant)
            .move(69, moveInstant)
            .type("<br />    ", moveOpts)
            .type(
              `&lt;${tag("button")} ${attr("type")}=${value('"submit"')}&gt;&lt;/${tag(
                "button",
              )}&gt;`,
            )
            .move(-9, moveOpts)
            .type("<br />      <br />    ", moveOpts)
            .move(-5, moveOpts)
            .type("Subscribe")
            .exec(() => {
              setFormRole("group");
              setInputInvalid(null);
              setInputValue("");
              setInputHelper(null);
              setDisplayButton(true);
              setButtonType("submit");
              setButtonLabel("Subscribe");
              setButtonClass("fade-in");
            })

            // Search input with button
            .pause(delay.displayComponent)
            .move(-117, moveOpts)
            .delete(26, delOpts)
            .move(145, moveOpts)
            .delete(14, delOpts)
            .move(-10, moveInstant)
            .delete(2, delInstant)
            .move(-12, moveInstant)
            .delete(2, delInstant)
            .move(-26, moveInstant)
            .delete(2, delInstant)
            .move(-5, moveInstant)
            .delete(2, delInstant)
            .move(-34, moveInstant)
            .delete(2, delInstant)
            .move(-17, moveInstant)
            .delete(2, delInstant)
            .move(-10, moveInstant)
            .delete(2, delInstant)
            .move(-4, moveOpts)
            .type(` ${attr("role")}=${value('"search"')}`)
            .move(27, moveOpts)
            .delete(7, delOpts)
            .type(`${value('"search"')}`)
            .move(35, moveOpts)
            .delete(18, delOpts)
            .type(`${value('"Search"')}`)
            .move(44, moveOpts)
            .delete(8, delOpts)
            .type("earch")
            .exec(() => {
              setFormRole("search");
              setInputType("search");
              setInputPlaceholder("Search");
              setButtonLabel("Search");
            })

            // Search input and button submitted
            .pause(delay.displayComponent)
            .move(-26, moveOpts)
            .type("<br />   ", moveOpts)
            .move(14, moveOpts)
            .type("<br />    <br />  ", moveOpts)
            .move(-3, moveOpts)
            .type(`${attr("aria-busy")}=${value('"true"')}`)
            .move(15, moveOpts)
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
            .move(12, moveOpts)
            .delete(79, delOpts)
            .move(-2, moveOpts)
            .delete(46, delOpts)
            .type(` ${attr("type")}=${value('"date"')} `)
            .move(-23, moveOpts)
            .delete(14, delOpts)
            .exec(() => {
              setFormGroupIsFocused(false);
              setFormRole(null);
              setDisplayButton(false);
              setButtonIsFocused(false);
              setButtonClass("");
              setButtonIsBusy(false);
              setInputType("date");
              setInputClass("fade-in");
              setDisplayedInputValue(todayForInputDate);
              setInputValue(todayForInputDate);
              setInputPlaceholder(null);
              setInputIsDisabled(false);
            })

            // Date input with Next button
            .pause(delay.displayComponent)
            .move(25, moveOpts)
            .type("<br />  ", moveOpts)
            .type(`&lt;${tag("button")}&gt;Next&lt;/${tag("button")}&gt;`)
            .exec(() => {
              setInputClass("");
              setDisplayButton(true);
              setButtonLabel("Next");
              setButtonClass("fade-in");
            })

            // Select
            .pause(delay.displayComponent)
            .move(-24, moveOpts)
            .delete(21, delOpts)
            .type(`&lt;${tag("select")}&gt;&lt;/${tag("select")}&gt;`)
            .move(-9, moveOpts)
            .type("<br />    <br />  ", moveOpts)
            .move(-3, moveOpts)
            .type(`&lt;${tag("option")}&gt;Select...&lt;/${tag("option")}&gt;`)
            .exec(() => {
              setDisplayInput(false);
              setDisplaySelect(true);
            })

            // Checkbox
            .pause(delay.displayComponent)
            .move(12, moveOpts)
            .delete(50, delOpts)
            .type(`${tag("label")}&gt;&lt;/${tag("label")}&gt;`)
            .move(-8, moveOpts)
            .type("<br />    <br />  ", moveOpts)
            .move(-3, moveOpts)
            .type(`&lt;${tag("input")} ${attr("type")}=${value('"checkbox"')} /&gt;`)
            .type("<br />    ", moveOpts)
            .type("Publish on my profile")
            .move(35, moveOpts)
            .delete(24, delOpts)
            .exec(() => {
              setDisplaySelect(false);
              setDisplayButton(false);
              setDisplayCheckbox(true);
              setCheckboxClass("fade-in");
            })

            // Checkbox checked
            .pause(delay.displayComponent)
            .move(-40, moveOpts)
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
            .move(1, moveOpts)
            .type("<br />    ", moveOpts)
            .move(-14, moveOpts)
            .type("<br />     ", moveOpts)
            .move(-22, moveOpts)
            .type("<br />     ", moveOpts)
            .move(16, moveOpts)
            .type("<br />      ", moveOpts)
            .type(`${attr("role")}=${value('"switch"')}`)
            .exec(() => {
              setCheckboxRole("switch");
            })

            // Switch not checked
            .pause(delay.displayComponent)
            .move(14, moveOpts)
            .delete(14, delOpts)
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
            .move(34, moveOpts)
            .delete(26, delOpts)
            .move(-56, moveOpts)
            .type("    <br />    ", moveOpts)
            .move(-9, moveOpts)
            .type("Brightness")
            .move(37, moveOpts)
            .delete(10, delOpts)
            .type(value('"range"'))
            .move(20, moveOpts)
            .delete(13, delOpts)
            .type(`${attr("value")}=${value('"25"')}`)
            .exec(() => {
              setRangeClass("fade-in");
              setDisplayCheckbox(false);
              setDisplayRange(true);
              setRangeValue(25);
            })

            // Range to 50
            .pause(delay.displayComponent / 4)
            .delete(4, delOpts)
            .type(value('"50"'))
            .exec(() => {
              setRangeClass("");
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
            .move(20, moveOpts)
            .delete(96, delOpts)
            .move(-1, moveOpts)
            .type(` ${attr("aria-busy")}=${value('"true"')}`)
            .exec(() => {
              setDisplayRange(false);
              setFormIsBusy(true);
            })

            // Loop to input email
            .pause(delay.displayComponent)
            .delete(17, delOpts)
            .move(1, moveOpts)
            .type(`${initialDemoCode[1]}<br />`)
            .move(-1, moveOpts)
            .type(initialDemoCode[2])
            .type(initialDemoCode[3])
            .type(initialDemoCode[4])
            .type(" ", { instant: true })
            .delete(1, { instant: true })
            .exec(() => {
              setFormIsBusy(false);
              setDisplayInput(true);
              setInputClass("fade-in");
              setInputType("email");
              setInputValue("");
              setDisplayedInputValue("");
              setInputPlaceholder("Enter your email");
            });

          return instance;
        }}
      />
    </code>
  );
}

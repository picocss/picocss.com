import { createContext, useContext, useEffect, useRef, useState } from "react";

const DemoContext = createContext({});
const useDemo = () => useContext(DemoContext);

export default function DemoProvider({ children }) {
  // Form states
  const formRef = useRef(null);
  const [formRole, setFormRole] = useState(false);
  const [formIsBusy, setFormIsBusy] = useState(false);
  const [formGroupIsFocused, setFormGroupIsFocused] = useState(false);

  // Input states
  const [displayInput, setDisplayInput] = useState(true);
  const [inputPlaceholder, setInputPlaceholder] = useState("Enter your email");
  const [inputInvalid, setInputInvalid] = useState(null);
  const [inputClass, setInputClass] = useState("");
  const [inputType, setInputType] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [displayedInputValue, setDisplayedInputValue] = useState("");
  const [inputIsDisabled, setInputIsDisabled] = useState(false);
  const [inputIsFocused, setInputIsFocused] = useState(false);

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

  // Speed and delay
  const speed = 10;
  const delay = {
    type: speed,
    delete: 0,
    pause: speed * 10,
    displayComponent: speed * 500,
  };

  // Reset TypeIt instance
  const manualLoop = (instance) => {
    instance.reset();
    instance.go();
  };

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
    <DemoContext.Provider
      value={{
        // Form states
        formRef,
        formRole,
        setFormRole,
        formIsBusy,
        setFormIsBusy,
        formGroupIsFocused,
        setFormGroupIsFocused,

        // Input states
        displayInput,
        setDisplayInput,
        inputPlaceholder,
        setInputPlaceholder,
        inputInvalid,
        setInputInvalid,
        inputClass,
        setInputClass,
        inputType,
        setInputType,
        inputValue,
        setInputValue,
        displayedInputValue,
        setDisplayedInputValue,
        inputIsDisabled,
        setInputIsDisabled,
        inputIsFocused,
        setInputIsFocused,

        // Input helper states
        inputHelper,
        setInputHelper,
        inputHelperClass,
        setInputHelperClass,

        // Select states
        displaySelect,
        setDisplaySelect,

        // Checkbox states
        displayCheckbox,
        setDisplayCheckbox,
        checkboxIsChecked,
        setCheckboxIsChecked,
        checkboxClass,
        setCheckboxClass,
        checkboxRole,
        setCheckboxRole,
        checkboxIsFocused,
        setCheckboxIsFocused,

        // Range states
        displayRange,
        setDisplayRange,
        rangeValue,
        setRangeValue,
        rangeIsFocused,
        setRangeIsFocused,

        // Button states
        displayButton,
        setDisplayButton,
        buttonType,
        setButtonType,
        buttonLabel,
        setButtonLabel,
        buttonClass,
        setButtonClass,
        buttonIsBusy,
        setButtonIsBusy,
        buttonIsFocused,
        setButtonIsFocused,

        // Footer
        footerRef,

        // Demo input date (yyyy-MM-dd)
        todayForInputDate,

        // Speed and delay
        delay,

        // Reset TypeIt instance
        manualLoop,

        // Demo height
        demoHeight,
      }}
    >
      {children}
    </DemoContext.Provider>
  );
}

export { DemoProvider, useDemo };

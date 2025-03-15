import { useDemo } from "./DemoContext";

// Input
const Input = (props) => {
  const {
    displayInput,
    inputPlaceholder,
    inputInvalid,
    inputClass,
    inputType,
    displayedInputValue,
    inputIsDisabled,
    inputIsFocused,
    setInputValue,
  } = useDemo();

  if (!displayInput) return null;
  return (
    <input
      name="input-demo"
      tabIndex="-1"
      type={inputType}
      placeholder={inputPlaceholder}
      className={`${inputClass}${inputIsFocused ? " is-focused" : ""}`}
      disabled={inputIsDisabled}
      value={displayedInputValue}
      onChange={(e) => setInputValue(e.target.value)}
      {...(inputInvalid !== null ? { "aria-invalid": inputInvalid } : {})}
      {...props}
    />
  );
};

// Input Helper
const InputHelper = (props) => {
  const { inputHelper, inputHelperClass } = useDemo();

  if (!inputHelper) return null;
  return (
    <small className={inputHelperClass} {...props}>
      {inputHelper}
    </small>
  );
};

// Select
const Select = (props) => {
  const { displaySelect } = useDemo();

  if (!displaySelect) return null;
  return (
    <select name="select-demo" tabIndex="-1" defaultValue="" required {...props}>
      <option disabled value="">
        Select...
      </option>
    </select>
  );
};

// Checkbox
const Checkbox = (props) => {
  const {
    displayCheckbox,
    checkboxIsChecked,
    checkboxClass,
    checkboxRole,
    checkboxIsFocused,
    setCheckboxIsChecked,
  } = useDemo();

  if (!displayCheckbox) return null;
  return (
    <label className={checkboxClass} {...props}>
      <input
        name="checkbox-demo"
        tabIndex="-1"
        type="checkbox"
        {...(checkboxRole && { role: checkboxRole })}
        checked={checkboxIsChecked}
        className={checkboxIsFocused ? "is-focused" : ""}
        onChange={(e) => setCheckboxIsChecked(e.target.checked)}
      />
      Publish on my profile
    </label>
  );
};

// Range
const Range = (props) => {
  const { displayRange, rangeClass, rangeValue, rangeIsFocused, setRangeValue } = useDemo();

  if (!displayRange) return null;
  return (
    <label className={rangeClass} {...props}>
      Brightness
      <input
        name="range-demo"
        tabIndex="-1"
        type="range"
        value={rangeValue}
        className={rangeIsFocused ? "is-focused" : ""}
        onChange={(e) => setRangeValue(e.target.value)}
      />
    </label>
  );
};

// Button
const Button = (props) => {
  const { displayButton, buttonType, buttonLabel, buttonClass, buttonIsBusy, buttonIsFocused } =
    useDemo();

  if (!displayButton) return null;
  return (
    <button
      tabIndex="-1"
      {...(buttonType && { type: buttonType })}
      className={`${buttonClass}${buttonIsFocused ? " is-focused" : ""}`}
      aria-busy={buttonIsBusy}
      {...props}
    >
      {buttonLabel}
    </button>
  );
};

// Demo
export default function Form(props) {
  const {
    // Form states
    formRef,
    formRole,
    formGroupIsFocused,
  } = useDemo();
  return (
    <form
      ref={formRef}
      {...(formRole && { role: formRole })}
      className={formGroupIsFocused ? "is-focused" : ""}
      {...props}
    >
      <Input />
      <InputHelper />
      <Select />
      <Checkbox />
      <Range />
      <Button />
    </form>
  );
}

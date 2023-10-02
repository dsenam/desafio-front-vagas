import CheckboxOption from "../CheckboxOption";

interface ICheckboxGroup {
  register: any;
}
const CheckboxGroup = ({ register }: ICheckboxGroup) => {
  const options = [
    { value: "react", label: "React" },
    { value: "vue", label: "Vue" },
    { value: "angular", label: "Angular" },
  ];

  return (
    <fieldset className="fieldset">
      {options.map((option) => (
        <CheckboxOption
          register={() => register(option.value)}
          key={option.value}
          {...option}
        />
      ))}
    </fieldset>
  );
};

export default CheckboxGroup;

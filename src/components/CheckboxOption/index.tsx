import './styles.css'

interface ICheckboxOption {
  value: string;
  label: string;
  register: any
}

const CheckboxOption = ({register, value, label }: ICheckboxOption) => (
  <div className="checkbox-option">
    <input {...register(value)} type="checkbox" id={value} value={value} className='checkbox-option__checkbox'/>

    <label className="checkbox-option__label" htmlFor={value}>
      {label}
    </label>
  </div>
);

export default CheckboxOption;

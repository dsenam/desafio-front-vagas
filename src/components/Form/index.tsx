import { useForm, SubmitHandler } from "react-hook-form";
import Typography from "../Typography";
import "./styles.css";
import CheckboxGroup from "../CheckboxGroup";

interface IFormInput {
  stickers: string | Array<string>;
}

const Form = () => {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Typography variant="p" title="Quais stickers" className="main__label" />

      <CheckboxGroup register={register} />

      <Typography
        variant="p"
        title="Quantos stickers de cada ?"
        className="main__label"
      />
      <button>
        <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42">
          <path d="M4.667 0A4.668 4.668 0 0 0 0 4.667v32.666A4.668 4.668 0 0 0 4.667 42h32.666A4.668 4.668 0 0 0 42 37.333V4.667A4.668 4.668 0 0 0 37.333 0H4.667zm28 23.333H9.333v-4.666h23.334v4.666z" />
        </svg>
      </button>
      <input type="text" placeholder="0" />
      <button>
        <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42">
          <path d="M4.667 42h32.666A4.668 4.668 0 0 0 42 37.333V4.667A4.668 4.668 0 0 0 37.333 0H4.667A4.668 4.668 0 0 0 0 4.667v32.666A4.668 4.668 0 0 0 4.667 42zm4.666-23.333h9.334V9.333h4.666v9.334h9.334v4.666h-9.334v9.334h-4.666v-9.334H9.333v-4.666z" />
        </svg>
      </button>

      <Typography variant="p" title="Observações:" className="main__label" />
      <textarea
        name="descricao"
        placeholder="Alguma dúvida? Recado?"
      ></textarea>
    </form>
  );
};

export default Form;

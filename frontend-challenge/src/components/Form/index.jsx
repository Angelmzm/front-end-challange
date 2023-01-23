import { useForm } from "react-hook-form";
import axios from "axios";
import CurrencyInput from "react-currency-input-field";

export const Form = ({
  setOneDay,
  setFifteenDays,
  setThirtyDays,
  setNinetyDays,
}) => {
  function calculate(data) {
    axios
      .post("https://frontend-challenge-7bu3nxh76a-uc.a.run.app", data)
      .then((response) => {
        console.log(response);
        console.log("data", response.data);
        setOneDay(response.data[1]);
        setFifteenDays(response.data[15]);
        setThirtyDays(response.data[30]);
        setNinetyDays(response.data[90]);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const { register, handleSubmit } = useForm();

  const onSubmit = (values) => calculate(values);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Informe o valor da venda *
          <CurrencyInput
            intlConfig={{ locale: "pt-BR", currency: "BRL" }}
            {...register("amount", { min: 4, required: true })}
          />
        </label>

        <label>
          Em quantas parcelas *
          <input
            type="number"
            {...register("installments", { max: 12, required: true })}
          />
          <p className="p"> Máximo de 12 parcelas</p>
        </label>

        <label>
          Informe o percentual de MDR *
          <input
            type="number"
            {...register("mdr", { max: 100, required: true })}
          />
        </label>

        <button type="submit"> simular </button>
      </form>
    </>
  );
};

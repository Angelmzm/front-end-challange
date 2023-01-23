import { useState } from "react";
import { Main } from "./style";
import { Form } from "../Form";

export const MainScreen = () => {
  const [oneDay, setOneDay] = useState(0);
  const [fifteenDays, setFifteenDays] = useState(0);
  const [thirtyDays, setThirtyDays] = useState(0);
  const [ninetyDays, setNinetyDays] = useState(0);

  return (
    <Main>
      <div className="container">
        <div className="containerForm">
          <h1 className="formTittle">Simule sua Antecipação</h1>
          <Form
            setOneDay={setOneDay}
            setFifteenDays={setFifteenDays}
            setThirtyDays={setThirtyDays}
            setNinetyDays={setNinetyDays}
          />
        </div>
        <div className="containerResult">
          <h1> Você receberá:</h1>
          <div className="div3">
            <p>
              Amanhã:
              <b>
                {" "}
                {oneDay.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}{" "}
              </b>
            </p>
            <p>
              Em 15 dias:
              <b>
                {" "}
                {fifteenDays.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}{" "}
              </b>
            </p>
            <p>
              Em 30 dias:
              <b>
                {" "}
                {thirtyDays.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}{" "}
              </b>
            </p>
            <p>
              Em 90 dias:
              <b>
                {" "}
                {ninetyDays.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}{" "}
              </b>
            </p>
          </div>
        </div>
      </div>
    </Main>
  );
};

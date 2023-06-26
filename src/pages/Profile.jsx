import { useSelector } from "react-redux";
import CardAction from "../components/CardAction";
import Header from "../components/Header";

export default function Profile() {
  const { actionsAdded, actionsEdited, actionsRemoved } = useSelector((state) => ({
    actionsAdded: state.historic.added,
    actionsEdited: state.historic.edited,
    actionsRemoved: state.historic.removed
  }));
  return (
    <div className="flex flex-col justify-center items-center">
      <Header />
      <h1 className="text-6xl mt-10">Histórico de Ações</h1>
      <section className="h-1/5 w-2/3 flex justify-center items-center flex-wrap mt-10">
        {
          actionsAdded && (
            actionsAdded.map((el, index) => (
              <CardAction key={ index }  action={ el } />
            ))
          )
        }
      </section>
      <section>
      {
          actionsEdited && (
            actionsEdited.map((el, index) => (
              <CardAction key={ index }  action={ el } />
            ))
          )
        }
      </section>
      <section>
      {
          actionsRemoved && (
            actionsRemoved.map((el, index) => (
              <CardAction key={ index }  action={ el } />
            ))
          )
        }
      </section>
    </div>
  );
}

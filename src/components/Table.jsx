import editIcon from '../iframes/edit.png';
import deleteIcon from '../iframes/deleteIcon.svg';
import { useDispatch, useSelector } from "react-redux";
import { toogleType } from "../redux/actions/FormActions";
import { deleteProduct, updateIdToEdit } from "../redux/actions/TableActions";
import { deleteAction } from '../redux/actions/HistoricActions';

export default function Table() {
  const estoque = useSelector((state) => state.table.estoque);
  const dispatch = useDispatch();

  const editProduct = (id) => {
    dispatch(toogleType());
    dispatch(updateIdToEdit(id));
  };

  const deleteProductFunction = (id) => {
    dispatch(deleteProduct(id));
    const productDelete = estoque.find((el) => el.id = id);
    const { name } = productDelete;
    dispatch(deleteAction('delete', name, Date()));
  };

  return (
    <div className="overflow-x-auto w-4/6 mt-8">
      <table className="table text-2xl">
        {/* head */}
        <thead>
          <tr className="text-2xl">
            <th></th>
            <th>Name</th>
            <th>Quantidade</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          {
            estoque && (
              estoque.map(({ name, quantity, value, id }) => (
                <tr className="hover" key={ id }>
                  <th>{ id }</th>
                  <th>{ name }</th>
                  <th>{ quantity }</th>
                  <th>{ value }</th>
                  <th>
                    <button type="button" onClick={ () => editProduct(id) }>
                      <img src={ editIcon } alt="Botão de editar" className="w-8 text-neutral-50" />
                    </button>
                  </th>
                  <th>
                    <button type="button" onClick={ () =>deleteProductFunction(id) }>
                      <img src={ deleteIcon } alt="Botão de deletar" className="w-11 text-neutral-50" />
                    </button>
                  </th>
                </tr>
              ))
            )
          }
        </tbody>
      </table>
    </div>
  );
}

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { toogleType } from '../redux/actions/FormActions';
import { addProduct, editProduct, updateIdToEdit } from '../redux/actions/TableActions';
import { addNewAction, editAction } from '../redux/actions/HistoricActions';
import Error from '../components/Error';

export default function FormTable() {
  const [formProducts, setFormProducts] = useState({
    name: '',
    quantity: 0,
    value: 0,
  });
  const [showError, setShowError] = useState(false);
  const { name, quantity, value } = formProducts;
  const type = useSelector((state) => state.form.type);
  const { idToEdit, estoque } = useSelector((state) => ({
    idToEdit: state.table.idToEdit,
    estoque: state.table.estoque,
  }));
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    setFormProducts({
      ...formProducts,
      [name]: value
    })
  };

  const clearState = (name = '', quantity = 0, value = 0) => {
    setFormProducts({
      name,
      quantity,
      value,
    });
  };

  const createProduct = (product) => {
    console.log(product);
    product.name = '';
    product.quantity = 0;
    product.value = 0;

    fetch('http://localhost:5000/products', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(product),
      }).then((resp) => resp.json())
        .then((data) => console.log(data))
        .catch((error) => console.error(error));


  /*  try {
      const response = await
      if (response.ok) {
        const data = await response.json();
        console.log(data);
      } else {
        throw new Error('Sem sucesso na requisição');
      }
    } catch (error) {
      console.error(error.message);
    } */
  };

  const handleClick = () => {
    if (name.length === 0 ) {
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 3000);
    } else {
      dispatch(addProduct(formProducts));
      createProduct(formProducts);
      clearState();
      dispatch(addNewAction('add', name, Date()));
    }
  };

  const sendEdit = () => {
    dispatch(editProduct(formProducts));
    dispatch(toogleType());
    dispatch(updateIdToEdit(0));
    dispatch(editAction('edit', name, Date()))
    clearState();
  };

  useEffect(() => {
    if (idToEdit !== 0) {
      const product = estoque.find((el) => el.id === idToEdit);
      const { name, quantity, value } = product;
      clearState(name, quantity, value);
    }
  }, [idToEdit]);


  return (
    <>
      <form className="flex justify-center items-center p-8">
        <label className="flex flex-col mr-4">
          Nome do produto:
          <input
            type="text"
            name="name"
            value={ name }
            placeholder="Digite o nome do produto"
            className={ type !== 'send' ? "input input-bordered text-warning border-black" : "input input-bordered border-black" }
            onChange={ handleChange }
          />
        </label>
        <label className="flex flex-col">
          Quantidade:
          <input
            type="number"
            name="quantity"
            value={ quantity }
            className={ type !== 'send' ? "input input-bordered text-warning border-black" : "input input-bordered border-black" }
            onChange={ handleChange }
          />
        </label>
        <label className="flex flex-col ml-4">
          Valor:
          <input
            type="number"
            name="value"
            value={ value }
            className={ type !== 'send' ? "input input-bordered text-warning border-black" : "input input-bordered border-black" }
            onChange={ handleChange }
          />
        </label>
        {
          type === 'send' ? (
            <button
              type="button"
              onClick={ handleClick }
              className="btn btn-outline btn-accent ml-4 self-end"
            >
              Enviar
            </button>
          ) : (
            <button
              type="button"
              onClick={ sendEdit }
              className="btn btn-warning btn-outline ml-4 self-end"
            >
              Enviar
            </button>
          )
        }
      </form>
      {
        showError && (
          <Error />
        )
      }
    </>
  );
}

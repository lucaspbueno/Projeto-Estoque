import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterProducts } from "../redux/actions/TableActions";

export default function Filters() {
  const [filterName, serFilterName] = useState('');
  const dispatch = useDispatch();
  const estoque = useSelector((state) => state.table.estoque);
  const estoqueForFilter = estoque;

  const handleChange = ({ target:  { value } }) => {
    serFilterName(value);
  };

  useEffect(() => {
    const estoqueFiltred = estoqueForFilter.filter((el) => el.name.toLowerCase().includes(filterName.toLowerCase()));
    dispatch(filterProducts(estoqueFiltred));
  }, [filterName]);


  return (
    <div>
      <form>
        <label className="flex flex-col">
          Busque pelo nome do produto:
          <input
            type="text"
            className="input input-bordered border-black"
            name="filterName"
            value={ filterName }
            onChange={ handleChange }
          />
        </label>
        {/* <button type="button">▲</button>
        <button type="button">▼</button> */}
      </form>
    </div>
  );
}

import { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { loginUser } from "../redux/actions/LoginActions";
import { useDispatch } from "react-redux";

export default function Login() {
  const [form, setForm] = useState({
    email: '',
    name: ''
  });
  const [stateBtn, setStateBtn] = useState(true);
  const history = useHistory();
  const dispatch = useDispatch();

  const { email, name } = form;

  const validationBtn = useCallback(() => {
    const regex = /\S+@\S+\.\S+/;
    setStateBtn(!(regex.test(email) && name.length >= 6));
  }, [email, name]);

  useEffect(() => {
    validationBtn();
  }, [form, validationBtn]);

  const handleChange = ({ target: { name, value } }) => {
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleClick = () => {
    dispatch(loginUser(name, email));
    history.push('/home');
  };

  return (
    <div className="flex justify-center items-center w-screen h-screen bg-slate-950">
      <form className="flex flex-col justify-center items-center p-16">
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={ email }
            className="input input-bordered flex flex-col border-black"
            onChange={ handleChange }
          />
        </label>
        <label className="mt-3">
          Name:
          <input
            type="text"
            name="name"
            value={ name }
            className="input input-bordered flex flex-col border-black"
            onChange={ handleChange }
          />
        </label>
        <button
          type="button"
          disabled={ stateBtn }
          className="btn btn-outline mt-6"
          onClick={ handleClick }
        >
          Entrar
        </button>
      </form>
    </div>
  );
}

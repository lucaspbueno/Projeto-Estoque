import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function Header() {
  const name = useSelector((state) => state.user.name);
  const history = useHistory();
  return (
    <header className="navbar bg-slate-900">
      <div className="flex-1">
        <button
          type="button"
          className="btn btn-ghost normal-case text-xl bg-black"
          onClick={ () => history.push("/home") }
        >
          Estoque
        </button>
      </div>
      <div className="flex-none gap-2">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="avatar placeholder">
              <div className="w-10 rounded-full bg-black">
                <span className="text-xl">{ name[0] }</span>
              </div>
            </div>
          </label>
          <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
            <li>
              <button type="button" className="justify-between" onClick={ () => history.push('/profile') }>
                Profile
              </button>
            </li>
            <li><button type="submit" onClick={ () => history.push('/') }>Logout</button></li>
          </ul>
        </div>
      </div>
  </header>
  );
}

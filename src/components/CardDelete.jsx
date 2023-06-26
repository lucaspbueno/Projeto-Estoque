import { useSelector } from "react-redux";

export default function CardDelete({ action }) {
  const name = useSelector((state) => state.user.name);
  const { type, productName, when } = action;
  return (
    <div className="card w-96 bg-white shadow-xl m-5">
      <div className="card-body">
        <h2 className="card-title">
          { name }
        </h2>
        <p>Foi removido o produto { productName }</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{ type }</div> 
          <div>{ when }</div>
        </div>
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";
import FormTable from "../components/FormTable";
import Header from "../components/Header";
import Table from "../components/Table";
import Loading from "../components/Loading";
/* import Filters from "../components/Filters"; */

export default function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
  
  if (loading) return <Loading />;
  return (
    <div className="w-screen h-screen">
      <Header />
      <main  className="flex flex-col justify-start items-center pt-14">
        <FormTable />
        {/* <Filters /> */}
        <Table />
      </main>
    </div>
  );
}

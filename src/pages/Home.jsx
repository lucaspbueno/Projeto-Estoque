import FormTable from "../components/FormTable";
import Header from "../components/Header";
import Table from "../components/Table";

export default function Home() {
  return (
    <div className="w-screen h-screen">
      <Header />
      <main  className="flex flex-col justify-start items-center pt-14">
        <FormTable />
        <Table />
      </main>
    </div>
  );
}

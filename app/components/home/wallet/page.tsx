import { getUsers } from "@/app/actions/get-users";
import { columns } from "./columns";
import { DataTable } from "./data-table";

const TabelaDeCarteiras = async () => {
  // TODO Mudar para context
  const data = await getUsers();

  return <DataTable columns={columns} data={data} />;
};

export default TabelaDeCarteiras;

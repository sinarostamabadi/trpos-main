import DataTable from "react-data-table-component";
import { TableProps } from "./table.types";

export const Table: React.FC<TableProps> = ({ columns, data }) => {
  const customStyles = {
    headCells: {
      style: {
        color: "#00636D",
        fontSize: "16px",
      },
    },
    cells: {
      style: {
        minHeight: "80px",
        width: "fit-content",
      },
    },
  };

  return (
    <DataTable
      columns={columns}
      data={data}
      customStyles={customStyles}
      responsive={true}
    />
  );
};

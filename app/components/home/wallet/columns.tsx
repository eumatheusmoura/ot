"use client";

import { User } from "@/app/types";
import { ColumnDef } from "@tanstack/react-table";
import { Bitcoin } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { DataTableColumnHeader } from "./data-table-column-header";

import DialogActions from "./dialog";

export const columns: ColumnDef<User>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() || table.getIsSomePageRowsSelected()
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "nome",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Nome" />
    ),
  },
  {
    accessorKey: "sobrenome",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Sobrenome" />
    ),
  },
  {
    accessorKey: "email",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Email" />
    ),
  },
  {
    accessorKey: "valor_carteira",
    header: () => <div className="text-xs">Bitcoin</div>,
    cell: ({ row }) => {
      const wallet: string = row.getValue("valor_carteira");
      return (
        <div className="flex flex-row items-center">
          <Bitcoin className="mr-2 h-5 w-5" />
          {wallet}
        </div>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const user = row.original;

      return <DialogActions user={user.id} />;
    },
  },
];

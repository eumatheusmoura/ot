"use client";

import { type User } from "@/app/types/index";
import { DownloadIcon } from "@radix-ui/react-icons";
import { type Table } from "@tanstack/react-table";

import { exportTableToCSV } from "@/lib/export";
import { Button } from "@/components/ui/button";

interface ExportToCSVProps {
  table: Table<User>;
}

export function ExportToCSVButton({ table }: ExportToCSVProps) {
  return (
    <div className="flex items-center gap-2">
      <Button
        variant="outline"
        onClick={() =>
          exportTableToCSV(table, {
            filename: "dados_carteiras",
            excludeColumns: ["select", "actions"],
          })
        }
      >
        <DownloadIcon className="mr-2 size-4" aria-hidden="true" />
        Exportar CSV
      </Button>
    </div>
  );
}

import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "sonner";
import { EllipsisVertical, Pencil, Trash } from "lucide-react";
import { removeUser } from "@/app/actions/remove-wallet";

const enum Dialogs {
  dialog1 = "dialog1",
  dialog2 = "dialog2",
}

const DialogActions: React.FC<{ user: number }> = ({ user }) => {
  const [dialog, setDialog] = useState();
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <>
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              aria-label="Open menu"
              variant="ghost"
              className="flex size-8 p-0 data-[state=open]:bg-muted"
            >
              <EllipsisVertical className="size-4" aria-hidden="true" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Ações</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DialogTrigger
              asChild
              onClick={() => {
                setDialog(Dialogs.dialog1);
              }}
            >
              <DropdownMenuItem>
                <Pencil className="mr-2 h-4 w-4" />
                <span>Editar</span>
              </DropdownMenuItem>
            </DialogTrigger>
            <DialogTrigger
              asChild
              onClick={() => {
                setDialog(Dialogs.dialog2);
              }}
            >
              <DropdownMenuItem className="text-red-500">
                <Trash className="mr-2 h-4 w-4" />
                <span>Excluir</span>
              </DropdownMenuItem>
            </DialogTrigger>
          </DropdownMenuContent>
        </DropdownMenu>
        <DialogContent className="sm:max-w-[425px]">
          {dialog === Dialogs.dialog1 ? (
            <>
              <DialogHeader>
                <DialogTitle>Editar Carteira</DialogTitle>
                <DialogDescription>
                  Preencha o formulário para editar um ativo da sua carteira
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-1 items-center gap-4">
                  <Input type="email" placeholder="Nome" />
                  <Input type="email" placeholder="Sobrenome" />
                  <Input type="email" placeholder="Email" />
                  <Input type="email" placeholder="Valor de compra" />
                </div>
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button
                    type="button"
                    variant="secondary"
                    className="mt-2 sm:mt-0"
                  >
                    Cancelar
                  </Button>
                </DialogClose>
                <Button type="submit">Editar</Button>
              </DialogFooter>
            </>
          ) : (
            <>
              <DialogHeader>
                <DialogTitle className="flex flex-col items-center gap-4">
                  <Trash strokeWidth={3} className="mr-2 m h-6 w-6" />
                  <span>Excluir Carteira</span>
                </DialogTitle>
                <DialogDescription className="text-center">
                  <p className="mt-2">
                    Tem certeza que deseja excluir essa Carteira?
                  </p>
                  <p>Esta ação não poderá ser desfeita.</p>
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <DialogClose asChild>
                  <Button
                    type="button"
                    variant="secondary"
                    className="mt-2 w-full sm:mt-0"
                  >
                    Cancelar
                  </Button>
                </DialogClose>
                <Button
                  variant="destructive"
                  className="w-full"
                  onClick={async () => {
                    await removeUser(user);
                    setDialogOpen(false);
                    toast.success("Carteira Excluída");
                  }}
                >
                  Excluir
                </Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DialogActions;

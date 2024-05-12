import React from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus } from "lucide-react";

function AdicionarCarteiraButton() {
  return (
    <>
      <div className="w-full flex justify-between mt-8">
        <h2 className="text-2xl">BTC Carteiras</h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Adicionar Carteira
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Adicionar Carteira</DialogTitle>
              <DialogDescription>
                Preencha o formulário para adicionar um novo ativo à sua
                carteira
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
                  Fechar
                </Button>
              </DialogClose>
              <Button type="submit">Adicionar</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}

export default AdicionarCarteiraButton;

"use client";
import React, { useState } from "react";
import { Button } from "../../../components/ui/button";
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
import { MouseEvent } from "react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { insertWallet } from "@/app/actions/insert-wallet";

const formSchema = z.object({
  nome: z.string().min(1, { message: "O campo nome é obrigatório" }),
  sobrenome: z.string().min(1, { message: "O campo sobrenome é obrigatório" }),
  email: z.string().email({ message: "O campo email é obrigatório" }),
  valor_de_compra: z
    .string()
    .min(1, { message: "O campo valor de compra é obrigarório" }),
});

function AdicionarCarteiraButton() {
  const [nomeUsuario, setNomeUsuario] = useState<string>();
  const [sobrenome, setSobrenome] = useState<string>();
  const [email, setEmail] = useState("");
  const [valorDeCompra, setValorDeCompra] = useState<string>();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome: "",
      sobrenome: "",
      email: "",
      valor_de_compra: "",
    },
  });

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    const { nome, sobrenome, email, valor_de_compra } = values;

    const formData = {
      id: 37,
      nome,
      sobrenome,
      email,
      endereco: "Rua das Laranjeiras, 123, São Paulo, SP",
      data_nascimento: "1990-04-15",
      data_abertura: "2022-05-20",
      valor_carteira: valor_de_compra,
      endereco_carteira: "1A2b3C4d5E6f",
    };

    await insertWallet(formData);
    console.log("inseriu");
  };

  return (
    <>
      <div className="w-full flex justify-between mt-8">
        <h2 className="text-xl font-medium sm:text-2xl">BTC Carteiras</h2>
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
            <Form {...form}>
              <form onSubmit={form.handleSubmit(handleSubmit)}>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <FormField
                      control={form.control}
                      name="nome"
                      render={({ field }) => {
                        return (
                          <FormItem>
                            <FormControl>
                              <Input
                                placeholder="Nome"
                                type="text"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        );
                      }}
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <FormField
                      control={form.control}
                      name="sobrenome"
                      render={({ field }) => {
                        return (
                          <FormItem>
                            <FormControl>
                              <Input
                                placeholder="Sobrenome"
                                type="text"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        );
                      }}
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => {
                        return (
                          <FormItem>
                            <FormControl>
                              <Input placeholder="E-mail" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        );
                      }}
                    />{" "}
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <FormField
                      control={form.control}
                      name="valor_de_compra"
                      render={({ field }) => {
                        return (
                          <FormItem>
                            <FormControl>
                              <Input placeholder="Valor de compra" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        );
                      }}
                    />
                  </div>
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button type="submit" className="mt-4">
                      Adicionar
                    </Button>
                  </DialogClose>
                </DialogFooter>
              </form>
            </Form>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}

export default AdicionarCarteiraButton;

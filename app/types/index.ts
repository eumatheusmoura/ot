export type User = {
  id: number;
  nome: string;
  sobrenome: string;
  email: string;
  endereco: string;
  data_nascimento: string;
  data_abertura: string;
  valor_carteira: string;
  endereco_carteira: string;
};

export type UserResponse = {
  users: User[];
};

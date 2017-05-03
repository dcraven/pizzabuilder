export interface IPizza {
  id: number;
  name: string;
  toppings: string[];
  price: number;
  signature: boolean;
}

export interface IMenu {
  signaturePizzas: IPizza[];
  customPizzas: IPizza[];
}

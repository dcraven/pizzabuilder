export interface IPizza {
  name: string;
  toppings: string[];
  price: number;
}

export interface IMenu {
  signaturePizzas: IPizza[];
  customPizzas: IPizza[];
}

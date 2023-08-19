import { faBurger, faMugSaucer, faMugHot, faCocktail, faGlassWater, faCheese, faPizzaSlice } from "@fortawesome/free-solid-svg-icons";

export const categoryData = [
  {
    name: "",
    color: "",
    icon: "",
    item: [],
  },
  {
    name: "Coffee",
    color: "#cfdddb",
    icon: faMugSaucer,
    item: [
      {
        name: "Cà phê đen",
        price: 10000,
      },
      {
        name: "Cà phê sữa",
        price: 12000,
        is_best_seller: true,
      },
      {
        name: "Bạc xỉu",
        price: 12000,
      },
      {
        name: "Cacoa",
        price: 17000,
      },
      {
        name: "Capuchino",
        price: 20000,
        is_best_seller: true,
      },
      {
        name: "Americano",
        price: 15000,
      },
      {
        name: "Latte",
        price: 18000,
        discount: 20,
      },
      {
        name: "Espresso",
        price: 20000,
        is_best_seller: true,
      },
    ],
  },
  {
    name: "Tea",
    color: "#e4cdee",
    icon: faMugHot,
    item: [
      {
        name: "Strawberry Tea",
        price: 23000,
        discount: 10,
      },
      {
        name: "Lemon Tea",
        price: 23000,
      },
      {
        name: "Peach Tea",
        price: 23000,
      },
      {
        name: "Atiso Tea",
        price: 23000,
      },
      {
        name: "Ginger Tea",
        price: 23000,
      },
      {
        name: "Jasmine Tea",
        price: 23000,
      },
      {
        name: "Guava Tea",
        price: 23000,
      },
    ],
  },
  {
    name: "Milk Tea",
    color: "#c2dbe9",
    icon: faGlassWater,
    item: [
      {
        name: "Traditional",
        price: 20000,
        discount: 20,
      },
      {
        name: "Egg-cream",
        price: 20000,
      },
      {
        name: "Cheese-cream",
        price: 20000,
      },
      {
        name: "Chocolate",
        price: 20000,
      },
      {
        name: "Mint",
        price: 20000,
      },
      {
        name: "Apple",
        price: 20000,
      },
      {
        name: "Caramel",
        price: 20000,
      },
      {
        name: "Cosy Special",
        price: 20000,
      },
    ],
  },
  {
    name: "Alcohol",
    color: "#c9caee",
    icon: faCocktail,
    item: [
      {
        name: "Beer",
        price: 30000,
      },
      {
        name: "Mojito",
        price: 30000,
        discount: 20,
      },
      {
        name: "Soju",
        price: 30000,
      },
      {
        name: "Rum",
        price: 30000,
      },
      {
        name: "Gin",
        price: 30000,
      },
      {
        name: "Cocktail",
        price: 30000,
      },
    ],
  },
  {
    name: "Breakfast",
    color: "#fac2d9",
    icon: faBurger,
    item: [
      {
        name: "Hotdog",
        price: 24000,
      },
      {
        name: "Beef steak",
        price: 24000,
      },
      {
        name: "Bánh mì",
        price: 24000,
      },
      {
        name: "Hamburger",
        price: 24000,
      },
      {
        name: "Bún bò",
        price: 24000,
      },
      {
        name: "Phở",
        price: 24000,
      },
      {
        name: "Pasta",
        price: 24000,
      },
    ],
  },
  {
    name: "Bakery",
    color: "#e6dade",
    icon: faCheese,
    item: [
      {
        name: "Croissant",
        price: 16000,
      },
      {
        name: "Tiramisu",
        price: 16000,
      },
      {
        name: "Cupcake",
        price: 16000,
      },
      {
        name: "Mousse",
        price: 16000,
      },
      {
        name: "Tart",
        price: 16000,
      },
    ],
  },
  {
    name: "Snack",
    color: "#f0c8cf",
    icon: faPizzaSlice,
    item: [
      {
        name: "Tokbokki",
        price: 10000,
      },
      {
        name: "Kimbap",
        price: 10000,
      },
      {
        name: "Phô mai que",
        price: 10000,
      },
      {
        name: "French Fries",
        price: 10000,
      },
    ],
  },
];

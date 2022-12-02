import { faBurger, faMugSaucer, faMugHot, faCocktail, faGlassWater, faCheese, faPizzaSlice } from "@fortawesome/free-solid-svg-icons";

export const categoryData = [
  {
    name: "",
    color: "",
    icon: "",
    item: [],
  },
  {
    name: "Cà phê",
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
      },
      {
        name: "Bạc xỉu",
        price: 12000,
      },
      {
        name: "Cacao",
        price: 17000,
      },
      {
        name: "Capuchino",
        price: 20000,
      },
      {
        name: "Americano",
        price: 15000,
      },
      {
        name: "Latte",
        price: 18000,
      },
      {
        name: "Espresso",
        price: 20000,
      },
    ],
  },
  {
    name: "Trà",
    color: "#e4cdee",
    icon: faMugHot,
    item: [
      {
        name: "Trà dâu",
        price: 23000,
      },
      {
        name: "Trà chanh",
        price: 23000,
      },
      {
        name: "Trà đào",
        price: 23000,
      },
      {
        name: "Trà atiso",
        price: 23000,
      },
      {
        name: "Trà gừng",
        price: 23000,
      },
      {
        name: "Trà nhài",
        price: 23000,
      },
      {
        name: "Trà lựu",
        price: 23000,
      },
    ],
  },
  {
    name: "Trà sữa",
    color: "#c2dbe9",
    icon: faGlassWater,
    item: [
      {
        name: "TS thường",
        price: 20000,
        discount: "20%"
      },
      {
        name: "TS dâu",
        price: 20000,
        is_best_seller: true,
      },
      {
        name: "TS socola",
        price: 20000,
      },
      {
        name: "TS nho",
        price: 20000,
      },
      {
        name: "TS bạc hà",
        price: 20000,
      },
      {
        name: "TS táo",
        price: 20000,
      },
      {
        name: "TS caramel",
        price: 20000,
      },
      {
        name: "TS đặc biệt",
        price: 20000,
      },
    ],
  },
  {
    name: "Đồ uống cồn",
    color: "#c9caee",
    icon: faCocktail,
    item: [
      {
        name: "Bia úp ngược",
        price: 30000,
      },
      {
        name: "Mojito",
        price: 30000,
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
    name: "Điểm tâm",
    color: "#fac2d9",
    icon: faBurger,
    item: [
      {
        name: "Trứng chảo",
        price: 24000,
      },
      {
        name: "Bò né",
        price: 24000,
        is_best_seller: true
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
        name: "Mì trộn",
        price: 24000,
      },
    ],
  },
  {
    name: "Bánh",
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
    name: "Ăn vặt",
    color: "#f0c8cf",
    icon: faPizzaSlice,
    item: [
      {
        name: "Bánh chén",
        price: 10000,
      },
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
        name: "Bánh tráng",
        price: 10000,
      },
    ],
  },
];

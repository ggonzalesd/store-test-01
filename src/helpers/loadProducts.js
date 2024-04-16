function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const loadProducts = async () => {
  await timeout(1000);

  if (Math.random() < 0.25) return null;

  return [
    {
      id: "polo-a-2",
      nombre: "Polo grande rojo",
      tipo: "polo",
      marca: "pioner",
      precio: 23.23,
      color: "#ff00ff",
    },
    {
      id: "polo-a-3",
      nombre: "Polo grande rojo",
      tipo: "polo",
      marca: "pioner",
      precio: 23.23,
      color: "#ff00ff",
    },
    {
      id: "polo-a-1",
      nombre: "Polo grande rojo",
      tipo: "polo",
      marca: "pioner",
      precio: 23.23,
      color: "#ff00ff",
    },
  ];
};

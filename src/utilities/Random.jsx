const Random = () => {
  const asset = [
    { image: "/assets/angular.png" },
    { image: "/assets/bootstrap.png" },
    { image: "/assets/html.png" },
    { image: "/assets/jquery.png" },
    { image: "/assets/svelte.png" },
    { image: "/assets/react.png" },
    { image: "/assets/redux.png" },
    { image: "/assets/node js.png" },
  ];
  return [...asset, ...asset]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({ ...card, id: Math.random() }));
};

export default Random;

const App = ({ image, selected, onClick }) => {
  return (
    <div className="card">
      <div className={selected && "selected"}>
        <img alt="" src={image} className="card-face" />
        <img
          alt=""
          className="card-back"
          src={"/assets/js.png"}
          onClick={onClick}
        />
      </div>
    </div>
  );
};

export default App;

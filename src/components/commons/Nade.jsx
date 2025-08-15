const Nade = ({ pos, type, id }) => {
  const [x, y] = pos;
  return (
    <button
      style={{
        borderRadius: "30px",
        position: "absolute",
        right: `${x}%`,
        top: `${y}%`,
        opacity: "0.3"
      }}
    //   onClick={() => setSelectedNade(id)}
    >
      {type}
    </button>
  );
};

export default Nade;

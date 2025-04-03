export default function MainButton({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      className="text-center py-2 px-6 rounded-xl border cursor-pointer"
      style={{
        color: "rgb(255, 255, 255)",
        borderColor: "rgb(100, 65, 165)",
        backgroundImage:
          "linear-gradient(rgb(149, 117, 215) 0%, rgb(124, 87, 198) 100%)",
        boxShadow:
          "rgba(255, 255, 255, 0.25) 0px 2px 0px 0px inset, rgba(124, 87, 198, 0.5) 0px 2px 4px 0px",
      }}
    >
      {children}
    </button>
  );
}

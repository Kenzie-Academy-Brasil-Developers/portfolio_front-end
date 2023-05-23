export function StackCard({ imgSrc, technology }) {
  return (
    <div className="p-5 border-white/30 border-2 rounded-2xl flex gap-3 items-center">
      <img style={{ height: "20px" }} src={imgSrc} alt={technology} />
      <span className="text-lg font-bold">{technology}</span>
    </div>
  );
}

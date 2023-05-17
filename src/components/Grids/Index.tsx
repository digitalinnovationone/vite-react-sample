import FeedCard from "../FeedCard";

function FeedGrid() {
  return (
    <div className="
      grid 
      grid-cols-3 
      gap-4"
    >
      <FeedCard title="Foto Casa" />
      <FeedCard title="Foto Casa" />
      <FeedCard title="Foto Casa" />

      <FeedCard title="Foto Casa" />
      <FeedCard title="Foto Casa" />
      <FeedCard title="Foto Casa" />

      <FeedCard title="Foto Casa" />
      <FeedCard title="Foto Casa" />
      <FeedCard title="Foto Casa" />
    </div>

  );
}

export default FeedGrid;
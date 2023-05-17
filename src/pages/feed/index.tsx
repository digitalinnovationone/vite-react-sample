import Avatar from "../../components/Avatar"
import FeedGrid from "../../components/Grids/Index"

function FeedPage() {
  return (
    <>
      <div>
        <Avatar
          realname="Felipe Aguiar" nickname="@Felipao__DIO🚀" />
      </div>
      <div className="mt-10">
        <FeedGrid />
      </div>
    </>
  );
}

export default FeedPage;
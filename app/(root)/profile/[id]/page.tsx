import Header from "@/components/Header";
import VideoCard from "@/components/VideoCard";
import { dummyCards } from "@/constants";

const page = async ({ params }: ParamsWithSearch) => {
  const { id } = await params;
  return (
    <div className="wrapper page">
      <Header
        subHeader=" useremail@gmail.com"
        title="shan"
        userImg="/assets/images/dummy.png"
      />
       <section className="video-grid">
        {dummyCards.map((card) =>(
        <VideoCard key={card.id} {...card} />
      ))}
      </section>
    </div>
  );
};

export default page;

import Buttonlist from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className="p-4 h-full overflow-x-auto scrollbar-hide">
      <Buttonlist />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;

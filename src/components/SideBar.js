import { useSelector } from "react-redux";

const SideBar = () => {
  const sideBarContents = ["Home", "Shorts", "Subscriptions", "YouTube Music"];
  const sideBarContentsForYou = [
    "Your Channel",
    "History",
    "Playlists",
    "Your Videos",
    "Watch Later",
    "Liked Videos",
    "Downloads",
    "Your Clips",
  ];
  const sideBarContents3 = [
    "Trending",
    "Shopping",
    "Music",
    "Movies & TV",
    "Live",
    "Gaming",
    "News",
    "Sports",
  ];
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return (
    isMenuOpen && (
      <div className="shadow-lg shrink-0 w-96">
        <div>
          <ul className="text-2xl space-y-3 border-b border-gray-300 p-10">
            {sideBarContents.map((content, index) => (
              <li
                key={index}
                className="cursor-pointer hover:bg-gray-200 rounded-lg h-12 flex items-center justify-center hover:font-bold"
              >
                {content}
              </li>
            ))}
          </ul>
        </div>
        <p className="font-bold text-3xl p-4 ml-3">You ↠</p>
        <ul className="text-2xl space-y-3 border-b border-gray-300 p-10">
          {sideBarContentsForYou.map((content, index) => (
            <li
              key={index}
              className="cursor-pointer hover:bg-gray-200 rounded-lg h-12 flex items-center justify-center hover:font-bold p-3"
            >
              {content}
            </li>
          ))}
        </ul>
        <p className="font-bold text-3xl p-4">Explore</p>
        <ul className="p-10 text-2xl space-y-3">
          {sideBarContents3.map((content, index) => (
            <li
              key={index}
              className="cursor-pointer hover:bg-gray-200 rounded-lg h-12 flex items-center justify-center hover:font-bold p-3"
            >
              {content}
            </li>
          ))}
        </ul>
      </div>
    )
  );
};

export default SideBar;

const ButtonList = () => {
  const buttons = [
    "All",
    "Music",
    "Javascript",
    "Telugu Cinema",
    "Mythology",
    "Mixes",
    "Arrays",
    "Skills",
    "Podcasts",
    "Live",
    "AI",
    "Pop Music",
    "Tourism",
    "New to You",
    "Watched",
    "Entertainment",
    "Cricket",
    "Football",
    "Astrology",
    "News",
  ];

  return (
    <div className="flex">
      <div className="inline-flex space-x-4 p-4  overflow-x-auto scrollbar-hide">
        {buttons.map((content, index) => (
          <button
            key={index}
            className="text-xl font-bold text-center py-2 px-6 bg-gray-200 rounded-xl whitespace-nowrap"
          >
            {content}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ButtonList;

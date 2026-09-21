export const Block_selection = ({
  tabs = []
}) => {
  return (
    <div className="block--selection">
      {tabs.map((tab, index) => (
        <a
          className={index === 0 ? "is_active" : ""}
        >
          <span>{tab.label}</span>

        </a>
      ))}
    </div>
  );
};

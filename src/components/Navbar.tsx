type Tab = "home" | "files" | "shared";

type Props = {
  activeTab: Tab;
  onChange: (tab: Tab) => void;
};

const Navbar = ({ activeTab, onChange }: Props) => {
  const tabs: { key: Tab; label: string }[] = [
    { key: "home", label: "Home" },
    { key: "files", label: "My Files" },
    { key: "shared", label: "Shared" },
  ];

  return (
    <nav className="flex items-center gap-6 border-b px-6 py-3 bg-white">
      <h1 className="font-bold text-lg">Drive</h1>

      {tabs.map((tab) => (
        <button
          key={tab.key}
          onClick={() => onChange(tab.key)}
          className={`pb-1 text-sm font-medium ${
            activeTab === tab.key
              ? "border-b-2 border-blue-600 text-blue-600"
              : "text-gray-600 hover:text-blue-600"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </nav>
  );
};

export default Navbar;

export default function DarkModeToggle({ dark, setDark }) {
  return (
    <button
      onClick={() => setDark(!dark)}
      className={`
        px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 shadow-md
        ${dark
          ? "bg-yellow-400 text-gray-900 hover:bg-yellow-300"
          : "bg-gray-800 text-white hover:bg-gray-700"}
      `}
    >
      {dark ? "Toggle Light Mode" : "Toggle Dark Mode"}
    </button>
  );
}
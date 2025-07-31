export default function ScanBtn({ onClick }) {
  return (
    <button
      onClick={onClick}
      class="relative px-10 py-1.5 font-semibold text-cyan-400 bg-black/80 rounded-sm overflow-hidden group outline-none cursor-pointer"
    >
      <span className="bg-gradient-to-r from-cyan-500 via-cyan-400 to-cyan-500 font-bold inline-block text-transparent bg-clip-text">
        SCAN
      </span>
      <span class="absolute inset-0 block border-b-1 border-r-1 border-cyan-600 transform origin-bottom-right scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
      <span class="absolute inset-0 block border-t-1 border-l-1 border-cyan-600 transform origin-top-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
    </button>
  );
}

// src/components/Loader.tsx
const Loader = () => {
  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
      <img
        src="/logoipsum-370.svg"
        alt="Loading..."
        className="w-20 h-20 animate-spin"
      />
    </div>
  );
};

export default Loader;

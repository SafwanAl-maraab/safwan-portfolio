export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">

      <div className="absolute w-[600px] h-[600px] bg-blue-500 opacity-20 blur-3xl animate-[spin_20s_linear_infinite] top-[-100px] left-[-100px]"></div>

      <div className="absolute w-[500px] h-[500px] bg-purple-500 opacity-20 blur-3xl animate-[spin_25s_linear_infinite_reverse] bottom-[-100px] right-[-100px]"></div>

      <div className="absolute w-[400px] h-[400px] bg-pink-500 opacity-20 blur-3xl animate-pulse top-1/2 left-1/3"></div>

    </div>
  );
}
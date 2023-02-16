export default function Modal({ image, active }) {
  return (
    <div
      className={`absolute flex item-center justify-center z-50 bg-red-500 h-[100vh]`} 
    >
        <h1>close</h1>
        <img className="w-full" src={image} alt="" />
    </div>
  );
}

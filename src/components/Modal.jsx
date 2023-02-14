export default function Modal({ image, active }) {
  return (
    <div
      className={`absolute ${
        active ? "hidden" : "block"
      } w-full flex item-center justify-center z-50 bg-red-500 h-[100vh]`} 
    >
        <h1>close</h1>
        <img src={image} alt="" />
    </div>
  );
}

import { createContext, useState } from "react";

const PaintingContext = createContext();

function Provider({ children }) {
  const [isStarted, setIsStarted] = useState(false);

  const toggleSlideshow = () => {
    setIsStarted(!isStarted);
  };

  const stopSlideShow = () => {
    setIsStarted(false);
  };

  const showStarted = () => {
    setIsStarted(true)
  }

  const valueToShare = {
    isStarted,
    toggleSlideshow,
    stopSlideShow,
    showStarted
  };

  return (
    <PaintingContext.Provider value={valueToShare}>
      {children}
    </PaintingContext.Provider>
  );
}

export { Provider };
export default PaintingContext;

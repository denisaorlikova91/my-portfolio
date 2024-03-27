import { useState, useEffect } from 'react';

// Custom hook for fade-in transition
function useFadeIn(delay = 100, duration = 1000) {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFadeIn(true);
    }, delay);
  }, []);

  return { fadeIn, duration };
}

export default useFadeIn;

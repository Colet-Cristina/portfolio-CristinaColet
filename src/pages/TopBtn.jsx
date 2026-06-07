import React, { useState, useEffect } from "react";

function TopBtn() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          className="top-btn js_top-btn"
          onClick={handleScrollToTop}
          title="Volver arriba"
        >
          <span className="top-btn__arrow">❯❯</span>
        </button>
      )}
    </>
  );
}

export default TopBtn;

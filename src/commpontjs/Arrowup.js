import { useState, useEffect } from "react";

const handleScrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};

const Arrowup = () => {
  const [showIcon, setShowIcon] = useState(false);
  const [top, setTop] = useState(0);

  useEffect(() => {
    const onScroll = e => {
      setTop(e.target.documentElement.scrollTop);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (top > 300) {
      setShowIcon(true);
    } else {
      setShowIcon(false);
    }
  }, [top]);

  return (
    <>
      {showIcon && (
        <div className="arrowup">
          <span onClick={handleScrollToTop}>
            <i class="fa-solid fa-arrow-up-from-bracket"></i>
          </span>
        </div>
      )}
    </>
  );
};

export default Arrowup;

import React, { useEffect, useState } from "react";
import IconUp from '@site/static/img/components/backToTop.svg'
export default function BackToTopButton() {
  // const [visible, setVisible] = useState(false);

  // useEffect(() => {
  //   const onScroll = () => setVisible(window.scrollY > 200);
  //   window.addEventListener("scroll", onScroll);
  //   return () => window.removeEventListener("scroll", onScroll);
  // }, []);

  // if (!visible) return null;

  return (
    <div className="float-btn-container back-to-top">
      <button
        aria-label="回到顶部"
        className="float-btn"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <IconUp width="25" height="25" />
      </button>
    </div>
  );
}

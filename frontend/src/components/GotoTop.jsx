import React, { useEffect, useState } from 'react';

import styles from '../style/Wrapper.module.css';
import Arrow from './svg/Arrow';

function GotoTopArrow() {
  const [isVisible, setIsVisible] = useState(false);

  const goToTop = () => {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  };
  const listenToScroll = () => {
    let heightToHidden = 220;
    const windowScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (windowScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', listenToScroll);
  }, []);
  return (
    <div className={styles.gotoWrapper}>
      {isVisible && (
        <button onClick={goToTop}>
          <Arrow />
        </button>
      )}
    </div>
  );
}

export default GotoTopArrow;

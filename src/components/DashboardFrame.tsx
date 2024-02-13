import { FunctionComponent, useCallback } from "react";
import styles from "./DashboardFrame.module.css";

const DashboardFrame: FunctionComponent = () => {
  const onFrameWithProfileClick = useCallback(() => {
    // Please sync "Dark" to the project
  }, []);

  return (
    <header className={styles.dashboardFrame}>
      <div className={styles.bessieContainer}>
        <div className={styles.searchFrame} />
        <div className={styles.bessieContainerChild} />
        <div className={styles.dashboardTitle}>
          <div className={styles.dashboard}>Dashboard</div>
          <div className={styles.advancedQuarry}>Advanced Quarry</div>
          <div className={styles.events}>Events</div>
          <div className={styles.innerRectangle} />
          <img
            className={styles.featherIconSearch}
            loading="eager"
            alt=""
            src="/feathericon--search.svg"
          />
        </div>
      </div>
      <div className={styles.frameWithSearch}>
        <b className={styles.bessieCooper}>Bessie Cooper</b>
        <div className={styles.moonIcon}>
          <img
            className={styles.moonIconChild}
            loading="eager"
            alt=""
            src="/rectangle-6@2x.png"
          />
          <img
            className={styles.featherIconChevronDown}
            loading="eager"
            alt=""
            src="/feathericon--chevrondown.svg"
          />
        </div>
        <div
          className={styles.frameWithProfile}
          onClick={onFrameWithProfileClick}
        >
          <img
            className={styles.featherIconMoon}
            loading="eager"
            alt=""
            src="/feathericon--moon.svg"
          />
        </div>
      </div>
    </header>
  );
};

export default DashboardFrame;

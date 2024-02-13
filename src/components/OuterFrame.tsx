import { FunctionComponent } from "react";
import styles from "./OuterFrame.module.css";

const OuterFrame: FunctionComponent = () => {
  return (
    <div className={styles.outerFrame}>
      <img
        className={styles.buttonFrameIcon}
        loading="eager"
        alt=""
        src="/frame-11.svg"
      />
      <div className={styles.iconFrames}>
        <div className={styles.subRectangle}>
          <div className={styles.nestedFrame} />
        </div>
      </div>
      <img
        className={styles.buttonFrameIcon1}
        loading="eager"
        alt=""
        src="/frame-9@2x.png"
      />
      <img
        className={styles.buttonFrameIcon2}
        loading="eager"
        alt=""
        src="/frame-8@2x.png"
      />
      <img
        className={styles.buttonFrameIcon3}
        loading="eager"
        alt=""
        src="/frame-10@2x.png"
      />
      <div className={styles.secondaryRectangle}>
        <div className={styles.headerFrame} />
      </div>
      <div className={styles.commandFrame}>
        <div className={styles.piechartFrame}>
          <div className={styles.featherIcons}>
            <img
              className={styles.featherIconCommand}
              loading="eager"
              alt=""
              src="/feathericon--command.svg"
            />
          </div>
          <div className={styles.featherIcons1}>
            <img
              className={styles.featherIconPieChart}
              loading="eager"
              alt=""
              src="/feathericon--piechart.svg"
            />
          </div>
          <div className={styles.featherIcons2}>
            <img
              className={styles.featherIconClock}
              loading="eager"
              alt=""
              src="/feathericon--clock.svg"
            />
          </div>
          <div className={styles.featherIcons3}>
            <img
              className={styles.featherIconGlobe}
              loading="eager"
              alt=""
              src="/feathericon--globe.svg"
            />
          </div>
          <div className={styles.featherIcons4}>
            <img
              className={styles.featherIconLoader}
              loading="eager"
              alt=""
              src="/feathericon--loader.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OuterFrame;

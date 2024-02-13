import { FunctionComponent } from "react";
import { Checkbox } from "@chakra-ui/react";
import OuterFrame from "../components/OuterFrame";
import DashboardFrame from "../components/DashboardFrame";
import styles from "./MainFrame.module.css";

const MainFrame: FunctionComponent = () => {
  return (
    <div className={styles.mainFrame}>
      <main className={styles.light}>
        <section className={styles.frameGroup} />
        <div className={styles.outerFrameParent}>
          <OuterFrame />
          <div className={styles.dashboardAdvancedQuarryEven}>
            <div className={styles.textFrame}>
              <div className={styles.innerRectangle} />
            </div>
            <div className={styles.bessieCooperNameFrame}>
              <div className={styles.chevronDownFrame}>
                <div className={styles.moonIconFrame}>
                  <Checkbox
                    className={styles.featherIconMessageSquare}
                    colorScheme="teal"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <DashboardFrame />
        <div className={styles.frameParent}>
          <div className={styles.dashboardParent}>
            <b className={styles.dashboard}>DASHBOARD</b>
            <img
              className={styles.featherIconChevronRight}
              alt=""
              src="/feathericon--chevronright.svg"
            />
            <div className={styles.bitforexcom}>BITFOREX.COM</div>
          </div>
          <div className={styles.frameContainer}>
            <img className={styles.frameChild} alt="" src="/frame-17@2x.png" />
            <b className={styles.wubindesign}>wubin.design</b>
            <div className={styles.frameWrapper}>
              <img className={styles.frameItem} alt="" src="/frame-2@2x.png" />
            </div>
          </div>
          <div className={styles.groupDiv}>
            <div className={styles.lineParent}>
              <div className={styles.frameInner} />
              <div className={styles.provisionsMonth}>Provisions Month</div>
              <div className={styles.march2020Parent}>
                <div className={styles.march2020}>March 2020</div>
                <img
                  className={styles.featherIconCalendar}
                  alt=""
                  src="/feathericon--calendar.svg"
                />
              </div>
              <div className={styles.featherIconMoreHorizontalWrapper}>
                <img
                  className={styles.featherIconMoreHorizontal}
                  alt=""
                  src="/feathericon--morehorizontal.svg"
                />
              </div>
            </div>
            <div className={styles.totalVisitsParent}>
              <b className={styles.totalVisits}>Total visits</b>
              <img
                className={styles.featherIconAlertCircle}
                alt=""
                src="/feathericon--alertcircle.svg"
              />
            </div>
            <div className={styles.shapeParent}>
              <img className={styles.shapeIcon} alt="" src="/shape.svg" />
              <div className={styles.mParent}>
                <div className={styles.m}>260M</div>
                <div className={styles.m1}>220M</div>
                <div className={styles.m2}>180M</div>
                <div className={styles.m3}>140M</div>
              </div>
              <div className={styles.lineGroup}>
                <div className={styles.lineDiv} />
                <div className={styles.frameChild1} />
                <div className={styles.frameChild2} />
                <div className={styles.frameChild3} />
              </div>
              <img className={styles.groupIcon} alt="" src="/group-3.svg" />
              <div className={styles.parent}>
                <div className={styles.div}>1</div>
                <div className={styles.div1}>5</div>
                <div className={styles.div2}>10</div>
                <div className={styles.div3}>15</div>
                <div className={styles.div4}>20</div>
                <div className={styles.div5}>25</div>
                <div className={styles.div6}>30</div>
              </div>
              <div className={styles.lineContainer}>
                <div className={styles.frameChild4} />
                <div className={styles.tooltip}>
                  <div className={styles.wrapperShape}>
                    <img
                      className={styles.shapeIcon1}
                      alt=""
                      src="/shape-1.svg"
                    />
                  </div>
                  <div className={styles.labelParent}>
                    <div className={styles.label}>This Month</div>
                    <b className={styles.label1}>220,342,123</b>
                    <div className={styles.label2}>May</div>
                  </div>
                </div>
                <div className={styles.selector} />
              </div>
            </div>
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.perpetualParent}>
              <b className={styles.perpetual}>Perpetual</b>
              <img
                className={styles.featherIconAlertCircle1}
                alt=""
                src="/feathericon--alertcircle.svg"
              />
            </div>
            <div className={styles.activePercentageParent}>
              <b className={styles.activePercentage}>Active Percentage</b>
              <img
                className={styles.featherIconAlertCircle2}
                alt=""
                src="/feathericon--alertcircle.svg"
              />
            </div>
            <img className={styles.frameIcon} alt="" src="/frame-1350@2x.png" />
            <div className={styles.frameParent1}>
              <div className={styles.rectangleWrapper}>
                <div className={styles.rectangleDiv} />
              </div>
              <div className={styles.labelGroup}>
                <div className={styles.label3}>Google.com .Inc</div>
                <div className={styles.label4}>3,124,213 users</div>
              </div>
            </div>
            <div className={styles.frameParent2}>
              <div className={styles.frameParent3}>
                <div className={styles.rectangleContainer}>
                  <div className={styles.frameChild5} />
                </div>
                <div className={styles.labelContainer}>
                  <div className={styles.label5}>Online</div>
                  <div className={styles.label6}>179 users</div>
                </div>
              </div>
              <div className={styles.frameParent4}>
                <div className={styles.rectangleFrame}>
                  <div className={styles.frameChild6} />
                </div>
                <div className={styles.labelParent1}>
                  <div className={styles.label7}>Offline</div>
                  <div className={styles.label8}>394 users</div>
                </div>
              </div>
            </div>
            <div className={styles.labelParent2}>
              <b className={styles.label9}>594</b>
              <div className={styles.label10}>Total</div>
            </div>
            <div className={styles.frameParent5}>
              <div className={styles.rectangleWrapper1}>
                <div className={styles.frameChild7} />
              </div>
              <div className={styles.labelParent3}>
                <div className={styles.label11}>Recommended flow</div>
                <div className={styles.label12}>1,523,151 users</div>
              </div>
            </div>
            <div className={styles.frameParent6}>
              <div className={styles.rectangleWrapper2}>
                <div className={styles.frameChild8} />
              </div>
              <div className={styles.labelParent4}>
                <div className={styles.label13}>Other</div>
                <div className={styles.label14}>948,213 users</div>
              </div>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild9} />
              <div className={styles.frameChild10} />
            </div>
          </div>
        </div>
        <div className={styles.superiorityParent}>
          <b className={styles.superiority}>Superiority</b>
          <img
            className={styles.featherIconAlertCircle3}
            alt=""
            src="/feathericon--alertcircle.svg"
          />
        </div>
        <div className={styles.myIncomeParent}>
          <b className={styles.myIncome}>My Income</b>
          <img
            className={styles.featherIconAlertCircle4}
            alt=""
            src="/feathericon--alertcircle.svg"
          />
        </div>
        <img className={styles.lightChild} alt="" src="/frame-1334@2x.png" />
        <div className={styles.featherIconLinkParent}>
          <img
            className={styles.featherIconLink}
            alt=""
            src="/feathericon--link.svg"
          />
          <div className={styles.socialTradingPlatform}>
            Social Trading Platform
          </div>
        </div>
        <div className={styles.frameParent7}>
          <div className={styles.frameParent8}>
            <img className={styles.frameChild11} alt="" src="/frame-1343.svg" />
            <div className={styles.stockTradingParent}>
              <div className={styles.stockTrading}>Stock trading</div>
              <div className={styles.google}>Google</div>
            </div>
          </div>
          <img className={styles.lineIcon} alt="" />
          <div className={styles.frameParent9}>
            <img
              className={styles.frameChild12}
              alt=""
              src="/frame-1344@2x.png"
            />
            <div className={styles.stockTradingGroup}>
              <div className={styles.stockTrading1}>Stock trading</div>
              <div className={styles.foursquare}>Foursquare</div>
            </div>
          </div>
          <img className={styles.frameChild13} alt="" />
          <div className={styles.frameParent10}>
            <img className={styles.frameChild14} alt="" src="/frame-1342.svg" />
            <div className={styles.stockTradingContainer}>
              <div className={styles.stockTrading2}>Stock trading</div>
              <div className={styles.kickstarter}>Kickstarter</div>
            </div>
          </div>
          <img className={styles.frameChild15} alt="" />
          <div className={styles.frameParent11}>
            <img className={styles.frameChild16} alt="" src="/frame-1345.svg" />
            <div className={styles.stockTradingParent1}>
              <div className={styles.stockTrading3}>Stock trading</div>
              <div className={styles.google1}>Google</div>
            </div>
          </div>
        </div>
        <div className={styles.chart02}>
          <img className={styles.unionIcon} alt="" src="/union.svg" />
          <div className={styles.graphPie}>
            <img className={styles.graphPieChild} alt="" src="/group-31.svg" />
            <b className={styles.label15}>46%</b>
          </div>
          <div className={styles.label16}>+25%</div>
          <div className={styles.label17}>Legend</div>
        </div>
        <img className={styles.icon} alt="" src="/111111-1@2x.png" />
      </main>
    </div>
  );
};

export default MainFrame;

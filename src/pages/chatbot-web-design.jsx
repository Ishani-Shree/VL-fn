import styles from "./chatbot-web-design.module.css";

const ChatbotWebDesign = () => {
  return (
    <div className={styles.chatbotWebDesign}>
      <img
        className={styles.chatbotWebDesignChild}
        alt=""
        src="/frame-19@2x.png"
      />
      <div className={styles.virtualLawyerParent}>
        <b className={styles.virtualLawyer}>Virtual Lawyer</b>
        <img
          className={styles.aiTechnologySparkLightbulbIcon}
          alt=""
          src="/aitechnologysparklightbulbideabrightlightingartificialintelligenceai.svg"
        />
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <b className={styles.yourHistory}>Your History</b>
      </div>
      <div className={styles.guidelineParent}>
        <b className={styles.guideline}>{`Guideline `}</b>
        <b className={styles.faq}>FAQ</b>
        <b className={styles.contactUs}>Contact Us</b>
        <b className={styles.discord}>Discord</b>
        <b className={styles.twitter}>Twitter</b>
      </div>
      <div className={styles.askMeAnythingParent}>
        <b className={styles.askMeAnything}>Ask Me Anything...</b>
        <img className={styles.imgicons81} alt="" src="/imgicons8-1@2x.png" />
        <img className={styles.returnIcon} alt="" src="/return.svg" />
      </div>
      <img className={styles.chatbotWebDesignItem} alt="" src="/frame-7.svg" />
      <div className={styles.rectangleGroup}>
        <div className={styles.frameItem} />
        <img className={styles.imgicons82} alt="" src="/imgicons8-2@2x.png" />
        <b className={styles.hello}>{`Hello! `}</b>
      </div>
      <div className={styles.rectangleGroup}>
        <div className={styles.frameItem} />
        <img className={styles.imgicons82} alt="" src="/imgicons8-2@2x.png" />
        <b className={styles.hello}>{`Hello! `}</b>
<div>
        <img className={styles.imgicons82} alt="" src="/imgicons8-2@2x.png" />
        <img className={styles.imgicons82} alt="" src="/imgicons8-2@2x.png" />
</div>
      </div>
      <div className={styles.rectangleContainer}>
        <div className={styles.frameInner} />
        <b className={styles.userPrompt}>User Prompt</b>
      </div>
      <img
        className={styles.chatbotWebDesignInner}
        alt=""
        src="/frame-10.svg"
      />
    </div>
  );
};

export default ChatbotWebDesign;

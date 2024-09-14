import styles from "./chatbot-web-design.module.css";
import img from "../images/Frame-21.png"
const handleVoiceInput = () => {
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.lang = 'en-US';
  recognition.start();

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    document.querySelector(`.${styles.askMeAnythingInput}`).value = transcript;
  };

  recognition.onerror = (event) => {
    console.error('Error occurred in speech recognition:', event.error);
  };
};
const handleShareOption = async () => {
  if (navigator.share) {
    try {
      await navigator.share({
        title: 'Ask Me Anything',
        text: 'Check out this cool section!',
        url: window.location.href
      });
    } catch (error) {
      console.error('Error sharing:', error);
    }
  } else {
    alert('Web Share API not supported in your browser.');
  }
};

const ChatbotWebDesign = () => {
  return (
    <div className={styles.chatbotWebDesign}>
      <img
        className={styles.chatbotWebDesignChild}
        alt=""
        src={img}
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
      <div className={styles.askMeAnythingParent}>
  <input 
    className={styles.askMeAnythingInput} 
    type="text" 
    placeholder="Ask Me Anything..." 
  />
  <img 
    className={styles.imgicons81} 
    alt="voice-input" 
    src="/imgicons8-1@2x.png" 
    onClick={handleVoiceInput} 
  />
  <img 
    className={styles.returnIcon} 
    alt="share-option" 
    src="/return.svg" 
    onClick={handleShareOption} 
  />
</div>

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
      {/* <img
        className={styles.chatbotWebDesignInner}
        alt=""
        src="/frame-10.svg"
      /> */}
      <div className={styles.rectangleGroup2}>
        <div className={styles.frameItem} />
        <img className={styles.imgicons82} alt="" src="/imgicons8-2@2x.png" />
        <b className={styles.hello}>{`Hello! `}</b>
        
      </div>
    </div>
  );
};

export default ChatbotWebDesign;

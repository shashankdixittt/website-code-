import Navbar from "../../components/Navbar/Navbar";
import styles from "./Home.module.css";
import { Play } from "lucide-react";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
// import {Link} from 'react-router-dom'
const HomePage = () => {
  const handleExternalLink = () => {
    window.open(
      "https://api.whatsapp.com/send?phone=916360214369",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const faqs = [
    {
      question: "What is Magnum AI and how does it work?",
      answer:
        "Magnum is your AI-powered health assistant available 24/7 on WhatsApp. It uses advanced AI technology to provide reliable health information and guidance based on your queries and medical reports.",
    },
    {
      question: "How accurate is Magnum AI?",
      answer:
        "Magnum AI maintains a high level of accuracy by utilizing advanced machine learning algorithms and being regularly updated with the latest medical knowledge. However, it's important to note that it's designed to provide general guidance and should not replace professional medical advice.",
    },
    {
      question: "Is my medical data secure?",
      answer:
        "Yes, your medical data is fully encrypted and secured. We follow strict privacy protocols and comply with healthcare data protection standards to ensure your personal information remains confidential.",
    },
  ];

  const handleQuestionClick = (index) => {
    if (selectedQuestion === index) {
      setSelectedQuestion(null);
    } else {
      setSelectedQuestion(index);
    }
  };

  return (
    <div>
      <Navbar />
      <section className={styles.heroContainer}>
        {/* Main Header */}
        <div className={styles.headerWrapper}>
          <h1 className={styles.mainHeader}>
            Introducing MagnumKare&apos;s
            <span className={styles.highlight}>Healthcare Assistant</span>{" "}
            :MagnumAI
          </h1>
          <p className={styles.subHeader}>
            Your personal healthcare assitant 24X7 with you for you
          </p>
        </div>

        {/* Video Frame */}
        <div className={styles.videoContainer}>
          <iframe
            className={styles.videoFramed}
            src="https://www.youtube.com/embed/c1zOFQpmCXc?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&fs=0&disablekb=1&iv_load_policy=3"
            title="Success Story"
            frameBorder="0"
            style={{ border: "none" }}
            allow="autoplay; encrypted-media"
          ></iframe>

          {/* Video Statistics */}
          <div className={styles.statsContainer}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>94.8%</span>
              <span className={styles.statLabel}>Accuracy</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>1000+</span>
              <span className={styles.statLabel}>Users</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>15+</span>
              <span className={styles.statLabel}>Doctors</span>
            </div>
          </div>
        </div>
        <div className={styles.learnMoreContainer}>
          <p>
            Your personal AI health assistant. Now say goodbye to Google scares!
          </p>
          <p>Available for FREE, 24x7 on WhatsApp</p>
          <div className={styles.learnMoreButton}>Try it Now</div>
        </div>
      </section>

      <section className={styles.section2}>
        {/* Main Header */}
        <div className={styles.headerWrapper}>
          <h1 className={styles.sectionHeader}>
            Why Choose MagnumAI over Google
          </h1>
          <p className={styles.subSectionHeader}>
            Get Personalized responses no google scares as we also states this
            that &quot;Googling Symptoms only tells you which disease has the
            best SEO&quot;
          </p>
        </div>

        {/* Video Frame */}
        <div className={styles.videoContainer}>
          <div className={styles.videoFrame}>
            <div className={styles.videoPlaceholder}>
              <button className={styles.playButton}>
                <Play size={32} />
              </button>
              <p className={styles.videoText}>Watch the Success Story</p>
            </div>
          </div>
        </div>
        <div className={styles.learnMoreContainer}>
          <div className={styles.stepContainer}>
            <div className={styles.step}>
              <div className={styles.step_number}>1</div>
              <div className={styles.step_content}>
                <h3>Send a Message</h3>
                <p>
                  Start by sending your health-related question to Magnum on
                  WhatsApp. Its that simple.
                </p>
              </div>
            </div>
            <div className={styles.step}>
              <div className={styles.step_number}>2</div>
              <div className={styles.step_content}>
                <h3>AI Analysis</h3>
                <p>
                  Magnum processes your question using its advanced AI model.
                </p>
              </div>
            </div>
            <div className={styles.step}>
              <div className={styles.step_number}>3</div>
              <div className={styles.step_content}>
                <h3>Get Instant Response</h3>
                <p>
                  Receive clear, accurate, and personalized health guidance
                  within moments.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.learnMoreButton} onClick={handleExternalLink}>
            Talk to Magnum
          </div>
        </div>
      </section>

      <section className={styles.section3}>
        {/* Main Header */}
        <div className={styles.headerWrapper}>
          <h1 className={styles.sectionHeader}>
            How Magnum makes Healthcare Accessible
          </h1>
          <p className={styles.subSectionHeader}>
            Explore the various ways MagnumAI can assist you with your health
            needs.
          </p>
        </div>

        {/* Video Frame */}
        {/* <div className={styles.videoContainer}>
          <div className={styles.videoFrame}>
            <div className={styles.videoPlaceholder}>
              <button className={styles.playButton}>
                <Play size={32} />
              </button>
              <p className={styles.videoText}>Watch the Success Story</p>
            </div>
          </div>
        </div> */}

        <div className={styles.gridContainer}>
          <div className={styles.card}>
            <div className={styles.imageContainer}>
              <img
                src="./Chat_1.svg"
                alt="First card"
                className={styles.image}
              />
            </div>
            <div className={styles.content}>
              <h3 className={styles.cardTitle}>Lab Report Analysis</h3>
              <p className={styles.cardDescription}>
                Send your lab reports through WhatsApp and get instant, detailed
                analysis with actionable insights. Magnum helps you understand
                your reports in simple terms.
              </p>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.imageContainer}>
              <img
                src="./Chat_2.svg"
                alt="Second card"
                className={styles.image}
              />
            </div>
            <div className={styles.content}>
              <h3 className={styles.cardTitle}>Symptom Assessment</h3>
              <p className={styles.cardDescription}>
                Describe your symptoms to Magnum and receive a comprehensive
                preliminary assessment, helping you understand when to seek
                immediate medical attention.
              </p>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.imageContainer}>
              <img src="Chat_3.svg" alt="Third card" className={styles.image} />
            </div>
            <div className={styles.content}>
              <h3 className={styles.cardTitle}>Medication Information</h3>
              <p className={styles.cardDescription}>
                Get detailed informaiton about your medications, including
                potential side effects, interactions, and proper usage
                guidlines.
              </p>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.imageContainer}>
              <img
                src="Chat_4.svg"
                alt="Fourth card"
                className={styles.image}
              />
            </div>
            <div className={styles.content}>
              <h3 className={styles.cardTitle}>Health Monitoring</h3>
              <p className={styles.cardDescription}>
                Regular check-ins and monitoring of your health parameters.
                Magnum helps you track your progress and maintain a healthy
                lifestyle.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.learnMoreContainer}>
          <div className={styles.useMagnum}>
            {/* <div className={styles.startButton}>Start using Magnum</div> */}
            <div
              className={styles.learnMoreButton}
              onClick={handleExternalLink}
            >
              Talk to MagnumAI
            </div>
          </div>
        </div>
      </section>

      <section className={styles.faqsContainer}>
        {/* Main Header */}
        <div className={styles.headerWrapper}>
          <h1 className={styles.sectionHeader}>Frequently Asked Questions</h1>
          <p className={styles.subSectionHeader}>
            Everything you need to know about Magnum AI.
          </p>
        </div>
        <div className={styles.faqs}>
          {faqs.map((faq, index) => (
            <div key={index}>
              <div
                className={styles.question}
                onClick={() => handleQuestionClick(index)}
              >
                <div className={styles.header}>
                  <h2 className={styles.title}>{faq.question}</h2>
                  {selectedQuestion === index ? <ChevronUp /> : <ChevronDown />}
                </div>
              </div>

              <div
                className={`${styles.answer} ${
                  selectedQuestion === index ? styles.show : ""
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.noticeSection}>
        {/* Main Header */}
        <div className={styles.noticeWrapper}>
          <h1 className={styles.noticeHeader}>Important Health Notice</h1>
          <p className={styles.subNoticeHeader}>
            Magnum is a health information platform and is not designed to
            replace medical advice from a licensed healthcare professional.
            Always consult with a healthcare provider for medical decisions.
          </p>
        </div>
        <div className={styles.learnMoreContainer}>
          <div className={styles.learnMoreButton}>Scan QR to use MagnumAI</div>
        </div>
      </section>

      <section className={styles.QRCode}>
        <img src="./QR.png" alt="QR-Code" />
      </section>

      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.logoSection}>
            <div className={styles.logo}></div>
            <p className={styles.tagline}>Made in India for the world</p>
          </div>

          <div className={styles.contentSection}>
            <div className={styles.contactInfo}>
              <h3 className={styles.sectionTitle}>Contact</h3>
              <p className={styles.address}>
                E-city, Bengaluru, Karnataka-560075
              </p>
              <p className={styles.phone}>+(91) 9305872476</p>
              <p className={styles.email}>shashank@magnumkare.com</p>
            </div>

            <div className={styles.linksSection}>
              <h3 className={styles.sectionTitle}>Links</h3>
              <div
                className={styles.learnMoreButton}
                onClick={handleExternalLink}
              >
                Start using MagnumAI
              </div>
            </div>
          </div>
        </div>
        <div className={styles.disclaimerSection}>
          <p className={styles.disclaimer}>
            Disclaimer: Magnum is a health information platform and its
            responses dont constitute medical advise. Always consult with a
            liscenced medical professional near you before making any changes.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;

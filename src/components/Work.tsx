import { useState, useCallback } from "react";
import "./styles/Work.css";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  { title: "Keynote Speaker - IEEE IMED 2026", category: "Speaking Engagement", tools: "Designing Resilient Cloud and Network Infrastructure for Mission-Critical Systems. Jesselton University College, Malaysia. March 6, 2026.", link: "https://imedconference.com/about" },
  { title: "Automated Optical Testing and Predictive Reliability", category: "Publication - JISEM Journal", tools: "Research on automated optical testing and predictive reliability in large-scale fiber networks.", link: "https://zenodo.org/records/18330509" },
  { title: "High-Density Fiber Optic Infrastructure Design", category: "Publication - JOCAAA (Eudoxus Press)", tools: "Cloud-oriented data center fiber infrastructure design for hyperscale environments.", link: "https://www.eudoxuspress.com/index.php/pub/article/view/4589" },
  { title: "LLM-Driven Cyber Threat Intelligence", category: "Publication - IEEE MPCON 2026", tools: "LLM-driven cyber threat intelligence extraction for cloud ecosystems. IEEE Conference Proceedings.", link: "https://zenodo.org/records/18482527" },
  { title: "Architecting Enterprise to Cloud Connectivity", category: "Publication - JICRCR Journal", tools: "Architecting enterprise to cloud connectivity for mission-critical applications.", link: "https://zenodo.org/records/18482527" },
  { title: "Speaker - Data Center Congress North America", category: "Speaking Engagement", tools: "Confirmed speaker at Data Center Congress North America on cloud and fiber network infrastructure.", link: "https://datacentrecongress.com/northamerica/speakers/" },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback((index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating]);

  const goToPrev = useCallback(() => {
    goToSlide(currentIndex === 0 ? projects.length - 1 : currentIndex - 1);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    goToSlide(currentIndex === projects.length - 1 ? 0 : currentIndex + 1);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>Publications <span>and</span> Recognition</h2>
        <div className="carousel-wrapper">
          <button className="carousel-arrow carousel-arrow-left" onClick={goToPrev} aria-label="Previous" data-cursor="disable"><MdArrowBack /></button>
          <button className="carousel-arrow carousel-arrow-right" onClick={goToNext} aria-label="Next" data-cursor="disable"><MdArrowForward /></button>
          <div className="carousel-track-container">
            <div className="carousel-track" style={{ transform: "translateX(-" + currentIndex * 100 + "%)" }}>
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number"><h3>0{index + 1}</h3></div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">{project.category}</p>
                        <div className="carousel-tools">
                          <span className="tools-label">Details</span>
                          <p>{project.tools}</p>
                        </div>
                        <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ color: "white", marginTop: "1rem", display: "inline-block", textDecoration: "underline", fontSize: "0.85rem" }}>View</a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button key={index} className={"carousel-dot" + (index === currentIndex ? " carousel-dot-active" : "")} onClick={() => goToSlide(index)} aria-label={"Go to " + (index + 1)} data-cursor="disable" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;

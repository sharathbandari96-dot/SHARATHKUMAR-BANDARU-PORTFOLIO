import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AWS Connectivity Engineer</h4>
                <h5>Amazon · Cupertino, CA</h5>
              </div>
              <h3>AUG 2025-NOW</h3>
            </div>
            <p>Lead deployment and upgrade of connectivity systems aligned with AWS Core Networking strategy. Support AWS Direct Connect and customer hybrid connectivity across enterprise environments. Configure and validate VPCs, Transit Gateways, routing tables, and Direct Connect Gateway associations. Establish and monitor BGP sessions between on-premises networks and AWS. Automate network validation tasks using Python.</p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Technology Consultant</h4>
                <h5>Infosys · Beaverton, OR</h5>
              </div>
              <h3>FEB 2022-AUG 2025</h3>
            </div>
            <p>Designed high-density fiber and copper infrastructure for enterprise data centers. Led optical component qualification, lab testing, and splicing evaluations to meet TIA/BICSI standards. Improved installation efficiency by 20%. Reduced defect rates by 25% through rigorous QA processes. Optimized SQL queries improving data accuracy by 30%.</p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Network Infrastructure Engineer</h4>
                <h5>Danube Pvt Ltd · Hyderabad, India</h5>
              </div>
              <h3>NOV 2017-JAN 2020</h3>
            </div>
            <p>Delivered fiber routing designs, splice diagrams, and connectivity plans for multi-tenant data centers. Conducted OTDR testing and troubleshooting for regional fiber builds. Achieved 98% compliance with TIA/BICSI standards. Built dashboards using Tableau and Power BI.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;

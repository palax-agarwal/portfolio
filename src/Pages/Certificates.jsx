import React from "react";
import "../styles/Certificates.css";
import cert1 from "../assets/certf1.png";
import cert2 from "../assets/certf2.png";
import cert3 from "../assets/certf3.png";

const certificateData = [
  { id: 1, title: "Intoduction to Generative AI Studio", image: cert1 },
  { id: 2, title: "AI Agents For Beginners", image: cert2 },
  { id: 3, title: "Free Python Course", image: cert3 },
];

export default function Certificates() {
  return (
	<div className="certificates-container">
	  <h2 className="certificates-title">My Certificates</h2>
	  <p className="certificates-subtext">
		Here are some of the certificates I've earned through workshops, online courses, and hands-on trainings.
	  </p>
	  <div className="certificates-grid">
		{certificateData.map((cert) => (
		  <div key={cert.id} className="certificate-card">
			<img src={cert.image} alt={`Certificate: ${cert.title}`} />
			<h4>{cert.title}</h4>
		  </div>
		))}
	  </div>
	</div>
  );
}

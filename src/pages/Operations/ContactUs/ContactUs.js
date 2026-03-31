import { FaBuilding, FaClock, FaEnvelope, FaMapMarkerAlt, FaTicketAlt, FaUserTie } from "react-icons/fa";

function ContactUs() {


  return (
    <div className="fade-in" style={{ maxWidth: 1100, margin: "2rem auto", padding: "0 1rem", fontFamily: "'Inter', sans-serif" }}>
      <div className="card" style={{ padding: "3.5rem 2.5rem", borderRadius: "1.5rem" }}>
        
        {/* Institutional Header */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <h2 style={{
            fontSize: "clamp(2rem, 5vw, 2.8rem)",
            fontWeight: 800,
            color: "#0b3d91",
            margin: "0 0 1rem 0",
            letterSpacing: "-0.02em"
          }}>
            Institutional Contact Directory
          </h2>
          <p style={{ color: "#64748b", fontSize: "1.1rem", fontWeight: 500 }}>
            Digital Monitoring Cell (DMC) • JNTU-GV Vizianagaram
          </p>
          <div style={{ width: "60px", height: "4px", background: "#facc15", margin: "1.5rem auto", borderRadius: "2px" }}></div>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
          gap: "3rem",
          alignItems: "start"
        }}>
          
          {/* Left Column: Official Channels */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            
            {/* Leadership Block */}
            <div style={{
              background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)",
              padding: "2.5rem",
              borderRadius: "1.25rem",
              border: "1px solid #e2e8f0",
              boxShadow: "0 10px 25px rgba(0,0,0,0.03)"
            }}>
              <h3 style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                color: "#0b3d91",
                fontSize: "1.4rem",
                fontWeight: 700,
                marginBottom: "1.5rem"
              }}>
                <FaUserTie />
                Head of Department
              </h3>

              <div style={{ marginBottom: "2rem" }}>
                <h4 style={{ fontSize: "1.25rem", color: "#1e293b", fontWeight: 700, marginBottom: "0.25rem" }}>Co-ordinator, DMC</h4>
                <p style={{ color: "#475569", lineHeight: 1.6, margin: 0, fontWeight: 500 }}>
                  Jawaharlal Nehru Technological University Gurajada<br />
                  Vizianagaram, Andhra Pradesh - 535003
                </p>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                <a href="mailto:dmc@jntugv.edu.in" style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1.2rem",
                  textDecoration: "none",
                  color: "#1e293b",
                  transition: "all 0.2s"
                }} onMouseOver={(e) => { e.currentTarget.style.color = "#0b3d91"; }} onMouseOut={(e) => { e.currentTarget.style.color = "#1e293b"; }}>
                  <div style={{ width: 44, height: 44, background: "#fff", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 10px rgba(0,0,0,0.05)", color: "#0b3d91" }}>
                    <FaEnvelope />
                  </div>
                  <span style={{ fontWeight: 600 }}>dmc@jntugv.edu.in</span>
                </a>

                <div style={{ display: "flex", alignItems: "flex-start", gap: "1.2rem", color: "#1e293b" }}>
                  <div style={{ width: 44, height: 44, background: "#fff", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 10px rgba(0,0,0,0.05)", color: "#0b3d91", flexShrink: 0 }}>
                    <FaBuilding />
                  </div>
                  <p style={{ margin: 0, fontSize: "1rem", lineHeight: 1.6 }}>
                    <strong>Office Location:</strong><br />
                    Second Floor, Academic Block-1,<br />
                    JNTU-GV Campus, Vizianagaram
                  </p>
                </div>
              </div>
            </div>

            {/* Support Metrics */}
            <div style={{ padding: "1.5rem", borderRadius: "1rem", border: "1.5px dashed #e2e8f0", display: "flex", alignItems: "center", gap: "1rem" }}>
              <div style={{ background: "#facc15", color: "#1e293b", padding: "10px", borderRadius: "10px" }}>
                <FaTicketAlt />
              </div>
              <div>
                <h5 style={{ margin: 0, color: "#1e293b", fontWeight: 700 }}>Service Portal</h5>
                <p style={{ margin: 0, color: "#64748b", fontSize: "0.9rem" }}>Submit technical requests via e-Ticket</p>
              </div>
            </div>

          </div>

          {/* Right Column: Schedule & Map */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            
            {/* Working Hours */}
            <div style={{ padding: "2rem", background: "#f8fafc", borderRadius: "1.25rem", border: "1px solid #e2e8f0" }}>
              <h3 style={{ display: "flex", alignItems: "center", gap: "10px", color: "#0b3d91", fontSize: "1.2rem", fontWeight: 700, marginBottom: "1.25rem" }}>
                <FaClock /> Official Working Hours
              </h3>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px", fontSize: "0.95rem" }}>
                <span style={{ color: "#64748b" }}>Monday – Saturday:</span>
                <span style={{ fontWeight: 700, color: "#1e293b" }}>10:00 AM – 05:00 PM</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.95rem" }}>
                <span style={{ color: "#64748b" }}>Sunday & Public Holidays:</span>
                <span style={{ fontWeight: 700, color: "#ef4444" }}>Closed</span>
              </div>
            </div>

            {/* Visual Map */}
            <div style={{
              borderRadius: "1.25rem",
              overflow: "hidden",
              border: "1px solid #e2e8f0",
              boxShadow: "0 15px 35px rgba(11, 61, 145, 0.1)",
              background: "#fff"
            }}>
              <div style={{
                padding: "1rem 1.5rem",
                background: "#0b3d91",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between"
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontWeight: 600 }}>
                  <FaMapMarkerAlt />
                  Geographical Location
                </div>
                <span style={{ fontSize: "0.8rem", opacity: 0.8, fontWeight: 500 }}>NH 43, Dwarapudi</span>
              </div>
              <iframe
                title="JNTU Vizianagaram Campus Map"
                src="https://maps.google.com/maps?width=100%25&amp;height=320&amp;hl=en&amp;q=Jawaharlal%20Nehru%20Technological%20University-Gurajada%20College%20Engineering%20Vizianagaram,%20Nh%2043,%20Dwarapudi%20(Post),%20Vizianagaram,%20Andhra%20Pradesh,%20Andhra%20Pradesh%20535003+(Jawaharlal%20Nehru%20Technological%20University-Gurajada%20College%20of%20Engineering%20Vizianagaram)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                width="100%"
                height="320"
                style={{ border: 0, display: "block" }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ContactUs;

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { process } from "../data.js";

export default function Process() {
  const [active, setActive] = useState(0);

  return (
    <section id="process" className="process-section">
      <div className="section-shell process-shell">
        <div className="section-index"><span>05 — HOW I WORK</span><span>PROCESS</span></div>
        <div className="process-heading"><h2>From first question<br /><em>to final pixel.</em></h2><p>A clear process creates room for better ideas and fewer surprises.</p></div>
        <div className="process-layout">
          <div className="process-steps" role="tablist" aria-label="Project process">
            {process.map((step, index) => (
              <button className={`process-step${active === index ? " is-active" : ""}`} key={step.number} role="tab" aria-selected={active === index} aria-controls="process-detail" onClick={() => setActive(index)}>
                <span>{step.number}</span><strong>{step.title}</strong><ArrowDownRight size={16} />
              </button>
            ))}
          </div>
          <motion.div className="process-detail" id="process-detail" role="tabpanel" key={active} initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.32 }}>
            <span className="process-large-number">{process[active].number}</span>
            <h3>{process[active].title}</h3>
            <p>{process[active].description}</p>
            <small>{process[active].detail}</small>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
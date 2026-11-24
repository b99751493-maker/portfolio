import { motion } from "framer-motion";
import { Code2, Layers3, MoveUpRight, PenTool } from "lucide-react";
import { skills } from "../data.js";

const icons = [Code2, Layers3, PenTool];

export default function Expertise() {
  return (
    <motion.section id="expertise" className="expertise-section" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7 }}>
      <div className="section-shell expertise-shell">
        <div className="section-index"><span>02 — THE TOOLKIT</span><span>EXPERTISE</span></div>
        <div className="expertise-heading">
          <h2>Tools for making<br /><em>the unseen tangible.</em></h2>
          <p>A considered toolkit for building expressive, useful, and reliable digital experiences.</p>
        </div>
        <div className="expertise-grid">
          {skills.map((category, index) => {
            const Icon = icons[index];
            return (
              <motion.article className={`expertise-panel expertise-panel-${index + 1}`} key={category.group} whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                <div className="expertise-panel-top"><span>{category.index}</span><Icon size={20} strokeWidth={1.5} /></div>
                <h3>{category.group}</h3>
                <ul>{category.items.map((item) => <li key={item}>{item}<MoveUpRight size={12} aria-hidden="true" /></li>)}</ul>
              </motion.article>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
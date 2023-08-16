import { motion } from "framer-motion";

import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { github, gmailIcon, whatsappIcon } from "../assets";
import { styles } from "../styles";

const Contact = () => {


  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <h3 className={styles.sectionHeadText}>Contacto</h3>


        <a
          href="https://github.com/julisa-344"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 flex items-center gap-2 text-blue-500 hover:underline"
        >
          <img src={github} alt="GitHub" className="w-12 h-12" />
          GitHub
        </a>

        <a
          href="mailto:julisa.leon344@gmail.com"
          className="mt-4 flex items-center gap-2 text-blue-500 hover:underline"
        >
          <img src={gmailIcon} alt="Gmail" className="w-12 h-12" />
          Gmail
        </a>

        <a
          href="https://wa.me/51937601484"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 flex items-center gap-2 text-blue-500 hover:underline"
        >
          <img src={whatsappIcon} alt="WhatsApp" className="w-8 h-8" />
          937601484
        </a>


      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");

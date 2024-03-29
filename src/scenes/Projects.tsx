import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, body, skills }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">
          {body}
        </p>
        <br />
        <h3><p>Skills:</p>{skills}</h3>
      </div>
      <img src={`${projectTitle}.jpeg`} alt={projectTitle} />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
          <span className="text-blue">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          During my university years, I worked on several projects, including personal ones and the ones I worked on at my internships.
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}

          <a href="https://pomotimer-g5gj.onrender.com/" target="_blank" rel="noreferrer">
            <Project title="Project 1" body="This is a pomodoro timer app that keeps you focused on your study/work" skills="Ruby on Rails, Google authentication, postgresql"/>
          </a>
          <a href="https://github.com/Murasso/emotion-recoginition" target="_blank" rel="noreferrer">
          <Project title="Project 2" body="A Desktop app to analize your facial emotion using deep learning model" skills="Python, Pytorch,kivy,Opencv"/>
          </a>

          <Project title="Project 3" body="Visualization of an image recoginition model" skills="Python, Pytorch"/>
          {/* ROW 2 */}
          <a href="https://cms-workout-snowy-butterfly-6906.fly.dev/" target="_blank" rel="noreferrer">
          <Project title="Project 4" body="A fitness app to keep track of your workout" skills="PHP, Laravel, chart.js"/>
          </a>




        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

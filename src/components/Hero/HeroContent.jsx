import { TypeAnimation } from "react-type-animation";
import profile from "../../data/profile";
import HeroButtons from "./HeroButtons";
import HeroStats from "./HeroStats";
import { motion } from "framer-motion";

function HeroContent() {
  return (
    <motion.div
      className="max-w-xl"
      initial={{ opacity: 0, x: -80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <p className="mb-3 text-lg font-medium text-blue-600">
        👋 Hello, I'm
      </p>

<h1 className="mb-4 text-5xl font-extrabold text-gray-900 lg:text-6xl">        {profile.name}
      </h1>

      <TypeAnimation
        sequence={[
          "Software QA Engineer",
          1500,
          "Manual Tester",
          1500,
          "API Tester",
          1500,
          "Automation Tester",
          1500,
          "Database Tester",
          1500,
        ]}
        wrapper="h2"
        speed={40}
        repeat={Infinity}
        className="mb-6 text-3xl font-bold text-blue-600"
      />

<p className="mb-8 leading-8 text-gray-600">
            {profile.description}
      </p>

      <HeroButtons />

      <HeroStats />
    </motion.div>
  );
}

export default HeroContent;
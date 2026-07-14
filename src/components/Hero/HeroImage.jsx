import profileImage from "../../assets/images/profile.jpg";
import { motion } from "framer-motion";

function HeroImage() {
  return (
    <motion.div
      className="flex justify-center"
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 p-2 shadow-[0_25px_60px_rgba(37,99,235,0.25)]">
        <img
          src={profileImage}
          alt="Abdelrahman Eltabaa"
          className="h-80 w-80 rounded-full object-cover transition duration-500 hover:scale-105 md:h-[430px] md:w-[430px]"
        />
      </div>
    </motion.div>
  );
}

export default HeroImage;
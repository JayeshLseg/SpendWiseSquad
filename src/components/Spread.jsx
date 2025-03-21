import { motion } from "framer-motion";

function Spread() {
  return (
    <div className="w-full h-[70vh] flex justify-center items-center bg-green-900 flex flex-col gap-10 text-white overflow-hidden">
      <div className="w-full max-w-7xl mx-auto heading flex flex-col items-center">
        <motion.h1
          initial={{ x: "-100%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 1.5 }}
          className="origin-left text-5xl font-light text-center"
        >
          Spend Wisely,
        </motion.h1>
        <motion.span
          initial={{ x: "100%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 1.5 }}
          className="text-5xl font-light origin-bottom-left"
        >
          Live Happily
        </motion.span>
      </div>
      <p className="px-5 text-center text-sm">
        This was our contribution to the hackathon. We tried our best, learned a lot, and are motivated to build this further. Thank you for the opportunity to showcase our project.
        <br />
        - SpendWiseSquad
      </p>
      <p className="text-center text-sm">
        Jayesh Rajani ~ Sushma B P ~ Anshu Gupta ~ Ganapathi Kulal ~ Rohith Vaddepalli
        <br />
      </p>
      <p className="text-center text-sm">Mentor: Datta Sai Manikanta</p>
    </div>
  );
}

export default Spread;
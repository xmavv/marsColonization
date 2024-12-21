import { pageAnimation } from "../ui/pageAnimation";

import { motion } from "framer-motion";

function PageNotFound() {
  return <motion.div {...pageAnimation}>PAGE NOT FOUND</motion.div>;
}

export default PageNotFound;

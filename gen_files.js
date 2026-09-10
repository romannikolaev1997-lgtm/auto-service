const fs = require("fs");
const path = require("path");

const files = {};

files["src/lib/animation.ts"] = `import { Variants } from "framer-motion";

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      delay: i * 0.2,
    },
  }),
};

export const fadeInScale: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: (i: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      delay: i * 0.2,
    },
  }),
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};
`;

for (const [relPath, content] of Object.entries(files)) {
  const absPath = path.resolve(relPath);
  fs.mkdirSync(path.dirname(absPath), { recursive: true });
  fs.writeFileSync(absPath, content.trimStart(), "utf-8");
  console.log("Created: " + relPath);
}

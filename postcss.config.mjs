// WRONG (causes the error)
import tailwindcss from "@tailwindcss/postcss";
const config = {
  plugins: [tailwindcss],
};
export default config;

// CORRECT (fixes the error)
const config = {
  plugins: ["@tailwindcss/postcss"],
};
export default config;
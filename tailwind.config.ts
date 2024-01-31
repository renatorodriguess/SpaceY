import { url } from "inspector";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'space': '#0B1E8A',
        'space-light': '#3D68B2',
        'space-dark': '#040327',
        'gray-01': '#0D0E13',
        'gray-02': '#2C2D3A',
        'gray-03': '#60616F',
        'gray-04': '#898A93',
        'gray-05': '#D5D5DB',
        'mars': '#E85937',
        'mars-light': '#FFBC70',
        'mars-dark': '#CF3F1D',
        'sun': '#F5D15F',
        'jupiter': '#E00E34',
        'earth': '#0FDD86',
        'saturn': '#554AD7',
        'uranus': '#24FFE9',
        'background': ' #04032C',
      },
    },
    fontWeight: {
      light: '300',
      normal: '400',
      medium: '500',
      bold: '700',
      extrabold: '800',
    },
    backgroundImage: theme => ({
      'background-stars': "url('../../public/images/stars.jpg')",
      'background-section': 'linear-gradient(180deg,#040327 0%,#0D0E13 24.49%)',
    }),
  },
  plugins: [],
};
export default config;

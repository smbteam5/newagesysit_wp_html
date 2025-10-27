const colors = require("tailwindcss/colors");
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "quality-gradient-bg":
          "linear-gradient(180deg, #FCFDFD 17.22%, rgba(255, 255, 255, 0) 103.21%)",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
        sans: ["Poppins", "sans-serif"],
        blogHeading: ["Montserrat", "sans-serif"],
        blogBody: ["Open Sans", "sans-serif"],
      },
      colors: {
        primary: "#FF5D00",
        secondary: "#001F5C",
        tertiary: "#000a1f",
        white: "#fff",
        grey: "#F9FAFB",
        black: "#000",
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          sm: "600px",
          md: "728px",
          lg: "984px",
          xl: "1240px",
          "2xl": "1400px",
        },
      },

      screens: {
        "min-320px": "320px",
        "min-358px": "358px",
        "min-375px": "375px",
        "min-380px": "380px",
        "min-400px": "400px",
        "min-412px": "412px",
        "min-425px": "425px",
        "min-500px": "500px",
        "min-550px": "550px",
        "min-768px": "768px",
        "min-992px": "992px",
        "min-1024px": "1024px",
        "min-1240px": "1240px",
        "min-1380px": "1380px",
        "min-1440px": "1440px",
        "min-1536px": "1536px",
        "min-1680px": "1680px",
        "min-1920px": "1920px",
        "max-1360px": { max: "1360px" },
        "max-1366px": { max: "1366px" },
        "max-1240px": { max: "1240px" },
        "max-1024px": { max: "1024px" },
        "max-992px": { max: "992px" },
        "max-768px": { max: "768px" },
        "max-640px": { max: "640px" },
        "max-500px": { max: "500px" },
        "max-470px": { max: "470px" },
      },
      animation: {
        ripple: "ripple 2s linear infinite",
        dropFromTop: "dropFromTop .8s ease-out forwards",
        flicker: "flicker 0.2s ease-in-out infinite",
        "up-down": "up-down 0.6s ease-in-out",
        "rotate-up": "rotate-up 0.6s ease-in-out",
        "rotate-right": "rotate-right 0.6s ease-in-out",
        reveal: "reveal 0.8s ease-out forwards",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(0deg, rgba(231,231,231,0) 0%, rgba(221,221,221,1) 100%)",
      },
      keyframes: {
        ripple: {
          "0%": {
            transform: "scale(0)",
            opacity: "1",
          },
          "100%": {
            transform: "scale(3)",
            opacity: "0",
          },
        },
        dropFromTop: {
          "0%": { opacity: "0", transform: "translateY(-100vh)" },
          "80%": { opacity: "1", transform: "translateY(15px)" }, // slight overshoot
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        flicker: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.6" },
        },
        "up-down": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "rotate-up": {
          "0%": { transform: "rotateX(0deg)" },
          "50%": { transform: "rotateX(90deg)", opacity: 0 },
          "100%": { transform: "rotateX(0deg)", opacity: 1 },
        },
        "rotate-right": {
          "0%": { transform: "rotateY(0deg)", opacity: 1 },
          "50%": { transform: "rotateY(90deg)", opacity: 0 },
          "100%": { transform: "rotateY(0deg)", opacity: 1 },
        },
        reveal: {
          "0%": { clipPath: "inset(0 0 100% 0)" },
          "100%": { clipPath: "inset(0 0 0 0)" },
        },
      },
    },
  },
  variants: {
    extend: {
      display: [
        "responsive",
        "group-hover",
        "group-focus",
        "hover",
        "focus",
        "min",
        "max",
      ], // Add other variants as needed
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".border-image-slice-1": {
          "border-image-slice": "1",
        },
        ".border-image-gradient": {
          "border-image-source":
            "linear-gradient(90deg, rgba(112, 160, 255, 0) 0%, rgba(112, 160, 255, 0.633) 50%, rgba(112, 160, 255, 0) 100%)",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
    {
      tailwindcss: {},
      autoprefixer: {},
    },
  ],
};

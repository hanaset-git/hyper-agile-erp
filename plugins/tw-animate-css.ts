import plugin from "tailwindcss/plugin";

const twAnimate = plugin(function (api) {
  const { addUtilities, addComponents, matchUtilities } = api as any;
  const { addKeyframes } = api as any;

  addKeyframes({
    fade: {
      from: { opacity: "0" },
      to: { opacity: "1" },
    },
    bounce: {
      '0%, 100%': { transform: 'translateY(-25%)', 'animation-timing-function': 'cubic-bezier(0.8,0,1,1)' },
      '50%': { transform: 'translateY(0)', 'animation-timing-function': 'cubic-bezier(0,0,0.2,1)' },
    },
  });

  addUtilities({
    '.animate-fade': {
      animation: 'fade 0.5s ease-in-out forwards',
    },
    '.animate-bounce-short': {
      animation: 'bounce 1s infinite',
    },
  });
});

export default twAnimate;

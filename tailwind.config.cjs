/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      // M:主要 F:食物 C:角色
      Mblue: {
        100: '#E0EEFF',
        DEFAULT: '#2684FF',
        200: '#0053C0',
        300: '#23385E',
      },
      Mred: {
        DEFAULT: '#FF0000',
      },
      Mgray: {
        DEFAULT: '#AAAAAA',
        200: '#D9D9D9',
      },
      white: {
        DEFAULT: '#FFFFFF',
      },
      black: {
        DEFAULT: '#000000',
      },
      Fbrown: {
        DEFAULT: '#922020',
        200: '#611616',
      },
      Fyellow: {
        DEFAULT: '#FFA31A',
        200: '#C77F13',
      },
      Fgreen: {
        Default: '##69C30E',
        200: '#4E900B',
      },
      Fred: {
        DEFAULT: '#F33838',
        200: '#B42A2A',
      },
      Cred: '#FF7B7B',
      Cblue: '#589EFA',
      Corange: '#F07319',
    },

    extend: {
      //陰影
      boxShadow: {
        'xl': '0 4px 12px 0px rgba(38,132,255,1)',
        '2xl': '0 6px 0px 0px rgba(38,132,255,1)',
        '3xl': '0 4px 0px 0px rgba(38,132,255,1)',
      }
    },
  },
};

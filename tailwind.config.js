/** @type {import('tailwindcss').Config} */
   export default {
     content: [
       "./index.html",
       "./src/**/*.{js,ts,jsx,tsx}",
     ],
     darkMode: 'class',
     theme: {
       screens: {
         'xs': '475px',
         'sm': '640px',
         'md': '768px',
         'lg': '1024px',
         'xl': '1280px',
         '2xl': '1536px',
       },
       extend: {
         colors: {
           primary: {
             50: '#eff6ff',
             100: '#dbeafe',
             200: '#bfdbfe',
             300: '#93c5fd',
             400: '#60a5fa',
             500: '#3b82f6',
             600: '#2563eb',
             700: '#1d4ed8',
             800: '#1e40af',
             900: '#1e3a8a',
           },
           dark: {
             50: '#f8fafc',
             100: '#f1f5f9',
             200: '#e2e8f0',
             300: '#cbd5e1',
             400: '#94a3b8',
             500: '#64748b',
             600: '#475569',
             700: '#334155',
             800: '#1e293b',
             900: '#0f172a',
           }
         },
         animation: {
           'fade-in': 'fadeIn 0.5s ease-in-out',
           'slide-up': 'slideUp 0.5s ease-out',
           'slide-down': 'slideDown 0.5s ease-out',
           'scale-in': 'scaleIn 0.3s ease-out',
           'bounce-slow': 'bounce 2s infinite',
           'pulse-slow': 'pulse 3s infinite',
           'gradient': 'gradient 6s ease infinite',
           'float': 'float 3s ease-in-out infinite',
           'glow': 'glow 2s ease-in-out infinite alternate',
         },
         keyframes: {
           fadeIn: {
             '0%': { opacity: '0' },
             '100%': { opacity: '1' },
           },
           slideUp: {
             '0%': { transform: 'translateY(20px)', opacity: '0' },
             '100%': { transform: 'translateY(0)', opacity: '1' },
           },
           slideDown: {
             '0%': { transform: 'translateY(-20px)', opacity: '0' },
             '100%': { transform: 'translateY(0)', opacity: '1' },
           },
           scaleIn: {
             '0%': { transform: 'scale(0.9)', opacity: '0' },
             '100%': { transform: 'scale(1)', opacity: '1' },
           },
           gradient: {
             '0%, 100%': { backgroundPosition: '0% 50%' },
             '50%': { backgroundPosition: '100% 50%' },
           },
           float: {
             '0%, 100%': { transform: 'translateY(0px)' },
             '50%': { transform: 'translateY(-10px)' },
           },
           glow: {
             '0%': { boxShadow: '0 0 5px rgba(59, 130, 246, 0.5)' },
             '100%': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.8)' },
           },
         },
         backgroundImage: {
           'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
           'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
         },
         backdropBlur: {
           xs: '2px',
         }
       },
     },
     plugins: [],
   }
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        glow: {
          '0%, 100%': { opacity: 1, boxShadow: '0 0 20px rgba(99, 102, 241, 0.5)' },
          '50%': { opacity: 0.6, boxShadow: '0 0 40px rgba(99, 102, 241, 0.8)' }
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' }
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        },
        pulse: {
          '0%, 100%': { transform: 'scale(1)', boxShadow: '0 0 0 0 rgba(99, 102, 241, 0.4)' },
          '50%': { transform: 'scale(1.05)', boxShadow: '0 0 20px 10px rgba(99, 102, 241, 0)' }
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' }
        },
        shine: {
          '0%': { backgroundPosition: '200% center' },
          '100%': { backgroundPosition: '-200% center' }
        },
        flipInX: {
          '0%': { transform: 'rotateX(90deg)', opacity: '0' },
          '100%': { transform: 'rotateX(0deg)', opacity: '1' }
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-out',
        float: 'float 3s ease-in-out infinite',
        bounce: 'bounce 1s ease-in-out infinite',
        glow: 'glow 2s ease-in-out infinite',
        slideIn: 'slideIn 0.5s ease-out',
        scaleIn: 'scaleIn 0.3s ease-out',
        pulse: 'pulse 2s ease-in-out infinite',
        wiggle: 'wiggle 0.5s ease-in-out',
        shine: 'shine 8s ease-in-out infinite',
        flipInX: 'flipInX 0.6s ease-out',
        shimmer: 'shimmer 2s linear infinite'
      },
      backgroundImage: {
        'gradient-shine': 'linear-gradient(to right, #4f46e5 0%, #818cf8 25%, #4f46e5 50%, #818cf8 75%, #4f46e5 100%)',
        'gradient-shimmer': 'linear-gradient(90deg, transparent 0%, #4f46e5 50%, transparent 100%)',
      }
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        canvas: 'rgb(var(--canvas) / <alpha-value>)',
        surface: 'rgb(var(--surface) / <alpha-value>)',
        surface2: 'rgb(var(--surface-2) / <alpha-value>)',
        line: 'rgb(var(--line) / <alpha-value>)',
        fg: 'rgb(var(--fg) / <alpha-value>)',
        muted: 'rgb(var(--muted) / <alpha-value>)',
        faint: 'rgb(var(--faint) / <alpha-value>)',
        accent: 'rgb(var(--accent) / <alpha-value>)',
        accent2: 'rgb(var(--accent-2) / <alpha-value>)',
        accent3: 'rgb(var(--accent-3) / <alpha-value>)',
        gold: 'rgb(var(--gold) / <alpha-value>)',
      },
      fontFamily: {
        /* Self-hosted variable fonts (fontsource) — no third-party requests. */
        sans: ['"Inter Variable"', 'Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        display: ['"Sora Variable"', 'Sora', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono Variable"', '"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      fontSize: {
        '2xs': ['0.6875rem', { lineHeight: '1rem' }],
      },
      /* Full 0–100 opacity scale so `bg-accent/18`, `border-line/45` etc. just work. */
      opacity: Object.fromEntries(Array.from({ length: 101 }, (_, i) => [i, i / 100])),
      aspectRatio: {
        '1/1': '1 / 1',
        '4/5': '4 / 5',
        '5/4': '5 / 4',
        '3/4': '3 / 4',
        '16/10': '16 / 10',
        '16/9': '16 / 9',
        '21/9': '21 / 9',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      maxWidth: {
        shell: '78rem',
      },
      boxShadow: {
        panel: '0 1px 0 0 rgb(var(--line)) inset, 0 24px 60px -30px rgb(4 6 20 / 0.45)',
        lift: '0 30px 70px -35px rgb(var(--accent-2) / 0.45)',
        glow: '0 0 0 1px rgb(var(--accent) / 0.35), 0 18px 50px -18px rgb(var(--accent) / 0.4)',
      },
      keyframes: {
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(14px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        drift: {
          '0%,100%': { transform: 'translate3d(0,0,0) scale(1)' },
          '33%': { transform: 'translate3d(4%, -6%, 0) scale(1.08)' },
          '66%': { transform: 'translate3d(-5%, 4%, 0) scale(0.96)' },
        },
        shine: {
          from: { backgroundPosition: '200% 0' },
          to: { backgroundPosition: '-200% 0' },
        },
        'ping-soft': {
          '0%': { transform: 'scale(1)', opacity: '0.6' },
          '70%,100%': { transform: 'scale(2.4)', opacity: '0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
        float: 'float 7s ease-in-out infinite',
        marquee: 'marquee 32s linear infinite',
        drift: 'drift 26s ease-in-out infinite',
        shine: 'shine 6s linear infinite',
        'ping-soft': 'ping-soft 2.6s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
    },
  },
  plugins: [],
}

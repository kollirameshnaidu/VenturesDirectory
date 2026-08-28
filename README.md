
  # Pixel-Perfect React Application

  This is a code bundle for Pixel-Perfect React Application. The original project is available at https://www.figma.com/design/5yGOMwvZ92FHXaU7hnQdt1/Pixel-Perfect-React-Application.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.

  ## API configuration (local and Vercel)

  - Local development uses the Vite proxy in `vite.config.js`:
    - `/api/*` -> `http://uatapi.buyrentsale.com/*`
  - Vercel uses `vercel.json` rewrite rules:
    - `/api/:path*` -> `https://uatapi.buyrentsale.com/api/:path*`
  - If you set `VITE_API_BASE_URL`, use an HTTPS URL in production (see `.env.example`).
  
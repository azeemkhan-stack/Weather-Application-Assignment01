# SkyCast Weather Application

SkyCast is a responsive weather information application built with HTML, CSS, and JavaScript. It uses the free [Open-Meteo Geocoding API](https://open-meteo.com/en/docs/geocoding-api) to find a location and the [Open-Meteo Forecast API](https://open-meteo.com/en/docs) to display current conditions and forecasts.

## Features

- Search weather by city or location name.
- Use popular-city quick search buttons.
- Display current temperature, feels-like temperature, condition, humidity, wind, pressure, visibility, UV index, sunrise, and sunset.
- Show a 24-hour forecast and a seven-day forecast.
- Use browser geolocation when permission is granted.
- Store recent searches in local storage.
- Toggle between light and dark themes.
- Display loading, empty, and error states.
- Adapt the layout for mobile and desktop screens.

## Run locally

The application uses JavaScript modules, so serve it through a local HTTP server instead of opening `index.html` directly with `file://`.

```bash
python3 -m http.server 8000
```

Open <http://localhost:8000> in a browser and search for a city such as London, Tokyo, or Islamabad.

## Automated checks

The project uses Node's built-in test runner and a static build check, so no third-party dependency installation is required.

```bash
npm test
npm run build
```

The tests verify reusable weather helpers. The build check verifies the required application files, the HTML document wrapper, and module loading.

## Continuous Integration

GitHub Actions runs on pushes to `main` and pull requests targeting `main`. The workflow runs `npm test` and `npm run build`. A failed command makes the workflow fail, preventing a broken change from being treated as ready.

## Deployment

The `Deploy Weather Application to GitHub Pages` workflow publishes the repository as a static site whenever a commit is pushed to `main`. The repository's Pages settings must use **GitHub Actions** as the deployment source.

## DevOps evidence for Assignment 01

The final report should include:

1. The GitHub repository URL.
2. The live GitHub Pages URL.
3. A screenshot of the locally running application.
4. A screenshot of the repository files.
5. A screenshot showing at least three meaningful commits.
6. A screenshot of an intentionally failed CI run.
7. A screenshot of the corrected successful CI run.
8. A screenshot of the deployed application.

Do not commit API keys, passwords, tokens, or other secrets. Open-Meteo is used without an API key.

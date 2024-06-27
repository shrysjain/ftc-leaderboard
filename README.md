# FTC Leaderboard 🤖🏅

FTC Leaderboard is a live, auto-magically updating web application that displays leaderboard scores for the top FIRST Tech Challenge (FTC) matches and teams across all FIRST regions in the United States. It allows users to view scores from different regions, access detailed team information, and provides a user-friendly interface for navigating through the data.

## Key Features

- **Region Selection**: Choose from a list of FTC regions to view leaderboard scores.
- **Score Details**: Click on team names to view detailed information including city, state, country, and other relevant details.
- **Responsive Design**: Optimized for desktop and mobile devices.
- **Interactive UI**: Buttons for each region allow easy navigation and exploration of different leaderboards.

## Built With

- **Next.js**: React framework for building server-rendered applications
- **React**: JavaScript library for building user interfaces
- **Axios**: Promise-based HTTP client for making API requests
- **Cheerio**: Implementation of core jQuery designed specifically for the server
- **TailwindCSS**: Scoped CSS for styling components

## Getting Started

The production deployment of FTC Leadeboard is available [here](http://ftc-leaderboard.vercel.app)

To run your own instance of FTC Leaderboard, follow these steps:

1. **Clone the Repository**:

```bash
git clone https://github.com/shrysjain/ftc-leaderboard.git
cd ftc-leaderboard
```
*Alternatively, clone via SSH, the GitHub CLI, or GitHub desktop*

2. **Install Dependencies**:
```bash
npm install
```

3. **Set Up Environment Variables:**

- Create an `.env.local` file in the root directory
- Add an environmental variable with your *The Orange Alliance API Key*
```env
NEXT_PUBLIC_API_KEY=<your_key_here>
```

4. **Launch the Development Sever**:
```bash
npm run dev
```

5. **Open in Your Browser**:

Open your web browser and navigate to http://localhost:3000 to see the application running locally.

## Data Sources

- **[FIRST Inspires](https://www.firstinspires.org/team-event-search)**: Provides information about competitions and teams
- **[FTC Stats](http://ftcstats.org)**: Offers score breakdowns for FTC matches and event information
- **[The Orange Alliance API](https://theorangealliance.org/apidocs)**: Used for retrieving specific team details

## Licensing
This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

# FTC Leaderboard 🤖🏅

FTC Leaderboard is a live, auto-magically updating web application that displays leaderboard scores for the top FIRST Tech Challenge (FTC) matches and teams across all FIRST regions in the United States. It allows users to view scores from different regions, access detailed team information, and provides a user-friendly interface for navigating through the data.

## Key Features

- **Region Selection**: Choose from a list of FTC regions to view leaderboard scores.
- **Score Details**: Click on team names to view detailed information including city, state, country, and other relevant details.
- **Responsive Design**: Optimized for desktop and mobile devices.
- **Interactive UI**: Buttons for each region allow easy navigation and exploration of different leaderboards.
- **Public API**: Provides a REST API for developers to fetch regional match information.

## Built With

- **Next.js**: React framework for building server-rendered applications
- **React**: JavaScript library for building user interfaces
- **Axios**: Promise-based HTTP client for making API requests
- **Cheerio**: Implementation of core jQuery designed specifically for the server
- **TailwindCSS**: Scoped CSS for styling components

## Getting Started

The production deployment of FTC Leaderboard is available [here](http://ftc-leaderboard.vercel.app)

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

## Accessing Data via REST API

This project provides a publicly available REST API endpoint to access the top 10 match scores for any region. You can use this API to fetch raw JSON data for your own projects.

### API Endpoints

To get the top 10 match scores for a specific region, use the following URL pattern:

```sh
/api/scores/{region_code}
```

Replace `{region_code}` with the appropriate code for the region you are interested in. Here are a few examples:

For the Chesapeake region:

```sh
/api/scores/chs
```

For the Alberta region:

```sh
/api/scores/ab
```

For the Australia region:

```sh
/api/scores/aus
```

You can find region codes in the URL of any specific region's page on FTC Leaderboard as the string of characters following the forward slash.

### Sample Request

To fetch data for the Chesapeake region, you can make an HTTP GET request to:

```sh
https://ftc-leaderboard.vercel.app/api/scores/chs
```

### Sample Response

The API will return a JSON response with the top 10 match scores for the specified region. A sample response might look like this:

```json
[
  {
    "score": "301",
    "auto": "115",
    "teleOp": "96",
    "end": "90",
    "autoTaskPts": "80",
    "autoPixels": "5",
    "telePixels": "22",
    "teleBonus": "30",
    "dronePts": "50",
    "hang": "2",
    "teams": [
      "17774",
      "6417",
      "11534"
    ],
    "event": "Chesapeake Chesapeake Championship 02/03/24 F1"
  },
  ...
]
```

## Data Sources

- **[FIRST Inspires](https://www.firstinspires.org/team-event-search)**: Provides information about competitions and teams
- **[FTC Stats](http://ftcstats.org)**: Offers score breakdowns for FTC matches and event information
- **[The Orange Alliance API](https://theorangealliance.org/apidocs)**: Used for retrieving specific team details

## Licensing
This project is licensed under the GNU General Public License. See the [LICENSE](./LICENSE) file for details.

import axios from 'axios';
import cheerio from 'cheerio';

const scrapeTopScores = async () => {
  const url = 'http://www.ftcstats.org/2024/chesapeake.html';

  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    const scores = [];
    $('table tr').each((index, element) => {
      if (index === 0) return;
      if (index > 10) return false;

      const cells = $(element).find('td');
      const score = {
        score: $(cells[0]).text(),
        auto: $(cells[1]).text(),
        teleOp: $(cells[2]).text(),
        end: $(cells[3]).text(),
        autoTaskPts: $(cells[4]).text(),
        autoPixels: $(cells[5]).text(),
        telePixels: $(cells[6]).text(),
        teleBonus: $(cells[7]).text(),
        dronePts: $(cells[8]).text(),
        hang: $(cells[9]).text(),
        teams: [$(cells[10]).text().split(" ")[0], $(cells[11]).text().split(" ")[0], $(cells[12]).text().split(" ")[0]], // This only grabs the first team
        event: $(cells[13]).text(), // This grabs the second team?
      };

      scores.push(score);
    });

    return scores;
  } catch (error) {
    console.error('Error scraping data:', error);
    return [];
  }
};

export default scrapeTopScores;

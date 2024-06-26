import scrapeTopScores from '../../utils/scrape';

const handler = async (req, res) => {
  const scores = await scrapeTopScores();
  res.status(200).json(scores);
};

export default handler;

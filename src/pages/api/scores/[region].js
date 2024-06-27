import scrapeTopScores from '../../../utils/scrape';

const handler = async (req, res) => {
  const { region } = req.query;
  const scores = await scrapeTopScores(region);
  res.status(200).json(scores);
};

export default handler;

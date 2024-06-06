import { jobs } from '../../../lib/database';

function handler(req, res) {
  if (req.method === "GET"){
    res
      .status(200)
      .json(jobs)
  }
}

export default handler;
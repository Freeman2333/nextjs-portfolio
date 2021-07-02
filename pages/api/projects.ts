// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";
import { projects } from "../../data";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ projects });
}

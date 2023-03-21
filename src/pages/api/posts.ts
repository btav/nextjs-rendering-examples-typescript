import type { NextApiRequest, NextApiResponse } from "next";
import mysql, { RowDataPacket } from "mysql2/promise";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const connection = await mysql.createConnection(
    process.env.DATABASE_URL || ""
  );
  const [rows] = await connection.execute<RowDataPacket[]>(
    "SELECT title, content, imageUrl FROM posts"
  );
  connection.end();

  res.status(200).json({ posts: [...rows] });
}

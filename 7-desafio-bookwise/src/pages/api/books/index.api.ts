import { NextApiRequest, NextApiResponse } from "next"
import { getBooks } from "@/services/books.service"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" })
  }

  try {
    const { category, search } = req.query

    const books = await getBooks({
      category: category as string,
      search: search as string,
    })

    return res.status(200).json(books)
  } catch (error) {
    console.error("Error fetching books:", error)
    return res.status(500).json({ message: "Internal server error" })
  }
}

import axios from "axios";

export async function POST(req: Request) {
  try {
    const { query } = await req.json();

    const url =
      "https://priv.au/search?format=json&q=" +
      encodeURIComponent(query);

    const { data } = await axios.get(url);

    return Response.json({
      success: true,
      results: data.results.slice(0, 5),
    });
  } catch (e: any) {
    return Response.json({
      success: false,
      error: e.message,
    });
  }
}
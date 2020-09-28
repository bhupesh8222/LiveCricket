const API_KEY = "qZnM0O90ToVsLfLIjBiq9GvT9382";

export async function getMatchData() {
  try {
    let result = await fetch(`https://cricapi.com/api/matches/${API_KEY}`);
    result = await result.json();
    return result;
  } catch (error) {}
}

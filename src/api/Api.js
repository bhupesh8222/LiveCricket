const API_KEY = "qZnM0O90ToVsLfLIjBiq9GvT9382";

export async function getMatchData() {
  try {
    let result = await fetch(`https://cricapi.com/api/matches/${API_KEY}`);
    result = await result.json();
    return result;
  } catch (error) {
    return error;
  }
}

export async function getParticularMatchDetail(id) {
  try {
    let detail = await fetch(
      `https://cricapi.com/api/cricketScore?unique_id=${id}&apikey=${API_KEY}`
    );
    detail = await detail.json();
    return detail;
  } catch (error) {
    return error;
  }
}

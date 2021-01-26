export const getGifs = async (category) => {
  const API_KEY = "DykV5GZ9qVrpuiZMJr7ntkjJYmml4MZu";
  const URL = "https://api.giphy.com/v1/gifs/search";
  const limit = 10;

  const resp = await fetch(
    `${URL}?q=${encodeURI(category)}&limit=${limit}&api_key=${API_KEY}`
  );
  const { data } = await resp.json();

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images?.downsized_medium.url,
  }));

  return gifs;
};

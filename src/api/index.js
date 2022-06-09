export const getLatestNews = async (search) => {
  const resp = await fetch(`https://hn.algolia.com/api/v1/search?query=${search}&hitsPerPage=10&page=0`);
  return await resp.json();
}

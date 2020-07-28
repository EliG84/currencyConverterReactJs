export const apiRates = async () => {
  const url =
    'http://apilayer.net/api/live?access_key=3c81786f9b3d2e267f40d08af97b97f2&currencies=usd,ils,eur,btc,thb';
  let resp = await fetch(url);
  let data = await resp.json();
  return data;
};

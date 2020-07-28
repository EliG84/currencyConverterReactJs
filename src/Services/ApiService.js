export const apiRates = async () => {
  const url =
    'https://apilayer.net/api/live?access_key=72b64c79ceca583e1bd96ad83c49c47b&currencies=usd,ils,eur,btc,thb';
  let resp = await fetch(url);
  let data = await resp.json();
  return data;
};

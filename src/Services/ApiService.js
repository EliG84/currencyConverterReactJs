export const apiRates = async () => {
  const url =
    'http://apilayer.net/api/live?access_key=XXXXXXXXX&currencies=usd,ils,eur,btc,thb';
  let resp = await fetch(url);
  let data = await resp.json();
  return data;
};

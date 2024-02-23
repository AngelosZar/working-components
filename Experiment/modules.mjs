"use strict";
//                 .....   variables ......
export const baseApiUrl = "https://v2.api.noroff.dev";
export const rainyProdEndPoints = `${baseApiUrl}/rainy-days`;

// .....   functions  ......
// fetch the api async
export async function doFetchData(url) {
  try {
    // start a loading spinner
    const res = await axios.get(url);
    console.log(res.data);
    return res;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
  //   stop loading spinner
}
export async function main() {
  try {
    const { data: rainCoats } = await doFetchData(rainyProdEndPoints);
    // or save to localstorage
    displayRainCoatsLi(rainCoats);
    console.log(raincoats);
  } catch (error) {
    console.error();
  }
}

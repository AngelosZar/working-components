"use strict";
//                 .....   variables ......
export const baseApiUrl = "https://v2.api.noroff.dev";
// export const someIdToFetch = `${""}`;
export const rainyProdEndPoints = `${baseApiUrl}/rainy-days`;
// with template for url//need to create constants/vars

// fetch the api async
export async function doFetchData(url) {
  try {
    // start a loading spinner
    // const res = await axios.get("https://v2.api.noroff.dev/./rainy-days/");
    const res = await axios.get(url);
    console.log(res.data);
    return res;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
  //   stop loading spinner
}

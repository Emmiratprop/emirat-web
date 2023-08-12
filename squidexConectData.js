
const accessToken = process.env.NEXT_PUBLIC_SQUIDEX_TOKEN


// function makeRequest(url, body) {
//   const token = getTokenFromCache();
  
//   if (!token) {
//       token = getToken(clientId, clientSecret);
      
//       storeTokenInCache(token, days: 30);
//   }
  
//   const response = makeRequestToSquidex(url, body);
  
//   // Token has probably expired. 
//   if (response.status == 401) {
//       // Request the token again.
//       token = getToken(clientId, clientSecret);
      
//       storeTokenInCache(token, days: 30);
      
//       // Try the request again.
//       response = makeRequestToSquidex(url, body);
//   }
  
//   // You can still have a 401 here, but this very likely not an epxired token then.
//   return response;
// }


export default async function fetchAPI(query, { variables } = {}) {
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_SQUIDEX_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Authorization':  `Bearer ${accessToken}`
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    });
    const json = await res.json();
    console.log('json',json)
  
    if (json.errors) {
      console.error(json.errors);
      throw new Error("Failed to fetch API");
    }
  
    return json.data;
   }catch(error){
    console.log('faild catch fetch api: ', error)
    throw error; 
   }
  }
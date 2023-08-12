
// Esta función obtiene el token de la caché
function getTokenFromCache() {
  // Lógica para obtener el token de la caché, por ejemplo, localStorage o sessionStorage
  if (typeof window !== 'undefined') {
    return localStorage.getItem('access_token');
  }
  return null;
}



// Esta función guarda el token en la caché
function storeTokenInCache(token) {
  // Lógica para guardar el token en la caché, por ejemplo, localStorage o sessionStorage
  if (typeof window !== 'undefined') {
    localStorage.setItem('access_token', token);
  }
}




// Esta función obtiene el token del servidor usando las credenciales de cliente
async function getToken(clientId, clientSecret) {
  const response = await fetch('https://cloud.squidex.io/identity-server/connect/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({
      scope: 'squidex-api',
      client_secret: clientSecret,
      client_id: clientId,
      grant_type: 'client_credentials'
    })
  });

  const data = await response.json();
  const token = data.access_token;
  return token;
}





// Esta función realiza la solicitud a Squidex API con el token proporcionado
export default async function fetchAPI(query, { variables } = {}) {
  const clientId = process.env.NEXT_PUBLIC_SQUIDEX_CLIENT_ID;
  const clientSecret = process.env.NEXT_PUBLIC_SQUIDEX_CLIENT_SECRET;
  
  let accessToken = getTokenFromCache();
  
  if (!accessToken) {
    accessToken = await getToken(clientId, clientSecret);
    storeTokenInCache(accessToken);
  }
  
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_SQUIDEX_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      },
      body: JSON.stringify({
        query,
        variables
      }),
    });
    
    const json = await res.json();
  
    if (json.errors) {
      console.error(json.errors);
      throw new Error('Failed to fetch API');
    }
  
    return json.data;
  } catch (error) {
    console.log('Failed to fetch API: ', error);
    throw error; 
  }
}



// export default async function fetchAPI(query, { variables } = {}) {
//   try {
//     const res = await fetch(process.env.NEXT_PUBLIC_SQUIDEX_API_URL, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         'Authorization':  `Bearer ${accessToken}`
//       },
//       body: JSON.stringify({
//         query,
//         variables,
//       }),
//     });
//     const json = await res.json();
//     console.log('json',json)
  
//     if (json.errors) {
//       console.error(json.errors);
//       throw new Error("Failed to fetch API");
//     }
  
//     return json.data;
//    }catch(error){
//     console.log('faild catch fetch api: ', error)
//     throw error; 
//    }
//   }
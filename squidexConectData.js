
const accessToken = process.env.NEXT_PUBLIC_SQUIDEX_TOKEN


export default async function fetchAPI(query, { variables } = {}) {
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
  
    if (json.errors) {
      console.error(json.errors);
      throw new Error("Failed to fetch API");
    }
  
    return json.data;
  }
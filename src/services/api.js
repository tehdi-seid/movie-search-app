
const API_KEY="bae74061e3ed0c36c019dd6da345d015"
const BASE_URL="https://api.themoviedb.org/3"
export async function getPopularMovie(){
    const res=await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
    const data=await res.json()
    console.log(data)
    return data.results
    
}

export async function searchMovie(query) {
  const res = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
  );

  const data = await res.json();

  console.log(data);
  return data.results;
}

// export async function searchMovie(query){
//     const res=await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`)
//     const data=await res.json()
//     console.log(data)
//     return data.results
// }
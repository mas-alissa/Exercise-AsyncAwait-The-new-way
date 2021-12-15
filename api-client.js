let API_KEY = "62b6b4eebfc641ac3280ea8a2e571025";



async function getData(){
 try {
    let apiUrl = "https://api.themoviedb.org/3/genre/movie/list";
    let res = await fetch(apiUrl + "?api_key=" + API_KEY )
     let moviesTypes = await res.json();
      console.log(moviesTypes)
 }
 catch(err) {
    console.log(err)
 }
}



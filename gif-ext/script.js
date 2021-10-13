console.log("Hello");
async function trendingGif() {
  const testUrl = "https://jsonplaceholder.typicode.com/users";
  const url =
    "https://api.giphy.com/v1/gifs/trending?api_key=FF3fCoZAe5HC9Ns3AWQKmqKbttPEDMux&limit=20&rating=g";
  const response = await (await fetch(url)).json();
  return response;
}
trendingGif()
  .then((res) => {
    console.log(res.data);
    showGif(res.data);
  })
  .catch((error) => {
    console.log("eror is : " + error);
  });

function showGif(gifs) {
  for (let gif of gifs) {
    console.log(gif.images.original.url);
    setGif(gif.images.original.url);
  }
}

function setGif(link) {
  let imgTag = document.getElementById("gifContainer");
  imgTag.innerHTML += `<a href="${link}" target="_blank" ><img src="${link}" height="200px" width="200px"></a>`;
}

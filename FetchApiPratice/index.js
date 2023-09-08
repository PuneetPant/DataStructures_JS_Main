import fetch from "node-fetch";

const getMethodApiResponse = async () => {
  try {
    let resp = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    let data = await resp.json();
    // console.log(data)
    return data;
  } catch (e) {
    return e;
  }
}

const postMethodApi = async (body) => {
  try {
    let resp = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
      })
    })
    let data = resp.json();
    return data
  } catch (e) {
    return e;
  }
}


const main = async () => {
  // GET Method
  // let data = await getMethodApiResponse();
  // console.log("data: ", data)

  // POST Method
  let data = await postMethodApi();
  console.log(data)
}
main();
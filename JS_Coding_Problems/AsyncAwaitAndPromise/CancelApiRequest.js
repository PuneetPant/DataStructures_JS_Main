import fetch from "node-fetch";
const controller = new AbortController();
const { signal } = controller;
const getData = async (url) => {
  try {
    const response = await fetch(url, {
      method: "GET", // *GET, POST, PUT, DELETE, etc
      headers: {
        "Content-Type": "application/json", // header
      },
      signal
    });
    const data = await response.json();
    return data;
  } catch (e) {
    console.log('here')
    return { message: e }
  }
}


const main = async () => {
  const apiUrl1 = "https://jsonplaceholder.typicode.com/todos";
  const data = await getData(apiUrl1);
  setTimeout(() => controller.abort(), 2000);
  console.log("data: ", data)
}

main();
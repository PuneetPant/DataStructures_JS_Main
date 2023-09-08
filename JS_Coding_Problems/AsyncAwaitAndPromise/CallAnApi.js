import fetch from "node-fetch";

const getData = async (url) => {
  try {
    const response = await fetch(url, {
      method: "GET", // *GET, POST, PUT, DELETE, etc
      headers: {
        "Content-Type": "application/json", // header
      },
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
  const apiUrl2 = "https://reqbin.com/echo/get/json"
  const data = await getData(apiUrl1);
  console.log("data: ", data)
}

main()
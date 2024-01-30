export async function getRandomPoetry(): Promise<any> {
  return new Promise((resolve, reject) => {
    fetch("https://v1.hitokoto.cn/?c=d&c=i&encode=json&lang=cn", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        resolve({
          poetry: data.hitokoto,
          name: data.from_who,
        });
      })
      .catch((err) => {
        reject(err);
      });
  });
}

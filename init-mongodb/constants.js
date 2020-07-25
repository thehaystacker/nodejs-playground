// const PROTOCOL = "mongodb";
// const HOST = "127.0.0.1";
// const PORT = "27018";

// module.exports = {
//   URL_CONNECTION: `${PROTOCOL}://${HOST}:${PORT}`,
//   DATABASE_NAME: "db_tasks",
// };

const add = (x, y) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (y === 2) {
        reject(`x === ${x}`);
      }
      resolve(x + y);
    }, 2000);
  });
};

add(2, 4)
  .then((sum) => {
    console.log("[add] sum", sum);
    return add(sum, 2);
  })
  .then((sum2) => {
    console.log("[add] sum2", sum2);
  })
  .catch((error) => {
    console.log("[add] error", error);
  });

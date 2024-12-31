// const fectData = new Promise((resolve, reject) => {
//   let success = true;
//   if (success) {
//     resolve("Data fetched successfully!");
//   } else {
//     reject("too bad");
//   }
// });

// export default fetchData;

const fetchData = (success = true) => {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve("resolved succefully!");
    } else {
      reject("Too bad!");
    }
  });
};

export default fetchData;

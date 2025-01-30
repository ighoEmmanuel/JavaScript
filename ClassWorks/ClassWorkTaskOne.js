const getPentagona = (element) => {
  let answer = 0;
  for (let count = 1; count <= element; count++) {
    answer = count * (3 * count - 1) / 2;
    console.log(`${count} = ${answer}`);
  }
};

getPentagona(100);

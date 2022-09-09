function fibonacci(num) {
  let number_1 = 0;
  let number_2 = 1;
  let next_num;
  let array_number = [];

  for (let i = 0; i <= num; i++) {
    next_num = number_1 + number_2;

    number_1 = number_2;
    number_2 = next_num;

    array_number.push(number_1);
  }

  return array_number;
}

console.log(fibonacci(20));

function* fibonacci(f1, f2) {
  while (true) {
    temp = f1;

    f1 = f2;

    yield (f2 = temp + f2);
  }
}

let gen = fibonacci(0, 1);

setInterval(() => {
  console.log(gen.next().value);
}, Math.random() * 1000);

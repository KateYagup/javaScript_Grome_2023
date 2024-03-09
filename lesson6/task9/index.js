function withdraw(clients, balances, client, amount) {
  console.log('Работа функции');
  let number;
  console.log(client);
  for (let i = 0; i < clients.length; i++) {
    console.log(clients[i]);
    if (clients[i] === client) {
      number = i;
      console.log(i);
      break;
    }
  }
  console.log(clients[number]);
  console.log(balances[number]);
  console.log(amount);

  if (balances[number] >= amount) {
    balances[number] -= amount;
    return balances[number];
  }
  if (balances[number] < amount) {
    return -1;
  }
}
// withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50);
console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50));
//   Пример работы:
//   Input: withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50)
//   Output: 37 (и массив balances должен быть [1400, 37, -6])
//   Input: withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10)
//   Output: -1 (и массив balances должен быть [1400, 87, -6])
console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10));

// 1) Create a list function using map() and arrow function
function list(array) {
  const listItems = array.map((client, index) => {
    return `
<li class="list-group-item d-flex justify-content-between" data-index="${index}">
  ${client.name}
  <strong>$ ${client.balance}</strong>
</li>`;
  });

  return listItems.join('');
}


// 2) Create an order function using sort() and arrow function
function order(array, property) {
  return [...array].sort((a, b) => {

    const aVal = a[property];
    const bVal = b[property];

    // numbers
    if (typeof aVal === 'number') {
      return aVal - bVal;
    }

    // strings with toLowerCase
    const aStr = aVal.toLowerCase();
    const bStr = bVal.toLowerCase();

    if (aStr > bStr) return 1;
    if (aStr < bStr) return -1;
    return 0;
  });
}


// 3) Create a total function using reduce() and arrow function
function total(array) {
  return array.reduce((sum, client) => sum + client.balance, 0);
}


// 4) Create an info function using find() and arrow function
function info(index) {
  return clients.find(client => client.index === index);
}


// 5) Create a search function using filter() and arrow function
// Hint: use toLowerCase() on both query and client name
function search(query) {
  const q = query.toLowerCase();

  return clients.filter(client =>
    client.name.toLowerCase().includes(q)
  );
}

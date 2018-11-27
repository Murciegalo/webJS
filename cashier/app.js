console.log('works?');
  // due
  let amountDue = prompt('Amount Due:');
  // payment
  let amountPaid = prompt('Payment:');
  //Change
  let change = parseFloat(Math.abs(amountDue - amountPaid).toFixed(2));
  console.log(` Due:  £ ${amountDue} - Paid: £ ${amountPaid} - Change:  £ ${change}`);
   //print change on local currency
   const money = [{value: 50, name: '£50 notes: '},
    {value: 20, name: '£20 notes: '}, {value: 10, name: '£10 notes: '},  {value: 5, name: '£5 notes: '}, {value: 2, name: '£2 coins: '}, {value: 1, name: '£1 coins: '}, {value: .5, name: '£50p coins: '}, {value: .2, name: '£20p coins: '}, {value: .1, name: '£10p coins: '},
   {value: .05, name: '£5p coins'}];
   let i = 0;
    while(change > 0){
      //Does the change amount contain this bank note?
      money[i].return = Math.floor(change / (money[i].value));
      change = (change%(money[i].value)).toFixed(2);
      money[i].return > 0 ? console.log(`${money[i].name } ${money[i].return}`) : '' ;
      i++;
    }

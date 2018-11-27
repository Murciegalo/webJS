console.log('works?');
  // due
  let amountDue = prompt('Amount Due:');
  // payment
  let amountPaid = prompt('Payment:');
  //Change
  let change = parseFloat(Math.abs(amountDue - amountPaid).toFixed(2));
  console.log(` Due:  £ ${amountDue} - Paid: £ ${amountPaid} - Change:  £ ${change}`);
   //print change on local currency
   let value, coinName, toReturn;
   [value ,coinName] = [50, '£50 notes: ',]
   //Does the change amount contain this bank note?
   toReturn = Math.floor(change / value);
   change = (change%value).toFixed(2);
   toReturn > 0 ? console.log(`${coinName} ${toReturn}`) : '' ;
   // 20
   [value, coinName] = [20, '£20 notes: '];
   //Does the change amount contain this bank note?
   toReturn = Math.floor(change / value);
   change= (change%value).toFixed(2);
   toReturn > 0 ? console.log(`${coinName} ${toReturn}`) : 0 ;
   // 10
   [value, coinName] = [10, '£10 notes: '];
   //Does the change amount contain this bank note?
   toReturn = Math.floor(change / value);
   change= (change%value).toFixed(2);
   toReturn > 0 ? console.log(`${coinName} ${toReturn}`) : 0 ;
   // COINS
   // 2
   [value, coinName] = [2, '£2 coins: '];
   //Does the change amount contain this bank note?
   toReturn = Math.floor(change / value);
   change= (change%value).toFixed(2);
   toReturn > 0 ? console.log(`${coinName} ${toReturn}`) : 0 ;
   //1
   [value, coinName] = [1, '£1 coins: '];
   //Does the change amount contain this bank note?
   toReturn = Math.floor(change / value);
   change= (change%value).toFixed(2);
   toReturn > 0 ? console.log(`${coinName} ${toReturn}`) : 0 ;
   //.50
   [value, coinName] = [.5, '£.50 coins: '];
   //Does the change amount contain this bank note?
   toReturn = Math.floor(change / value);
   change= (change%value).toFixed(2);
   toReturn > 0 ? console.log(`${coinName} ${toReturn}`) : 0 ;
   [value, coinName] = [.20, '£.20 coins: '];
   //Does the change amount contain this bank note?
   toReturn = Math.floor(change / value);
   change= (change%value).toFixed(2);
   toReturn > 0 ? console.log(`${coinName} ${toReturn}`) : 0 ;
   //.10
   [value, coinName] = [.10, '£.10 coins: '];
   //Does the change amount contain this bank note?
   toReturn = Math.floor(change / value);
   change = (change%value).toFixed(2);
   toReturn > 0 ? console.log(`${coinName} ${toReturn}`) : 0 ;

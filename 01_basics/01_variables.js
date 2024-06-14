const accountId = 132223
let accountEmail = "mohitjoping1@gmail.com"
var accountPassword = "123456"
accountCity = "medtha"

console.log(accountId)

let accountState;

// accountId = 2 // not allowed


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
var score = 33;
score = 44;
score = "55";
var hector = { name: "Hector", id: 225 };
hector = { username: "hg", id: 110 };
/* const getDbId = (id: number | string) => {
  // Making some API calls
  console.log(`DB is is: ${id}`);
}; */
var getDbId = function (id) {
    typeof id === "string" && id.toLowerCase();
};
getDbId(3);
getDbId("3");
// Array
var dataNumber = [1, 2, 3];
var dataString = ["1", "2", "3"];
var dataMixedUp = ["1", "2", 3];
var selectedFruits;
selectedFruits = "Pear";
// selectedFruits = "Banana";

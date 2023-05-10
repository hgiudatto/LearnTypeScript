let score: number | string = 33;
score = 44;
score = "55";

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let hector: User | Admin = { name: "Hector", id: 225 };

hector = { username: "hg", id: 110 };

/* const getDbId = (id: number | string) => {
  // Making some API calls
  console.log(`DB is is: ${id}`);
}; */

const getDbId = (id: number | string) => {
  typeof id === "string" && id.toLowerCase();
};

getDbId(3);
getDbId("3");

// Array
const dataNumber: number[] = [1, 2, 3];
const dataString: string[] = ["1", "2", "3"];
const dataMixedUp: (string | number)[] = ["1", "2", 3];

let selectedFruits: "Apple" | "Pear" | "Grapefruit";
selectedFruits = "Pear";
// selectedFruits = "Banana";

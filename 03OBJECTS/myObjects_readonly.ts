type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  credCardDetails?: number;
};

let myUser: User = {
  _id: "1245",
  name: "h",
  email: "h@h.com",
  isActive: false,
};

type cardNumber = {
  cardnumber: string;
};

type cardDate = {
  cardDate: string;
};

type cardDetails = cardNumber & cardDate & { cvv: number };

myUser.email = "h@gmail.com";

console.log(`User Email: ${myUser.email}`);
console.log(`User Id: ${myUser._id}`);

export {};

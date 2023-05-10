function addTwo(num: number): number {
  return num + 2;
  // return "hello";
}

function getUpper(val: string) {
  console.log(val.toUpperCase());
}

function signUpUser(name: string, email: string, isPaid: boolean) {
  console.log(
    `User: ${name} with email: ${email} -> ${
      isPaid ? `Is Paid` : `Is Not Paid`
    }`
  );
}

const loginUser = (name: string, email: string, isPaid: boolean = false) => {
  console.log(
    `User: ${name} with email: ${email} -> ${
      isPaid ? `Is Paid` : `Is Not Paid`
    }`
  );
};

let myValue = addTwo(5);
getUpper("Pomona");
signUpUser("John", "john@mailchimp.com", true);
loginUser("John", "john@mailchimp.com");

const getHello = (s: string): string => {
  return "";
};

const heroes = ["thor", "spiderman", "ironman"];

const getHeroes = () => {
  heroes.map((hero): string => {
    return `Hero is: ${hero}`;
  });
};

function consoleError(errmsg: string): void {
  console.log(errmsg);
}

function handleError(errmsg: string): never {
  throw new Error(errmsg);
}

export {};

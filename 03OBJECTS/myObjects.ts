const User = {
  name: "Hector",
  email: "hector@mailchimp.com",
  isActive: true,
};

const createUser = ({ name: string, isPaid: boolean }) => {};

createUser({ name: "Hector", isPaid: true });

const createCourse = (): { name: string; price: number } => {
  return { name: "reactjs", price: 399 };
};

// Type Aliases
type User = {
  name: string;
  email: string;
  isActive: boolean;
};

const createUserAlias = (user: User): User => {
  return { name: "", email: "", isActive: false };
};

createUserAlias({ name: "", email: "", isActive: false });

export {};

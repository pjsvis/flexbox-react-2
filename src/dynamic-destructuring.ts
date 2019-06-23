// bms Breach section interfaces
export interface AboutYou {
  firstName: string | null;
  lastName: string | null;
  age: number | null;
  isResident: boolean | null;
  favouriteColours: string[];
}

interface AddressDetails {
  houseNum: number | null;
  street: string | null;
  town: string | null;
}

interface Breach {
  id: number | null;
  aboutYou: AboutYou;
  addressDetails: AddressDetails;
}

// Example breach record
const breach: Breach = {
  id: 1,
  aboutYou: {
    firstName: "Peter",
    lastName: "Smith",
    age: 21,
    isResident: true,
    favouriteColours: ["red", "yellow", "blue"]
  },
  addressDetails: {
    houseNum: 27,
    street: "Sloan Street",
    town: "Edinburgh"
  }
};

console.log("input breach", breach);

// combined section fields
type Combined = AboutYou & AddressDetails;
const aboutYou = breach.aboutYou;
const addressDetails = breach.addressDetails;

const initialValues = { ...aboutYou, ...addressDetails };

// final-form mutates returns the changed initial values
const formValues: Partial<Combined> = {
  firstName: "Erik",
  lastName: "Rasmussen",
  isResident: false,
  favouriteColours: ["pink", "cerise", "indigo"],
  // houseNum: 42,
  // street: "Black Street",
  town: "Glasgow"
};

// merge the updated and initial values
const initAndFormValues: Combined = { ...initialValues, ...formValues };

const {
  firstName,
  lastName,
  age,
  isResident,
  favouriteColours,
  houseNum,
  street,
  town
}  = initAndFormValues;

const updatedAboutYou: AboutYou = {
  firstName,
  lastName,
  isResident,
  age,
  favouriteColours
};
const updatedAddressDetails: AddressDetails = { houseNum, street, town };

breach.aboutYou = updatedAboutYou;
breach.addressDetails = updatedAddressDetails;
console.log("updated breach", breach);

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
  status: string;
  aboutYou: AboutYou;
  addressDetails: AddressDetails;
}

// Example breach record
const breach: Breach = {
  id: 1,
  status: 'ABOUTYOU',
  aboutYou: {
    firstName: 'Peter',
    lastName: 'Smith',
    age: 21,
    isResident: true,
    favouriteColours: ['red', 'yellow', 'blue'],
  },
  addressDetails: {
    houseNum: 27,
    street: 'Sloan Street',
    town: 'Edinburgh',
  },
};

// combined section fields
type FormValues = AboutYou & AddressDetails;
const aboutYou = breach.aboutYou;
const addressDetails = breach.addressDetails;

// create our initial values that we will send in to the form
const initialValues: FormValues = { ...aboutYou, ...addressDetails };

// final-form mutates returns the changed initial values
const formValues: Partial<FormValues> = {
  firstName: 'Erik',
  lastName: 'Rasmussen',
  isResident: false,
  favouriteColours: ['pink', 'cerise', 'indigo'],
  // houseNum: 42,
  // street: "Black Street",
  town: 'Glasgow',
};

// merge the updated and initial values
const updatedFormValues: FormValues = { ...initialValues, ...formValues };

// destructure all of the form values
const {
  firstName,
  lastName,
  age,
  isResident,
  favouriteColours,
  houseNum,
  street,
  town,
} = updatedFormValues;

// recreate the breach sections
const updatedAboutYou: AboutYou = {
  firstName,
  lastName,
  isResident,
  age,
  favouriteColours,
};
const updatedAddressDetails: AddressDetails = { houseNum, street, town };

// add the updated sections to the breach
breach.aboutYou = updatedAboutYou;
breach.addressDetails = updatedAddressDetails;
breach.status = 'ADDRESSDETAILS';

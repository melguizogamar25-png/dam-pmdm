import { Owner } from "./owner-interface";
import { Pet } from "./pet-interface";

export interface PetRegistration {
  owner: Owner;
  pet: Pet;
  account: {
    password: string;
  };
  visit: {
    reason: string;
  };
  consents: {
    privacyPolicy: boolean;
    vaccineReminders: boolean;
  };
}

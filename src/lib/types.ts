export interface VaccineDose {
  days: number;
  description: string;
}

export enum VaccineType {
  FREE = "free",
  SELF_PAID = "selfPaid",
}

export interface VaccineConfig {
  name: string;
  schedule: VaccineDose[];
  description: string;
  type: VaccineType;
}

export interface VaccineConfigs {
  [key: string]: VaccineConfig;
}

export interface SelectedVaccines {
  [key: string]: boolean;
}

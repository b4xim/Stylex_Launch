export type ScreenView = 'launch' | 'location';

export interface ServiceItem {
  id: string;
  category: 'hair' | 'skin' | 'bridal' | 'groom' | 'spa';
  categoryLabel: string;
  name: string;
  tagline: string;
  duration: string;
  price: string;
  startingPrice?: number;
  featured?: boolean;
  badge?: string;
  description: string;
  includes: string[];
}

export interface AppointmentData {
  clientName: string;
  phone: string;
  serviceId: string;
  serviceName: string;
  date: string;
  timeSlot: string;
  notes: string;
}

export interface SalonDetails {
  brandName: string;
  subBrand: string;
  flagshipLocation: string;
  phoneDisplay: string;
  phoneNumberClean: string;
  whatsappNumber: string;
  addressLine1: string;
  addressLine2: string;
  landmark: string;
  city: string;
  pincode: string;
  hours: string;
  hoursDetail: string;
  instagramHandle: string;
  instagramUrl: string;
  mapsUrl: string;
}

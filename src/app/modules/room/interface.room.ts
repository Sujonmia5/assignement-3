export type TRoom = {
  name: string;
  roomNo: number;
  floorNo: number;
  capacity: number;
  pricePerSlot: number;
  amenities: string[];
  isDeleted: boolean;
};

export type TUserRole = {
  email: string;
  role: string;
  iat: number;
};

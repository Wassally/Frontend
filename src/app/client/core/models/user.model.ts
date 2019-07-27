export class User {
  email: string;
  firstName: string;
  lastName: string;
  id: number;
  image: string;
  is_captain?: boolean;
  is_client?: boolean;
  packages: [{}];
  phone_number: string;
  username: string;
  userAddress: [];

  Address: {
    formated_address: string;
    location: {
      latitude: number;
      longitude: number;
    };
    address_description: string;
  };

  constructor(UserRespond: any) {
    this.id = UserRespond.id;
    this.firstName = UserRespond.first_name;
    this.email = UserRespond.email;
    this.lastName = UserRespond.last_name;
    this.image = UserRespond.image;
    this.phone_number = UserRespond.phone_number;
    this.username = UserRespond.username;
    this.packages = UserRespond.packages;
    this.userAddress = UserRespond ? UserRespond.user_addresses : [{}];
  }
}

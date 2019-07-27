/**
 * new Delevery model   from UI to server
 * this model is for the api request
 *get data from View Form and assign it to the model
 *
 */

export class NewDelivery {
  public receiver_name: string;
  public receiver_phone_number: number;
  public duration: number;
  public weight: number;
  public note: string;
  public transport_way: string;
  public package_address: {
    to_address: {
      location: {
        latitude: number;
        longitude: number;
      };
      formated_address: string;
      address_description: string;
    };
    from_address: any;
  };

  public sender_phone_number: number;

  constructor(newPackage: any) {
    this.sender_phone_number = newPackage.sender_phone_number;
    this.receiver_name = newPackage.receiver_name;
    this.receiver_phone_number = newPackage.receiver_phone_number;
    this.duration = newPackage.duration;
    this.weight = newPackage.weight;
    this.transport_way = newPackage.transport_way;
    this.package_address.from_address = newPackage.from_address;
    this.package_address.to_address = newPackage.to_address;
    this.note = newPackage.note;

    /**
     * location from map
     * now its a default  and will comming soon  after implement the Google Map
     */
  }
}

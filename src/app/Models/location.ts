

export interface location {
    position: [number, number],
    address: address,
}

export interface address {
    text: string,
    house: number,
    street: string,
    postalCode: number;
    district: string,
    city: string;
    county: string,
    stateCode: string,
    country: string,
    countryCode: string,
}
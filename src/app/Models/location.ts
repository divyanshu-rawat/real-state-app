

export interface location {
    position: number[],
    address: address,
}

interface address {
    text: string,
    house: string,
    street: string,
    postalCode: string;
    district: string,
    city: string;
    county: string,
    stateCode: string,
    country: string,
    countryCode: string,
}
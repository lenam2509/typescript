import {faker} from '@faker-js/faker'
export class User{
    name: string;
    lat: number;
    lng: number;
    constructor(){
        this.name = faker.person.fullName();
        this.lat = faker.location.latitude();
        this.lng =  faker.location.longitude();
    }
}

export class Company{
    name: string;
    catchPhrase: string;
    location: {
        lat: number;
        lng: number;
    }
    constructor(){
        this.name = faker.company.name();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            lat: faker.location.latitude(),
            lng: faker.location.longitude()
        }
    }
}
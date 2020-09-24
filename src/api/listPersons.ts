import * as faker from "faker"
import { QueryResponse, getEmptyQueryResponse } from "./QueryResponse";
import Person from "./types/Person"

const fakePerson = (): Person => {

    const maybe = (x: any) => Math.random() > 0.4 ? x : undefined
    const img = maybe(faker.image.avatar());
    const birthDate = maybe(faker.date.past(100));
    const birthCountry = maybe(faker.address.country());
    const birthCity = maybe(faker.address.city());

    return {
        name: `${faker.name.lastName()}, ${faker.name.firstName()}`,
        id: faker.random.uuid(),
        img,
        birthDate,
        birthCity,
        birthCountry
    }
}


export function listPersons(options: { count: number }): Promise<QueryResponse<Person>> {

    return new Promise(function (resolve, reject) {
        // fail 0.5% of the time
        if (Math.random() < 0.1) {
            const error = `Error: ${faker.lorem.sentence()}`
            console.error(error)
            reject(error)
        }

        let result = getEmptyQueryResponse<Person>()
        Array(Math.round(options.count * Math.random())).fill({}).forEach(() => {
            const newFakePerson = fakePerson()
            result.items.push(newFakePerson);
        })

        resolve(result)
    })

}
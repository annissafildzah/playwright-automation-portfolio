import { faker } from "@faker-js/faker"

export const validUserData = {
    username: 'admin',
    password: 'password123'
}

export const invalidUserData = {
    username: faker.username,
    password: faker.password,
}
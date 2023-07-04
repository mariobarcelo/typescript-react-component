/*
 * Author: Luigelo Davila Vilchez (luigelo.davila@applus.com)
 * -----
 * Last Modified: Wednesday, 21st June 2023 5:59:55 pm
 * -----
 * Copyright ©2023, Applus+ Laboratories
 */

// Factories
import { createGraphUser, createUserImage } from "@/factories/data/userFactory"

import { GraphUserImageInterface, GraphUserObjectInterface } from "../../types/data"

/**
 * getUsers: Get a List of GraphUserObjectInterface Objects
 * @returns 
 */
export const getUsers = (): GraphUserObjectInterface[] | null => {
    // TODO:  The return type must be a GraphUserObjectInterface Objects List not null allowed
    return null
}

/**
 * getUser: Get a GraphUserObjectInterface Object
 * @returns 
 */
export const getUser = (): GraphUserObjectInterface => {
    return createGraphUser()
}

/**
 * getUserPhoto: Get a GraphUserImageInterface Object
 * @returns 
 */
export const getUserPhoto = (): GraphUserImageInterface => {
    return {
        url: createUserImage()
    }
}
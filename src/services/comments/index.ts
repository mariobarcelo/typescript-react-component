/*
 * Author: Luigelo Davila Vilchez (luigelo.davila@applus.com)
 * -----
 * Last Modified: Wednesday, 21st June 2023 5:59:04 pm
 * -----
 * Copyright ©2023, Applus+ Laboratories
 */

// Factories
import { createComment } from '@/factories/data/commentFactory'
// Types
import type { CommentObjectInterface } from '@/types'

/**
 * Get Comments: Get a List of comments
 * @returns
 */
export const getComments = (): CommentObjectInterface[] | null => {
    // TODO:  The return type must be a CommentObjectInterface Objects List not null allowed
    return null
}

/**
 * Get Comment: Get a comment Object
 * @returns 
 */
export const getComment = (): CommentObjectInterface => {
    return createComment()
}
/**
 * This is auto-generated file by Quorini app
 * contatining GraphQL queries dedicated for users 
 * based on access permission of the project.
 * 
 * Place it in your web app project in ./src/quorini-queries.ts
 */

import { ObjectId } from "bson"

import type { Admin, Customer } from "./quorini-types"

type QueryWithParams<VarsType, ResponseType> = string & {
  __queryVars: VarsType
  __queryResponse: ResponseType
}

export type getAdminVars = {
  id: string  
}

export type getAdminResponse = {
  getAdmin: {
    fullName?: string | "deprecated"
    _id?: ObjectId
  createdAt?: Date
  updatedAt?: Date
  createdBy?: ObjectId
  email?: string
  invitedBy?: ObjectId
  status?: string
  }
}

/**
* Administartion user has full control of project application.
*/
export const getAdmin = `query get($id: ID!) { getAdmin(id: $id) {
fullName _id createdAt updatedAt createdBy email invitedBy status} }` as QueryWithParams<
  getAdminVars,
  getAdminResponse 
>


export type getCustomerVars = {
  id: string  
}

export type getCustomerResponse = {
  getCustomer: {
    firstName?: string | "deprecated"
    lastName?: string
  email?: string | "deprecated"
  address?: string
  phoneNumber?: number | "deprecated"
  special?: string
  _id?: ObjectId
  createdAt?: Date
  createdBy?: ObjectId
  updatedAt?: Date
  status?: string
  invitedBy?: ObjectId
  }
}

/**
* undefined
*/
export const getCustomer = `query get($id: ID!) { getCustomer(id: $id) {
firstName lastName email address phoneNumber special _id createdAt createdBy updatedAt status email invitedBy} }` as QueryWithParams<
  getCustomerVars,
  getCustomerResponse 
>


export type listAdminsVars = {
    
  filter: AdminFilterInput
  limit?: number
  nextToken?: string
}

export type listAdminsResponse = {
  listAdmins: {
    fullName?: string | "deprecated"
    _id?: ObjectId
  createdAt?: Date
  updatedAt?: Date
  createdBy?: ObjectId
  email?: string
  invitedBy?: ObjectId
  status?: string
  }[]
}

export type AdminFilterInput = {
  fullName?: {
    eq?: string
    contains?: string
    in?: string
    ne?: string
  }
  _id?: {
    eq?: ObjectId
    in?: ObjectId
    ne?: ObjectId
  }
  createdAt?: {
    eq?: Date
    in?: Date
    ne?: Date
  }
  updatedAt?: {
    eq?: Date
    in?: Date
    ne?: Date
  }
  createdBy?: {
    eq?: ObjectId
    in?: ObjectId
    ne?: ObjectId
  }
  email?: {
    eq?: string
    contains?: string
    in?: string
    ne?: string
  }
  invitedBy?: {
    eq?: ObjectId
    in?: ObjectId
    ne?: ObjectId
  }
  status?: {
    eq?: string
    contains?: string
    in?: string
    ne?: string
  }
}

/**
* Administartion user has full control of project application.
*/
export const listAdmins = `query list(
  $filter: AdminFilterInput
  $limit: Int
  $nextToken: String
) { listAdmins(filter: $filter, limit: $limit, nextToken: $nextToken) {
fullName _id createdAt updatedAt createdBy email invitedBy status _id createdAt updatedAt createdBy email invitedBy status} }` as QueryWithParams<
  listAdminsVars,
  listAdminsResponse
>


export type listCustomersVars = {
    
  filter: CustomerFilterInput
  limit?: number
  nextToken?: string
}

export type listCustomersResponse = {
  listCustomers: {
    firstName?: string | "deprecated"
    lastName?: string
  email?: string | "deprecated"
  address?: string
  phoneNumber?: number | "deprecated"
  special?: string
  _id?: ObjectId
  createdAt?: Date
  createdBy?: ObjectId
  updatedAt?: Date
  status?: string
  invitedBy?: ObjectId
  }[]
}

export type CustomerFilterInput = {
  firstName?: {
    eq?: string
    contains?: string
    in?: string
    ne?: string
  }
  lastName?: {
    eq?: string
    contains?: string
    in?: string
    ne?: string
  }
  email?: {
    eq?: string
    contains?: string
    in?: string
    ne?: string
  }
  address?: {
    eq?: string
    contains?: string
    in?: string
    ne?: string
  }
  phoneNumber?: {
    eq?: number
    in?: number
    ne?: number
  }
  special?: {
    eq?: string
    contains?: string
    in?: string
    ne?: string
  }
  _id?: {
    eq?: ObjectId
    in?: ObjectId
    ne?: ObjectId
  }
  createdAt?: {
    eq?: Date
    in?: Date
    ne?: Date
  }
  createdBy?: {
    eq?: ObjectId
    in?: ObjectId
    ne?: ObjectId
  }
  updatedAt?: {
    eq?: Date
    in?: Date
    ne?: Date
  }
  status?: {
    eq?: string
    contains?: string
    in?: string
    ne?: string
  }
  invitedBy?: {
    eq?: ObjectId
    in?: ObjectId
    ne?: ObjectId
  }
}

/**
* undefined
*/
export const listCustomers = `query list(
  $filter: CustomerFilterInput
  $limit: Int
  $nextToken: String
) { listCustomers(filter: $filter, limit: $limit, nextToken: $nextToken) {
firstName lastName email address phoneNumber special _id createdAt createdBy updatedAt status email invitedBy _id createdAt createdBy updatedAt status email invitedBy} }` as QueryWithParams<
  listCustomersVars,
  listCustomersResponse
>

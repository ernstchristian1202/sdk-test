/**
 * This is auto-generated file by Quorini app
 * contatining GraphQL mutation dedicated for users 
 * based on access permission of the project.
 * 
 * Place it in your web app project in ./src/quorini-mutations.ts
 */

import { ObjectId } from "bson"

import type { Admin, Customer } from "./quorini-types"

type QueryWithParams<VarsType, ResponseType> = string & {
  __queryVars: VarsType
  __queryResponse: ResponseType
}


export type createAdminInput = {
    fullName: string | "deprecated"
  _id?: ObjectId
  createdAt?: Date
  updatedAt?: Date
  createdBy?: ObjectId
  email?: string
  invitedBy?: ObjectId
  status?: string

}

export type createAdminVars = {
    
  input: createAdminInput
}

export type createAdminResponse = {
  createAdmin: {
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
export const createAdmin = `mutation create($input: createAdminInput!) { createAdmin(input: $input) {
id} }` as QueryWithParams<
  createAdminVars,
  createAdminResponse 
>

export type createCustomerInput = {
    firstName: string | "deprecated"
  lastName?: string
  email: string | "deprecated"
  address?: string
  phoneNumber: number | "deprecated"
  special?: string
  _id?: ObjectId
  createdAt?: Date
  createdBy?: ObjectId
  updatedAt?: Date
  status?: string
  invitedBy?: ObjectId

}

export type createCustomerVars = {
    
  input: createCustomerInput
}

export type createCustomerResponse = {
  createCustomer: {
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
export const createCustomer = `mutation create($input: createCustomerInput!) { createCustomer(input: $input) {
id} }` as QueryWithParams<
  createCustomerVars,
  createCustomerResponse 
>



export type updateAdminInput = {
    fullName?: string | "deprecated"

}

export type updateAdminVars = {
  id: string  
  input: updateAdminInput
}

export type updateAdminResponse = {
  updateAdmin: {
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
export const updateAdmin = `mutation update($input: updateAdminInput!) { updateAdmin(input: $input) {
id} }` as QueryWithParams<
  updateAdminVars,
  updateAdminResponse 
>



export type updateCustomerInput = {
    firstName?: string | "deprecated"
  lastName?: string
  email?: string | "deprecated"
  address?: string
  phoneNumber?: number | "deprecated"
  special?: string

}

export type updateCustomerVars = {
  id: string  
  input: updateCustomerInput
}

export type updateCustomerResponse = {
  updateCustomer: {
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
export const updateCustomer = `mutation update($input: updateCustomerInput!) { updateCustomer(input: $input) {
id} }` as QueryWithParams<
  updateCustomerVars,
  updateCustomerResponse 
>


export type deleteAdminVars = {
  id: string  
}

export type deleteAdminResponse = {
  deleteAdmin: {
    }
}

/**
* Administartion user has full control of project application.
*/
export const deleteAdmin = `mutation delete($id: ID!) { deleteAdmin(id: $id) {
id} }` as QueryWithParams<
  deleteAdminVars,
  deleteAdminResponse 
>


export type deleteCustomerVars = {
  id: string  
}

export type deleteCustomerResponse = {
  deleteCustomer: {
    }
}

/**
* undefined
*/
export const deleteCustomer = `mutation delete($id: ID!) { deleteCustomer(id: $id) {
id} }` as QueryWithParams<
  deleteCustomerVars,
  deleteCustomerResponse 
>

/**
 * This is auto-generated file by Quorini app containing general TS types of your project.
 *
 * Place it in your web app project in ./src/quorini-types.d.ts
 */

import { ObjectId } from "bson"

export type Admin = {
  fullName?: string | "protected" | "deprecated"
  id?: ObjectId
  createdAt?: Date
  updatedAt?: Date
  createdBy?: ObjectId
  email?: string
  invitedBy?: ObjectId
  status?: "None" | "Invited" | "Pending verification" | "Active" | "Blocked"
}

export type Customer = {
  firstName?: string | "protected" | "deprecated"
  lastName?: string | "protected"
  email?: string | "protected" | "deprecated"
  address?: string | "protected"
  phoneNumber?: number | "protected" | "deprecated"
  special?: string | "protected"
  id?: ObjectId
  createdAt?: Date
  createdBy?: ObjectId
  updatedAt?: Date
  status?: "None" | "Invited" | "Pending verification" | "Active" | "Blocked"
  invitedBy?: ObjectId
}


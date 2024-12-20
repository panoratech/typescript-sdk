/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  Address,
  Address$inboundSchema,
  Address$Outbound,
  Address$outboundSchema,
} from "./address.js";
import {
  Email,
  Email$inboundSchema,
  Email$Outbound,
  Email$outboundSchema,
} from "./email.js";
import {
  Phone,
  Phone$inboundSchema,
  Phone$Outbound,
  Phone$outboundSchema,
} from "./phone.js";

export type UnifiedCrmCompanyInput = {
  /**
   * The name of the company
   */
  name: string | null;
  /**
   * The industry of the company. Authorized values can be found in the Industry enum.
   */
  industry?: string | null | undefined;
  /**
   * The number of employees of the company
   */
  numberOfEmployees?: number | null | undefined;
  /**
   * The UUID of the user who owns the company
   */
  userId?: string | null | undefined;
  /**
   * The email addresses of the company
   */
  emailAddresses?: Array<Email> | null | undefined;
  /**
   * The addresses of the company
   */
  addresses?: Array<Address> | null | undefined;
  /**
   * The phone numbers of the company
   */
  phoneNumbers?: Array<Phone> | null | undefined;
  /**
   * The custom field mappings of the company between the remote 3rd party & Panora
   */
  fieldMappings?: { [k: string]: any } | null | undefined;
};

/** @internal */
export const UnifiedCrmCompanyInput$inboundSchema: z.ZodType<
  UnifiedCrmCompanyInput,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.nullable(z.string()),
  industry: z.nullable(z.string()).optional(),
  number_of_employees: z.nullable(z.number()).optional(),
  user_id: z.nullable(z.string()).optional(),
  email_addresses: z.nullable(z.array(Email$inboundSchema)).optional(),
  addresses: z.nullable(z.array(Address$inboundSchema)).optional(),
  phone_numbers: z.nullable(z.array(Phone$inboundSchema)).optional(),
  field_mappings: z.nullable(z.record(z.any())).optional(),
}).transform((v) => {
  return remap$(v, {
    "number_of_employees": "numberOfEmployees",
    "user_id": "userId",
    "email_addresses": "emailAddresses",
    "phone_numbers": "phoneNumbers",
    "field_mappings": "fieldMappings",
  });
});

/** @internal */
export type UnifiedCrmCompanyInput$Outbound = {
  name: string | null;
  industry?: string | null | undefined;
  number_of_employees?: number | null | undefined;
  user_id?: string | null | undefined;
  email_addresses?: Array<Email$Outbound> | null | undefined;
  addresses?: Array<Address$Outbound> | null | undefined;
  phone_numbers?: Array<Phone$Outbound> | null | undefined;
  field_mappings?: { [k: string]: any } | null | undefined;
};

/** @internal */
export const UnifiedCrmCompanyInput$outboundSchema: z.ZodType<
  UnifiedCrmCompanyInput$Outbound,
  z.ZodTypeDef,
  UnifiedCrmCompanyInput
> = z.object({
  name: z.nullable(z.string()),
  industry: z.nullable(z.string()).optional(),
  numberOfEmployees: z.nullable(z.number()).optional(),
  userId: z.nullable(z.string()).optional(),
  emailAddresses: z.nullable(z.array(Email$outboundSchema)).optional(),
  addresses: z.nullable(z.array(Address$outboundSchema)).optional(),
  phoneNumbers: z.nullable(z.array(Phone$outboundSchema)).optional(),
  fieldMappings: z.nullable(z.record(z.any())).optional(),
}).transform((v) => {
  return remap$(v, {
    numberOfEmployees: "number_of_employees",
    userId: "user_id",
    emailAddresses: "email_addresses",
    phoneNumbers: "phone_numbers",
    fieldMappings: "field_mappings",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnifiedCrmCompanyInput$ {
  /** @deprecated use `UnifiedCrmCompanyInput$inboundSchema` instead. */
  export const inboundSchema = UnifiedCrmCompanyInput$inboundSchema;
  /** @deprecated use `UnifiedCrmCompanyInput$outboundSchema` instead. */
  export const outboundSchema = UnifiedCrmCompanyInput$outboundSchema;
  /** @deprecated use `UnifiedCrmCompanyInput$Outbound` instead. */
  export type Outbound = UnifiedCrmCompanyInput$Outbound;
}

export function unifiedCrmCompanyInputToJSON(
  unifiedCrmCompanyInput: UnifiedCrmCompanyInput,
): string {
  return JSON.stringify(
    UnifiedCrmCompanyInput$outboundSchema.parse(unifiedCrmCompanyInput),
  );
}

export function unifiedCrmCompanyInputFromJSON(
  jsonString: string,
): SafeParseResult<UnifiedCrmCompanyInput, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UnifiedCrmCompanyInput$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UnifiedCrmCompanyInput' from JSON`,
  );
}

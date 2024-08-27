/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as z from "zod";

/**
 * The owner type of an email
 */
export enum OwnerType {
    Company = "COMPANY",
    Contact = "CONTACT",
}

export type Email = {
    /**
     * The email address
     */
    emailAddress: string | null;
    /**
     * The email address type. Authorized values are either PERSONAL or WORK.
     */
    emailAddressType: string | null;
    /**
     * The owner type of an email
     */
    ownerType?: OwnerType | null | undefined;
};

/** @internal */
export const OwnerType$inboundSchema: z.ZodNativeEnum<typeof OwnerType> = z.nativeEnum(OwnerType);

/** @internal */
export const OwnerType$outboundSchema: z.ZodNativeEnum<typeof OwnerType> = OwnerType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OwnerType$ {
    /** @deprecated use `OwnerType$inboundSchema` instead. */
    export const inboundSchema = OwnerType$inboundSchema;
    /** @deprecated use `OwnerType$outboundSchema` instead. */
    export const outboundSchema = OwnerType$outboundSchema;
}

/** @internal */
export const Email$inboundSchema: z.ZodType<Email, z.ZodTypeDef, unknown> = z
    .object({
        email_address: z.nullable(z.string()),
        email_address_type: z.nullable(z.string()),
        owner_type: z.nullable(OwnerType$inboundSchema).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            email_address: "emailAddress",
            email_address_type: "emailAddressType",
            owner_type: "ownerType",
        });
    });

/** @internal */
export type Email$Outbound = {
    email_address: string | null;
    email_address_type: string | null;
    owner_type?: string | null | undefined;
};

/** @internal */
export const Email$outboundSchema: z.ZodType<Email$Outbound, z.ZodTypeDef, Email> = z
    .object({
        emailAddress: z.nullable(z.string()),
        emailAddressType: z.nullable(z.string()),
        ownerType: z.nullable(OwnerType$outboundSchema).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            emailAddress: "email_address",
            emailAddressType: "email_address_type",
            ownerType: "owner_type",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Email$ {
    /** @deprecated use `Email$inboundSchema` instead. */
    export const inboundSchema = Email$inboundSchema;
    /** @deprecated use `Email$outboundSchema` instead. */
    export const outboundSchema = Email$outboundSchema;
    /** @deprecated use `Email$Outbound` instead. */
    export type Outbound = Email$Outbound;
}

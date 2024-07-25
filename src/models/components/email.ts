/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as z from "zod";

export type Email = {
    /**
     * The email address
     */
    emailAddress: string;
    /**
     * The email address type. Authorized values are either PERSONAL or WORK.
     */
    emailAddressType: string;
    /**
     * The owner type of an email
     */
    ownerType?: string | undefined;
};

/** @internal */
export namespace Email$ {
    export const inboundSchema: z.ZodType<Email, z.ZodTypeDef, unknown> = z
        .object({
            email_address: z.string(),
            email_address_type: z.string(),
            owner_type: z.string().optional(),
        })
        .transform((v) => {
            return remap$(v, {
                email_address: "emailAddress",
                email_address_type: "emailAddressType",
                owner_type: "ownerType",
            });
        });

    export type Outbound = {
        email_address: string;
        email_address_type: string;
        owner_type?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Email> = z
        .object({
            emailAddress: z.string(),
            emailAddressType: z.string(),
            ownerType: z.string().optional(),
        })
        .transform((v) => {
            return remap$(v, {
                emailAddress: "email_address",
                emailAddressType: "email_address_type",
                ownerType: "owner_type",
            });
        });
}

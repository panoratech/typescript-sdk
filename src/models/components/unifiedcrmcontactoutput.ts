/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import { Address, Address$ } from "./address.js";
import { Email, Email$ } from "./email.js";
import { Phone, Phone$ } from "./phone.js";
import * as z from "zod";

export type UnifiedCrmContactOutputFieldMappings = {};

export type UnifiedCrmContactOutputRemoteData = {};

export type UnifiedCrmContactOutputCreatedAt = {};

export type UnifiedCrmContactOutputModifiedAt = {};

export type UnifiedCrmContactOutput = {
    /**
     * The first name of the contact
     */
    firstName: string;
    /**
     * The last name of the contact
     */
    lastName: string;
    /**
     * The email addresses of the contact
     */
    emailAddresses?: Array<Email> | undefined;
    /**
     * The phone numbers of the contact
     */
    phoneNumbers?: Array<Phone> | undefined;
    /**
     * The addresses of the contact
     */
    addresses?: Array<Address> | undefined;
    /**
     * The UUID of the user who owns the contact
     */
    userId?: string | undefined;
    fieldMappings: UnifiedCrmContactOutputFieldMappings;
    /**
     * The UUID of the contact
     */
    id?: string | undefined;
    /**
     * The id of the contact in the context of the Crm 3rd Party
     */
    remoteId?: string | undefined;
    remoteData: UnifiedCrmContactOutputRemoteData;
    createdAt: UnifiedCrmContactOutputCreatedAt;
    modifiedAt: UnifiedCrmContactOutputModifiedAt;
};

/** @internal */
export namespace UnifiedCrmContactOutputFieldMappings$ {
    export const inboundSchema: z.ZodType<
        UnifiedCrmContactOutputFieldMappings,
        z.ZodTypeDef,
        unknown
    > = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        UnifiedCrmContactOutputFieldMappings
    > = z.object({});
}

/** @internal */
export namespace UnifiedCrmContactOutputRemoteData$ {
    export const inboundSchema: z.ZodType<
        UnifiedCrmContactOutputRemoteData,
        z.ZodTypeDef,
        unknown
    > = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        UnifiedCrmContactOutputRemoteData
    > = z.object({});
}

/** @internal */
export namespace UnifiedCrmContactOutputCreatedAt$ {
    export const inboundSchema: z.ZodType<UnifiedCrmContactOutputCreatedAt, z.ZodTypeDef, unknown> =
        z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        UnifiedCrmContactOutputCreatedAt
    > = z.object({});
}

/** @internal */
export namespace UnifiedCrmContactOutputModifiedAt$ {
    export const inboundSchema: z.ZodType<
        UnifiedCrmContactOutputModifiedAt,
        z.ZodTypeDef,
        unknown
    > = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        UnifiedCrmContactOutputModifiedAt
    > = z.object({});
}

/** @internal */
export namespace UnifiedCrmContactOutput$ {
    export const inboundSchema: z.ZodType<UnifiedCrmContactOutput, z.ZodTypeDef, unknown> = z
        .object({
            first_name: z.string(),
            last_name: z.string(),
            email_addresses: z.array(Email$.inboundSchema).optional(),
            phone_numbers: z.array(Phone$.inboundSchema).optional(),
            addresses: z.array(Address$.inboundSchema).optional(),
            user_id: z.string().optional(),
            field_mappings: z.lazy(() => UnifiedCrmContactOutputFieldMappings$.inboundSchema),
            id: z.string().optional(),
            remote_id: z.string().optional(),
            remote_data: z.lazy(() => UnifiedCrmContactOutputRemoteData$.inboundSchema),
            created_at: z.lazy(() => UnifiedCrmContactOutputCreatedAt$.inboundSchema),
            modified_at: z.lazy(() => UnifiedCrmContactOutputModifiedAt$.inboundSchema),
        })
        .transform((v) => {
            return remap$(v, {
                first_name: "firstName",
                last_name: "lastName",
                email_addresses: "emailAddresses",
                phone_numbers: "phoneNumbers",
                user_id: "userId",
                field_mappings: "fieldMappings",
                remote_id: "remoteId",
                remote_data: "remoteData",
                created_at: "createdAt",
                modified_at: "modifiedAt",
            });
        });

    export type Outbound = {
        first_name: string;
        last_name: string;
        email_addresses?: Array<Email$.Outbound> | undefined;
        phone_numbers?: Array<Phone$.Outbound> | undefined;
        addresses?: Array<Address$.Outbound> | undefined;
        user_id?: string | undefined;
        field_mappings: UnifiedCrmContactOutputFieldMappings$.Outbound;
        id?: string | undefined;
        remote_id?: string | undefined;
        remote_data: UnifiedCrmContactOutputRemoteData$.Outbound;
        created_at: UnifiedCrmContactOutputCreatedAt$.Outbound;
        modified_at: UnifiedCrmContactOutputModifiedAt$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UnifiedCrmContactOutput> = z
        .object({
            firstName: z.string(),
            lastName: z.string(),
            emailAddresses: z.array(Email$.outboundSchema).optional(),
            phoneNumbers: z.array(Phone$.outboundSchema).optional(),
            addresses: z.array(Address$.outboundSchema).optional(),
            userId: z.string().optional(),
            fieldMappings: z.lazy(() => UnifiedCrmContactOutputFieldMappings$.outboundSchema),
            id: z.string().optional(),
            remoteId: z.string().optional(),
            remoteData: z.lazy(() => UnifiedCrmContactOutputRemoteData$.outboundSchema),
            createdAt: z.lazy(() => UnifiedCrmContactOutputCreatedAt$.outboundSchema),
            modifiedAt: z.lazy(() => UnifiedCrmContactOutputModifiedAt$.outboundSchema),
        })
        .transform((v) => {
            return remap$(v, {
                firstName: "first_name",
                lastName: "last_name",
                emailAddresses: "email_addresses",
                phoneNumbers: "phone_numbers",
                userId: "user_id",
                fieldMappings: "field_mappings",
                remoteId: "remote_id",
                remoteData: "remote_data",
                createdAt: "created_at",
                modifiedAt: "modified_at",
            });
        });
}

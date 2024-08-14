/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as z from "zod";

/**
 * The type of the location
 */
export enum LocationType {
    Work = "WORK",
    Home = "HOME",
}

/**
 * The custom field mappings of the object between the remote 3rd party & Panora
 */
export type UnifiedHrisLocationOutputFieldMappings = {};

/**
 * The remote data of the location in the context of the 3rd Party
 */
export type UnifiedHrisLocationOutputRemoteData = {};

export type UnifiedHrisLocationOutput = {
    /**
     * The name of the location
     */
    name?: string | null | undefined;
    /**
     * The phone number of the location
     */
    phoneNumber?: string | null | undefined;
    /**
     * The first line of the street address
     */
    street1?: string | null | undefined;
    /**
     * The second line of the street address
     */
    street2?: string | null | undefined;
    /**
     * The city of the location
     */
    city?: string | null | undefined;
    /**
     * The state or region of the location
     */
    state?: string | null | undefined;
    /**
     * The zip or postal code of the location
     */
    zipCode?: string | null | undefined;
    /**
     * The country of the location
     */
    country?: string | null | undefined;
    /**
     * The type of the location
     */
    locationType?: LocationType | null | undefined;
    /**
     * The UUID of the company associated with the location
     */
    companyId?: string | null | undefined;
    /**
     * The UUID of the employee associated with the location
     */
    employeeId?: string | null | undefined;
    /**
     * The custom field mappings of the object between the remote 3rd party & Panora
     */
    fieldMappings?: UnifiedHrisLocationOutputFieldMappings | null | undefined;
    /**
     * The UUID of the location record
     */
    id?: string | null | undefined;
    /**
     * The remote ID of the location in the context of the 3rd Party
     */
    remoteId?: string | null | undefined;
    /**
     * The remote data of the location in the context of the 3rd Party
     */
    remoteData?: UnifiedHrisLocationOutputRemoteData | null | undefined;
    /**
     * The date when the location was created in the 3rd party system
     */
    remoteCreatedAt?: Date | null | undefined;
    /**
     * The created date of the location record
     */
    createdAt?: Date | null | undefined;
    /**
     * The last modified date of the location record
     */
    modifiedAt?: Date | null | undefined;
    /**
     * Indicates if the location was deleted in the remote system
     */
    remoteWasDeleted?: boolean | null | undefined;
};

/** @internal */
export const LocationType$inboundSchema: z.ZodNativeEnum<typeof LocationType> =
    z.nativeEnum(LocationType);

/** @internal */
export const LocationType$outboundSchema: z.ZodNativeEnum<typeof LocationType> =
    LocationType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LocationType$ {
    /** @deprecated use `LocationType$inboundSchema` instead. */
    export const inboundSchema = LocationType$inboundSchema;
    /** @deprecated use `LocationType$outboundSchema` instead. */
    export const outboundSchema = LocationType$outboundSchema;
}

/** @internal */
export const UnifiedHrisLocationOutputFieldMappings$inboundSchema: z.ZodType<
    UnifiedHrisLocationOutputFieldMappings,
    z.ZodTypeDef,
    unknown
> = z.object({});

/** @internal */
export type UnifiedHrisLocationOutputFieldMappings$Outbound = {};

/** @internal */
export const UnifiedHrisLocationOutputFieldMappings$outboundSchema: z.ZodType<
    UnifiedHrisLocationOutputFieldMappings$Outbound,
    z.ZodTypeDef,
    UnifiedHrisLocationOutputFieldMappings
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnifiedHrisLocationOutputFieldMappings$ {
    /** @deprecated use `UnifiedHrisLocationOutputFieldMappings$inboundSchema` instead. */
    export const inboundSchema = UnifiedHrisLocationOutputFieldMappings$inboundSchema;
    /** @deprecated use `UnifiedHrisLocationOutputFieldMappings$outboundSchema` instead. */
    export const outboundSchema = UnifiedHrisLocationOutputFieldMappings$outboundSchema;
    /** @deprecated use `UnifiedHrisLocationOutputFieldMappings$Outbound` instead. */
    export type Outbound = UnifiedHrisLocationOutputFieldMappings$Outbound;
}

/** @internal */
export const UnifiedHrisLocationOutputRemoteData$inboundSchema: z.ZodType<
    UnifiedHrisLocationOutputRemoteData,
    z.ZodTypeDef,
    unknown
> = z.object({});

/** @internal */
export type UnifiedHrisLocationOutputRemoteData$Outbound = {};

/** @internal */
export const UnifiedHrisLocationOutputRemoteData$outboundSchema: z.ZodType<
    UnifiedHrisLocationOutputRemoteData$Outbound,
    z.ZodTypeDef,
    UnifiedHrisLocationOutputRemoteData
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnifiedHrisLocationOutputRemoteData$ {
    /** @deprecated use `UnifiedHrisLocationOutputRemoteData$inboundSchema` instead. */
    export const inboundSchema = UnifiedHrisLocationOutputRemoteData$inboundSchema;
    /** @deprecated use `UnifiedHrisLocationOutputRemoteData$outboundSchema` instead. */
    export const outboundSchema = UnifiedHrisLocationOutputRemoteData$outboundSchema;
    /** @deprecated use `UnifiedHrisLocationOutputRemoteData$Outbound` instead. */
    export type Outbound = UnifiedHrisLocationOutputRemoteData$Outbound;
}

/** @internal */
export const UnifiedHrisLocationOutput$inboundSchema: z.ZodType<
    UnifiedHrisLocationOutput,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        name: z.nullable(z.string()).optional(),
        phone_number: z.nullable(z.string()).optional(),
        street_1: z.nullable(z.string()).optional(),
        street_2: z.nullable(z.string()).optional(),
        city: z.nullable(z.string()).optional(),
        state: z.nullable(z.string()).optional(),
        zip_code: z.nullable(z.string()).optional(),
        country: z.nullable(z.string()).optional(),
        location_type: z.nullable(LocationType$inboundSchema).optional(),
        company_id: z.nullable(z.string()).optional(),
        employee_id: z.nullable(z.string()).optional(),
        field_mappings: z
            .nullable(z.lazy(() => UnifiedHrisLocationOutputFieldMappings$inboundSchema))
            .optional(),
        id: z.nullable(z.string()).optional(),
        remote_id: z.nullable(z.string()).optional(),
        remote_data: z
            .nullable(z.lazy(() => UnifiedHrisLocationOutputRemoteData$inboundSchema))
            .optional(),
        remote_created_at: z
            .nullable(
                z
                    .string()
                    .datetime({ offset: true })
                    .transform((v) => new Date(v))
            )
            .optional(),
        created_at: z
            .nullable(
                z
                    .string()
                    .datetime({ offset: true })
                    .transform((v) => new Date(v))
            )
            .optional(),
        modified_at: z
            .nullable(
                z
                    .string()
                    .datetime({ offset: true })
                    .transform((v) => new Date(v))
            )
            .optional(),
        remote_was_deleted: z.nullable(z.boolean()).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            phone_number: "phoneNumber",
            street_1: "street1",
            street_2: "street2",
            zip_code: "zipCode",
            location_type: "locationType",
            company_id: "companyId",
            employee_id: "employeeId",
            field_mappings: "fieldMappings",
            remote_id: "remoteId",
            remote_data: "remoteData",
            remote_created_at: "remoteCreatedAt",
            created_at: "createdAt",
            modified_at: "modifiedAt",
            remote_was_deleted: "remoteWasDeleted",
        });
    });

/** @internal */
export type UnifiedHrisLocationOutput$Outbound = {
    name?: string | null | undefined;
    phone_number?: string | null | undefined;
    street_1?: string | null | undefined;
    street_2?: string | null | undefined;
    city?: string | null | undefined;
    state?: string | null | undefined;
    zip_code?: string | null | undefined;
    country?: string | null | undefined;
    location_type?: string | null | undefined;
    company_id?: string | null | undefined;
    employee_id?: string | null | undefined;
    field_mappings?: UnifiedHrisLocationOutputFieldMappings$Outbound | null | undefined;
    id?: string | null | undefined;
    remote_id?: string | null | undefined;
    remote_data?: UnifiedHrisLocationOutputRemoteData$Outbound | null | undefined;
    remote_created_at?: string | null | undefined;
    created_at?: string | null | undefined;
    modified_at?: string | null | undefined;
    remote_was_deleted?: boolean | null | undefined;
};

/** @internal */
export const UnifiedHrisLocationOutput$outboundSchema: z.ZodType<
    UnifiedHrisLocationOutput$Outbound,
    z.ZodTypeDef,
    UnifiedHrisLocationOutput
> = z
    .object({
        name: z.nullable(z.string()).optional(),
        phoneNumber: z.nullable(z.string()).optional(),
        street1: z.nullable(z.string()).optional(),
        street2: z.nullable(z.string()).optional(),
        city: z.nullable(z.string()).optional(),
        state: z.nullable(z.string()).optional(),
        zipCode: z.nullable(z.string()).optional(),
        country: z.nullable(z.string()).optional(),
        locationType: z.nullable(LocationType$outboundSchema).optional(),
        companyId: z.nullable(z.string()).optional(),
        employeeId: z.nullable(z.string()).optional(),
        fieldMappings: z
            .nullable(z.lazy(() => UnifiedHrisLocationOutputFieldMappings$outboundSchema))
            .optional(),
        id: z.nullable(z.string()).optional(),
        remoteId: z.nullable(z.string()).optional(),
        remoteData: z
            .nullable(z.lazy(() => UnifiedHrisLocationOutputRemoteData$outboundSchema))
            .optional(),
        remoteCreatedAt: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
        createdAt: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
        modifiedAt: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
        remoteWasDeleted: z.nullable(z.boolean()).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            phoneNumber: "phone_number",
            street1: "street_1",
            street2: "street_2",
            zipCode: "zip_code",
            locationType: "location_type",
            companyId: "company_id",
            employeeId: "employee_id",
            fieldMappings: "field_mappings",
            remoteId: "remote_id",
            remoteData: "remote_data",
            remoteCreatedAt: "remote_created_at",
            createdAt: "created_at",
            modifiedAt: "modified_at",
            remoteWasDeleted: "remote_was_deleted",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnifiedHrisLocationOutput$ {
    /** @deprecated use `UnifiedHrisLocationOutput$inboundSchema` instead. */
    export const inboundSchema = UnifiedHrisLocationOutput$inboundSchema;
    /** @deprecated use `UnifiedHrisLocationOutput$outboundSchema` instead. */
    export const outboundSchema = UnifiedHrisLocationOutput$outboundSchema;
    /** @deprecated use `UnifiedHrisLocationOutput$Outbound` instead. */
    export type Outbound = UnifiedHrisLocationOutput$Outbound;
}

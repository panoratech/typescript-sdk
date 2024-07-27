/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as z from "zod";

export type UnifiedTicketingAccountOutputFieldMappings = {};

export type UnifiedTicketingAccountOutputRemoteData = {};

export type UnifiedTicketingAccountOutputCreatedAt = {};

export type UnifiedTicketingAccountOutputModifiedAt = {};

export type UnifiedTicketingAccountOutput = {
    /**
     * The name of the account
     */
    name: string;
    /**
     * The domains of the account
     */
    domains?: Array<string> | undefined;
    fieldMappings: UnifiedTicketingAccountOutputFieldMappings;
    /**
     * The UUID of the account
     */
    id?: string | undefined;
    /**
     * The id of the account in the context of the 3rd Party
     */
    remoteId?: string | undefined;
    remoteData: UnifiedTicketingAccountOutputRemoteData;
    createdAt: UnifiedTicketingAccountOutputCreatedAt;
    modifiedAt: UnifiedTicketingAccountOutputModifiedAt;
};

/** @internal */
export const UnifiedTicketingAccountOutputFieldMappings$inboundSchema: z.ZodType<
    UnifiedTicketingAccountOutputFieldMappings,
    z.ZodTypeDef,
    unknown
> = z.object({});

/** @internal */
export type UnifiedTicketingAccountOutputFieldMappings$Outbound = {};

/** @internal */
export const UnifiedTicketingAccountOutputFieldMappings$outboundSchema: z.ZodType<
    UnifiedTicketingAccountOutputFieldMappings$Outbound,
    z.ZodTypeDef,
    UnifiedTicketingAccountOutputFieldMappings
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnifiedTicketingAccountOutputFieldMappings$ {
    /** @deprecated use `UnifiedTicketingAccountOutputFieldMappings$inboundSchema` instead. */
    export const inboundSchema = UnifiedTicketingAccountOutputFieldMappings$inboundSchema;
    /** @deprecated use `UnifiedTicketingAccountOutputFieldMappings$outboundSchema` instead. */
    export const outboundSchema = UnifiedTicketingAccountOutputFieldMappings$outboundSchema;
    /** @deprecated use `UnifiedTicketingAccountOutputFieldMappings$Outbound` instead. */
    export type Outbound = UnifiedTicketingAccountOutputFieldMappings$Outbound;
}

/** @internal */
export const UnifiedTicketingAccountOutputRemoteData$inboundSchema: z.ZodType<
    UnifiedTicketingAccountOutputRemoteData,
    z.ZodTypeDef,
    unknown
> = z.object({});

/** @internal */
export type UnifiedTicketingAccountOutputRemoteData$Outbound = {};

/** @internal */
export const UnifiedTicketingAccountOutputRemoteData$outboundSchema: z.ZodType<
    UnifiedTicketingAccountOutputRemoteData$Outbound,
    z.ZodTypeDef,
    UnifiedTicketingAccountOutputRemoteData
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnifiedTicketingAccountOutputRemoteData$ {
    /** @deprecated use `UnifiedTicketingAccountOutputRemoteData$inboundSchema` instead. */
    export const inboundSchema = UnifiedTicketingAccountOutputRemoteData$inboundSchema;
    /** @deprecated use `UnifiedTicketingAccountOutputRemoteData$outboundSchema` instead. */
    export const outboundSchema = UnifiedTicketingAccountOutputRemoteData$outboundSchema;
    /** @deprecated use `UnifiedTicketingAccountOutputRemoteData$Outbound` instead. */
    export type Outbound = UnifiedTicketingAccountOutputRemoteData$Outbound;
}

/** @internal */
export const UnifiedTicketingAccountOutputCreatedAt$inboundSchema: z.ZodType<
    UnifiedTicketingAccountOutputCreatedAt,
    z.ZodTypeDef,
    unknown
> = z.object({});

/** @internal */
export type UnifiedTicketingAccountOutputCreatedAt$Outbound = {};

/** @internal */
export const UnifiedTicketingAccountOutputCreatedAt$outboundSchema: z.ZodType<
    UnifiedTicketingAccountOutputCreatedAt$Outbound,
    z.ZodTypeDef,
    UnifiedTicketingAccountOutputCreatedAt
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnifiedTicketingAccountOutputCreatedAt$ {
    /** @deprecated use `UnifiedTicketingAccountOutputCreatedAt$inboundSchema` instead. */
    export const inboundSchema = UnifiedTicketingAccountOutputCreatedAt$inboundSchema;
    /** @deprecated use `UnifiedTicketingAccountOutputCreatedAt$outboundSchema` instead. */
    export const outboundSchema = UnifiedTicketingAccountOutputCreatedAt$outboundSchema;
    /** @deprecated use `UnifiedTicketingAccountOutputCreatedAt$Outbound` instead. */
    export type Outbound = UnifiedTicketingAccountOutputCreatedAt$Outbound;
}

/** @internal */
export const UnifiedTicketingAccountOutputModifiedAt$inboundSchema: z.ZodType<
    UnifiedTicketingAccountOutputModifiedAt,
    z.ZodTypeDef,
    unknown
> = z.object({});

/** @internal */
export type UnifiedTicketingAccountOutputModifiedAt$Outbound = {};

/** @internal */
export const UnifiedTicketingAccountOutputModifiedAt$outboundSchema: z.ZodType<
    UnifiedTicketingAccountOutputModifiedAt$Outbound,
    z.ZodTypeDef,
    UnifiedTicketingAccountOutputModifiedAt
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnifiedTicketingAccountOutputModifiedAt$ {
    /** @deprecated use `UnifiedTicketingAccountOutputModifiedAt$inboundSchema` instead. */
    export const inboundSchema = UnifiedTicketingAccountOutputModifiedAt$inboundSchema;
    /** @deprecated use `UnifiedTicketingAccountOutputModifiedAt$outboundSchema` instead. */
    export const outboundSchema = UnifiedTicketingAccountOutputModifiedAt$outboundSchema;
    /** @deprecated use `UnifiedTicketingAccountOutputModifiedAt$Outbound` instead. */
    export type Outbound = UnifiedTicketingAccountOutputModifiedAt$Outbound;
}

/** @internal */
export const UnifiedTicketingAccountOutput$inboundSchema: z.ZodType<
    UnifiedTicketingAccountOutput,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        name: z.string(),
        domains: z.array(z.string()).optional(),
        field_mappings: z.lazy(() => UnifiedTicketingAccountOutputFieldMappings$inboundSchema),
        id: z.string().optional(),
        remote_id: z.string().optional(),
        remote_data: z.lazy(() => UnifiedTicketingAccountOutputRemoteData$inboundSchema),
        created_at: z.lazy(() => UnifiedTicketingAccountOutputCreatedAt$inboundSchema),
        modified_at: z.lazy(() => UnifiedTicketingAccountOutputModifiedAt$inboundSchema),
    })
    .transform((v) => {
        return remap$(v, {
            field_mappings: "fieldMappings",
            remote_id: "remoteId",
            remote_data: "remoteData",
            created_at: "createdAt",
            modified_at: "modifiedAt",
        });
    });

/** @internal */
export type UnifiedTicketingAccountOutput$Outbound = {
    name: string;
    domains?: Array<string> | undefined;
    field_mappings: UnifiedTicketingAccountOutputFieldMappings$Outbound;
    id?: string | undefined;
    remote_id?: string | undefined;
    remote_data: UnifiedTicketingAccountOutputRemoteData$Outbound;
    created_at: UnifiedTicketingAccountOutputCreatedAt$Outbound;
    modified_at: UnifiedTicketingAccountOutputModifiedAt$Outbound;
};

/** @internal */
export const UnifiedTicketingAccountOutput$outboundSchema: z.ZodType<
    UnifiedTicketingAccountOutput$Outbound,
    z.ZodTypeDef,
    UnifiedTicketingAccountOutput
> = z
    .object({
        name: z.string(),
        domains: z.array(z.string()).optional(),
        fieldMappings: z.lazy(() => UnifiedTicketingAccountOutputFieldMappings$outboundSchema),
        id: z.string().optional(),
        remoteId: z.string().optional(),
        remoteData: z.lazy(() => UnifiedTicketingAccountOutputRemoteData$outboundSchema),
        createdAt: z.lazy(() => UnifiedTicketingAccountOutputCreatedAt$outboundSchema),
        modifiedAt: z.lazy(() => UnifiedTicketingAccountOutputModifiedAt$outboundSchema),
    })
    .transform((v) => {
        return remap$(v, {
            fieldMappings: "field_mappings",
            remoteId: "remote_id",
            remoteData: "remote_data",
            createdAt: "created_at",
            modifiedAt: "modified_at",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnifiedTicketingAccountOutput$ {
    /** @deprecated use `UnifiedTicketingAccountOutput$inboundSchema` instead. */
    export const inboundSchema = UnifiedTicketingAccountOutput$inboundSchema;
    /** @deprecated use `UnifiedTicketingAccountOutput$outboundSchema` instead. */
    export const outboundSchema = UnifiedTicketingAccountOutput$outboundSchema;
    /** @deprecated use `UnifiedTicketingAccountOutput$Outbound` instead. */
    export type Outbound = UnifiedTicketingAccountOutput$Outbound;
}

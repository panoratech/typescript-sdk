/*
 * Code generated by Speakeasy (https://speakeasyapi.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as z from "zod";

export type UnifiedCrmUserOutputFieldMappings = {};

export type UnifiedCrmUserOutputRemoteData = {};

export type UnifiedCrmUserOutputCreatedAt = {};

export type UnifiedCrmUserOutputModifiedAt = {};

export type UnifiedCrmUserOutput = {
    /**
     * The name of the user
     */
    name: string;
    /**
     * The email of the user
     */
    email: string;
    fieldMappings: UnifiedCrmUserOutputFieldMappings;
    /**
     * The UUID of the user
     */
    id?: string | undefined;
    /**
     * The id of the user in the context of the Crm 3rd Party
     */
    remoteId?: string | undefined;
    remoteData: UnifiedCrmUserOutputRemoteData;
    createdAt: UnifiedCrmUserOutputCreatedAt;
    modifiedAt: UnifiedCrmUserOutputModifiedAt;
};

/** @internal */
export const UnifiedCrmUserOutputFieldMappings$inboundSchema: z.ZodType<
    UnifiedCrmUserOutputFieldMappings,
    z.ZodTypeDef,
    unknown
> = z.object({});

/** @internal */
export type UnifiedCrmUserOutputFieldMappings$Outbound = {};

/** @internal */
export const UnifiedCrmUserOutputFieldMappings$outboundSchema: z.ZodType<
    UnifiedCrmUserOutputFieldMappings$Outbound,
    z.ZodTypeDef,
    UnifiedCrmUserOutputFieldMappings
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnifiedCrmUserOutputFieldMappings$ {
    /** @deprecated use `UnifiedCrmUserOutputFieldMappings$inboundSchema` instead. */
    export const inboundSchema = UnifiedCrmUserOutputFieldMappings$inboundSchema;
    /** @deprecated use `UnifiedCrmUserOutputFieldMappings$outboundSchema` instead. */
    export const outboundSchema = UnifiedCrmUserOutputFieldMappings$outboundSchema;
    /** @deprecated use `UnifiedCrmUserOutputFieldMappings$Outbound` instead. */
    export type Outbound = UnifiedCrmUserOutputFieldMappings$Outbound;
}

/** @internal */
export const UnifiedCrmUserOutputRemoteData$inboundSchema: z.ZodType<
    UnifiedCrmUserOutputRemoteData,
    z.ZodTypeDef,
    unknown
> = z.object({});

/** @internal */
export type UnifiedCrmUserOutputRemoteData$Outbound = {};

/** @internal */
export const UnifiedCrmUserOutputRemoteData$outboundSchema: z.ZodType<
    UnifiedCrmUserOutputRemoteData$Outbound,
    z.ZodTypeDef,
    UnifiedCrmUserOutputRemoteData
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnifiedCrmUserOutputRemoteData$ {
    /** @deprecated use `UnifiedCrmUserOutputRemoteData$inboundSchema` instead. */
    export const inboundSchema = UnifiedCrmUserOutputRemoteData$inboundSchema;
    /** @deprecated use `UnifiedCrmUserOutputRemoteData$outboundSchema` instead. */
    export const outboundSchema = UnifiedCrmUserOutputRemoteData$outboundSchema;
    /** @deprecated use `UnifiedCrmUserOutputRemoteData$Outbound` instead. */
    export type Outbound = UnifiedCrmUserOutputRemoteData$Outbound;
}

/** @internal */
export const UnifiedCrmUserOutputCreatedAt$inboundSchema: z.ZodType<
    UnifiedCrmUserOutputCreatedAt,
    z.ZodTypeDef,
    unknown
> = z.object({});

/** @internal */
export type UnifiedCrmUserOutputCreatedAt$Outbound = {};

/** @internal */
export const UnifiedCrmUserOutputCreatedAt$outboundSchema: z.ZodType<
    UnifiedCrmUserOutputCreatedAt$Outbound,
    z.ZodTypeDef,
    UnifiedCrmUserOutputCreatedAt
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnifiedCrmUserOutputCreatedAt$ {
    /** @deprecated use `UnifiedCrmUserOutputCreatedAt$inboundSchema` instead. */
    export const inboundSchema = UnifiedCrmUserOutputCreatedAt$inboundSchema;
    /** @deprecated use `UnifiedCrmUserOutputCreatedAt$outboundSchema` instead. */
    export const outboundSchema = UnifiedCrmUserOutputCreatedAt$outboundSchema;
    /** @deprecated use `UnifiedCrmUserOutputCreatedAt$Outbound` instead. */
    export type Outbound = UnifiedCrmUserOutputCreatedAt$Outbound;
}

/** @internal */
export const UnifiedCrmUserOutputModifiedAt$inboundSchema: z.ZodType<
    UnifiedCrmUserOutputModifiedAt,
    z.ZodTypeDef,
    unknown
> = z.object({});

/** @internal */
export type UnifiedCrmUserOutputModifiedAt$Outbound = {};

/** @internal */
export const UnifiedCrmUserOutputModifiedAt$outboundSchema: z.ZodType<
    UnifiedCrmUserOutputModifiedAt$Outbound,
    z.ZodTypeDef,
    UnifiedCrmUserOutputModifiedAt
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnifiedCrmUserOutputModifiedAt$ {
    /** @deprecated use `UnifiedCrmUserOutputModifiedAt$inboundSchema` instead. */
    export const inboundSchema = UnifiedCrmUserOutputModifiedAt$inboundSchema;
    /** @deprecated use `UnifiedCrmUserOutputModifiedAt$outboundSchema` instead. */
    export const outboundSchema = UnifiedCrmUserOutputModifiedAt$outboundSchema;
    /** @deprecated use `UnifiedCrmUserOutputModifiedAt$Outbound` instead. */
    export type Outbound = UnifiedCrmUserOutputModifiedAt$Outbound;
}

/** @internal */
export const UnifiedCrmUserOutput$inboundSchema: z.ZodType<
    UnifiedCrmUserOutput,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        name: z.string(),
        email: z.string(),
        field_mappings: z.lazy(() => UnifiedCrmUserOutputFieldMappings$inboundSchema),
        id: z.string().optional(),
        remote_id: z.string().optional(),
        remote_data: z.lazy(() => UnifiedCrmUserOutputRemoteData$inboundSchema),
        created_at: z.lazy(() => UnifiedCrmUserOutputCreatedAt$inboundSchema),
        modified_at: z.lazy(() => UnifiedCrmUserOutputModifiedAt$inboundSchema),
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
export type UnifiedCrmUserOutput$Outbound = {
    name: string;
    email: string;
    field_mappings: UnifiedCrmUserOutputFieldMappings$Outbound;
    id?: string | undefined;
    remote_id?: string | undefined;
    remote_data: UnifiedCrmUserOutputRemoteData$Outbound;
    created_at: UnifiedCrmUserOutputCreatedAt$Outbound;
    modified_at: UnifiedCrmUserOutputModifiedAt$Outbound;
};

/** @internal */
export const UnifiedCrmUserOutput$outboundSchema: z.ZodType<
    UnifiedCrmUserOutput$Outbound,
    z.ZodTypeDef,
    UnifiedCrmUserOutput
> = z
    .object({
        name: z.string(),
        email: z.string(),
        fieldMappings: z.lazy(() => UnifiedCrmUserOutputFieldMappings$outboundSchema),
        id: z.string().optional(),
        remoteId: z.string().optional(),
        remoteData: z.lazy(() => UnifiedCrmUserOutputRemoteData$outboundSchema),
        createdAt: z.lazy(() => UnifiedCrmUserOutputCreatedAt$outboundSchema),
        modifiedAt: z.lazy(() => UnifiedCrmUserOutputModifiedAt$outboundSchema),
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
export namespace UnifiedCrmUserOutput$ {
    /** @deprecated use `UnifiedCrmUserOutput$inboundSchema` instead. */
    export const inboundSchema = UnifiedCrmUserOutput$inboundSchema;
    /** @deprecated use `UnifiedCrmUserOutput$outboundSchema` instead. */
    export const outboundSchema = UnifiedCrmUserOutput$outboundSchema;
    /** @deprecated use `UnifiedCrmUserOutput$Outbound` instead. */
    export type Outbound = UnifiedCrmUserOutput$Outbound;
}

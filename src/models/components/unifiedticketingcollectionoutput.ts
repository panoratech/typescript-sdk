/*
 * Code generated by Speakeasy (https://speakeasyapi.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as z from "zod";

export type UnifiedTicketingCollectionOutputRemoteData = {};

export type UnifiedTicketingCollectionOutputCreatedAt = {};

export type UnifiedTicketingCollectionOutputModifiedAt = {};

export type UnifiedTicketingCollectionOutput = {
    /**
     * The name of the collection
     */
    name: string;
    /**
     * The description of the collection
     */
    description?: string | undefined;
    /**
     * The type of the collection. Authorized values are either PROJECT or LIST
     */
    collectionType?: string | undefined;
    /**
     * The UUID of the collection
     */
    id?: string | undefined;
    /**
     * The id of the collection in the context of the 3rd Party
     */
    remoteId?: string | undefined;
    remoteData: UnifiedTicketingCollectionOutputRemoteData;
    createdAt: UnifiedTicketingCollectionOutputCreatedAt;
    modifiedAt: UnifiedTicketingCollectionOutputModifiedAt;
};

/** @internal */
export const UnifiedTicketingCollectionOutputRemoteData$inboundSchema: z.ZodType<
    UnifiedTicketingCollectionOutputRemoteData,
    z.ZodTypeDef,
    unknown
> = z.object({});

/** @internal */
export type UnifiedTicketingCollectionOutputRemoteData$Outbound = {};

/** @internal */
export const UnifiedTicketingCollectionOutputRemoteData$outboundSchema: z.ZodType<
    UnifiedTicketingCollectionOutputRemoteData$Outbound,
    z.ZodTypeDef,
    UnifiedTicketingCollectionOutputRemoteData
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnifiedTicketingCollectionOutputRemoteData$ {
    /** @deprecated use `UnifiedTicketingCollectionOutputRemoteData$inboundSchema` instead. */
    export const inboundSchema = UnifiedTicketingCollectionOutputRemoteData$inboundSchema;
    /** @deprecated use `UnifiedTicketingCollectionOutputRemoteData$outboundSchema` instead. */
    export const outboundSchema = UnifiedTicketingCollectionOutputRemoteData$outboundSchema;
    /** @deprecated use `UnifiedTicketingCollectionOutputRemoteData$Outbound` instead. */
    export type Outbound = UnifiedTicketingCollectionOutputRemoteData$Outbound;
}

/** @internal */
export const UnifiedTicketingCollectionOutputCreatedAt$inboundSchema: z.ZodType<
    UnifiedTicketingCollectionOutputCreatedAt,
    z.ZodTypeDef,
    unknown
> = z.object({});

/** @internal */
export type UnifiedTicketingCollectionOutputCreatedAt$Outbound = {};

/** @internal */
export const UnifiedTicketingCollectionOutputCreatedAt$outboundSchema: z.ZodType<
    UnifiedTicketingCollectionOutputCreatedAt$Outbound,
    z.ZodTypeDef,
    UnifiedTicketingCollectionOutputCreatedAt
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnifiedTicketingCollectionOutputCreatedAt$ {
    /** @deprecated use `UnifiedTicketingCollectionOutputCreatedAt$inboundSchema` instead. */
    export const inboundSchema = UnifiedTicketingCollectionOutputCreatedAt$inboundSchema;
    /** @deprecated use `UnifiedTicketingCollectionOutputCreatedAt$outboundSchema` instead. */
    export const outboundSchema = UnifiedTicketingCollectionOutputCreatedAt$outboundSchema;
    /** @deprecated use `UnifiedTicketingCollectionOutputCreatedAt$Outbound` instead. */
    export type Outbound = UnifiedTicketingCollectionOutputCreatedAt$Outbound;
}

/** @internal */
export const UnifiedTicketingCollectionOutputModifiedAt$inboundSchema: z.ZodType<
    UnifiedTicketingCollectionOutputModifiedAt,
    z.ZodTypeDef,
    unknown
> = z.object({});

/** @internal */
export type UnifiedTicketingCollectionOutputModifiedAt$Outbound = {};

/** @internal */
export const UnifiedTicketingCollectionOutputModifiedAt$outboundSchema: z.ZodType<
    UnifiedTicketingCollectionOutputModifiedAt$Outbound,
    z.ZodTypeDef,
    UnifiedTicketingCollectionOutputModifiedAt
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnifiedTicketingCollectionOutputModifiedAt$ {
    /** @deprecated use `UnifiedTicketingCollectionOutputModifiedAt$inboundSchema` instead. */
    export const inboundSchema = UnifiedTicketingCollectionOutputModifiedAt$inboundSchema;
    /** @deprecated use `UnifiedTicketingCollectionOutputModifiedAt$outboundSchema` instead. */
    export const outboundSchema = UnifiedTicketingCollectionOutputModifiedAt$outboundSchema;
    /** @deprecated use `UnifiedTicketingCollectionOutputModifiedAt$Outbound` instead. */
    export type Outbound = UnifiedTicketingCollectionOutputModifiedAt$Outbound;
}

/** @internal */
export const UnifiedTicketingCollectionOutput$inboundSchema: z.ZodType<
    UnifiedTicketingCollectionOutput,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        name: z.string(),
        description: z.string().optional(),
        collection_type: z.string().optional(),
        id: z.string().optional(),
        remote_id: z.string().optional(),
        remote_data: z.lazy(() => UnifiedTicketingCollectionOutputRemoteData$inboundSchema),
        created_at: z.lazy(() => UnifiedTicketingCollectionOutputCreatedAt$inboundSchema),
        modified_at: z.lazy(() => UnifiedTicketingCollectionOutputModifiedAt$inboundSchema),
    })
    .transform((v) => {
        return remap$(v, {
            collection_type: "collectionType",
            remote_id: "remoteId",
            remote_data: "remoteData",
            created_at: "createdAt",
            modified_at: "modifiedAt",
        });
    });

/** @internal */
export type UnifiedTicketingCollectionOutput$Outbound = {
    name: string;
    description?: string | undefined;
    collection_type?: string | undefined;
    id?: string | undefined;
    remote_id?: string | undefined;
    remote_data: UnifiedTicketingCollectionOutputRemoteData$Outbound;
    created_at: UnifiedTicketingCollectionOutputCreatedAt$Outbound;
    modified_at: UnifiedTicketingCollectionOutputModifiedAt$Outbound;
};

/** @internal */
export const UnifiedTicketingCollectionOutput$outboundSchema: z.ZodType<
    UnifiedTicketingCollectionOutput$Outbound,
    z.ZodTypeDef,
    UnifiedTicketingCollectionOutput
> = z
    .object({
        name: z.string(),
        description: z.string().optional(),
        collectionType: z.string().optional(),
        id: z.string().optional(),
        remoteId: z.string().optional(),
        remoteData: z.lazy(() => UnifiedTicketingCollectionOutputRemoteData$outboundSchema),
        createdAt: z.lazy(() => UnifiedTicketingCollectionOutputCreatedAt$outboundSchema),
        modifiedAt: z.lazy(() => UnifiedTicketingCollectionOutputModifiedAt$outboundSchema),
    })
    .transform((v) => {
        return remap$(v, {
            collectionType: "collection_type",
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
export namespace UnifiedTicketingCollectionOutput$ {
    /** @deprecated use `UnifiedTicketingCollectionOutput$inboundSchema` instead. */
    export const inboundSchema = UnifiedTicketingCollectionOutput$inboundSchema;
    /** @deprecated use `UnifiedTicketingCollectionOutput$outboundSchema` instead. */
    export const outboundSchema = UnifiedTicketingCollectionOutput$outboundSchema;
    /** @deprecated use `UnifiedTicketingCollectionOutput$Outbound` instead. */
    export type Outbound = UnifiedTicketingCollectionOutput$Outbound;
}

/*
 * Code generated by Speakeasy (https://speakeasyapi.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as z from "zod";

export type UnifiedFilestorageDriveOutputFieldMappings = {};

export type UnifiedFilestorageDriveOutputRemoteData = {};

export type UnifiedFilestorageDriveOutputCreatedAt = {};

export type UnifiedFilestorageDriveOutputModifiedAt = {};

export type UnifiedFilestorageDriveOutput = {
    /**
     * The name of the drive
     */
    name: string;
    /**
     * When the third party s drive was created.
     */
    remoteCreatedAt: string;
    /**
     * The url of the drive
     */
    driveUrl: string;
    fieldMappings: UnifiedFilestorageDriveOutputFieldMappings;
    /**
     * The UUID of the drive
     */
    id?: string | undefined;
    /**
     * The id of the drive in the context of the 3rd Party
     */
    remoteId?: string | undefined;
    remoteData: UnifiedFilestorageDriveOutputRemoteData;
    createdAt: UnifiedFilestorageDriveOutputCreatedAt;
    modifiedAt: UnifiedFilestorageDriveOutputModifiedAt;
};

/** @internal */
export const UnifiedFilestorageDriveOutputFieldMappings$inboundSchema: z.ZodType<
    UnifiedFilestorageDriveOutputFieldMappings,
    z.ZodTypeDef,
    unknown
> = z.object({});

/** @internal */
export type UnifiedFilestorageDriveOutputFieldMappings$Outbound = {};

/** @internal */
export const UnifiedFilestorageDriveOutputFieldMappings$outboundSchema: z.ZodType<
    UnifiedFilestorageDriveOutputFieldMappings$Outbound,
    z.ZodTypeDef,
    UnifiedFilestorageDriveOutputFieldMappings
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnifiedFilestorageDriveOutputFieldMappings$ {
    /** @deprecated use `UnifiedFilestorageDriveOutputFieldMappings$inboundSchema` instead. */
    export const inboundSchema = UnifiedFilestorageDriveOutputFieldMappings$inboundSchema;
    /** @deprecated use `UnifiedFilestorageDriveOutputFieldMappings$outboundSchema` instead. */
    export const outboundSchema = UnifiedFilestorageDriveOutputFieldMappings$outboundSchema;
    /** @deprecated use `UnifiedFilestorageDriveOutputFieldMappings$Outbound` instead. */
    export type Outbound = UnifiedFilestorageDriveOutputFieldMappings$Outbound;
}

/** @internal */
export const UnifiedFilestorageDriveOutputRemoteData$inboundSchema: z.ZodType<
    UnifiedFilestorageDriveOutputRemoteData,
    z.ZodTypeDef,
    unknown
> = z.object({});

/** @internal */
export type UnifiedFilestorageDriveOutputRemoteData$Outbound = {};

/** @internal */
export const UnifiedFilestorageDriveOutputRemoteData$outboundSchema: z.ZodType<
    UnifiedFilestorageDriveOutputRemoteData$Outbound,
    z.ZodTypeDef,
    UnifiedFilestorageDriveOutputRemoteData
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnifiedFilestorageDriveOutputRemoteData$ {
    /** @deprecated use `UnifiedFilestorageDriveOutputRemoteData$inboundSchema` instead. */
    export const inboundSchema = UnifiedFilestorageDriveOutputRemoteData$inboundSchema;
    /** @deprecated use `UnifiedFilestorageDriveOutputRemoteData$outboundSchema` instead. */
    export const outboundSchema = UnifiedFilestorageDriveOutputRemoteData$outboundSchema;
    /** @deprecated use `UnifiedFilestorageDriveOutputRemoteData$Outbound` instead. */
    export type Outbound = UnifiedFilestorageDriveOutputRemoteData$Outbound;
}

/** @internal */
export const UnifiedFilestorageDriveOutputCreatedAt$inboundSchema: z.ZodType<
    UnifiedFilestorageDriveOutputCreatedAt,
    z.ZodTypeDef,
    unknown
> = z.object({});

/** @internal */
export type UnifiedFilestorageDriveOutputCreatedAt$Outbound = {};

/** @internal */
export const UnifiedFilestorageDriveOutputCreatedAt$outboundSchema: z.ZodType<
    UnifiedFilestorageDriveOutputCreatedAt$Outbound,
    z.ZodTypeDef,
    UnifiedFilestorageDriveOutputCreatedAt
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnifiedFilestorageDriveOutputCreatedAt$ {
    /** @deprecated use `UnifiedFilestorageDriveOutputCreatedAt$inboundSchema` instead. */
    export const inboundSchema = UnifiedFilestorageDriveOutputCreatedAt$inboundSchema;
    /** @deprecated use `UnifiedFilestorageDriveOutputCreatedAt$outboundSchema` instead. */
    export const outboundSchema = UnifiedFilestorageDriveOutputCreatedAt$outboundSchema;
    /** @deprecated use `UnifiedFilestorageDriveOutputCreatedAt$Outbound` instead. */
    export type Outbound = UnifiedFilestorageDriveOutputCreatedAt$Outbound;
}

/** @internal */
export const UnifiedFilestorageDriveOutputModifiedAt$inboundSchema: z.ZodType<
    UnifiedFilestorageDriveOutputModifiedAt,
    z.ZodTypeDef,
    unknown
> = z.object({});

/** @internal */
export type UnifiedFilestorageDriveOutputModifiedAt$Outbound = {};

/** @internal */
export const UnifiedFilestorageDriveOutputModifiedAt$outboundSchema: z.ZodType<
    UnifiedFilestorageDriveOutputModifiedAt$Outbound,
    z.ZodTypeDef,
    UnifiedFilestorageDriveOutputModifiedAt
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnifiedFilestorageDriveOutputModifiedAt$ {
    /** @deprecated use `UnifiedFilestorageDriveOutputModifiedAt$inboundSchema` instead. */
    export const inboundSchema = UnifiedFilestorageDriveOutputModifiedAt$inboundSchema;
    /** @deprecated use `UnifiedFilestorageDriveOutputModifiedAt$outboundSchema` instead. */
    export const outboundSchema = UnifiedFilestorageDriveOutputModifiedAt$outboundSchema;
    /** @deprecated use `UnifiedFilestorageDriveOutputModifiedAt$Outbound` instead. */
    export type Outbound = UnifiedFilestorageDriveOutputModifiedAt$Outbound;
}

/** @internal */
export const UnifiedFilestorageDriveOutput$inboundSchema: z.ZodType<
    UnifiedFilestorageDriveOutput,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        name: z.string(),
        remote_created_at: z.string(),
        drive_url: z.string(),
        field_mappings: z.lazy(() => UnifiedFilestorageDriveOutputFieldMappings$inboundSchema),
        id: z.string().optional(),
        remote_id: z.string().optional(),
        remote_data: z.lazy(() => UnifiedFilestorageDriveOutputRemoteData$inboundSchema),
        created_at: z.lazy(() => UnifiedFilestorageDriveOutputCreatedAt$inboundSchema),
        modified_at: z.lazy(() => UnifiedFilestorageDriveOutputModifiedAt$inboundSchema),
    })
    .transform((v) => {
        return remap$(v, {
            remote_created_at: "remoteCreatedAt",
            drive_url: "driveUrl",
            field_mappings: "fieldMappings",
            remote_id: "remoteId",
            remote_data: "remoteData",
            created_at: "createdAt",
            modified_at: "modifiedAt",
        });
    });

/** @internal */
export type UnifiedFilestorageDriveOutput$Outbound = {
    name: string;
    remote_created_at: string;
    drive_url: string;
    field_mappings: UnifiedFilestorageDriveOutputFieldMappings$Outbound;
    id?: string | undefined;
    remote_id?: string | undefined;
    remote_data: UnifiedFilestorageDriveOutputRemoteData$Outbound;
    created_at: UnifiedFilestorageDriveOutputCreatedAt$Outbound;
    modified_at: UnifiedFilestorageDriveOutputModifiedAt$Outbound;
};

/** @internal */
export const UnifiedFilestorageDriveOutput$outboundSchema: z.ZodType<
    UnifiedFilestorageDriveOutput$Outbound,
    z.ZodTypeDef,
    UnifiedFilestorageDriveOutput
> = z
    .object({
        name: z.string(),
        remoteCreatedAt: z.string(),
        driveUrl: z.string(),
        fieldMappings: z.lazy(() => UnifiedFilestorageDriveOutputFieldMappings$outboundSchema),
        id: z.string().optional(),
        remoteId: z.string().optional(),
        remoteData: z.lazy(() => UnifiedFilestorageDriveOutputRemoteData$outboundSchema),
        createdAt: z.lazy(() => UnifiedFilestorageDriveOutputCreatedAt$outboundSchema),
        modifiedAt: z.lazy(() => UnifiedFilestorageDriveOutputModifiedAt$outboundSchema),
    })
    .transform((v) => {
        return remap$(v, {
            remoteCreatedAt: "remote_created_at",
            driveUrl: "drive_url",
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
export namespace UnifiedFilestorageDriveOutput$ {
    /** @deprecated use `UnifiedFilestorageDriveOutput$inboundSchema` instead. */
    export const inboundSchema = UnifiedFilestorageDriveOutput$inboundSchema;
    /** @deprecated use `UnifiedFilestorageDriveOutput$outboundSchema` instead. */
    export const outboundSchema = UnifiedFilestorageDriveOutput$outboundSchema;
    /** @deprecated use `UnifiedFilestorageDriveOutput$Outbound` instead. */
    export type Outbound = UnifiedFilestorageDriveOutput$Outbound;
}

/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
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
export namespace UnifiedFilestorageDriveOutputFieldMappings$ {
    export const inboundSchema: z.ZodType<
        UnifiedFilestorageDriveOutputFieldMappings,
        z.ZodTypeDef,
        unknown
    > = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        UnifiedFilestorageDriveOutputFieldMappings
    > = z.object({});
}

/** @internal */
export namespace UnifiedFilestorageDriveOutputRemoteData$ {
    export const inboundSchema: z.ZodType<
        UnifiedFilestorageDriveOutputRemoteData,
        z.ZodTypeDef,
        unknown
    > = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        UnifiedFilestorageDriveOutputRemoteData
    > = z.object({});
}

/** @internal */
export namespace UnifiedFilestorageDriveOutputCreatedAt$ {
    export const inboundSchema: z.ZodType<
        UnifiedFilestorageDriveOutputCreatedAt,
        z.ZodTypeDef,
        unknown
    > = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        UnifiedFilestorageDriveOutputCreatedAt
    > = z.object({});
}

/** @internal */
export namespace UnifiedFilestorageDriveOutputModifiedAt$ {
    export const inboundSchema: z.ZodType<
        UnifiedFilestorageDriveOutputModifiedAt,
        z.ZodTypeDef,
        unknown
    > = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        UnifiedFilestorageDriveOutputModifiedAt
    > = z.object({});
}

/** @internal */
export namespace UnifiedFilestorageDriveOutput$ {
    export const inboundSchema: z.ZodType<UnifiedFilestorageDriveOutput, z.ZodTypeDef, unknown> = z
        .object({
            name: z.string(),
            remote_created_at: z.string(),
            drive_url: z.string(),
            field_mappings: z.lazy(() => UnifiedFilestorageDriveOutputFieldMappings$.inboundSchema),
            id: z.string().optional(),
            remote_id: z.string().optional(),
            remote_data: z.lazy(() => UnifiedFilestorageDriveOutputRemoteData$.inboundSchema),
            created_at: z.lazy(() => UnifiedFilestorageDriveOutputCreatedAt$.inboundSchema),
            modified_at: z.lazy(() => UnifiedFilestorageDriveOutputModifiedAt$.inboundSchema),
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

    export type Outbound = {
        name: string;
        remote_created_at: string;
        drive_url: string;
        field_mappings: UnifiedFilestorageDriveOutputFieldMappings$.Outbound;
        id?: string | undefined;
        remote_id?: string | undefined;
        remote_data: UnifiedFilestorageDriveOutputRemoteData$.Outbound;
        created_at: UnifiedFilestorageDriveOutputCreatedAt$.Outbound;
        modified_at: UnifiedFilestorageDriveOutputModifiedAt$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UnifiedFilestorageDriveOutput> =
        z
            .object({
                name: z.string(),
                remoteCreatedAt: z.string(),
                driveUrl: z.string(),
                fieldMappings: z.lazy(
                    () => UnifiedFilestorageDriveOutputFieldMappings$.outboundSchema
                ),
                id: z.string().optional(),
                remoteId: z.string().optional(),
                remoteData: z.lazy(() => UnifiedFilestorageDriveOutputRemoteData$.outboundSchema),
                createdAt: z.lazy(() => UnifiedFilestorageDriveOutputCreatedAt$.outboundSchema),
                modifiedAt: z.lazy(() => UnifiedFilestorageDriveOutputModifiedAt$.outboundSchema),
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
}

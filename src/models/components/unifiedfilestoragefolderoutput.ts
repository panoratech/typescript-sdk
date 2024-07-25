/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as z from "zod";

export type UnifiedFilestorageFolderOutputFieldMappings = {};

export type UnifiedFilestorageFolderOutputRemoteData = {};

export type UnifiedFilestorageFolderOutputCreatedAt = {};

export type UnifiedFilestorageFolderOutputModifiedAt = {};

export type UnifiedFilestorageFolderOutput = {
    /**
     * The name of the folder
     */
    name: string;
    /**
     * The size of the folder
     */
    size: string;
    /**
     * The url of the folder
     */
    folderUrl: string;
    /**
     * The description of the folder
     */
    description: string;
    /**
     * The UUID of the drive tied to the folder
     */
    driveId: string;
    /**
     * The UUID of the parent folder
     */
    parentFolderId: string;
    /**
     * The UUID of the shared link tied to the folder
     */
    sharedLink: string;
    /**
     * The UUID of the permission tied to the folder
     */
    permission: string;
    fieldMappings: UnifiedFilestorageFolderOutputFieldMappings;
    /**
     * The UUID of the folder
     */
    id?: string | undefined;
    /**
     * The id of the folder in the context of the 3rd Party
     */
    remoteId?: string | undefined;
    remoteData: UnifiedFilestorageFolderOutputRemoteData;
    createdAt: UnifiedFilestorageFolderOutputCreatedAt;
    modifiedAt: UnifiedFilestorageFolderOutputModifiedAt;
};

/** @internal */
export namespace UnifiedFilestorageFolderOutputFieldMappings$ {
    export const inboundSchema: z.ZodType<
        UnifiedFilestorageFolderOutputFieldMappings,
        z.ZodTypeDef,
        unknown
    > = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        UnifiedFilestorageFolderOutputFieldMappings
    > = z.object({});
}

/** @internal */
export namespace UnifiedFilestorageFolderOutputRemoteData$ {
    export const inboundSchema: z.ZodType<
        UnifiedFilestorageFolderOutputRemoteData,
        z.ZodTypeDef,
        unknown
    > = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        UnifiedFilestorageFolderOutputRemoteData
    > = z.object({});
}

/** @internal */
export namespace UnifiedFilestorageFolderOutputCreatedAt$ {
    export const inboundSchema: z.ZodType<
        UnifiedFilestorageFolderOutputCreatedAt,
        z.ZodTypeDef,
        unknown
    > = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        UnifiedFilestorageFolderOutputCreatedAt
    > = z.object({});
}

/** @internal */
export namespace UnifiedFilestorageFolderOutputModifiedAt$ {
    export const inboundSchema: z.ZodType<
        UnifiedFilestorageFolderOutputModifiedAt,
        z.ZodTypeDef,
        unknown
    > = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        UnifiedFilestorageFolderOutputModifiedAt
    > = z.object({});
}

/** @internal */
export namespace UnifiedFilestorageFolderOutput$ {
    export const inboundSchema: z.ZodType<UnifiedFilestorageFolderOutput, z.ZodTypeDef, unknown> = z
        .object({
            name: z.string(),
            size: z.string(),
            folder_url: z.string(),
            description: z.string(),
            drive_id: z.string(),
            parent_folder_id: z.string(),
            shared_link: z.string(),
            permission: z.string(),
            field_mappings: z.lazy(
                () => UnifiedFilestorageFolderOutputFieldMappings$.inboundSchema
            ),
            id: z.string().optional(),
            remote_id: z.string().optional(),
            remote_data: z.lazy(() => UnifiedFilestorageFolderOutputRemoteData$.inboundSchema),
            created_at: z.lazy(() => UnifiedFilestorageFolderOutputCreatedAt$.inboundSchema),
            modified_at: z.lazy(() => UnifiedFilestorageFolderOutputModifiedAt$.inboundSchema),
        })
        .transform((v) => {
            return remap$(v, {
                folder_url: "folderUrl",
                drive_id: "driveId",
                parent_folder_id: "parentFolderId",
                shared_link: "sharedLink",
                field_mappings: "fieldMappings",
                remote_id: "remoteId",
                remote_data: "remoteData",
                created_at: "createdAt",
                modified_at: "modifiedAt",
            });
        });

    export type Outbound = {
        name: string;
        size: string;
        folder_url: string;
        description: string;
        drive_id: string;
        parent_folder_id: string;
        shared_link: string;
        permission: string;
        field_mappings: UnifiedFilestorageFolderOutputFieldMappings$.Outbound;
        id?: string | undefined;
        remote_id?: string | undefined;
        remote_data: UnifiedFilestorageFolderOutputRemoteData$.Outbound;
        created_at: UnifiedFilestorageFolderOutputCreatedAt$.Outbound;
        modified_at: UnifiedFilestorageFolderOutputModifiedAt$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UnifiedFilestorageFolderOutput> =
        z
            .object({
                name: z.string(),
                size: z.string(),
                folderUrl: z.string(),
                description: z.string(),
                driveId: z.string(),
                parentFolderId: z.string(),
                sharedLink: z.string(),
                permission: z.string(),
                fieldMappings: z.lazy(
                    () => UnifiedFilestorageFolderOutputFieldMappings$.outboundSchema
                ),
                id: z.string().optional(),
                remoteId: z.string().optional(),
                remoteData: z.lazy(() => UnifiedFilestorageFolderOutputRemoteData$.outboundSchema),
                createdAt: z.lazy(() => UnifiedFilestorageFolderOutputCreatedAt$.outboundSchema),
                modifiedAt: z.lazy(() => UnifiedFilestorageFolderOutputModifiedAt$.outboundSchema),
            })
            .transform((v) => {
                return remap$(v, {
                    folderUrl: "folder_url",
                    driveId: "drive_id",
                    parentFolderId: "parent_folder_id",
                    sharedLink: "shared_link",
                    fieldMappings: "field_mappings",
                    remoteId: "remote_id",
                    remoteData: "remote_data",
                    createdAt: "created_at",
                    modifiedAt: "modified_at",
                });
            });
}

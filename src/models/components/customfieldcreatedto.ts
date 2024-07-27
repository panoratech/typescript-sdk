/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as z from "zod";

export type CustomFieldCreateDto = {
    objectTypeOwner: string;
    name: string;
    description: string;
    dataType: string;
    sourceCustomFieldId: string;
    sourceProvider: string;
    linkedUserId: string;
};

/** @internal */
export const CustomFieldCreateDto$inboundSchema: z.ZodType<
    CustomFieldCreateDto,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        object_type_owner: z.string(),
        name: z.string(),
        description: z.string(),
        data_type: z.string(),
        source_custom_field_id: z.string(),
        source_provider: z.string(),
        linked_user_id: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            object_type_owner: "objectTypeOwner",
            data_type: "dataType",
            source_custom_field_id: "sourceCustomFieldId",
            source_provider: "sourceProvider",
            linked_user_id: "linkedUserId",
        });
    });

/** @internal */
export type CustomFieldCreateDto$Outbound = {
    object_type_owner: string;
    name: string;
    description: string;
    data_type: string;
    source_custom_field_id: string;
    source_provider: string;
    linked_user_id: string;
};

/** @internal */
export const CustomFieldCreateDto$outboundSchema: z.ZodType<
    CustomFieldCreateDto$Outbound,
    z.ZodTypeDef,
    CustomFieldCreateDto
> = z
    .object({
        objectTypeOwner: z.string(),
        name: z.string(),
        description: z.string(),
        dataType: z.string(),
        sourceCustomFieldId: z.string(),
        sourceProvider: z.string(),
        linkedUserId: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            objectTypeOwner: "object_type_owner",
            dataType: "data_type",
            sourceCustomFieldId: "source_custom_field_id",
            sourceProvider: "source_provider",
            linkedUserId: "linked_user_id",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CustomFieldCreateDto$ {
    /** @deprecated use `CustomFieldCreateDto$inboundSchema` instead. */
    export const inboundSchema = CustomFieldCreateDto$inboundSchema;
    /** @deprecated use `CustomFieldCreateDto$outboundSchema` instead. */
    export const outboundSchema = CustomFieldCreateDto$outboundSchema;
    /** @deprecated use `CustomFieldCreateDto$Outbound` instead. */
    export type Outbound = CustomFieldCreateDto$Outbound;
}

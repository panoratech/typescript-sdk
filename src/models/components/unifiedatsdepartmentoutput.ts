/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type UnifiedAtsDepartmentOutput = {
  /**
   * The name of the department
   */
  name?: string | null | undefined;
  /**
   * The custom field mappings of the object between the remote 3rd party & Panora
   */
  fieldMappings?: { [k: string]: any } | null | undefined;
  /**
   * The UUID of the department
   */
  id?: string | null | undefined;
  /**
   * The remote ID of the department in the context of the 3rd Party
   */
  remoteId?: string | null | undefined;
  /**
   * The remote data of the department in the context of the 3rd Party
   */
  remoteData?: { [k: string]: any } | null | undefined;
  /**
   * The created date of the object
   */
  createdAt?: Date | null | undefined;
  /**
   * The modified date of the object
   */
  modifiedAt?: Date | null | undefined;
};

/** @internal */
export const UnifiedAtsDepartmentOutput$inboundSchema: z.ZodType<
  UnifiedAtsDepartmentOutput,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.nullable(z.string()).optional(),
  field_mappings: z.nullable(z.record(z.any())).optional(),
  id: z.nullable(z.string()).optional(),
  remote_id: z.nullable(z.string()).optional(),
  remote_data: z.nullable(z.record(z.any())).optional(),
  created_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
  modified_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    "field_mappings": "fieldMappings",
    "remote_id": "remoteId",
    "remote_data": "remoteData",
    "created_at": "createdAt",
    "modified_at": "modifiedAt",
  });
});

/** @internal */
export type UnifiedAtsDepartmentOutput$Outbound = {
  name?: string | null | undefined;
  field_mappings?: { [k: string]: any } | null | undefined;
  id?: string | null | undefined;
  remote_id?: string | null | undefined;
  remote_data?: { [k: string]: any } | null | undefined;
  created_at?: string | null | undefined;
  modified_at?: string | null | undefined;
};

/** @internal */
export const UnifiedAtsDepartmentOutput$outboundSchema: z.ZodType<
  UnifiedAtsDepartmentOutput$Outbound,
  z.ZodTypeDef,
  UnifiedAtsDepartmentOutput
> = z.object({
  name: z.nullable(z.string()).optional(),
  fieldMappings: z.nullable(z.record(z.any())).optional(),
  id: z.nullable(z.string()).optional(),
  remoteId: z.nullable(z.string()).optional(),
  remoteData: z.nullable(z.record(z.any())).optional(),
  createdAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  modifiedAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
}).transform((v) => {
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
export namespace UnifiedAtsDepartmentOutput$ {
  /** @deprecated use `UnifiedAtsDepartmentOutput$inboundSchema` instead. */
  export const inboundSchema = UnifiedAtsDepartmentOutput$inboundSchema;
  /** @deprecated use `UnifiedAtsDepartmentOutput$outboundSchema` instead. */
  export const outboundSchema = UnifiedAtsDepartmentOutput$outboundSchema;
  /** @deprecated use `UnifiedAtsDepartmentOutput$Outbound` instead. */
  export type Outbound = UnifiedAtsDepartmentOutput$Outbound;
}

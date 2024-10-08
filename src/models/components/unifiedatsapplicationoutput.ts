/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type UnifiedAtsApplicationOutput = {
  /**
   * The application date
   */
  appliedAt?: Date | null | undefined;
  /**
   * The rejection date
   */
  rejectedAt?: Date | null | undefined;
  /**
   * The offers UUIDs for the application
   */
  offers?: Array<string> | null | undefined;
  /**
   * The source of the application
   */
  source?: string | null | undefined;
  /**
   * The UUID of the person credited for the application
   */
  creditedTo?: string | null | undefined;
  /**
   * The UUID of the current stage of the application
   */
  currentStage?: string | null | undefined;
  /**
   * The rejection reason for the application
   */
  rejectReason?: string | null | undefined;
  /**
   * The UUID of the candidate
   */
  candidateId?: string | null | undefined;
  /**
   * The UUID of the job
   */
  jobId?: string | undefined;
  /**
   * The custom field mappings of the object between the remote 3rd party & Panora
   */
  fieldMappings?: { [k: string]: any } | null | undefined;
  /**
   * The UUID of the application
   */
  id?: string | null | undefined;
  /**
   * The remote ID of the application in the context of the 3rd Party
   */
  remoteId?: string | null | undefined;
  /**
   * The remote data of the application in the context of the 3rd Party
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
  /**
   * The remote created date of the object
   */
  remoteCreatedAt?: Date | null | undefined;
  /**
   * The remote modified date of the object
   */
  remoteModifiedAt?: Date | null | undefined;
};

/** @internal */
export const UnifiedAtsApplicationOutput$inboundSchema: z.ZodType<
  UnifiedAtsApplicationOutput,
  z.ZodTypeDef,
  unknown
> = z.object({
  applied_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
  rejected_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
  offers: z.nullable(z.array(z.string())).optional(),
  source: z.nullable(z.string()).optional(),
  credited_to: z.nullable(z.string()).optional(),
  current_stage: z.nullable(z.string()).optional(),
  reject_reason: z.nullable(z.string()).optional(),
  candidate_id: z.nullable(z.string()).optional(),
  job_id: z.string().optional(),
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
  remote_created_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
  remote_modified_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    "applied_at": "appliedAt",
    "rejected_at": "rejectedAt",
    "credited_to": "creditedTo",
    "current_stage": "currentStage",
    "reject_reason": "rejectReason",
    "candidate_id": "candidateId",
    "job_id": "jobId",
    "field_mappings": "fieldMappings",
    "remote_id": "remoteId",
    "remote_data": "remoteData",
    "created_at": "createdAt",
    "modified_at": "modifiedAt",
    "remote_created_at": "remoteCreatedAt",
    "remote_modified_at": "remoteModifiedAt",
  });
});

/** @internal */
export type UnifiedAtsApplicationOutput$Outbound = {
  applied_at?: string | null | undefined;
  rejected_at?: string | null | undefined;
  offers?: Array<string> | null | undefined;
  source?: string | null | undefined;
  credited_to?: string | null | undefined;
  current_stage?: string | null | undefined;
  reject_reason?: string | null | undefined;
  candidate_id?: string | null | undefined;
  job_id?: string | undefined;
  field_mappings?: { [k: string]: any } | null | undefined;
  id?: string | null | undefined;
  remote_id?: string | null | undefined;
  remote_data?: { [k: string]: any } | null | undefined;
  created_at?: string | null | undefined;
  modified_at?: string | null | undefined;
  remote_created_at?: string | null | undefined;
  remote_modified_at?: string | null | undefined;
};

/** @internal */
export const UnifiedAtsApplicationOutput$outboundSchema: z.ZodType<
  UnifiedAtsApplicationOutput$Outbound,
  z.ZodTypeDef,
  UnifiedAtsApplicationOutput
> = z.object({
  appliedAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  rejectedAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  offers: z.nullable(z.array(z.string())).optional(),
  source: z.nullable(z.string()).optional(),
  creditedTo: z.nullable(z.string()).optional(),
  currentStage: z.nullable(z.string()).optional(),
  rejectReason: z.nullable(z.string()).optional(),
  candidateId: z.nullable(z.string()).optional(),
  jobId: z.string().optional(),
  fieldMappings: z.nullable(z.record(z.any())).optional(),
  id: z.nullable(z.string()).optional(),
  remoteId: z.nullable(z.string()).optional(),
  remoteData: z.nullable(z.record(z.any())).optional(),
  createdAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  modifiedAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  remoteCreatedAt: z.nullable(z.date().transform(v => v.toISOString()))
    .optional(),
  remoteModifiedAt: z.nullable(z.date().transform(v => v.toISOString()))
    .optional(),
}).transform((v) => {
  return remap$(v, {
    appliedAt: "applied_at",
    rejectedAt: "rejected_at",
    creditedTo: "credited_to",
    currentStage: "current_stage",
    rejectReason: "reject_reason",
    candidateId: "candidate_id",
    jobId: "job_id",
    fieldMappings: "field_mappings",
    remoteId: "remote_id",
    remoteData: "remote_data",
    createdAt: "created_at",
    modifiedAt: "modified_at",
    remoteCreatedAt: "remote_created_at",
    remoteModifiedAt: "remote_modified_at",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnifiedAtsApplicationOutput$ {
  /** @deprecated use `UnifiedAtsApplicationOutput$inboundSchema` instead. */
  export const inboundSchema = UnifiedAtsApplicationOutput$inboundSchema;
  /** @deprecated use `UnifiedAtsApplicationOutput$outboundSchema` instead. */
  export const outboundSchema = UnifiedAtsApplicationOutput$outboundSchema;
  /** @deprecated use `UnifiedAtsApplicationOutput$Outbound` instead. */
  export type Outbound = UnifiedAtsApplicationOutput$Outbound;
}

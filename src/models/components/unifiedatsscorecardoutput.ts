/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type UnifiedAtsScorecardOutput = {
  /**
   * The overall recommendation
   */
  overallRecommendation?: string | null | undefined;
  /**
   * The UUID of the application
   */
  applicationId?: string | null | undefined;
  /**
   * The UUID of the interview
   */
  interviewId?: string | null | undefined;
  /**
   * The remote creation date of the scorecard
   */
  remoteCreatedAt?: Date | null | undefined;
  /**
   * The submission date of the scorecard
   */
  submittedAt?: Date | null | undefined;
  /**
   * The custom field mappings of the object between the remote 3rd party & Panora
   */
  fieldMappings?: { [k: string]: any } | null | undefined;
  /**
   * The UUID of the scorecard
   */
  id?: string | undefined;
  /**
   * The remote ID of the scorecard in the context of the 3rd Party
   */
  remoteId?: string | null | undefined;
  /**
   * The remote data of the scorecard in the context of the 3rd Party
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
export const UnifiedAtsScorecardOutput$inboundSchema: z.ZodType<
  UnifiedAtsScorecardOutput,
  z.ZodTypeDef,
  unknown
> = z.object({
  overall_recommendation: z.nullable(z.string()).optional(),
  application_id: z.nullable(z.string()).optional(),
  interview_id: z.nullable(z.string()).optional(),
  remote_created_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
  submitted_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
  field_mappings: z.nullable(z.record(z.any())).optional(),
  id: z.string().optional(),
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
    "overall_recommendation": "overallRecommendation",
    "application_id": "applicationId",
    "interview_id": "interviewId",
    "remote_created_at": "remoteCreatedAt",
    "submitted_at": "submittedAt",
    "field_mappings": "fieldMappings",
    "remote_id": "remoteId",
    "remote_data": "remoteData",
    "created_at": "createdAt",
    "modified_at": "modifiedAt",
  });
});

/** @internal */
export type UnifiedAtsScorecardOutput$Outbound = {
  overall_recommendation?: string | null | undefined;
  application_id?: string | null | undefined;
  interview_id?: string | null | undefined;
  remote_created_at?: string | null | undefined;
  submitted_at?: string | null | undefined;
  field_mappings?: { [k: string]: any } | null | undefined;
  id?: string | undefined;
  remote_id?: string | null | undefined;
  remote_data?: { [k: string]: any } | null | undefined;
  created_at?: string | null | undefined;
  modified_at?: string | null | undefined;
};

/** @internal */
export const UnifiedAtsScorecardOutput$outboundSchema: z.ZodType<
  UnifiedAtsScorecardOutput$Outbound,
  z.ZodTypeDef,
  UnifiedAtsScorecardOutput
> = z.object({
  overallRecommendation: z.nullable(z.string()).optional(),
  applicationId: z.nullable(z.string()).optional(),
  interviewId: z.nullable(z.string()).optional(),
  remoteCreatedAt: z.nullable(z.date().transform(v => v.toISOString()))
    .optional(),
  submittedAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  fieldMappings: z.nullable(z.record(z.any())).optional(),
  id: z.string().optional(),
  remoteId: z.nullable(z.string()).optional(),
  remoteData: z.nullable(z.record(z.any())).optional(),
  createdAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  modifiedAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
}).transform((v) => {
  return remap$(v, {
    overallRecommendation: "overall_recommendation",
    applicationId: "application_id",
    interviewId: "interview_id",
    remoteCreatedAt: "remote_created_at",
    submittedAt: "submitted_at",
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
export namespace UnifiedAtsScorecardOutput$ {
  /** @deprecated use `UnifiedAtsScorecardOutput$inboundSchema` instead. */
  export const inboundSchema = UnifiedAtsScorecardOutput$inboundSchema;
  /** @deprecated use `UnifiedAtsScorecardOutput$outboundSchema` instead. */
  export const outboundSchema = UnifiedAtsScorecardOutput$outboundSchema;
  /** @deprecated use `UnifiedAtsScorecardOutput$Outbound` instead. */
  export type Outbound = UnifiedAtsScorecardOutput$Outbound;
}

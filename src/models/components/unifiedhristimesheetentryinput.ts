/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

/**
 * The custom field mappings of the object between the remote 3rd party & Panora
 */
export type UnifiedHrisTimesheetEntryInputFieldMappings = {};

export type UnifiedHrisTimesheetEntryInput = {
  /**
   * The number of hours worked
   */
  hoursWorked?: number | null | undefined;
  /**
   * The start time of the timesheet entry
   */
  startTime?: Date | null | undefined;
  /**
   * The end time of the timesheet entry
   */
  endTime?: Date | null | undefined;
  /**
   * The UUID of the associated employee
   */
  employeeId?: string | null | undefined;
  /**
   * Indicates if the timesheet entry was deleted in the remote system
   */
  remoteWasDeleted?: boolean | undefined;
  /**
   * The custom field mappings of the object between the remote 3rd party & Panora
   */
  fieldMappings?:
    | UnifiedHrisTimesheetEntryInputFieldMappings
    | null
    | undefined;
};

/** @internal */
export const UnifiedHrisTimesheetEntryInputFieldMappings$inboundSchema:
  z.ZodType<
    UnifiedHrisTimesheetEntryInputFieldMappings,
    z.ZodTypeDef,
    unknown
  > = z.object({});

/** @internal */
export type UnifiedHrisTimesheetEntryInputFieldMappings$Outbound = {};

/** @internal */
export const UnifiedHrisTimesheetEntryInputFieldMappings$outboundSchema:
  z.ZodType<
    UnifiedHrisTimesheetEntryInputFieldMappings$Outbound,
    z.ZodTypeDef,
    UnifiedHrisTimesheetEntryInputFieldMappings
  > = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnifiedHrisTimesheetEntryInputFieldMappings$ {
  /** @deprecated use `UnifiedHrisTimesheetEntryInputFieldMappings$inboundSchema` instead. */
  export const inboundSchema =
    UnifiedHrisTimesheetEntryInputFieldMappings$inboundSchema;
  /** @deprecated use `UnifiedHrisTimesheetEntryInputFieldMappings$outboundSchema` instead. */
  export const outboundSchema =
    UnifiedHrisTimesheetEntryInputFieldMappings$outboundSchema;
  /** @deprecated use `UnifiedHrisTimesheetEntryInputFieldMappings$Outbound` instead. */
  export type Outbound = UnifiedHrisTimesheetEntryInputFieldMappings$Outbound;
}

/** @internal */
export const UnifiedHrisTimesheetEntryInput$inboundSchema: z.ZodType<
  UnifiedHrisTimesheetEntryInput,
  z.ZodTypeDef,
  unknown
> = z.object({
  hours_worked: z.nullable(z.number()).optional(),
  start_time: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
  end_time: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
  employee_id: z.nullable(z.string()).optional(),
  remote_was_deleted: z.boolean().optional(),
  field_mappings: z.nullable(
    z.lazy(() => UnifiedHrisTimesheetEntryInputFieldMappings$inboundSchema),
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    "hours_worked": "hoursWorked",
    "start_time": "startTime",
    "end_time": "endTime",
    "employee_id": "employeeId",
    "remote_was_deleted": "remoteWasDeleted",
    "field_mappings": "fieldMappings",
  });
});

/** @internal */
export type UnifiedHrisTimesheetEntryInput$Outbound = {
  hours_worked?: number | null | undefined;
  start_time?: string | null | undefined;
  end_time?: string | null | undefined;
  employee_id?: string | null | undefined;
  remote_was_deleted?: boolean | undefined;
  field_mappings?:
    | UnifiedHrisTimesheetEntryInputFieldMappings$Outbound
    | null
    | undefined;
};

/** @internal */
export const UnifiedHrisTimesheetEntryInput$outboundSchema: z.ZodType<
  UnifiedHrisTimesheetEntryInput$Outbound,
  z.ZodTypeDef,
  UnifiedHrisTimesheetEntryInput
> = z.object({
  hoursWorked: z.nullable(z.number()).optional(),
  startTime: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  endTime: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  employeeId: z.nullable(z.string()).optional(),
  remoteWasDeleted: z.boolean().optional(),
  fieldMappings: z.nullable(
    z.lazy(() => UnifiedHrisTimesheetEntryInputFieldMappings$outboundSchema),
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    hoursWorked: "hours_worked",
    startTime: "start_time",
    endTime: "end_time",
    employeeId: "employee_id",
    remoteWasDeleted: "remote_was_deleted",
    fieldMappings: "field_mappings",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnifiedHrisTimesheetEntryInput$ {
  /** @deprecated use `UnifiedHrisTimesheetEntryInput$inboundSchema` instead. */
  export const inboundSchema = UnifiedHrisTimesheetEntryInput$inboundSchema;
  /** @deprecated use `UnifiedHrisTimesheetEntryInput$outboundSchema` instead. */
  export const outboundSchema = UnifiedHrisTimesheetEntryInput$outboundSchema;
  /** @deprecated use `UnifiedHrisTimesheetEntryInput$Outbound` instead. */
  export type Outbound = UnifiedHrisTimesheetEntryInput$Outbound;
}

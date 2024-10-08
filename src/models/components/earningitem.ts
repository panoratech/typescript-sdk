/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type EarningItem = {
  /**
   * The amount of the earning
   */
  amount?: number | null | undefined;
  /**
   * The type of the earning
   */
  type?: string | null | undefined;
};

/** @internal */
export const EarningItem$inboundSchema: z.ZodType<
  EarningItem,
  z.ZodTypeDef,
  unknown
> = z.object({
  amount: z.nullable(z.number()).optional(),
  type: z.nullable(z.string()).optional(),
});

/** @internal */
export type EarningItem$Outbound = {
  amount?: number | null | undefined;
  type?: string | null | undefined;
};

/** @internal */
export const EarningItem$outboundSchema: z.ZodType<
  EarningItem$Outbound,
  z.ZodTypeDef,
  EarningItem
> = z.object({
  amount: z.nullable(z.number()).optional(),
  type: z.nullable(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EarningItem$ {
  /** @deprecated use `EarningItem$inboundSchema` instead. */
  export const inboundSchema = EarningItem$inboundSchema;
  /** @deprecated use `EarningItem$outboundSchema` instead. */
  export const outboundSchema = EarningItem$outboundSchema;
  /** @deprecated use `EarningItem$Outbound` instead. */
  export type Outbound = EarningItem$Outbound;
}

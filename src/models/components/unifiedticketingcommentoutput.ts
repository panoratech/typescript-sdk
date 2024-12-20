/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  UnifiedTicketingAttachmentOutput,
  UnifiedTicketingAttachmentOutput$inboundSchema,
  UnifiedTicketingAttachmentOutput$Outbound,
  UnifiedTicketingAttachmentOutput$outboundSchema,
} from "./unifiedticketingattachmentoutput.js";

export type UnifiedTicketingCommentOutputAttachments =
  | UnifiedTicketingAttachmentOutput
  | string;

export type UnifiedTicketingCommentOutput = {
  /**
   * The body of the comment
   */
  body: string | null;
  /**
   * The html body of the comment
   */
  htmlBody?: string | null | undefined;
  /**
   * The public status of the comment
   */
  isPrivate?: boolean | null | undefined;
  /**
   * The creator type of the comment. Authorized values are either USER or CONTACT
   */
  creatorType?: string | null | undefined;
  /**
   * The UUID of the ticket the comment is tied to
   */
  ticketId?: string | null | undefined;
  /**
   * The UUID of the contact which the comment belongs to (if no user_id specified)
   */
  contactId?: string | null | undefined;
  /**
   * The UUID of the user which the comment belongs to (if no contact_id specified)
   */
  userId?: string | null | undefined;
  /**
   * The attachements UUIDs tied to the comment
   */
  attachments?:
    | Array<UnifiedTicketingAttachmentOutput | string>
    | null
    | undefined;
  /**
   * The UUID of the comment
   */
  id?: string | null | undefined;
  /**
   * The id of the comment in the context of the 3rd Party
   */
  remoteId?: string | null | undefined;
  /**
   * The remote data of the comment in the context of the 3rd Party
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
export const UnifiedTicketingCommentOutputAttachments$inboundSchema: z.ZodType<
  UnifiedTicketingCommentOutputAttachments,
  z.ZodTypeDef,
  unknown
> = z.union([UnifiedTicketingAttachmentOutput$inboundSchema, z.string()]);

/** @internal */
export type UnifiedTicketingCommentOutputAttachments$Outbound =
  | UnifiedTicketingAttachmentOutput$Outbound
  | string;

/** @internal */
export const UnifiedTicketingCommentOutputAttachments$outboundSchema: z.ZodType<
  UnifiedTicketingCommentOutputAttachments$Outbound,
  z.ZodTypeDef,
  UnifiedTicketingCommentOutputAttachments
> = z.union([UnifiedTicketingAttachmentOutput$outboundSchema, z.string()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnifiedTicketingCommentOutputAttachments$ {
  /** @deprecated use `UnifiedTicketingCommentOutputAttachments$inboundSchema` instead. */
  export const inboundSchema =
    UnifiedTicketingCommentOutputAttachments$inboundSchema;
  /** @deprecated use `UnifiedTicketingCommentOutputAttachments$outboundSchema` instead. */
  export const outboundSchema =
    UnifiedTicketingCommentOutputAttachments$outboundSchema;
  /** @deprecated use `UnifiedTicketingCommentOutputAttachments$Outbound` instead. */
  export type Outbound = UnifiedTicketingCommentOutputAttachments$Outbound;
}

export function unifiedTicketingCommentOutputAttachmentsToJSON(
  unifiedTicketingCommentOutputAttachments:
    UnifiedTicketingCommentOutputAttachments,
): string {
  return JSON.stringify(
    UnifiedTicketingCommentOutputAttachments$outboundSchema.parse(
      unifiedTicketingCommentOutputAttachments,
    ),
  );
}

export function unifiedTicketingCommentOutputAttachmentsFromJSON(
  jsonString: string,
): SafeParseResult<
  UnifiedTicketingCommentOutputAttachments,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      UnifiedTicketingCommentOutputAttachments$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'UnifiedTicketingCommentOutputAttachments' from JSON`,
  );
}

/** @internal */
export const UnifiedTicketingCommentOutput$inboundSchema: z.ZodType<
  UnifiedTicketingCommentOutput,
  z.ZodTypeDef,
  unknown
> = z.object({
  body: z.nullable(z.string()),
  html_body: z.nullable(z.string()).optional(),
  is_private: z.nullable(z.boolean()).optional(),
  creator_type: z.nullable(z.string()).optional(),
  ticket_id: z.nullable(z.string()).optional(),
  contact_id: z.nullable(z.string()).optional(),
  user_id: z.nullable(z.string()).optional(),
  attachments: z.nullable(
    z.array(
      z.union([UnifiedTicketingAttachmentOutput$inboundSchema, z.string()]),
    ),
  ).optional(),
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
    "html_body": "htmlBody",
    "is_private": "isPrivate",
    "creator_type": "creatorType",
    "ticket_id": "ticketId",
    "contact_id": "contactId",
    "user_id": "userId",
    "remote_id": "remoteId",
    "remote_data": "remoteData",
    "created_at": "createdAt",
    "modified_at": "modifiedAt",
  });
});

/** @internal */
export type UnifiedTicketingCommentOutput$Outbound = {
  body: string | null;
  html_body?: string | null | undefined;
  is_private?: boolean | null | undefined;
  creator_type?: string | null | undefined;
  ticket_id?: string | null | undefined;
  contact_id?: string | null | undefined;
  user_id?: string | null | undefined;
  attachments?:
    | Array<UnifiedTicketingAttachmentOutput$Outbound | string>
    | null
    | undefined;
  id?: string | null | undefined;
  remote_id?: string | null | undefined;
  remote_data?: { [k: string]: any } | null | undefined;
  created_at?: string | null | undefined;
  modified_at?: string | null | undefined;
};

/** @internal */
export const UnifiedTicketingCommentOutput$outboundSchema: z.ZodType<
  UnifiedTicketingCommentOutput$Outbound,
  z.ZodTypeDef,
  UnifiedTicketingCommentOutput
> = z.object({
  body: z.nullable(z.string()),
  htmlBody: z.nullable(z.string()).optional(),
  isPrivate: z.nullable(z.boolean()).optional(),
  creatorType: z.nullable(z.string()).optional(),
  ticketId: z.nullable(z.string()).optional(),
  contactId: z.nullable(z.string()).optional(),
  userId: z.nullable(z.string()).optional(),
  attachments: z.nullable(
    z.array(
      z.union([UnifiedTicketingAttachmentOutput$outboundSchema, z.string()]),
    ),
  ).optional(),
  id: z.nullable(z.string()).optional(),
  remoteId: z.nullable(z.string()).optional(),
  remoteData: z.nullable(z.record(z.any())).optional(),
  createdAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  modifiedAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
}).transform((v) => {
  return remap$(v, {
    htmlBody: "html_body",
    isPrivate: "is_private",
    creatorType: "creator_type",
    ticketId: "ticket_id",
    contactId: "contact_id",
    userId: "user_id",
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
export namespace UnifiedTicketingCommentOutput$ {
  /** @deprecated use `UnifiedTicketingCommentOutput$inboundSchema` instead. */
  export const inboundSchema = UnifiedTicketingCommentOutput$inboundSchema;
  /** @deprecated use `UnifiedTicketingCommentOutput$outboundSchema` instead. */
  export const outboundSchema = UnifiedTicketingCommentOutput$outboundSchema;
  /** @deprecated use `UnifiedTicketingCommentOutput$Outbound` instead. */
  export type Outbound = UnifiedTicketingCommentOutput$Outbound;
}

export function unifiedTicketingCommentOutputToJSON(
  unifiedTicketingCommentOutput: UnifiedTicketingCommentOutput,
): string {
  return JSON.stringify(
    UnifiedTicketingCommentOutput$outboundSchema.parse(
      unifiedTicketingCommentOutput,
    ),
  );
}

export function unifiedTicketingCommentOutputFromJSON(
  jsonString: string,
): SafeParseResult<UnifiedTicketingCommentOutput, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UnifiedTicketingCommentOutput$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UnifiedTicketingCommentOutput' from JSON`,
  );
}

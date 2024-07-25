/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as z from "zod";

export type UnifiedTicketingCommentInput = {
    /**
     * The body of the comment
     */
    body: string;
    /**
     * The html body of the comment
     */
    htmlBody?: string | undefined;
    /**
     * The public status of the comment
     */
    isPrivate?: boolean | undefined;
    /**
     * The creator type of the comment. Authorized values are either USER or CONTACT
     */
    creatorType?: string | undefined;
    /**
     * The UUID of the ticket the comment is tied to
     */
    ticketId?: string | undefined;
    /**
     * The UUID of the contact which the comment belongs to (if no user_id specified)
     */
    contactId?: string | undefined;
    /**
     * The UUID of the user which the comment belongs to (if no contact_id specified)
     */
    userId?: string | undefined;
    /**
     * The attachements UUIDs tied to the comment
     */
    attachments?: Array<string> | undefined;
};

/** @internal */
export namespace UnifiedTicketingCommentInput$ {
    export const inboundSchema: z.ZodType<UnifiedTicketingCommentInput, z.ZodTypeDef, unknown> = z
        .object({
            body: z.string(),
            html_body: z.string().optional(),
            is_private: z.boolean().optional(),
            creator_type: z.string().optional(),
            ticket_id: z.string().optional(),
            contact_id: z.string().optional(),
            user_id: z.string().optional(),
            attachments: z.array(z.string()).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                html_body: "htmlBody",
                is_private: "isPrivate",
                creator_type: "creatorType",
                ticket_id: "ticketId",
                contact_id: "contactId",
                user_id: "userId",
            });
        });

    export type Outbound = {
        body: string;
        html_body?: string | undefined;
        is_private?: boolean | undefined;
        creator_type?: string | undefined;
        ticket_id?: string | undefined;
        contact_id?: string | undefined;
        user_id?: string | undefined;
        attachments?: Array<string> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UnifiedTicketingCommentInput> = z
        .object({
            body: z.string(),
            htmlBody: z.string().optional(),
            isPrivate: z.boolean().optional(),
            creatorType: z.string().optional(),
            ticketId: z.string().optional(),
            contactId: z.string().optional(),
            userId: z.string().optional(),
            attachments: z.array(z.string()).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                htmlBody: "html_body",
                isPrivate: "is_private",
                creatorType: "creator_type",
                ticketId: "ticket_id",
                contactId: "contact_id",
                userId: "user_id",
            });
        });
}

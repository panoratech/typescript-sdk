/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { encodeJSON as encodeJSON$, encodeSimple as encodeSimple$ } from "../lib/encodings.js";
import * as m$ from "../lib/matchers.js";
import * as schemas$ from "../lib/schemas.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import { extractSecurity, resolveGlobalSecurity } from "../lib/security.js";
import { pathToFunc } from "../lib/url.js";
import * as components from "../models/components/index.js";
import { SDKError } from "../models/errors/sdkerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { unwrap as unwrap$ } from "../types/fp.js";
import * as z from "zod";

export class Webhooks extends ClientSDK {
    /**
     * List webhooks
     */
    async list(options?: RequestOptions): Promise<Array<components.WebhookResponse>> {
        const path$ = pathToFunc("/webhooks")();

        const headers$ = new Headers({
            Accept: "application/json",
        });

        const apiKey$ = await extractSecurity(this.options$.apiKey);
        const security$ = apiKey$ == null ? {} : { apiKey: apiKey$ };
        const context = {
            operationID: "listWebhooks",
            oAuth2Scopes: [],
            securitySource: this.options$.apiKey,
        };
        const securitySettings$ = resolveGlobalSecurity(security$);

        const requestRes$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                timeoutMs: options?.timeoutMs || this.options$.timeoutMs || -1,
            },
            options
        );
        const request$ = unwrap$(requestRes$);

        const doResult = await this.do$(request$, {
            context,
            errorCodes: ["4XX", "5XX"],
            retryConfig: options?.retries || this.options$.retryConfig,
            retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
        });
        const response = unwrap$(doResult);

        const [result$] = await m$.match<
            Array<components.WebhookResponse>,
            SDKError | SDKValidationError
        >(
            m$.json(200, z.array(components.WebhookResponse$inboundSchema)),
            m$.fail(["4XX", "5XX"])
        )(response);

        return unwrap$(result$);
    }

    /**
     * Add webhook metadata
     */
    async create(
        request: components.WebhookDto,
        options?: RequestOptions
    ): Promise<components.WebhookResponse> {
        const input$ = request;

        const parsed$ = schemas$.safeParse(
            input$,
            (value$) => components.WebhookDto$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const payload$ = unwrap$(parsed$);
        const body$ = encodeJSON$("body", payload$, { explode: true });

        const path$ = pathToFunc("/webhooks")();

        const headers$ = new Headers({
            "Content-Type": "application/json",
            Accept: "application/json",
        });

        const apiKey$ = await extractSecurity(this.options$.apiKey);
        const security$ = apiKey$ == null ? {} : { apiKey: apiKey$ };
        const context = {
            operationID: "createWebhookPublic",
            oAuth2Scopes: [],
            securitySource: this.options$.apiKey,
        };
        const securitySettings$ = resolveGlobalSecurity(security$);

        const requestRes$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "POST",
                path: path$,
                headers: headers$,
                body: body$,
                timeoutMs: options?.timeoutMs || this.options$.timeoutMs || -1,
            },
            options
        );
        const request$ = unwrap$(requestRes$);

        const doResult = await this.do$(request$, {
            context,
            errorCodes: ["4XX", "5XX"],
            retryConfig: options?.retries || this.options$.retryConfig,
            retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
        });
        const response = unwrap$(doResult);

        const [result$] = await m$.match<components.WebhookResponse, SDKError | SDKValidationError>(
            m$.json(201, components.WebhookResponse$inboundSchema),
            m$.fail(["4XX", "5XX"])
        )(response);

        return unwrap$(result$);
    }

    /**
     * Delete Webhook
     */
    async delete(
        request: operations.DeleteRequest,
        options?: RequestOptions
    ): Promise<components.WebhookResponse | undefined> {
        const input$ = request;

        const parsed$ = schemas$.safeParse(
            input$,
            (value$) => operations.DeleteRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const payload$ = unwrap$(parsed$);
        const body$ = null;

        const pathParams$ = {
            id: encodeSimple$("id", payload$.id, { explode: false, charEncoding: "percent" }),
        };

        const path$ = pathToFunc("/webhooks/{id}")(pathParams$);

        const headers$ = new Headers({
            Accept: "application/json",
        });

        const apiKey$ = await extractSecurity(this.options$.apiKey);
        const security$ = apiKey$ == null ? {} : { apiKey: apiKey$ };
        const context = {
            operationID: "delete",
            oAuth2Scopes: [],
            securitySource: this.options$.apiKey,
        };
        const securitySettings$ = resolveGlobalSecurity(security$);

        const requestRes$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "DELETE",
                path: path$,
                headers: headers$,
                body: body$,
                timeoutMs: options?.timeoutMs || this.options$.timeoutMs || -1,
            },
            options
        );
        const request$ = unwrap$(requestRes$);

        const doResult = await this.do$(request$, {
            context,
            errorCodes: ["4XX", "5XX"],
            retryConfig: options?.retries || this.options$.retryConfig,
            retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
        });
        const response = unwrap$(doResult);

        const [result$] = await m$.match<
            components.WebhookResponse | undefined,
            SDKError | SDKValidationError
        >(
            m$.nil(200, components.WebhookResponse$inboundSchema.optional()),
            m$.json(201, components.WebhookResponse$inboundSchema.optional()),
            m$.fail(["4XX", "5XX"])
        )(response);

        return unwrap$(result$);
    }

    /**
     * Update webhook status
     */
    async updateStatus(
        request: operations.UpdateStatusRequest,
        options?: RequestOptions
    ): Promise<components.WebhookResponse | undefined> {
        const input$ = request;

        const parsed$ = schemas$.safeParse(
            input$,
            (value$) => operations.UpdateStatusRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const payload$ = unwrap$(parsed$);
        const body$ = null;

        const pathParams$ = {
            id: encodeSimple$("id", payload$.id, { explode: false, charEncoding: "percent" }),
        };

        const path$ = pathToFunc("/webhooks/{id}")(pathParams$);

        const headers$ = new Headers({
            Accept: "application/json",
        });

        const apiKey$ = await extractSecurity(this.options$.apiKey);
        const security$ = apiKey$ == null ? {} : { apiKey: apiKey$ };
        const context = {
            operationID: "updateStatus",
            oAuth2Scopes: [],
            securitySource: this.options$.apiKey,
        };
        const securitySettings$ = resolveGlobalSecurity(security$);

        const requestRes$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "PUT",
                path: path$,
                headers: headers$,
                body: body$,
                timeoutMs: options?.timeoutMs || this.options$.timeoutMs || -1,
            },
            options
        );
        const request$ = unwrap$(requestRes$);

        const doResult = await this.do$(request$, {
            context,
            errorCodes: ["4XX", "5XX"],
            retryConfig: options?.retries || this.options$.retryConfig,
            retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
        });
        const response = unwrap$(doResult);

        const [result$] = await m$.match<
            components.WebhookResponse | undefined,
            SDKError | SDKValidationError
        >(
            m$.nil(200, components.WebhookResponse$inboundSchema.optional()),
            m$.json(201, components.WebhookResponse$inboundSchema.optional()),
            m$.fail(["4XX", "5XX"])
        )(response);

        return unwrap$(result$);
    }

    /**
     * Verify payload signature of the webhook
     */
    async verifyEvent(
        request: components.SignatureVerificationDto,
        options?: RequestOptions
    ): Promise<operations.VerifyEventResponseBody | undefined> {
        const input$ = request;

        const parsed$ = schemas$.safeParse(
            input$,
            (value$) => components.SignatureVerificationDto$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const payload$ = unwrap$(parsed$);
        const body$ = encodeJSON$("body", payload$, { explode: true });

        const path$ = pathToFunc("/webhooks/verifyEvent")();

        const headers$ = new Headers({
            "Content-Type": "application/json",
            Accept: "application/json",
        });

        const apiKey$ = await extractSecurity(this.options$.apiKey);
        const security$ = apiKey$ == null ? {} : { apiKey: apiKey$ };
        const context = {
            operationID: "verifyEvent",
            oAuth2Scopes: [],
            securitySource: this.options$.apiKey,
        };
        const securitySettings$ = resolveGlobalSecurity(security$);

        const requestRes$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "POST",
                path: path$,
                headers: headers$,
                body: body$,
                timeoutMs: options?.timeoutMs || this.options$.timeoutMs || -1,
            },
            options
        );
        const request$ = unwrap$(requestRes$);

        const doResult = await this.do$(request$, {
            context,
            errorCodes: ["4XX", "5XX"],
            retryConfig: options?.retries || this.options$.retryConfig,
            retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
        });
        const response = unwrap$(doResult);

        const [result$] = await m$.match<
            operations.VerifyEventResponseBody | undefined,
            SDKError | SDKValidationError
        >(
            m$.json(200, operations.VerifyEventResponseBody$inboundSchema.optional()),
            m$.nil(201, operations.VerifyEventResponseBody$inboundSchema.optional()),
            m$.fail(["4XX", "5XX"])
        )(response);

        return unwrap$(result$);
    }
}

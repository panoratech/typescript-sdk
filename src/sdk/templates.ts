/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
    encodeFormQuery as encodeFormQuery$,
    encodeJSON as encodeJSON$,
    encodeSimple as encodeSimple$,
} from "../lib/encodings.js";
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

export class Templates extends ClientSDK {
    /**
     * List  Templates
     */
    async list(
        request: operations.ListMarketingautomationTemplatesRequest,
        options?: RequestOptions
    ): Promise<operations.ListMarketingautomationTemplatesResponseBody> {
        const input$ = request;

        const parsed$ = schemas$.safeParse(
            input$,
            (value$) =>
                operations.ListMarketingautomationTemplatesRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const payload$ = unwrap$(parsed$);
        const body$ = null;

        const path$ = pathToFunc("/marketingautomation/templates")();

        const query$ = encodeFormQuery$({
            cursor: payload$.cursor,
            limit: payload$.limit,
            remote_data: payload$.remote_data,
        });

        const headers$ = new Headers({
            Accept: "application/json",
            "x-connection-token": encodeSimple$(
                "x-connection-token",
                payload$["x-connection-token"],
                { explode: false, charEncoding: "none" }
            ),
        });

        const apiKey$ = await extractSecurity(this.options$.apiKey);
        const security$ = apiKey$ == null ? {} : { apiKey: apiKey$ };
        const context = {
            operationID: "listMarketingautomationTemplates",
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
                query: query$,
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
            operations.ListMarketingautomationTemplatesResponseBody,
            SDKError | SDKValidationError
        >(
            m$.json(200, operations.ListMarketingautomationTemplatesResponseBody$inboundSchema),
            m$.fail(["4XX", "5XX"])
        )(response);

        return unwrap$(result$);
    }

    /**
     * Create Template
     *
     * @remarks
     * Create a template in any supported Marketingautomation software
     */
    async create(
        request: operations.CreateMarketingautomationTemplateRequest,
        options?: RequestOptions
    ): Promise<components.UnifiedMarketingautomationTemplateOutput> {
        const input$ = request;

        const parsed$ = schemas$.safeParse(
            input$,
            (value$) =>
                operations.CreateMarketingautomationTemplateRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const payload$ = unwrap$(parsed$);
        const body$ = encodeJSON$("body", payload$.UnifiedMarketingautomationTemplateInput, {
            explode: true,
        });

        const path$ = pathToFunc("/marketingautomation/templates")();

        const query$ = encodeFormQuery$({
            remote_data: payload$.remote_data,
        });

        const headers$ = new Headers({
            "Content-Type": "application/json",
            Accept: "application/json",
            "x-connection-token": encodeSimple$(
                "x-connection-token",
                payload$["x-connection-token"],
                { explode: false, charEncoding: "none" }
            ),
        });

        const apiKey$ = await extractSecurity(this.options$.apiKey);
        const security$ = apiKey$ == null ? {} : { apiKey: apiKey$ };
        const context = {
            operationID: "createMarketingautomationTemplate",
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
                query: query$,
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
            components.UnifiedMarketingautomationTemplateOutput,
            SDKError | SDKValidationError
        >(
            m$.json(201, components.UnifiedMarketingautomationTemplateOutput$inboundSchema),
            m$.fail(["4XX", "5XX"])
        )(response);

        return unwrap$(result$);
    }

    /**
     * Retrieve Templates
     *
     * @remarks
     * Retrieve Templates from any connected Marketingautomation software
     */
    async retrieve(
        request: operations.RetrieveMarketingautomationTemplateRequest,
        options?: RequestOptions
    ): Promise<components.UnifiedMarketingautomationTemplateOutput> {
        const input$ = request;

        const parsed$ = schemas$.safeParse(
            input$,
            (value$) =>
                operations.RetrieveMarketingautomationTemplateRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const payload$ = unwrap$(parsed$);
        const body$ = null;

        const pathParams$ = {
            id: encodeSimple$("id", payload$.id, { explode: false, charEncoding: "percent" }),
        };

        const path$ = pathToFunc("/marketingautomation/templates/{id}")(pathParams$);

        const query$ = encodeFormQuery$({
            remote_data: payload$.remote_data,
        });

        const headers$ = new Headers({
            Accept: "application/json",
            "x-connection-token": encodeSimple$(
                "x-connection-token",
                payload$["x-connection-token"],
                { explode: false, charEncoding: "none" }
            ),
        });

        const apiKey$ = await extractSecurity(this.options$.apiKey);
        const security$ = apiKey$ == null ? {} : { apiKey: apiKey$ };
        const context = {
            operationID: "retrieveMarketingautomationTemplate",
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
                query: query$,
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
            components.UnifiedMarketingautomationTemplateOutput,
            SDKError | SDKValidationError
        >(
            m$.json(200, components.UnifiedMarketingautomationTemplateOutput$inboundSchema),
            m$.fail(["4XX", "5XX"])
        )(response);

        return unwrap$(result$);
    }
}

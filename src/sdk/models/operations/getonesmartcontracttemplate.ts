/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../shared";
import * as z from "zod";

export type GetOneSmartContractTemplateRequest = {
    /**
     * Unique identifier of the smart contract template.
     */
    id: string;
    includeForm?: boolean | undefined;
};

export type GetOneSmartContractTemplateResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    smartContractTemplate?: shared.SmartContractTemplate | undefined;
    /**
     * HTTP response status code for this operation
     */
    statusCode: number;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse: Response;
};

/** @internal */
export namespace GetOneSmartContractTemplateRequest$ {
    export const inboundSchema: z.ZodType<
        GetOneSmartContractTemplateRequest,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
            id: z.string(),
            includeForm: z.boolean().optional(),
        })
        .transform((v) => {
            return {
                id: v.id,
                ...(v.includeForm === undefined ? null : { includeForm: v.includeForm }),
            };
        });

    export type Outbound = {
        id: string;
        includeForm?: boolean | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetOneSmartContractTemplateRequest
    > = z
        .object({
            id: z.string(),
            includeForm: z.boolean().optional(),
        })
        .transform((v) => {
            return {
                id: v.id,
                ...(v.includeForm === undefined ? null : { includeForm: v.includeForm }),
            };
        });
}

/** @internal */
export namespace GetOneSmartContractTemplateResponse$ {
    export const inboundSchema: z.ZodType<
        GetOneSmartContractTemplateResponse,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
            ContentType: z.string(),
            SmartContractTemplate: shared.SmartContractTemplate$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                ...(v.SmartContractTemplate === undefined
                    ? null
                    : { smartContractTemplate: v.SmartContractTemplate }),
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        ContentType: string;
        SmartContractTemplate?: shared.SmartContractTemplate$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetOneSmartContractTemplateResponse
    > = z
        .object({
            contentType: z.string(),
            smartContractTemplate: shared.SmartContractTemplate$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                ...(v.smartContractTemplate === undefined
                    ? null
                    : { SmartContractTemplate: v.smartContractTemplate }),
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}

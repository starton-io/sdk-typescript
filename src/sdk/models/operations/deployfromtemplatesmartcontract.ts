/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import { z } from "zod";

export type DeployFromTemplateSmartContractRequest = {
    /**
     * Deploy smart contract from template body payload.
     */
    deployFromTemplateDto: shared.DeployFromTemplateDto;
    /**
     * Boolean for transaction simulation. Will estimate gas price.
     */
    simulate?: boolean | undefined;
};

export type DeployFromTemplateSmartContractResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    deploySmartContractResponse?: shared.DeploySmartContractResponse | undefined;
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
export namespace DeployFromTemplateSmartContractRequest$ {
    export type Inbound = {
        DeployFromTemplateDto: shared.DeployFromTemplateDto$.Inbound;
        simulate?: boolean | undefined;
    };

    export const inboundSchema: z.ZodType<
        DeployFromTemplateSmartContractRequest,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            DeployFromTemplateDto: shared.DeployFromTemplateDto$.inboundSchema,
            simulate: z.boolean().optional(),
        })
        .transform((v) => {
            return {
                deployFromTemplateDto: v.DeployFromTemplateDto,
                ...(v.simulate === undefined ? null : { simulate: v.simulate }),
            };
        });

    export type Outbound = {
        DeployFromTemplateDto: shared.DeployFromTemplateDto$.Outbound;
        simulate?: boolean | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        DeployFromTemplateSmartContractRequest
    > = z
        .object({
            deployFromTemplateDto: shared.DeployFromTemplateDto$.outboundSchema,
            simulate: z.boolean().optional(),
        })
        .transform((v) => {
            return {
                DeployFromTemplateDto: v.deployFromTemplateDto,
                ...(v.simulate === undefined ? null : { simulate: v.simulate }),
            };
        });
}

/** @internal */
export namespace DeployFromTemplateSmartContractResponse$ {
    export type Inbound = {
        ContentType: string;
        DeploySmartContractResponse?: shared.DeploySmartContractResponse$.Inbound | undefined;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<
        DeployFromTemplateSmartContractResponse,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            ContentType: z.string(),
            DeploySmartContractResponse:
                shared.DeploySmartContractResponse$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                ...(v.DeploySmartContractResponse === undefined
                    ? null
                    : { deploySmartContractResponse: v.DeploySmartContractResponse }),
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        ContentType: string;
        DeploySmartContractResponse?: shared.DeploySmartContractResponse$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        DeployFromTemplateSmartContractResponse
    > = z
        .object({
            contentType: z.string(),
            deploySmartContractResponse:
                shared.DeploySmartContractResponse$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                ...(v.deploySmartContractResponse === undefined
                    ? null
                    : { DeploySmartContractResponse: v.deploySmartContractResponse }),
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}

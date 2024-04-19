/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../shared";
import * as z from "zod";

export type ReadSmartContractRequest = {
    /**
     * Call read function of smart contracts.
     */
    readDto: shared.ReadDto;
    /**
     * Smart contract address.
     */
    address: string;
    /**
     * EVM starton supported network.
     */
    network: string;
};

export type ReadSmartContractResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    readSmartContractResponse?: shared.ReadSmartContractResponse | undefined;
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
export namespace ReadSmartContractRequest$ {
    export type Inbound = {
        ReadDto: shared.ReadDto$.Inbound;
        address: string;
        network: string;
    };

    export const inboundSchema: z.ZodType<ReadSmartContractRequest, z.ZodTypeDef, Inbound> = z
        .object({
            ReadDto: shared.ReadDto$.inboundSchema,
            address: z.string(),
            network: z.string(),
        })
        .transform((v) => {
            return {
                readDto: v.ReadDto,
                address: v.address,
                network: v.network,
            };
        });

    export type Outbound = {
        ReadDto: shared.ReadDto$.Outbound;
        address: string;
        network: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ReadSmartContractRequest> = z
        .object({
            readDto: shared.ReadDto$.outboundSchema,
            address: z.string(),
            network: z.string(),
        })
        .transform((v) => {
            return {
                ReadDto: v.readDto,
                address: v.address,
                network: v.network,
            };
        });
}

/** @internal */
export namespace ReadSmartContractResponse$ {
    export type Inbound = {
        ContentType: string;
        ReadSmartContractResponse?: shared.ReadSmartContractResponse$.Inbound | undefined;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<ReadSmartContractResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            ReadSmartContractResponse: shared.ReadSmartContractResponse$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                ...(v.ReadSmartContractResponse === undefined
                    ? null
                    : { readSmartContractResponse: v.ReadSmartContractResponse }),
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        ContentType: string;
        ReadSmartContractResponse?: shared.ReadSmartContractResponse$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ReadSmartContractResponse> = z
        .object({
            contentType: z.string(),
            readSmartContractResponse: shared.ReadSmartContractResponse$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                ...(v.readSmartContractResponse === undefined
                    ? null
                    : { ReadSmartContractResponse: v.readSmartContractResponse }),
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}

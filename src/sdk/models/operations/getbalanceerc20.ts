/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

export type GetBalanceErc20Request = {
    /**
     * Address you want to check.
     */
    address: string;
    /**
     * The contract address.
     */
    contractAddress: string;
    /**
     * The blockchain network you are checking data on.
     */
    network: string;
};

export type GetBalanceErc20Response = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    erc20BalanceResponse?: shared.Erc20BalanceResponse | undefined;
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
export namespace GetBalanceErc20Request$ {
    export const inboundSchema: z.ZodType<GetBalanceErc20Request, z.ZodTypeDef, unknown> = z.object(
        {
            address: z.string(),
            contractAddress: z.string(),
            network: z.string(),
        }
    );

    export type Outbound = {
        address: string;
        contractAddress: string;
        network: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetBalanceErc20Request> =
        z.object({
            address: z.string(),
            contractAddress: z.string(),
            network: z.string(),
        });
}

/** @internal */
export namespace GetBalanceErc20Response$ {
    export const inboundSchema: z.ZodType<GetBalanceErc20Response, z.ZodTypeDef, unknown> = z
        .object({
            ContentType: z.string(),
            ERC20BalanceResponse: shared.Erc20BalanceResponse$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return remap$(v, {
                ContentType: "contentType",
                ERC20BalanceResponse: "erc20BalanceResponse",
                StatusCode: "statusCode",
                RawResponse: "rawResponse",
            });
        });

    export type Outbound = {
        ContentType: string;
        ERC20BalanceResponse?: shared.Erc20BalanceResponse$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetBalanceErc20Response> = z
        .object({
            contentType: z.string(),
            erc20BalanceResponse: shared.Erc20BalanceResponse$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return remap$(v, {
                contentType: "ContentType",
                erc20BalanceResponse: "ERC20BalanceResponse",
                statusCode: "StatusCode",
                rawResponse: "RawResponse",
            });
        });
}

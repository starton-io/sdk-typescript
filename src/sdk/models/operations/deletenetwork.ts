/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as z from "zod";

export type DeleteNetworkRequest = {
    /**
     * The name of the network to delete
     */
    name: string;
};

export type DeleteNetworkResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * HTTP response status code for this operation
     */
    statusCode: number;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse: Response;
    number?: number | undefined;
};

/** @internal */
export namespace DeleteNetworkRequest$ {
    export const inboundSchema: z.ZodType<DeleteNetworkRequest, z.ZodTypeDef, unknown> = z.object({
        name: z.string(),
    });

    export type Outbound = {
        name: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteNetworkRequest> = z.object(
        {
            name: z.string(),
        }
    );
}

/** @internal */
export namespace DeleteNetworkResponse$ {
    export const inboundSchema: z.ZodType<DeleteNetworkResponse, z.ZodTypeDef, unknown> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            number: z.number().optional(),
        })
        .transform((v) => {
            return remap$(v, {
                ContentType: "contentType",
                StatusCode: "statusCode",
                RawResponse: "rawResponse",
            });
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        number?: number | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteNetworkResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            number: z.number().optional(),
        })
        .transform((v) => {
            return remap$(v, {
                contentType: "ContentType",
                statusCode: "StatusCode",
                rawResponse: "RawResponse",
            });
        });
}

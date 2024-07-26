/*
 * Code generated by Speakeasy (https://speakeasyapi.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

export type CreateNetworkResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    network?: shared.Network | undefined;
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
export const CreateNetworkResponse$inboundSchema: z.ZodType<
    CreateNetworkResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        ContentType: z.string(),
        Network: shared.Network$inboundSchema.optional(),
        StatusCode: z.number().int(),
        RawResponse: z.instanceof(Response),
    })
    .transform((v) => {
        return remap$(v, {
            ContentType: "contentType",
            Network: "network",
            StatusCode: "statusCode",
            RawResponse: "rawResponse",
        });
    });

/** @internal */
export type CreateNetworkResponse$Outbound = {
    ContentType: string;
    Network?: shared.Network$Outbound | undefined;
    StatusCode: number;
    RawResponse: never;
};

/** @internal */
export const CreateNetworkResponse$outboundSchema: z.ZodType<
    CreateNetworkResponse$Outbound,
    z.ZodTypeDef,
    CreateNetworkResponse
> = z
    .object({
        contentType: z.string(),
        network: shared.Network$outboundSchema.optional(),
        statusCode: z.number().int(),
        rawResponse: z.instanceof(Response).transform(() => {
            throw new Error("Response cannot be serialized");
        }),
    })
    .transform((v) => {
        return remap$(v, {
            contentType: "ContentType",
            network: "Network",
            statusCode: "StatusCode",
            rawResponse: "RawResponse",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateNetworkResponse$ {
    /** @deprecated use `CreateNetworkResponse$inboundSchema` instead. */
    export const inboundSchema = CreateNetworkResponse$inboundSchema;
    /** @deprecated use `CreateNetworkResponse$outboundSchema` instead. */
    export const outboundSchema = CreateNetworkResponse$outboundSchema;
    /** @deprecated use `CreateNetworkResponse$Outbound` instead. */
    export type Outbound = CreateNetworkResponse$Outbound;
}

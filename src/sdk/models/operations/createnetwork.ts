/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import { z } from "zod";

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
export namespace CreateNetworkResponse$ {
    export type Inbound = {
        ContentType: string;
        Network?: shared.Network$.Inbound | undefined;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<CreateNetworkResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            Network: shared.Network$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                ...(v.Network === undefined ? null : { network: v.Network }),
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        ContentType: string;
        Network?: shared.Network$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateNetworkResponse> = z
        .object({
            contentType: z.string(),
            network: shared.Network$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                ...(v.network === undefined ? null : { Network: v.network }),
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}

/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import * as z from "zod";

export type UpdateNetworkRequest = {
    /**
     * Network details to update
     */
    updateNetworkDto: shared.UpdateNetworkDto;
    /**
     * The unique name of the network to update
     */
    name: string;
};

export type UpdateNetworkResponse = {
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
export namespace UpdateNetworkRequest$ {
    export type Inbound = {
        UpdateNetworkDto: shared.UpdateNetworkDto$.Inbound;
        name: string;
    };

    export const inboundSchema: z.ZodType<UpdateNetworkRequest, z.ZodTypeDef, Inbound> = z
        .object({
            UpdateNetworkDto: shared.UpdateNetworkDto$.inboundSchema,
            name: z.string(),
        })
        .transform((v) => {
            return {
                updateNetworkDto: v.UpdateNetworkDto,
                name: v.name,
            };
        });

    export type Outbound = {
        UpdateNetworkDto: shared.UpdateNetworkDto$.Outbound;
        name: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateNetworkRequest> = z
        .object({
            updateNetworkDto: shared.UpdateNetworkDto$.outboundSchema,
            name: z.string(),
        })
        .transform((v) => {
            return {
                UpdateNetworkDto: v.updateNetworkDto,
                name: v.name,
            };
        });
}

/** @internal */
export namespace UpdateNetworkResponse$ {
    export type Inbound = {
        ContentType: string;
        Network?: shared.Network$.Inbound | undefined;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<UpdateNetworkResponse, z.ZodTypeDef, Inbound> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateNetworkResponse> = z
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

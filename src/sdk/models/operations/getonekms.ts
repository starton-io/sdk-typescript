/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../shared";
import * as z from "zod";

export type GetOneKmsRequest = {
    /**
     * The unique identifier of the KMS entry.
     */
    id: string;
};

export type GetOneKmsResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    kms?: shared.Kms | undefined;
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
export namespace GetOneKmsRequest$ {
    export type Inbound = {
        id: string;
    };

    export const inboundSchema: z.ZodType<GetOneKmsRequest, z.ZodTypeDef, Inbound> = z
        .object({
            id: z.string(),
        })
        .transform((v) => {
            return {
                id: v.id,
            };
        });

    export type Outbound = {
        id: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetOneKmsRequest> = z
        .object({
            id: z.string(),
        })
        .transform((v) => {
            return {
                id: v.id,
            };
        });
}

/** @internal */
export namespace GetOneKmsResponse$ {
    export type Inbound = {
        ContentType: string;
        Kms?: shared.Kms$.Inbound | undefined;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<GetOneKmsResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            Kms: shared.Kms$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                ...(v.Kms === undefined ? null : { kms: v.Kms }),
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        ContentType: string;
        Kms?: shared.Kms$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetOneKmsResponse> = z
        .object({
            contentType: z.string(),
            kms: shared.Kms$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                ...(v.kms === undefined ? null : { Kms: v.kms }),
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}

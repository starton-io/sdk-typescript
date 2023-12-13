/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import { z } from "zod";

export type CreateKmsResponse = {
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
export namespace CreateKmsResponse$ {
    export type Inbound = {
        ContentType: string;
        Kms?: shared.Kms$.Inbound | undefined;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<CreateKmsResponse, z.ZodTypeDef, Inbound> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateKmsResponse> = z
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

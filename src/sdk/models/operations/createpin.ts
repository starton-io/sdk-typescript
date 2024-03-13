/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import * as z from "zod";

export type CreatePinResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    pin?: shared.Pin | undefined;
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
export namespace CreatePinResponse$ {
    export type Inbound = {
        ContentType: string;
        Pin?: shared.Pin$.Inbound | undefined;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<CreatePinResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            Pin: shared.Pin$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                ...(v.Pin === undefined ? null : { pin: v.Pin }),
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        ContentType: string;
        Pin?: shared.Pin$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreatePinResponse> = z
        .object({
            contentType: z.string(),
            pin: shared.Pin$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                ...(v.pin === undefined ? null : { Pin: v.pin }),
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}

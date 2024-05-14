/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { BadRequestException, BadRequestException$ } from "./badrequestexception";
import { MaximumStorageReached, MaximumStorageReached$ } from "./maximumstoragereached";
import { PayloadTooLarge, PayloadTooLarge$ } from "./payloadtoolarge";
import * as z from "zod";

export type UploadFromFilePinIpfsResponseBody = MaximumStorageReached | PayloadTooLarge;

export type UploadFromFilePinResponseBody = BadRequestException;

/** @internal */
export namespace UploadFromFilePinIpfsResponseBody$ {
    export const inboundSchema: z.ZodType<
        UploadFromFilePinIpfsResponseBody,
        z.ZodTypeDef,
        unknown
    > = z.union([MaximumStorageReached$.inboundSchema, PayloadTooLarge$.inboundSchema]);

    export type Outbound = MaximumStorageReached$.Outbound | PayloadTooLarge$.Outbound;
    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        UploadFromFilePinIpfsResponseBody
    > = z.union([MaximumStorageReached$.outboundSchema, PayloadTooLarge$.outboundSchema]);
}

/** @internal */
export namespace UploadFromFilePinResponseBody$ {
    export const inboundSchema: z.ZodType<UploadFromFilePinResponseBody, z.ZodTypeDef, unknown> =
        BadRequestException$.inboundSchema;

    export type Outbound = BadRequestException$.Outbound;
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UploadFromFilePinResponseBody> =
        BadRequestException$.outboundSchema;
}

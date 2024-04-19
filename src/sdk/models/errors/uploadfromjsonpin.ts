/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { BadRequestException, BadRequestException$ } from "./badrequestexception";
import { MaximumStorageReached, MaximumStorageReached$ } from "./maximumstoragereached";
import * as z from "zod";

export type UploadFromJsonPinIpfsResponseBody = MaximumStorageReached;

export type UploadFromJsonPinResponseBody = BadRequestException;

/** @internal */
export namespace UploadFromJsonPinIpfsResponseBody$ {
    export type Inbound = MaximumStorageReached$.Inbound;

    export type Outbound = MaximumStorageReached$.Outbound;
    export const inboundSchema: z.ZodType<
        UploadFromJsonPinIpfsResponseBody,
        z.ZodTypeDef,
        Inbound
    > = MaximumStorageReached$.inboundSchema;
    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        UploadFromJsonPinIpfsResponseBody
    > = MaximumStorageReached$.outboundSchema;
}

/** @internal */
export namespace UploadFromJsonPinResponseBody$ {
    export type Inbound = BadRequestException$.Inbound;

    export type Outbound = BadRequestException$.Outbound;
    export const inboundSchema: z.ZodType<UploadFromJsonPinResponseBody, z.ZodTypeDef, Inbound> =
        BadRequestException$.inboundSchema;
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UploadFromJsonPinResponseBody> =
        BadRequestException$.outboundSchema;
}

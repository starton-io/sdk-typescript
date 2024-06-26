/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { BadRequestException, BadRequestException$ } from "./badrequestexception.js";
import { CouldNotFindResource, CouldNotFindResource$ } from "./couldnotfindresource.js";
import * as z from "zod";

export type DeletePinIpfsResponseBody = CouldNotFindResource;

export type DeletePinResponseBody = BadRequestException;

/** @internal */
export namespace DeletePinIpfsResponseBody$ {
    export const inboundSchema: z.ZodType<DeletePinIpfsResponseBody, z.ZodTypeDef, unknown> =
        CouldNotFindResource$.inboundSchema;

    export type Outbound = CouldNotFindResource$.Outbound;
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeletePinIpfsResponseBody> =
        CouldNotFindResource$.outboundSchema;
}

/** @internal */
export namespace DeletePinResponseBody$ {
    export const inboundSchema: z.ZodType<DeletePinResponseBody, z.ZodTypeDef, unknown> =
        BadRequestException$.inboundSchema;

    export type Outbound = BadRequestException$.Outbound;
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeletePinResponseBody> =
        BadRequestException$.outboundSchema;
}

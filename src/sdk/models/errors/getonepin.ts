/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { BadRequestException, BadRequestException$ } from "./badrequestexception.js";
import { CouldNotFindResource, CouldNotFindResource$ } from "./couldnotfindresource.js";
import * as z from "zod";

export type GetOnePinIpfsResponseBody = CouldNotFindResource;

export type GetOnePinResponseBody = BadRequestException;

/** @internal */
export namespace GetOnePinIpfsResponseBody$ {
    export const inboundSchema: z.ZodType<GetOnePinIpfsResponseBody, z.ZodTypeDef, unknown> =
        CouldNotFindResource$.inboundSchema;

    export type Outbound = CouldNotFindResource$.Outbound;
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetOnePinIpfsResponseBody> =
        CouldNotFindResource$.outboundSchema;
}

/** @internal */
export namespace GetOnePinResponseBody$ {
    export const inboundSchema: z.ZodType<GetOnePinResponseBody, z.ZodTypeDef, unknown> =
        BadRequestException$.inboundSchema;

    export type Outbound = BadRequestException$.Outbound;
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetOnePinResponseBody> =
        BadRequestException$.outboundSchema;
}

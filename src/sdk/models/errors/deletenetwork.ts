/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { BadRequestException, BadRequestException$ } from "./badrequestexception.js";
import { CouldNotFindResource, CouldNotFindResource$ } from "./couldnotfindresource.js";
import * as z from "zod";

export type DeleteNetworkNetworkResponseBody = CouldNotFindResource;

export type DeleteNetworkResponseBody = BadRequestException;

/** @internal */
export namespace DeleteNetworkNetworkResponseBody$ {
    export const inboundSchema: z.ZodType<DeleteNetworkNetworkResponseBody, z.ZodTypeDef, unknown> =
        CouldNotFindResource$.inboundSchema;

    export type Outbound = CouldNotFindResource$.Outbound;
    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        DeleteNetworkNetworkResponseBody
    > = CouldNotFindResource$.outboundSchema;
}

/** @internal */
export namespace DeleteNetworkResponseBody$ {
    export const inboundSchema: z.ZodType<DeleteNetworkResponseBody, z.ZodTypeDef, unknown> =
        BadRequestException$.inboundSchema;

    export type Outbound = BadRequestException$.Outbound;
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteNetworkResponseBody> =
        BadRequestException$.outboundSchema;
}

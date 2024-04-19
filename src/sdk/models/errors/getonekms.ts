/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { BadRequestException, BadRequestException$ } from "./badrequestexception";
import { CouldNotFindResource, CouldNotFindResource$ } from "./couldnotfindresource";
import * as z from "zod";

export type GetOneKmsKmsResponseBody = CouldNotFindResource;

export type GetOneKmsResponseBody = BadRequestException;

/** @internal */
export namespace GetOneKmsKmsResponseBody$ {
    export type Inbound = CouldNotFindResource$.Inbound;

    export type Outbound = CouldNotFindResource$.Outbound;
    export const inboundSchema: z.ZodType<GetOneKmsKmsResponseBody, z.ZodTypeDef, Inbound> =
        CouldNotFindResource$.inboundSchema;
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetOneKmsKmsResponseBody> =
        CouldNotFindResource$.outboundSchema;
}

/** @internal */
export namespace GetOneKmsResponseBody$ {
    export type Inbound = BadRequestException$.Inbound;

    export type Outbound = BadRequestException$.Outbound;
    export const inboundSchema: z.ZodType<GetOneKmsResponseBody, z.ZodTypeDef, Inbound> =
        BadRequestException$.inboundSchema;
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetOneKmsResponseBody> =
        BadRequestException$.outboundSchema;
}

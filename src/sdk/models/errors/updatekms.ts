/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { BadRequestException, BadRequestException$ } from "./badrequestexception";
import { CouldNotFindResource, CouldNotFindResource$ } from "./couldnotfindresource";
import * as z from "zod";

export type UpdateKmsKmsResponseBody = CouldNotFindResource;

export type UpdateKmsResponseBody = BadRequestException;

/** @internal */
export namespace UpdateKmsKmsResponseBody$ {
    export const inboundSchema: z.ZodType<UpdateKmsKmsResponseBody, z.ZodTypeDef, unknown> =
        CouldNotFindResource$.inboundSchema;

    export type Outbound = CouldNotFindResource$.Outbound;
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateKmsKmsResponseBody> =
        CouldNotFindResource$.outboundSchema;
}

/** @internal */
export namespace UpdateKmsResponseBody$ {
    export const inboundSchema: z.ZodType<UpdateKmsResponseBody, z.ZodTypeDef, unknown> =
        BadRequestException$.inboundSchema;

    export type Outbound = BadRequestException$.Outbound;
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateKmsResponseBody> =
        BadRequestException$.outboundSchema;
}

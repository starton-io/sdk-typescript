/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { BadRequestException, BadRequestException$ } from "./badrequestexception";
import { CouldNotFindResource, CouldNotFindResource$ } from "./couldnotfindresource";
import * as z from "zod";

export type GetAllSettingRelayerTransactionManagerSettingResponseBody = CouldNotFindResource;

export type GetAllSettingRelayerResponseBody = BadRequestException;

/** @internal */
export namespace GetAllSettingRelayerTransactionManagerSettingResponseBody$ {
    export type Inbound = CouldNotFindResource$.Inbound;

    export type Outbound = CouldNotFindResource$.Outbound;
    export const inboundSchema: z.ZodType<
        GetAllSettingRelayerTransactionManagerSettingResponseBody,
        z.ZodTypeDef,
        Inbound
    > = CouldNotFindResource$.inboundSchema;
    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetAllSettingRelayerTransactionManagerSettingResponseBody
    > = CouldNotFindResource$.outboundSchema;
}

/** @internal */
export namespace GetAllSettingRelayerResponseBody$ {
    export type Inbound = BadRequestException$.Inbound;

    export type Outbound = BadRequestException$.Outbound;
    export const inboundSchema: z.ZodType<GetAllSettingRelayerResponseBody, z.ZodTypeDef, Inbound> =
        BadRequestException$.inboundSchema;
    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetAllSettingRelayerResponseBody
    > = BadRequestException$.outboundSchema;
}

/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { BadRequestException, BadRequestException$ } from "./badrequestexception";
import { CouldNotFindResource, CouldNotFindResource$ } from "./couldnotfindresource";
import * as z from "zod";

export type DeleteSmartContractSmartContractManagementResponseBody = CouldNotFindResource;

export type DeleteSmartContractResponseBody = BadRequestException;

/** @internal */
export namespace DeleteSmartContractSmartContractManagementResponseBody$ {
    export const inboundSchema: z.ZodType<
        DeleteSmartContractSmartContractManagementResponseBody,
        z.ZodTypeDef,
        unknown
    > = CouldNotFindResource$.inboundSchema;

    export type Outbound = CouldNotFindResource$.Outbound;
    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        DeleteSmartContractSmartContractManagementResponseBody
    > = CouldNotFindResource$.outboundSchema;
}

/** @internal */
export namespace DeleteSmartContractResponseBody$ {
    export const inboundSchema: z.ZodType<DeleteSmartContractResponseBody, z.ZodTypeDef, unknown> =
        BadRequestException$.inboundSchema;

    export type Outbound = BadRequestException$.Outbound;
    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        DeleteSmartContractResponseBody
    > = BadRequestException$.outboundSchema;
}

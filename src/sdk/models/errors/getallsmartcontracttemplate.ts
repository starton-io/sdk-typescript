/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { BadRequestException, BadRequestException$ } from "./badrequestexception.js";
import * as z from "zod";

export type GetAllSmartContractTemplateResponseBody = BadRequestException;

/** @internal */
export namespace GetAllSmartContractTemplateResponseBody$ {
    export const inboundSchema: z.ZodType<
        GetAllSmartContractTemplateResponseBody,
        z.ZodTypeDef,
        unknown
    > = BadRequestException$.inboundSchema;

    export type Outbound = BadRequestException$.Outbound;
    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetAllSmartContractTemplateResponseBody
    > = BadRequestException$.outboundSchema;
}

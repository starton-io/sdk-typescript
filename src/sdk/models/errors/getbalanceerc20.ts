/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { BadRequestException, BadRequestException$ } from "./badrequestexception";
import * as z from "zod";

export type GetBalanceErc20ResponseBody = BadRequestException;

/** @internal */
export namespace GetBalanceErc20ResponseBody$ {
    export const inboundSchema: z.ZodType<GetBalanceErc20ResponseBody, z.ZodTypeDef, unknown> =
        BadRequestException$.inboundSchema;

    export type Outbound = BadRequestException$.Outbound;
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetBalanceErc20ResponseBody> =
        BadRequestException$.outboundSchema;
}

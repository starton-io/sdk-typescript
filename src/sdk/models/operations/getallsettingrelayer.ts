/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

export type GetAllSettingRelayerRequest = {
    /**
     * The blockchain network for which the Relayer settings should be retrieved.
     */
    network: string;
};

export type GetAllSettingRelayerResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    settingRelayer?: shared.SettingRelayer | undefined;
    /**
     * HTTP response status code for this operation
     */
    statusCode: number;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse: Response;
};

/** @internal */
export namespace GetAllSettingRelayerRequest$ {
    export const inboundSchema: z.ZodType<GetAllSettingRelayerRequest, z.ZodTypeDef, unknown> =
        z.object({
            network: z.string(),
        });

    export type Outbound = {
        network: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetAllSettingRelayerRequest> =
        z.object({
            network: z.string(),
        });
}

/** @internal */
export namespace GetAllSettingRelayerResponse$ {
    export const inboundSchema: z.ZodType<GetAllSettingRelayerResponse, z.ZodTypeDef, unknown> = z
        .object({
            ContentType: z.string(),
            SettingRelayer: shared.SettingRelayer$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return remap$(v, {
                ContentType: "contentType",
                SettingRelayer: "settingRelayer",
                StatusCode: "statusCode",
                RawResponse: "rawResponse",
            });
        });

    export type Outbound = {
        ContentType: string;
        SettingRelayer?: shared.SettingRelayer$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetAllSettingRelayerResponse> = z
        .object({
            contentType: z.string(),
            settingRelayer: shared.SettingRelayer$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return remap$(v, {
                contentType: "ContentType",
                settingRelayer: "SettingRelayer",
                statusCode: "StatusCode",
                rawResponse: "RawResponse",
            });
        });
}

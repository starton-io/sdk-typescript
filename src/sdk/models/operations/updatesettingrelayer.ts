/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

export type UpdateSettingRelayerRequest = {
    updateSettingRelayerDto: shared.UpdateSettingRelayerDto;
    /**
     * The blockchain network for which the Relayer settings should be updated.
     */
    network: string;
};

export type UpdateSettingRelayerResponse = {
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
export namespace UpdateSettingRelayerRequest$ {
    export const inboundSchema: z.ZodType<UpdateSettingRelayerRequest, z.ZodTypeDef, unknown> = z
        .object({
            UpdateSettingRelayerDto: shared.UpdateSettingRelayerDto$.inboundSchema,
            network: z.string(),
        })
        .transform((v) => {
            return remap$(v, {
                UpdateSettingRelayerDto: "updateSettingRelayerDto",
            });
        });

    export type Outbound = {
        UpdateSettingRelayerDto: shared.UpdateSettingRelayerDto$.Outbound;
        network: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateSettingRelayerRequest> = z
        .object({
            updateSettingRelayerDto: shared.UpdateSettingRelayerDto$.outboundSchema,
            network: z.string(),
        })
        .transform((v) => {
            return remap$(v, {
                updateSettingRelayerDto: "UpdateSettingRelayerDto",
            });
        });
}

/** @internal */
export namespace UpdateSettingRelayerResponse$ {
    export const inboundSchema: z.ZodType<UpdateSettingRelayerResponse, z.ZodTypeDef, unknown> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateSettingRelayerResponse> = z
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

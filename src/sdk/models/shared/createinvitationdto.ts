/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export enum Role {
    Owner = "owner",
}

export type CreateInvitationDto = {
    email: string;
    role: Role;
};

/** @internal */
export namespace Role$ {
    export const inboundSchema = z.nativeEnum(Role);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace CreateInvitationDto$ {
    export const inboundSchema: z.ZodType<CreateInvitationDto, z.ZodTypeDef, unknown> = z
        .object({
            email: z.string(),
            role: Role$.inboundSchema,
        })
        .transform((v) => {
            return {
                email: v.email,
                role: v.role,
            };
        });

    export type Outbound = {
        email: string;
        role: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateInvitationDto> = z
        .object({
            email: z.string(),
            role: Role$.outboundSchema,
        })
        .transform((v) => {
            return {
                email: v.email,
                role: v.role,
            };
        });
}

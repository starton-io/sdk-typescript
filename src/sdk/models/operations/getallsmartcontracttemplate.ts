/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export enum GetAllSmartContractTemplateCategory {
    Nft = "NFT",
    Fungible = "FUNGIBLE",
    Other = "OTHER",
    Deprecated = "DEPRECATED",
    Sale = "SALE",
    Tool = "TOOL",
}

export class GetAllSmartContractTemplateRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=blockchain" })
    blockchain?: string;

    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=category" })
    category?: GetAllSmartContractTemplateCategory;

    @SpeakeasyMetadata({
        data: "queryParam, style=form;explode=true;name=includeCompilationDetails",
    })
    includeCompilationDetails?: boolean;

    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeForm" })
    includeForm?: boolean;

    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isActivated" })
    isActivated?: boolean;

    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isAudited" })
    isAudited?: boolean;

    /**
     * Number of entities returned on each page. By default this number is set to 100.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
    limit?: number;

    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" })
    name?: string;

    /**
     * Number of returned page. By default the returned page is the first.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
    page?: number;
}

export class GetAllSmartContractTemplateSmartContractTemplatePaginated extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: shared.SmartContractTemplate })
    @Expose({ name: "items" })
    @Type(() => shared.SmartContractTemplate)
    items: shared.SmartContractTemplate[];

    @SpeakeasyMetadata()
    @Expose({ name: "meta" })
    @Type(() => shared.PaginationData)
    meta: shared.PaginationData;
}

export class GetAllSmartContractTemplateResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    smartContractTemplatePaginated?: GetAllSmartContractTemplateSmartContractTemplatePaginated;

    /**
     * HTTP response status code for this operation
     */
    @SpeakeasyMetadata()
    statusCode: number;

    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}

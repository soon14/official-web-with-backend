import { ArticlePick, IArticleEntity } from "../entity/article";
import { IResponsePagination } from "../common";
import { IUserEntity } from '../entity/user';

/**
 * @description 新增接口
 */
export interface IArticleCreateResponse {}

/**
 * @description 修改接口
 */
export interface IArticleModifyResponse {}

/**
 * @description 删除接口
 */
export interface IArticleDeleteResponse {
    /**
     * Raw SQL result returned by executed query.
     */
    raw: any;
    /**
     * Number of affected rows/documents
     * Not all drivers support this
     */
    affected?: number | null;
}

/**
 * @description 单篇文章
 */
export interface IArticleDetailResponse {
    article: IArticleEntity;
    related?: [ArticlePick, ArticlePick],
    author?: IUserEntity
}

/**
 * @description 文章列表
 */
export interface IArticleListResponse extends IResponsePagination<IArticleEntity> {}

/**
 *  @description 修改文章状态接口
 */
export interface IArticleSetStatusResponse {
    /**
     * Raw SQL result returned by executed query.
     */
    raw: any;
    /**
     * Number of affected rows/documents
     * Not all drivers support this
     */
    affected?: number;
    /**
     * Contains inserted entity id.
     * Has entity-like structure (not just column database name and values).
     */
    /**
     * Generated values returned by a database.
     * Has entity-like structure (not just column database name and values).
     */
    generatedMaps: any[];
}

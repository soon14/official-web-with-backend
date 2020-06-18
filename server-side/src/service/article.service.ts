import { inject, provide } from 'midway';
import { IArticleService } from "../interfaces/article.interface";
import { SERVICE_DB, SERVICE_POST } from "../inject-token";
import {
    IArticleCreateOptions,
    IArticleDeleteOptions,
    IArticleDetailOptions,
    IArticleListOptions,
    IArticleModifyOptions
} from "../../../libs/request/article";
import {
    IArticleCreateResponse,
    IArticleDeleteResponse,
    IArticleDetailResponse,
    IArticleListResponse,
    IArticleModifyResponse
} from "../../../libs/response/article";
import { Article } from "../db/entities/article";
import {
    ArticleCannotCreateError,
    ArticleCannotDeleteError,
    ArticleCannotModifyError, ArticleNotFoundError
} from "../../../libs/response-error";
import { IDb } from "../interfaces/db.interface";
import { User } from "../db/entities/user";
import { IArticleEntity } from "../../../libs/entity/article";

@provide(SERVICE_POST)
export class ArticleService implements IArticleService {
    static setCommonField = (article: Article, options: IArticleEntity) => {
        article.content = options.content
        article.modifyDate = options.modifyDate
        article.title = options.title
        article.priority = options.priority
        article.status = options.status
        article.thumbnail = options.thumbnail
    }

    @inject(SERVICE_DB)
    db: IDb;

    /**
     * @description 新增文章
     * @param options
     */
    async create(options: IArticleCreateOptions): Promise<IArticleCreateResponse> {
        try {
            const articleRepo = this.db.getRepository(Article)
            const article = new Article()

            ArticleService.setCommonField(article, options)

            const user = new User()
            user.id = options.userId
            article.user = user

            await articleRepo.save(article)
            return {}
        } catch (e) {
            throw new ArticleCannotCreateError(e)
        }
    }

    /**
     * @description 删除文章
     * @param options
     */
    async delete(options: IArticleDeleteOptions): Promise<IArticleDeleteResponse> {
        try {
            const articleRepo = this.db.getRepository(Article)
            return await articleRepo.delete(options.id)
        } catch (e) {
            throw new ArticleCannotDeleteError(e)
        }
    }

    async findMany(options: IArticleListOptions): Promise<IArticleListResponse> {
        return Promise.resolve(undefined);
    }

    async findOne(options: IArticleDetailOptions): Promise<IArticleDetailResponse> {
        return Promise.resolve(undefined);
    }

    async modify(options: IArticleModifyOptions): Promise<IArticleModifyResponse> {

        const articleRepo = this.db.getRepository(Article)
        const article = await articleRepo.findOne(options.id)

        if (!article) {
            throw new ArticleNotFoundError()
        }
        try {
            ArticleService.setCommonField(article, options)

            const userRepo = this.db.getRepository(User)
            article.user = await userRepo.findOne(options.userId)

            await articleRepo.save(article)
            return {}
        } catch (e) {
            throw new ArticleCannotModifyError(e)
        }
    }


}

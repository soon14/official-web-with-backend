import { BaseEntity } from "../../shared/base.entity";
import { AfterLoad, Column, Entity, ManyToOne } from 'typeorm';
import { ArticlePriority, ArticleStatus, ArticleType } from 'libs/enums/article';
import { IArticleEntity } from 'libs/entity/article';

import { User } from "../user/user.entity";

@Entity()
export class Article extends BaseEntity implements IArticleEntity{
    /**
     * @description 标题
     */
    @Column({
        length: 191
    })
    title: string;

    @Column({
        type: "longtext"
    })
    content: string;

    /**
     * @description 缩略图
     */
    @Column({
        length: 191
    })
    thumbnail: string;

    /**
     * @description 自定义时间
     */
    @Column({
        type: "datetime",
        default: () => "CURRENT_TIMESTAMP(6)",
        precision: 6
    })
    modifyDate: Date;

    /**
     * @description 文章状态
     */
    @Column({
        type: "enum",
        enum: ArticleStatus,
        default: ArticleStatus.Offline
    })
    status: ArticleStatus;

    /**
     * @description 文章优先级
     */
    @Column({
        type: "enum",
        enum: ArticlePriority,
        default: ArticlePriority.Normal
    })
    priority: ArticlePriority;

    /**
     * @description 文章类型
     */
    @Column({
        type: "simple-array",
    })
    type: ArticleType[];

    /**
     * @description 作者
     */
    @ManyToOne(
        () => User,
        user => user.articles
    )
    user: User;

    /**
     * @description 文章计数
     */
    @Column({
        unsigned: true
    })
    count: number;

    /**
     * @description 文章排序
     */
    @Column({
        default: 0
    })
    sort: number;

    @AfterLoad()
    afterLoad() {
        if (this.user) {
            const user = new User();
            user.id = this.user.id;
            user.nickname = this.user.nickname;
            this.user = user;
        }
    }
}

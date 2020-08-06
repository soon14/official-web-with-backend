/**
 * 图片类型
 */
export enum PictureType {
    Environment = 'ENVIRONMENT',
    Friend = 'FRIEND'
}
export const PictureTypeLabel = {
    [PictureType.Environment]: '工作环境',
    [PictureType.Friend]: '小伙伴生活'
}

/**
 * 图片重要级别
 */
export enum PicturePriority {
    Normal = 0,
    Important = 1
}
export const PicturePriorityLabel = {
    [PicturePriority.Normal]: '普通',
    [PicturePriority.Important]: '重要'
}
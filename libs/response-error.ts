import { ResponseCode } from "./response-code";
import { BaseResponseError } from "./common";

export class UserNotFoundError extends BaseResponseError {
    constructor(message = '找不到用户', data?: any) {
        super(ResponseCode.UserNotFound, message, data);
    }
}

export class UserPasswordNotPairError extends BaseResponseError {
    constructor(message = '用户密码不匹配', data?: any) {
        super(ResponseCode.UserPasswordNotPair, message, data);
    }
}

export class UserNotAuthorizeError extends BaseResponseError {
    constructor(message = '用户未授权登录', data?: any) {
        super(ResponseCode.UserNotAuthorize, message, data);
    }
}

export class UserAlreadyExistError extends BaseResponseError {
    constructor(message = '用户已存在', data?: any) {
        super(ResponseCode.UserAlreadyExist, message, data);
    }
}

export class UserRegisterKeyNotPairError extends BaseResponseError {
    constructor(message = '注册用key不正确', data?: any) {
        super(ResponseCode.UserRegisterKeyNotPair, message, data);
    }
}

export class ArticleCannotCreateError extends BaseResponseError {
    constructor(message = '无法生成文章', data?: any) {
        super(ResponseCode.ArticleCannotCreate, message, data);
    }
}

export class ArticleCannotDeleteError extends BaseResponseError {
    constructor(message = '无法删除文章', data?: any) {
        super(ResponseCode.ArticleCannotDelete, message, data);
    }
}

export class ArticleCannotModifyError extends BaseResponseError {
    constructor(data?: any, message = '无法修改文章') {
        super(ResponseCode.ArticleCannotModify, message, data);
    }
}

export class CommonFormInvalidError extends BaseResponseError {
    constructor(message = '表单校验失败', data?: any) {
        super(ResponseCode.CommonFormInvalid, message, data);
    }
}

// 未知错误
export class UnknownError extends BaseResponseError {
    constructor(message = '', data?: any) {
        super(ResponseCode.UnknownError, message, data);
    }
}

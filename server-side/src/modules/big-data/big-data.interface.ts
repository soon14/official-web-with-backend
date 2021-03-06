import { BigDataType } from "libs/enums/big-data";

export type tUrl = string; // 地址
export type tMoney = number; // 金额
export type tCount = number; // 计数
export type tDate = string; // 日期
export type tOrder = string; // 商户号、订单号等等
export type tPieData = {
    data: { key: string, value: number }[], // name 要拼上value+%作为参数
    pieLabels: string[]; // 跟上面的name，要一毛一样，不然会被打
}
export type tPieStore = { key: string, value: number }[] // 键值对存饼图百分比，value之和要等于100

// 展示用的数据结构
export interface IBigDataReturn {
    [BigDataType.EnterpriseCount]: tCount; // 服务企业数量
    [BigDataType.NationwideServiceTotalNumber]: tCount; // 全国累计服务人数
    [BigDataType.NationwideServiceTotalCount]: tCount; // 全国累计服务人次
    [BigDataType.MonthlyNewServiceCount]: { x: tDate[], y: tCount[] }; // 月新增服务人次
    [BigDataType.RealtimePayDetail]: { business: tOrder, amount: tMoney }[]; // 实时发放明细
    [BigDataType.NationwideClientDistribution]: tUrl;  // 全国客户分布
    [BigDataType.FreelancerArealDistribution]: tUrl; // 服务自由职业者地域分布
    [BigDataType.XinTownNationDistribution]: tUrl; // 薪商小镇全国分布
    [BigDataType.FreelancerIndustryDistribution]: tPieData; // 服务自由职业者行业分布
    [BigDataType.FreelancerIncomeDistribution]: tPieData; // 自由职业者收入水平分布
}

// 储存用的数据结构
export interface IBigDataStorage {
    [BigDataType.EnterpriseCount]: tCount; // 服务企业数量
    [BigDataType.NationwideServiceTotalNumber]: tCount; // 全国累计服务人数
    [BigDataType.NationwideServiceTotalCount]: tCount; // 全国累计服务人次
    [BigDataType.MonthlyNewServiceCount]: { key: tDate, value: tCount }[]; // 月新增服务人次(键值对数组，到时候取最新的12条进行渲染)
    [BigDataType.RealtimePayDetail]: { min: tMoney, max: tMoney, prefix: string }; // 实时发放明细(随机生成的金额范围)
    [BigDataType.NationwideClientDistribution]: tUrl;  // 全国客户分布
    [BigDataType.FreelancerArealDistribution]: tUrl; // 服务自由职业者地域分布
    [BigDataType.XinTownNationDistribution]: tUrl; // 薪商小镇全国分布
    [BigDataType.FreelancerIndustryDistribution]: tPieStore; // 服务自由职业者行业分布
    [BigDataType.FreelancerIncomeDistribution]: tPieStore; // 自由职业者收入水平分布
}

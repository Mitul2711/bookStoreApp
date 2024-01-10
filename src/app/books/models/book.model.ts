import { PriceModel } from "./price.model"

export interface BookModel {
    id: number
    title: string
    totalPage: number
    author: string
    price: PriceModel
}
import { prop, getModelForClass } from '@typegoose/typegoose';
import * as mongoose from 'mongoose';

export class URL {
    @prop({ require: true })
    hash: string

    @prop({ require: true })
    originURL: string

    @prop({ require: true })
    shortURL: string
}

export const URLModel = getModelForClass(URL);


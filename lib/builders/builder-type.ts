import { AndBuilder } from './and-builder';
import { NotBuilder } from './not-builder';
import { OrBuilder } from './or-builder';
import { StatementBuilder } from './statement-builder';
import { XoneBuilder } from './xone-builder';

export type Builder<T> = AndBuilder<T> | OrBuilder<T> | XoneBuilder<T> | StatementBuilder<T> | NotBuilder<T>;

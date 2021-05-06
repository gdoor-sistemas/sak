/**
 * A generic type for using within a list which elements have at least 2 attributes: `value` and `caption`.
 * Usable in lists that represents options for a select, for example.
 */
export type ValueCaption<T = any> = {
  value: T;
  caption: string;
};

export type ValueCaptionSet<T = any> = ValueCaption<T>[];

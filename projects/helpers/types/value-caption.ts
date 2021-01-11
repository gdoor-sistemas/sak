/**
 * A generic type for using within a list which elements have at least 2 attributes: `value` and `caption`.
 * Usable in lists that represents options for a select, for example.
 */
export type ValueCaption = {
  value: any;
  caption: string;
};

export type ValueCaptionSet = ValueCaption[];

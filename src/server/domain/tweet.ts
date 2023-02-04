import { z } from "zod";

const schema = z.string().max(140).min(1);

type Schema = z.infer<typeof schema>;

export default class Tweet {
  private _text: string;

  constructor(props: Schema) {
    this._text = schema.parse(props);
  }

  get text() {
    return this._text;
  }
}

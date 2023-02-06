import type Tweet from "./tweet";

export default interface TweetRepo {
  getAll(): Promise<Tweet[]>;
}

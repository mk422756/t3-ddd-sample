import Tweet from "../domain/tweet";
import type TweetRepo from "../domain/tweet-repo";

export default class MockTweetRepo implements TweetRepo {
  // eslint-disable-next-line @typescript-eslint/require-await
  async getAll(): Promise<Tweet[]> {
    return [new Tweet("test1"), new Tweet("test2"), new Tweet("test3")];
  }
}

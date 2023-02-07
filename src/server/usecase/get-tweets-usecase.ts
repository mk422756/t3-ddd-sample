import type TweetRepo from "../domain/tweet-repo";
import MockTweetRepo from "../infra/mock-tweet-repo";

export default class GetTweetsUsecase {
  private tweetRepo: TweetRepo;

  constructor() {
    this.tweetRepo = new MockTweetRepo();
  }

  handle() {
    const tweets = this.tweetRepo.getAll();
    return tweets;
  }
}

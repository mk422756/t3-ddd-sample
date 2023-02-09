import type TweetRepo from "../domain/tweet-repo";
import type TweetDto from "../dto/tweet-dto";
import MockTweetRepo from "../infra/mock-tweet-repo";

export default class GetTweetsUsecase {
  private tweetRepo: TweetRepo;

  constructor() {
    this.tweetRepo = new MockTweetRepo();
  }

  async handle(): Promise<TweetDto[]> {
    const tweets = await this.tweetRepo.getAll();
    return tweets.map((tweet) => {
      return {
        text: tweet.text,
      };
    });
  }
}

import { Tweet, listedTweets } from './model';

export function submitTweet(tweet: Tweet): void {
    let submittedTweet = listedTweets.get(tweet.ID);
    assert(submittedTweet === null, "The tweet is already exists");

    listedTweets.set(tweet.ID, Tweet.fromPayload(tweet));
}

export function getTweet(ID: string): Tweet | null {
    return listedTweets.get(ID);
}

export function getTweets(): Tweet[] {
    return listedTweets.values();
}

export function likeTweet(tweetId: string): void {
    const tweet = getTweet(tweetId);
    assert(tweet != null, "The tweet is not found");

    tweet.updateLikeCount();
    listedTweets.set(tweet.ID, tweet);
}

export function shareTweet(tweetId: string): void {
    const tweet = getTweet(tweetId);
    assert(tweet != null, "The tweet is not found");

    tweet.updateShareCount();
    listedTweets.set(tweet.ID, tweet);
}
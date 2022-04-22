import { PersistentUnorderedMap, context } from "near-sdk-as";

@nearBindgen
export class Tweet {
    ID: string;
    content: string;
    date: string;
    tag: string;
    likeCount: u32;
    shareCount: u32;
    owner: string;
    public static fromPayload(payload: Tweet): Tweet {
        const tweet = new Tweet();
        tweet.ID = payload.ID;
        tweet.content = payload.content;
        tweet.date = payload.date;
        tweet.tag = payload.tag;
        tweet.owner = context.sender;
        return tweet;
    }

    public updateLikeCount(): void {
        this.likeCount = this.likeCount + 1;
    }
    public updateShareCount(): void {
        this.shareCount = this.shareCount + 1;
    }
}

export const listedTweets = new PersistentUnorderedMap<string, Tweet>("LISTED_TWEETS");
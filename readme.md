In this project, Twitter-like functional app is crated and deployed in Near Protocol.
A Tweet model is created in which a tweet has a unique id, content, date, tag, likeCount, shareCount and owner. Also each tweet has two methods where like counts and share counts can be updated as other users select any of these options.

There are two view methods in which you can get a tweet by its id or tweet lists from submitted tweets.

near view $CONTRACT getTweet '{"ID": "0"}'
near view $CONTRACT getTweets

Also there are three call methods in which you can submit your tweet, like a tweet and share a tweet.

near call $CONTRACT submitTweet '{"tweet": {"ID": "1", "content": "second tweet", "date": "23042022", "tag": "NEAR"}}' --accountId=$CONTRACT
near call $CONTRACT likeTweet '{"tweetId": "1"}' --accountId=$CONTRACT
near call $CONTRACT shareTweet '{"tweetId": "1"}' --accountId=$CONTRACT

## LOOM VIDEO LINK
https://www.loom.com/share/bfc6f969d41c49b2832e0c2f1bc37736
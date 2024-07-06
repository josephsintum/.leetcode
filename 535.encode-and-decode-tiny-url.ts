/*
 * @lc app=leetcode id=535 lang=typescript
 *
 * [535] Encode and Decode TinyURL
 */

// @lc code=start
/**
 * Encodes a URL to a shortened URL.
 */
function encode(longUrl: string): string {
    const url = "http://tinyurl.com/" + crypto.getRandomValues(new Uint32Array(1))[0].toString(16)
    shortURLs.set(url, longUrl)
    return url
}

const shortURLs = new Map<string, string>()

/**
 * Decodes a shortened URL to its original URL.
 */
function decode(shortUrl: string): string {
    return shortURLs.get(shortUrl) || ""
}

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */
// @lc code=end
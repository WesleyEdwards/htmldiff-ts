declare const HtmlDiff: {
  /**
   * 
   * @param oldHtml Original version
   * @param newHtml Current/updated version
   * @param splitBy Display differences per 'word' or per HTML 'element'
   * @returns HTML with <ins> and <del> tags consistent with differences between 'oldHtml' and 'newHtml'
   */
  execute: (oldHtml: string, newHtml: string, splitBy?: "word" | "element" = "word") => string
}

export default HtmlDiff

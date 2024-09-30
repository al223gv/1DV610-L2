import { CountAnalysis } from "./lib/CountAnalysis.js";

export class TextAnalyzer {

  get count (): CountAnalysis {
    return new CountAnalysis()
  }
}

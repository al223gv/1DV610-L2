import { CountAnalysis } from "./CountAnalysis.js";

export class TextAnalyzer {

  get count (): CountAnalysis {
    return new CountAnalysis()
  }
}

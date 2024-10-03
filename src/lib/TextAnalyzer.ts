import { AverageAnalysis } from "./AverageAnalysis.js";
import { CountAnalysis } from "./CountAnalysis.js";
import { FrequencyAnalysis } from "./FrequencyAnalysis.js";

export class TextAnalyzer {

  get count (): CountAnalysis {
    return new CountAnalysis()
  }

  get frequency (): FrequencyAnalysis {
    return new FrequencyAnalysis()
  }

  get average (): AverageAnalysis {
    return new AverageAnalysis()
  }
}

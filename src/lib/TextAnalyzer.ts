import { AverageAnalysis } from "./AverageAnalysis.js";
import { CountAnalysis } from "./CountAnalysis.js";
import { FrequencyAnalysis } from "./FrequencyAnalysis.js";

export class TextAnalyzer {

  /**
   * Get a CountAnalysis object.
   *
   * @returns {CountAnalysis} CountAnalysis object.
   */
  get count (): CountAnalysis {
    return new CountAnalysis()
  }

  /**
   * Get a FrequencyAnalysis object.
   *
   * @returns {FrequencyAnalysis} FrequencyAnalysis object.
   */
  get frequency (): FrequencyAnalysis {
    return new FrequencyAnalysis()
  }

  /**
   * Get a AverageAnalysis object.
   *
   * @returns {AverageAnalysis} AverageAnalysis object.
   */
  get average (): AverageAnalysis {
    return new AverageAnalysis()
  }
}

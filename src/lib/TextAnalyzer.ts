import { AverageAnalysis } from "./AverageAnalysis.js";
import { CountAnalysis } from "./CountAnalysis.js";
import { FrequencyAnalysis } from "./FrequencyAnalysis.js";

export class TextAnalyzer {

  /**
   * Get a CountAnalysis object.
   *
   * @returns {CountAnalysis} CountAnalysis object.
   */
  public get count (): CountAnalysis {
    return new CountAnalysis()
  }

  /**
   * Get a FrequencyAnalysis object.
   *
   * @returns {FrequencyAnalysis} FrequencyAnalysis object.
   */
  public get frequency (): FrequencyAnalysis {
    return new FrequencyAnalysis()
  }

  /**
   * Get a AverageAnalysis object.
   *
   * @returns {AverageAnalysis} AverageAnalysis object.
   */
  public get average (): AverageAnalysis {
    return new AverageAnalysis()
  }
}

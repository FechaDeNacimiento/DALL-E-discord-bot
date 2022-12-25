import { Configuration, OpenAIApi } from "openai";
import { writeFileSync } from "fs";

export default class DALL_E {
  constructor() {
    this.openai;
  }

  setUp() {
    const configuration = new Configuration({
      apiKey: "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",
    });

    this.openai = new OpenAIApi(configuration);
  }

  async saveImg(url) {
    const imgResult = await fetch(url);
    const blob = await imgResult.blob();
    const buffer = Buffer.from(await blob.arrayBuffer());
    writeFileSync(`./img/${Date.now()}.png`, buffer);
  }
}
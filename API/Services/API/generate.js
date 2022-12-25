import DALL_E from "./openAI.js";

class Generate extends DALL_E {

    constructor(prompt){
        super();
        this.response,
        this.prompt = prompt
    }

    async generateImage(){
        this.setUp();

        this.response = await this.openai.createImage({
            prompt: this.prompt,
            n: 1,
            size: "1024x1024",
        });

        const url = this.response.data.data[0].url

        this.saveImg(url);
    }
}

const G = new Generate("remasterized version of the monalisa with blue eyes");
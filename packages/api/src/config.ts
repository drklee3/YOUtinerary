require("dotenv").config();

class Config {
    public GOOGLE_API_KEY: string;

    constructor() {
        this.GOOGLE_API_KEY = process.env.GOOGLE_API_KEY || "";
    }

    public isValid(): boolean {
        return this.GOOGLE_API_KEY.length !== 0;
    }
}

export default new Config();

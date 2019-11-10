require("dotenv").config();

class Config {
    public GOOGLE_API_KEY: string;

    constructor() {
        this.GOOGLE_API_KEY = process.env.GOOGLE_API_KEY || "";
    }

    public isValid(): boolean {
        return this.GOOGLE_API_KEY.length !== 0;
    }

    /**
     * Exits program if config is invalid.
     */
    public validOrExit(): void {
        if (this.isValid()) {
            return;
        }

        console.error(".env file is invalid. Please fix and run again.");
        process.exit(1);
    }
}

export default new Config();

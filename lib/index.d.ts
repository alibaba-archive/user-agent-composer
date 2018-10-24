declare class Composer {
    private p;
    product(name: string, version: string): this;
    ext(name: string, version?: string): this;
    platform(name: string, version?: string, exts?: string[]): this;
    os(name: string, version: string): this;
    build(): string;
}

export = Composer;

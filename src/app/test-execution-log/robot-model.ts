export class Suite {
    id!: string;
    name!: string;
    longname!: string;
    source!: string;
    passed!: boolean;
    status!: string;
    starttime!: string;
    endtime!: string;
    elapsedtime!: number;
    setup!: Keyword|null;
    teardown!: Keyword|null;
    suites!: Suite[];
    tests!: Test[];

    constructor(data?:Partial<Suite>) {
        Object.assign(this, data);
    }
}

export class Test {
    id!: string;
    name!: string;
    longname!: string;
    source!: string;
    passed!: boolean;
    status!: string;
    starttime!: string;
    endtime!: string;
    elapsedtime!: number;
    tags!: string[];
    setup!: Keyword|null;
    teardown!: Keyword|null;
    keywords!: Keyword[];

    constructor(data?:Partial<Test>) {
        Object.assign(this, data);
    }
}

export class Keyword {
    id!: string;
    name!: string;
    source!: string;
    passed!: boolean;
    status!: string;
    starttime!: string;
    endtime!: string;
    elapsedtime!: number;
    args!: string[];
    kwname!: string;
    libname!: string;
    type!: string;
    setup!: Keyword|null;
    teardown!: Keyword|null;
    keywords!: Keyword[];

    constructor(data?:Partial<Keyword>) {
        Object.assign(this, data);
    }
}
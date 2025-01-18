import { expect as baseExpect } from '@playwright/test';
import { assert } from 'superstruct';

export { test } from '@playwright/test';

export const expect = baseExpect.extend({
    async toHaveStructure(res: any, structure: any) {
        const assertionName = 'toHaveStructure';
        let pass: boolean
        let matcherResult: any;
        try {
            assert(res, structure);
            pass = true;
        }
        catch (error: any) {
            matcherResult = error.matcherResult;
            pass = false;
        }

        const message = pass
            ? () => this.utils.matcherHint(assertionName, undefined, undefined, { isNot: this.isNot }) +
                '\n\n' +
                (matcherResult ? `Received: ${this.utils.printReceived(matcherResult.actual)}` : '')
            : () => this.utils.matcherHint(assertionName, undefined, undefined, { isNot: this.isNot }) +
                '\n\n' +
                (matcherResult ? `Received: ${this.utils.printReceived(matcherResult.actual)}` : '');

        return {
            message,
            pass,
            name: assertionName,
            structure,
            actual: matcherResult?.actual,
        };
    },
});
import { isNum, isStr } from '@chriscodesthings/is';

/**
 * A numeric sanitizer that fixes Number() edge cases, and allows for percentage
 *
 * @param x - The value to parse
 * @returns The parsed number
 */
export const parseNumber = (x: number | string): number => {

    // Already a number (but not infinity or anything weird)
    if (isNum(x)) {
        return x;
    }

    // If not string, nothing we can do with it
    if (!isStr(x)) {
        return NaN;
    }

    // Whitespace/blank string check
    x = x.trim();
    if (x.length === 0) {
        return NaN;
    }

    // Might have missed a string "Infinity" here
    if (x === 'Infinity' || x === '-Infinity') {
        return NaN;
    }

    // Allow for percentage
    if (x.endsWith('%')) {
        x = x.slice(0, -1);
    }

    return Number(x);
}

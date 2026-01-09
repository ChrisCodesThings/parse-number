import * as is from '@chriscodesthings/is';

/**
 * A numeric sanitizer that fixes Number() edge cases, and allows for percentage
 *
 * @param x - The value to parse
 * @returns The parsed number
 */
export const parseNumber = (x: any): number => {

    // Already a number (but not infinity or anything weird)
    if (is.isNum(x)) {
        return x;
    }

    // If not string, nothing we can do with it
    if (!is.isStr(x)) {
        return NaN;
    }

    // Might have missed a string "Infinity" here
    if (x === 'Infinity' || x === '-Infinity') {
        return NaN;
    }

    // Whitespace/blank string check
    x = x.trim();
    if (x.length === 0) {
        return NaN;
    }

    // Allow for percentage
    if (x.endsWith('%')) {
        x = x.slice(0, -1);
    }

    return Number(x);
}

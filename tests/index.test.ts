import { describe, it, expect } from 'vitest';
import parseNumber from '../src/index.js';

describe('parseNumber', () => {
    describe('valid numbers', () => {
        it('should return the number as-is', () => {
            expect(parseNumber(10)).toBe(10);
            expect(parseNumber(0)).toBe(0);
            expect(parseNumber(-5)).toBe(-5);
            expect(parseNumber(1.5)).toBe(1.5);
        });

        it('should parse string representations', () => {
            expect(parseNumber('10')).toBe(10);
            expect(parseNumber('0')).toBe(0);
            expect(parseNumber('-5')).toBe(-5);
            expect(parseNumber('1.5')).toBe(1.5);
        });

        it('should handle alternate number systems', () => {
            expect(parseNumber('0xabcd')).toBe(43981);
            expect(parseNumber('0b1001')).toBe(9);
            expect(parseNumber('1e5')).toBe(100000);
            expect(parseNumber(1e5)).toBe(100000);
        });
    });

    describe('percentages', () => {
        it('should parse percentage strings to numbers', () => {
            expect(parseNumber('25%')).toBe(25);
            expect(parseNumber('100%')).toBe(100);
            expect(parseNumber('0%')).toBe(0);
            expect(parseNumber('12.5%')).toBe(12.5);
            expect(parseNumber('-50%')).toBe(-50);
        });
    });

    describe('invalid cases (NaN)', () => {
        it('should return NaN for blank or whitespace strings', () => {
            expect(parseNumber('')).toBeNaN();
            expect(parseNumber('   ')).toBeNaN();
        });

        it('should return NaN for Infinity', () => {
            expect(parseNumber(Infinity)).toBeNaN();
            expect(parseNumber(-Infinity)).toBeNaN();
            expect(parseNumber('Infinity')).toBeNaN(); // String infinity
            expect(parseNumber(' Infinity ')).toBeNaN(); // String infinity with whitespace
        });

        it('should return NaN for non-numeric strings', () => {
            expect(parseNumber('abc')).toBeNaN();
            expect(parseNumber('12px')).toBeNaN();
        });

        it('should return NaN for non-primitive/empty values', () => {
            expect(parseNumber(null)).toBeNaN();
            expect(parseNumber(undefined)).toBeNaN();
            expect(parseNumber(NaN)).toBeNaN();
            expect(parseNumber('NaN')).toBeNaN();
            expect(parseNumber({})).toBeNaN();
            expect(parseNumber([])).toBeNaN();
        });
    });
});

/**
 * TimeFormatter is a utility class for formatting and displaying time
 * in hours, minutes, and seconds based on the initial time.
 */
export class TimeFormatter {
    /**
     * The initial time in seconds.
     */
    initialTime: number;

    /**
     * Creates a new TimeFormatter instance.
     * @param initialTime - The initial time in seconds.
     */
    constructor(initialTime: number) {
        this.initialTime = initialTime;
    }

    /**
     * Formats a time unit (hours, minutes, or seconds) to ensure a consistent
     * display with leading zeros for values less than 10.
     * @param time - The time unit to be formatted.
     * @returns The formatted time unit as a string.
     * @private
     */
    private static getFormattedTime(time: number): string {
        if (time < 10) return `0${time}`;
        return `${time}`;
    }

    /**
     * Gets the remaining seconds based on the initial time.
     * @returns The formatted remaining seconds as a string.
     */
    get seconds(): string {
        const seconds = this.initialTime % 60;
        return TimeFormatter.getFormattedTime(seconds);
    }

    /**
     * Gets the remaining minutes based on the initial time.
     * @returns The formatted remaining minutes as a string.
     */
    get minutes(): string {
        const minutes = Math.floor((this.initialTime / 60) % 60);
        return TimeFormatter.getFormattedTime(minutes);
    }

    /**
     * Gets the remaining hours based on the initial time.
     * @returns The formatted remaining hours as a string.
     */
    get hours(): string {
        const hours = Math.floor(this.initialTime / 3600);
        return TimeFormatter.getFormattedTime(hours);
    }
}

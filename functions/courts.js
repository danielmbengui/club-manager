import { parseDoubleToHourInterval } from "@/functions";

export function getSchedulesCourt(courtData) {
    const {booking_opening_standard, booking_opening_week_days, booking_opening_special_days} = courtData;
    return {
        booking_opening_standard,
        booking_opening_week_days,
        booking_opening_special_days
    };
}
export function createArrayDurationCourt(courtData) {
    const {first_time, last_time} = getFirstAndLastHourCourt(courtData);
    const {first_duration,} = getFirstAndLastDurationCourt(courtData);
    const tab = [];
    let i = 0;
    while(i + first_time <= last_time - first_duration) {
        const value = i + first_time;
        tab.push({name:parseDoubleToHourInterval(value), value:value});
        i += 0.5;
    }
    return tab;
}
export function createArrayDurationManageCourt(first_time, last_time) {
    const tab = [];
    let i = 0;
    while(i + first_time <= last_time) {
        const value = i + first_time;
        tab.push({name:parseDoubleToHourInterval(value), value:value});
        i += 0.5;
    }
    return tab;
}

export function getFirstAndLastHourCourt(courtData) {
    const {booking_opening_standard, booking_opening_week_days, booking_opening_special_days} = getSchedulesCourt(courtData);
    var minStart = booking_opening_standard.open_time.value;
    var maxStart = booking_opening_standard.close_time.value;
    var extraList = booking_opening_standard.extra_closed_time_list;
    if(extraList && extraList.length > 0) {
        for(const extra of extraList) {
            const start = extra.start_hour;
            const end = extra.start_hour;
            if(start < minStart) {
                minStart = start;
            }
            if(end > maxStart) {
                minStart = start;
            }
        }
    }
    //var maxStart = 0;
    for(const opening of booking_opening_week_days) {
        const start = opening.booking_time.open_time.value;
        const end = opening.booking_time.close_time.value;
        const extras = opening.extra_closed_time_list;
        if(start < minStart) {
            minStart = start;
        }
        if(end > maxStart) {
            minStart = start;
        }
        for(const extra of extras) {
            const start = extra.start_hour;
            const end = extra.start_hour;
            if(start < minStart) {
                minStart = start;
            }
            if(end > maxStart) {
                minStart = start;
            }
        }
    }
    for(const opening of booking_opening_special_days) {
        const start = opening.booking_time.open_time.value;
        const end = opening.booking_time.close_time.value;
        const extras = opening.extra_closed_time_list;
        if(start < minStart) {
            minStart = start;
        }
        if(end > maxStart) {
            minStart = start;
        }
        for(const extra of extras) {
            const start = extra.start_hour;
            const end = extra.start_hour;
            if(start < minStart) {
                minStart = start;
            }
            if(end > maxStart) {
                minStart = start;
            }
        }
    }
    return {
        first_time:minStart,
        last_time:maxStart,
        //booking_opening_special_days
    };
}

export function getPricesCourt(courtData) {
    const {booking_prices_standard, booking_prices_week_days, booking_prices_special_days} = courtData;
    return {
        booking_prices_standard,
        booking_prices_week_days,
        booking_prices_special_days
    };
}
export function getDurationsCourt(courtData) {
    const {booking_prices_standard, booking_prices_week_days, booking_prices_special_days} = courtData;
    var durations = [];
    for(const price of booking_prices_standard) {
        const {duration} = price; 
        durations.push(duration);
    }
    for(const price of booking_prices_week_days) {
        const {prices} = price; 
        for(const onePrice of prices) {
            const {duration} = onePrice;
            durations.push(duration);
        }
    }
    for(const price of booking_prices_special_days) {
        const {prices} = price; 
        for(const onePrice of prices) {
            const {duration} = onePrice;
            durations.push(duration);
        }
    }
    return durations.filter(Boolean); // Supprime les valeurs undefined;
}
export function getFirstAndLastDurationCourt(courtData) {
    const {booking_prices_standard, booking_prices_week_days, booking_prices_special_days} = getPricesCourt(courtData);
    var minDuration = 24;
    var maxDuration = 0;
    for(const price of booking_prices_standard) {
        const {duration} = price; 
        if(duration.value < minDuration) {
            minDuration = duration.value;
        }
        if(duration.value > maxDuration) {
            maxDuration = duration.value;
        }
    }
    for(const price of booking_prices_week_days) {
        const {prices} = price; 
        for(const onePrice of prices) {
            const {duration} = onePrice;
            if(duration.value < minDuration) {
                minDuration = duration.value;
            }
            if(duration.value > maxDuration) {
                maxDuration = duration.value;
            }
        }
    }
    for(const price of booking_prices_special_days) {
        const {prices} = price; 
        for(const onePrice of prices) {
            const {duration} = onePrice;
            if(duration.value < minDuration) {
                minDuration = duration.value;
            }
            if(duration.value > maxDuration) {
                maxDuration = duration.value;
            }
        }
    }
    //var extraList = booking_opening_standard.extra_closed_time_list;
    
    return {
        first_duration:minDuration,
        last_duration:maxDuration,
        //booking_opening_special_days
    };
}

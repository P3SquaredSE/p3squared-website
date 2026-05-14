import React, { useMemo, useState } from "react";

const DEFAULT_DRAG = 0.2; //20% Logistics Drag
const DEFAULT_HOURS = 2080; //standard working Hours in a Year

function formatUSD(value) {
    if (!Number.isFinite(value)) return "$0";
    return value.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0,
    });
}


export default function LaborCalculator({ 
    drag = DEFAULT_DRAG,
    hoursPerYear = DEFAULT_HOURS,
    onCOntactClick,
}) {
    //inputs by user
    const [staffCount, setStaffCount] = useState(0);
    const [hourlyWage, setHourlyWage] = useState(0);

    //WCAG 
    const staffValid = Number.isFinite(staffCount) && staffCount > 0;
    const wageValid = Number.isFinite(hourlyWage) && hourlyWage > 0;

    //Derived values
    const annualWaste = useMemo(() => {
        if (!staffValid || !wageValid) return 0;
        return staffCount * hourlyWage * hoursPerYear * drag;
    }, [staffCount, hourlyWage, hoursPerYear, drag, staffValid, wageValid]);

    const monthlyWaste = annualWaste / 12;
    const weeklyWaste = annualWaste / 52;

    const handleReset = () => {
        setStaffCount(50);
        setHourlyWage(45);
    };

    return (
        <section
            id="calculator"
            aria-labelledby="hlt-title"
            className="w-full bg-[#041023]/20 border border-white/10 rounded-2xl p-6 md:p-8"
            >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                    <div className="max-w-2xl">
                        <h2 id="hlt-title" className="text-2xl md:text-3xl font-bold">
                            Labor Calculator
                        </h2>
                        
                    </div>

                    <div
                        className="rounded-xl bg-white/5 border border-white/10 p-4 md:p-5 min-w-[260px]"
                        aria-live="polite"
                    >
                        <p className="text-sm text-white/70">Estimated Annual Waste</p>
                        <p className="mt-2 text-3xl font-extrabold tracking-tight">
                            {formatUSD(annualWaste)}
                        </p>

                        <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                            <div className="rounded-lg bg-white/5 p-3">
                                <p className="text-white/70">Monthly Waste</p>
                                <p className="text-white font-semibold">{formatUSD(monthlyWaste)}</p>
                            </div>
                            <div className="rounded-lg bg-white/5 p-3">
                                <p className="text-white/70">Weekly Waste</p>
                                <p className="text-white font-semibold">{formatUSD(weeklyWaste)}</p>
                            </div>
                        </div>

                        {onCOntactClick && (
                            <button
                                type="button"
                                onClick={onCOntactClick}
                                className="mt-4 w-full rounded-lg bg-[#27D5E6] py-3 font-bold text-[#041023] hover:bg-[#1EC4D4] transition
                                    focus:outline-none focus:ring-2 focus:ring-white/70 focus:ring-offset-2 focus:ring-offset-[#0B3356]"
                                aria-label="Contact us about reducing logistics waste">
                                    Talk to us about reducing this
                                </button>
                        )}
                    </div>
                </div>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Staff Count Input */}
                    <div>
                        <label htmlFor="staff-count" className="block text-sm font-semibold">
                            Number of Clinical Staff (e.g., nurses, techs)
                        </label>
                        <p id="staff-help" className="mt-1 text-sm text-white/70">
                            Total number of clinical staff whose time is impacted by logistics tasks.
                        </p>

                        <input
                            id="staffCount"
                            name="staffCount"
                            type="number"
                            inputMode="numeric"
                            min={0}
                            step={1}
                            value={Number.isFinite(staffCount) ? staffCount : ""}
                            onChange={(e) => setStaffCount(parseInt(e.target.value))}
                            aria-describedby="staff-help staff-error"
                            aria-invalid={!staffValid}
                            className="mt-2 w-full rounded-lg bg-white/10 px-4 py-3 text-white placeholder:text-white/50 
                                border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/70"
                        />

                        {!staffValid && (
                            <p id="staff-error" className="mt-2 text-sm text-red-300">
                                Please enter a valid staff count (0 or higher).
                            </p>
                        )}
                    </div>

                    {/* Hourly Wage Input */}
                    <div>
                        <label htmlFor="hourly-wage" className="block text-sm font-semibold">
                            Average hourly wage (fully loaded)
                        </label>
                        <p id="wage-help" className="mt-1 text-sm text-white/70">
                            Include benefits and overhead costs if possible.
                        </p>

                        <div className="relative mt-2">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60" aria-hidden="true">
                                $
                            </span>

                            <input
                                id="hourly-wage"
                                name="hourly-wage"
                                type="number"
                                inputMode="decimal"
                                min={0}
                                step={0.5}
                                value={Number.isFinite(hourlyWage) ? hourlyWage : ""}
                                onChange={(e) => setHourlyWage(parseFloat(e.target.value))}
                                aria-describedby="wage-help wage-error"
                                aria-invalid={!wageValid}
                                className="w-full rounded-lg bg-white/10 pl-9 pr-4 py-3 text-white placeholder:text-white/50 
                                    border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/70"
                            />

                            {!wageValid && (
                                <p id="wage-error" className="mt-2 text-sm text-red-300" role="alert">
                                    Please enter a valid hourly wage (0 or higher).
                                </p>
                            )}
                        </div>
                    </div>

                    <button
                        type="button"
                        onClick={handleReset}
                        className="inline-flex items-center justify-center rounded-lg bg-white/10 px-5 py-2 font-semibold hover:bg-white/20 transition
                            focus:outline-none focus:ring-2 focus:ring-white/70 focus:ring-offset-2 focus:ring-offset-[#0B3356]"
                    >
                        Reset
                    </button>
                </div>
            </section>
    );
}
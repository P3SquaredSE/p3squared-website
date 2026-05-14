import React, { useMemo, useState } from "react";

const DEFAULT_DRAG = 20; //20% Logistics Drag
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
    hoursPerYear = DEFAULT_HOURS,
    onCOntactClick,
}) {
    //inputs by user
    const [staffCount, setStaffCount] = useState(0);
    const [hourlyWage, setHourlyWage] = useState(0);
    const [dragPercent, setDragPercent] = useState(DEFAULT_DRAG);

    const drag = dragPercent / 100;


    const annualWaste = useMemo(() => {
        return staffCount * hourlyWage * hoursPerYear * drag;
    }, [staffCount, hourlyWage, drag, hoursPerYear]);

    const monthlyWaste = annualWaste / 12;
    const weeklyWaste = annualWaste / 52;
    const dailyWaste = annualWaste / 260; //approximate number of working days in a year


    return (
        <section 
            id="calculator"
            aria-labelledby="impact-title"
            className="w-full rounded-3xl border border-white/10 bg-[#071A2E]/80 p-6 md:p-10 shadow-2xl"
        >
            <div className="grid gap-6 lg:grid-cols-[1.4fr_0.8fr]">
                <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#163b63] to-[#0A2340] p-8 md:p-10">
                    <p className="text-sm uppercase tracking-[0.25em] text-cyan-300/80">
                        Labor Calculator
                    </p>

                    <h2 id="impact-title" className="mt-4 md:text-7xl font-bold tracking-tight">
                        {formatUSD(annualWaste)}
                    </h2>

                    <p className="mt-4 max-w-2xl text-lg text-white/75 leading-relaxed">
                        Estimated annual productivity and logistics waste caused by inefficient
                        supply coordination, manual workflows, and operational interruptions.
                    </p>

                    <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                        <MetricCard
                            label="Monthly"
                            value={formatUSD(monthlyWaste)}
                        />
                        <MetricCard
                            label="Weekly"
                            value={formatUSD(weeklyWaste)}
                        />
                        <MetricCard
                            label="Daily"
                            value={formatUSD(dailyWaste)}
                        />
                        <MetricCard
                            label="Drag"
                            value={`${dragPercent}%`}
                        />
                    </div>
                </div>

                {/* right panel */}
                <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
                    <p className="text-sm uppercase tracking-wide text-cyan-300">
                        P3Squared Insight
                    </p>

                    <h3 className="mt-4 text-2xl font-semibold">
                        Operational Intelligence Matters
                    </h3>

                    <p className="mt-4 text-white/75 leading-relaxed">
                        A rural healthcare facility with{" "}
                        <span className="font-semibold text-white">
                            {staffCount} clinical staff
                        </span>{" "}
                        operating under a{" "}
                        <span className="font-semibold text-white">
                            {dragPercent}% logistics drag
                        </span>{" "}
                        could lose nearly{" "}
                        <span className="font-semibold text-white">
                            {formatUSD(annualWaste)}
                        </span>{" "}
                        annually through fragmented workflows, delayed inventory access,
                        and manual coordination.
                    </p>

                    <div className="mt-6 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-4">
                        <p className="text-sm text-cyan-100 leading-relaxed">
                            P3Squared helps healthcare systems forecast operational risk, reduce supply chain inefficiencies,
                            and improve workforce productivity through AI-assisted coordination.
                        </p>
                    </div>

                    {onCOntactClick && (
                        <button
                            type="button"
                            onclick={onCOntactClick}
                            className="mt-8 w-full rounded-2xl bg-[#27D5E6] px-6 py-4 text-lg font-bold text-[#041023] transition hover:bg-[#1EC4D4] 
                            focus:outline-none focus:ring-2 focus:ring-white/70"
                            >
                                Request Operational Assessment
                            </button>
                    )}
                </div>
            </div>

            {/* Controls */}
            <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
                    <h3 className="text-xl font-semibold">
                        Simulation Controls
                    </h3>

                    <p className="mt-2 text-white/70">
                        Adjust staffing, labor cost, and operational drag to estimate
                        organizational waste.
                    </p>

                    <div className="mt-8 grid gap-8 md:grid-cols-3">
                        {/* Staff Count */}
                        <SliderControl
                            label="Clinical Staff Count"
                            value={staffCount}
                            min={1}
                            max={500}
                            step={1}
                            suffix=" staff"
                            onChange={setStaffCount}
                        />

                        {/* Hourly Wage */}
                        <SliderControl
                            label="Average Hourly Wage"
                            value={hourlyWage}
                            min={1}
                            max={120}
                            step={1}
                            prefix="$"
                            suffix="/hr"
                            onChange={setHourlyWage}
                        />

                        {/* Drag */}
                        <SliderControl
                            label="Logistics Drag"
                            value={dragPercent}
                            min={0}
                            max={40}
                            step={1}
                            suffix="%"
                            onChange={setDragPercent}
                        />
                    </div>
                </div>
        </section>
    );
}

function MetricCard({ label, value }) {
    return (
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-sm text-white/60">
                {label}
            </p>

            <p className="mt-2 text-xl font-bold">
                {value}
            </p>
        </div>
    );
}

function SliderControl({ 
    label, 
    value, 
    min, 
    max, 
    step, 
    prefix = "", 
    suffix = "", 
    onChange,
}) {
    return (
        <div>
            <div className="flex items-center justify-between">
                <label className="text-sm font-semibold text-white/90">
                    {label}
                </label>

                <span className="text-cyan-300 font-semibold">
                    {prefix}
                    {value}
                    {suffix}
                </span>
            </div>

            <input
                type="range"
                min={min}
                max={max}
                step={step}
                value={value}
                onChange={(e) => onChange(Number(e.target.value))}
                className="w-full mt-4 accent-cyan-400"
            />

            <div className="mt-2 flex justify-between text-xs text-white/40">
                <span>
                    {prefix}
                    {min}
                </span>

                <span>
                    {prefix}
                    {max}
                </span>
            </div>
        </div>
    );
}
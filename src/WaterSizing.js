import { useState } from "react";
import "./WaterSizing.css";

function WaterSizing() {

    // =====================================================
    // UPC EDITION
    // =====================================================

    const [upcEdition, setUpcEdition] = useState("2024");


    // =====================================================
    // DESIGN CONDITIONS
    // =====================================================

    const [pressure, setPressure] = useState(40);
    const [length, setLength] = useState(40);


    // =====================================================
    // METER SIZE
    // =====================================================

    const [meterSize, setMeterSize] = useState("3/4");


    // =====================================================
    // FIXTURES
    // =====================================================

    const [toilets, setToilets] = useState(0);
    const [sinks, setSinks] = useState(0);
    const [lavatory, setLavatory] = useState(0);
    const [shower, setShower] = useState(0);
    const [tub, setTub] = useState(0);
    const [tubshower, setTubshower] = useState(0);
    const [BarSink, setBarSink] = useState(0);


    // =====================================================
    // DEVELOPED LENGTHS
    // =====================================================

    const lengths = [
        40,
        60,
        80,
        100,
        150,
        200,
        250
    ];


    // =====================================================
    // METER OPTIONS
    // =====================================================

    const meterOptions = [
        "3/4",
        "1",
        "1-1/2",
        "2"
    ];


    // =====================================================
    // BUILDING SUPPLY PIPE SIZES
    //
    // IMPORTANT:
    //
    // 1/2" IS NOT USED AS THE BUILDING MAIN.
    //
    // 3/4" IS THE STARTING BUILDING SUPPLY SIZE.
    //
    // 1/2" can still be used for individual fixture
    // branches such as a bar sink where permitted.
    // =====================================================

    const buildingSupplySizes = [
        "3/4",
        "1",
        "1-1/4",
        "1-1/2",
        "2",
        "2-1/2"
    ];


    // =====================================================
    // FIXTURE WSFU
    //
    // PRIVATE RESIDENTIAL
    // =====================================================

    const WSFU = {
        toilet: 2.5,
        sink: 1.5,
        lavatory: 1,
        shower: 2,
        tub: 4,
        tubshower: 4,
        BarSink: 1
    };


    // =====================================================
    // COLD WATER
    //
    // ALL FIXTURES ARE INCLUDED.
    // =====================================================

    const coldWSFU =
        toilets * WSFU.toilet +
        sinks * WSFU.sink +
        lavatory * WSFU.lavatory +
        shower * WSFU.shower +
        tub * WSFU.tub +
        tubshower * WSFU.tubshower +
        BarSink * WSFU.BarSink;


    const coldFixtures =
        toilets +
        sinks +
        lavatory +
        shower +
        tub +
        tubshower +
        BarSink;


    // =====================================================
    // HOT WATER
    //
    // WATER CLOSET IS EXCLUDED.
    //
    // 0.75 RULE
    //
    // The hot-water calculation is treated separately.
    // =====================================================

    const hotBaseWSFU =
        sinks * WSFU.sink +
        lavatory * WSFU.lavatory +
        shower * WSFU.shower +
        tub * WSFU.tub +
        tubshower * WSFU.tubshower +
        BarSink * WSFU.BarSink;


    const hotWSFU = hotBaseWSFU * 0.75;


    const hotFixtures =
        sinks +
        lavatory +
        shower +
        tub +
        tubshower +
        BarSink;


    // =====================================================
    // UPC TABLE 610.4
    //
    // NOTE:
    // 1/2" rows are intentionally NOT included here.
    //
    // This table is being used for BUILDING SUPPLY
    // sizing, so the smallest building supply considered
    // by this calculator is 3/4".
    // =====================================================

    const upcSizing = {

        // =================================================
        // 30 - 45 PSI
        // =================================================

        "30-45": [

            {
                meter: "3/4",
                pipe: "3/4",
                capacity: {
                    40: 16,
                    60: 16,
                    80: 14,
                    100: 12,
                    150: 9,
                    200: 6,
                    250: 5
                }
            },

            {
                meter: "3/4",
                pipe: "1",
                capacity: {
                    40: 29,
                    60: 25,
                    80: 23,
                    100: 21,
                    150: 17,
                    200: 15,
                    250: 13
                }
            },

            {
                meter: "1",
                pipe: "1",
                capacity: {
                    40: 36,
                    60: 31,
                    80: 27,
                    100: 25,
                    150: 20,
                    200: 17,
                    250: 15
                }
            },

            {
                meter: "3/4",
                pipe: "1-1/4",
                capacity: {
                    40: 36,
                    60: 33,
                    80: 31,
                    100: 28,
                    150: 24,
                    200: 23,
                    250: 21
                }
            },

            {
                meter: "1",
                pipe: "1-1/4",
                capacity: {
                    40: 54,
                    60: 47,
                    80: 42,
                    100: 38,
                    150: 32,
                    200: 28,
                    250: 25
                }
            },

            {
                meter: "1-1/2",
                pipe: "1-1/4",
                capacity: {
                    40: 78,
                    60: 68,
                    80: 57,
                    100: 48,
                    150: 38,
                    200: 32,
                    250: 28
                }
            },

            {
                meter: "1",
                pipe: "1-1/2",
                capacity: {
                    40: 85,
                    60: 84,
                    80: 79,
                    100: 65,
                    150: 56,
                    200: 48,
                    250: 43
                }
            },

            {
                meter: "1-1/2",
                pipe: "1-1/2",
                capacity: {
                    40: 150,
                    60: 124,
                    80: 105,
                    100: 91,
                    150: 70,
                    200: 57,
                    250: 49
                }
            },

            {
                meter: "2",
                pipe: "1-1/2",
                capacity: {
                    40: 151,
                    60: 129,
                    80: 129,
                    100: 110,
                    150: 80,
                    200: 64,
                    250: 53
                }
            },

            {
                meter: "1",
                pipe: "2",
                capacity: {
                    40: 85,
                    60: 85,
                    80: 85,
                    100: 85,
                    150: 85,
                    200: 85,
                    250: 82
                }
            },

            {
                meter: "1-1/2",
                pipe: "2",
                capacity: {
                    40: 220,
                    60: 205,
                    80: 190,
                    100: 176,
                    150: 155,
                    200: 138,
                    250: 127
                }
            },

            {
                meter: "2",
                pipe: "2",
                capacity: {
                    40: 370,
                    60: 327,
                    80: 292,
                    100: 265,
                    150: 217,
                    200: 185,
                    250: 164
                }
            },

            {
                meter: "2",
                pipe: "2-1/2",
                capacity: {
                    40: 445,
                    60: 418,
                    80: 390,
                    100: 370,
                    150: 330,
                    200: 300,
                    250: 280
                }
            }
        ],


        // =================================================
        // 46 - 60 PSI
        // =================================================

        "46-60": [

            {
                meter: "3/4",
                pipe: "3/4",
                capacity: {
                    40: 20,
                    60: 20,
                    80: 19,
                    100: 17,
                    150: 14,
                    200: 11,
                    250: 9
                }
            },

            {
                meter: "3/4",
                pipe: "1",
                capacity: {
                    40: 39,
                    60: 39,
                    80: 36,
                    100: 33,
                    150: 28,
                    200: 23,
                    250: 21
                }
            },

            {
                meter: "1",
                pipe: "1",
                capacity: {
                    40: 39,
                    60: 39,
                    80: 39,
                    100: 36,
                    150: 30,
                    200: 25,
                    250: 23
                }
            },

            {
                meter: "3/4",
                pipe: "1-1/4",
                capacity: {
                    40: 39,
                    60: 39,
                    80: 39,
                    100: 39,
                    150: 39,
                    200: 39,
                    250: 34
                }
            },

            {
                meter: "1",
                pipe: "1-1/4",
                capacity: {
                    40: 78,
                    60: 78,
                    80: 76,
                    100: 67,
                    150: 52,
                    200: 44,
                    250: 39
                }
            },

            {
                meter: "1-1/2",
                pipe: "1-1/4",
                capacity: {
                    40: 78,
                    60: 78,
                    80: 78,
                    100: 78,
                    150: 66,
                    200: 52,
                    250: 44
                }
            },

            {
                meter: "1",
                pipe: "1-1/2",
                capacity: {
                    40: 85,
                    60: 85,
                    80: 85,
                    100: 85,
                    150: 85,
                    200: 85,
                    250: 80
                }
            },

            {
                meter: "1-1/2",
                pipe: "1-1/2",
                capacity: {
                    40: 151,
                    60: 151,
                    80: 151,
                    100: 151,
                    150: 128,
                    200: 105,
                    250: 90
                }
            },

            {
                meter: "2",
                pipe: "1-1/2",
                capacity: {
                    40: 151,
                    60: 151,
                    80: 151,
                    100: 151,
                    150: 150,
                    200: 117,
                    250: 98
                }
            },

            {
                meter: "1",
                pipe: "2",
                capacity: {
                    40: 85,
                    60: 85,
                    80: 85,
                    100: 85,
                    150: 85,
                    200: 85,
                    250: 85
                }
            },

            {
                meter: "1-1/2",
                pipe: "2",
                capacity: {
                    40: 370,
                    60: 370,
                    80: 340,
                    100: 318,
                    150: 272,
                    200: 240,
                    250: 220
                }
            },

            {
                meter: "2",
                pipe: "2",
                capacity: {
                    40: 370,
                    60: 370,
                    80: 370,
                    100: 370,
                    150: 368,
                    200: 318,
                    250: 280
                }
            },

            {
                meter: "2",
                pipe: "2-1/2",
                capacity: {
                    40: 654,
                    60: 640,
                    80: 610,
                    100: 580,
                    150: 535,
                    200: 500,
                    250: 470
                }
            }
        ],


        // =================================================
        // OVER 60 PSI
        // =================================================

        "over-60": [

            {
                meter: "3/4",
                pipe: "3/4",
                capacity: {
                    40: 20,
                    60: 20,
                    80: 20,
                    100: 20,
                    150: 17,
                    200: 13,
                    250: 11
                }
            },

            {
                meter: "3/4",
                pipe: "1",
                capacity: {
                    40: 39,
                    60: 39,
                    80: 39,
                    100: 39,
                    150: 35,
                    200: 30,
                    250: 27
                }
            },

            {
                meter: "1",
                pipe: "1",
                capacity: {
                    40: 39,
                    60: 39,
                    80: 39,
                    100: 38,
                    150: 38,
                    200: 32,
                    250: 29
                }
            },

            {
                meter: "3/4",
                pipe: "1-1/4",
                capacity: {
                    40: 39,
                    60: 39,
                    80: 39,
                    100: 39,
                    150: 39,
                    200: 39,
                    250: 39
                }
            },

            {
                meter: "1",
                pipe: "1-1/4",
                capacity: {
                    40: 78,
                    60: 78,
                    80: 78,
                    100: 78,
                    150: 74,
                    200: 62,
                    250: 53
                }
            },

            {
                meter: "1-1/2",
                pipe: "1-1/4",
                capacity: {
                    40: 78,
                    60: 78,
                    80: 78,
                    100: 78,
                    150: 78,
                    200: 74,
                    250: 65
                }
            },

            {
                meter: "1",
                pipe: "1-1/2",
                capacity: {
                    40: 85,
                    60: 85,
                    80: 85,
                    100: 85,
                    150: 85,
                    200: 85,
                    250: 85
                }
            },

            {
                meter: "1-1/2",
                pipe: "1-1/2",
                capacity: {
                    40: 151,
                    60: 151,
                    80: 151,
                    100: 151,
                    150: 151,
                    200: 151,
                    250: 130
                }
            },

            {
                meter: "2",
                pipe: "1-1/2",
                capacity: {
                    40: 151,
                    60: 151,
                    80: 151,
                    100: 151,
                    150: 151,
                    200: 151,
                    250: 142
                }
            },

            {
                meter: "1",
                pipe: "2",
                capacity: {
                    40: 85,
                    60: 85,
                    80: 85,
                    100: 85,
                    150: 85,
                    200: 85,
                    250: 85
                }
            },

            {
                meter: "1-1/2",
                pipe: "2",
                capacity: {
                    40: 370,
                    60: 370,
                    80: 370,
                    100: 370,
                    150: 360,
                    200: 335,
                    250: 305
                }
            },

            {
                meter: "2",
                pipe: "2",
                capacity: {
                    40: 370,
                    60: 370,
                    80: 370,
                    100: 370,
                    150: 370,
                    200: 370,
                    250: 370
                }
            },

            {
                meter: "2",
                pipe: "2-1/2",
                capacity: {
                    40: 654,
                    60: 654,
                    80: 654,
                    100: 654,
                    150: 654,
                    200: 650,
                    250: 610
                }
            }
        ]
    };


    // =====================================================
    // PRESSURE RANGE
    // =====================================================

    function getPressureRange() {

        if (pressure >= 30 && pressure <= 45) {
            return "30-45";
        }

        if (pressure >= 46 && pressure <= 60) {
            return "46-60";
        }

        if (pressure > 60) {
            return "over-60";
        }

        return null;
    }


    // =====================================================
    // GET SIZING
    //
    // IMPORTANT:
    //
    // The smallest possible BUILDING SUPPLY is 3/4".
    //
    // We do NOT allow the 1/2" fixture branch row
    // to become the building main.
    // =====================================================

    function getSizing(wsfU) {

        if (wsfU === 0) {

            return {
                pipe: "—",
                meter: meterSize,
                capacity: 0,
                status: "No fixtures"
            };
        }


        const pressureRange = getPressureRange();


        if (!pressureRange) {

            return {
                pipe: "—",
                meter: meterSize,
                capacity: 0,
                status: "Pressure too low"
            };
        }


        const rows = upcSizing[pressureRange];


        // Only rows for selected meter
        const meterRows = rows.filter(
            row => row.meter === meterSize
        );


        // Make sure we start with 3/4"
        const buildingRows = meterRows.filter(
            row =>
                buildingSupplySizes.includes(row.pipe)
        );


        // Find the smallest building supply
        // that can carry the WSFU load.
        for (const row of buildingRows) {

            const capacity = row.capacity[length];


            if (wsfU <= capacity) {

                return {
                    pipe: `${row.pipe}"`,
                    meter: `${row.meter}"`,
                    capacity: capacity,
                    status: "OK"
                };
            }
        }


        // Meter is too small
        const largestRow =
            buildingRows[buildingRows.length - 1];


        if (largestRow) {

            return {
                pipe: "Increase Meter",
                meter: `${meterSize}"`,
                capacity: largestRow.capacity[length],
                status: "Meter too small"
            };
        }


        return {
            pipe: "—",
            meter: `${meterSize}"`,
            capacity: 0,
            status: "No sizing data"
        };
    }


    // =====================================================
    // REFERENCE ROWS
    //
    // Only display building-supply rows.
    // 1/2" is intentionally excluded.
    // =====================================================

    function getReferenceRows() {

        const pressureRange = getPressureRange();

        if (!pressureRange) {
            return [];
        }

        return upcSizing[pressureRange].filter(
            row =>
                row.meter === meterSize &&
                buildingSupplySizes.includes(row.pipe)
        );
    }


    // =====================================================
    // RESULTS
    // =====================================================

    const coldSizing = getSizing(coldWSFU);
    const hotSizing = getSizing(hotWSFU);

    const referenceRows = getReferenceRows();


    // =====================================================
    // FIXTURE CARD
    // =====================================================

    function FixtureCard({
        name,
        count,
        setCount
    }) {

        return (

            <div className="fixture-card">

                <strong>
                    {name}
                </strong>

                <div className="fixture-controls">

                    <button
                        onClick={() =>
                            setCount(
                                Math.max(
                                    0,
                                    count - 1
                                )
                            )
                        }
                    >
                        −
                    </button>

                    <span>
                        {count}
                    </span>

                    <button
                        onClick={() =>
                            setCount(count + 1)
                        }
                    >
                        +
                    </button>

                </div>

            </div>
        );
    }


    // =====================================================
    // PAGE
    // =====================================================

    return (

        <div className="water-sizing-page">


            {/* =================================================
                HEADER
            ================================================= */}

            <div className="page-header">

                <div>

                    <div className="company-label">
                        ISAIAH PLUMBING
                    </div>

                    <h1>
                        Water Supply Sizing
                    </h1>

                    <p>
                        Private residential water
                        distribution sizing calculator
                    </p>

                </div>

            </div>


            {/* =================================================
                INPUTS
            ================================================= */}

            <div className="input-section">


                {/* UPC */}

                <div className="input-group">

                    <label>
                        UPC Edition
                    </label>

                    <select
                        value={upcEdition}
                        onChange={(e) =>
                            setUpcEdition(
                                e.target.value
                            )
                        }
                    >

                        <option value="2021">
                            UPC 2021
                        </option>

                        <option value="2024">
                            UPC 2024
                        </option>

                    </select>

                </div>


                {/* PRESSURE */}

                <div className="input-group">

                    <label>
                        Available Pressure
                    </label>

                    <div className="input-with-unit">

                        <input
                            type="number"
                            min="0"
                            value={pressure}
                            onChange={(e) =>
                                setPressure(
                                    Number(e.target.value)
                                )
                            }
                        />

                        <span>
                            psi
                        </span>

                    </div>

                    <small>

                        {getPressureRange()
                            ? `Pressure range: ${getPressureRange()} psi`
                            : "Minimum 30 psi required"}

                    </small>

                </div>


                {/* LENGTH */}

                <div className="input-group">

                    <label>
                        Developed Length
                    </label>

                    <select
                        value={length}
                        onChange={(e) =>
                            setLength(
                                Number(e.target.value)
                            )
                        }
                    >

                        {lengths.map(
                            value => (

                                <option
                                    key={value}
                                    value={value}
                                >
                                    {value} ft
                                </option>

                            )
                        )}

                    </select>

                </div>


                {/* METER */}

                <div className="input-group">

                    <label>
                        Meter Size
                    </label>

                    <select
                        value={meterSize}
                        onChange={(e) =>
                            setMeterSize(
                                e.target.value
                            )
                        }
                    >

                        {meterOptions.map(
                            meter => (

                                <option
                                    key={meter}
                                    value={meter}
                                >
                                    {meter}"
                                </option>

                            )
                        )}

                    </select>

                    <small>
                        Select meter/street-service size.
                    </small>

                </div>

            </div>


            {/* =================================================
                FIXTURE SCHEDULE
            ================================================= */}

            <div className="fixtures-section">

                <div className="section-heading">

                    <div>

                        <span className="section-label">
                            FIXTURE SCHEDULE
                        </span>

                        <h2>
                            Water Fixtures
                        </h2>

                    </div>


                    {/* FIXED DUPLICATE DISPLAY */}

                    <div className="fixture-total">

                        <div className="fixture-stat">

                            <strong>
                                {coldFixtures}
                            </strong>

                            <span>
                                Fixtures
                            </span>

                        </div>


                        <div className="fixture-stat">

                            <strong>
                                {coldWSFU}
                            </strong>

                            <span>
                                WSFU
                            </span>

                        </div>

                    </div>

                </div>


                <div className="fixtures-grid">

                    <FixtureCard
                        name="Water Closet"
                        count={toilets}
                        setCount={setToilets}
                    />

                    <FixtureCard
                        name="Kitchen Sink With or Without DW"
                        count={sinks}
                        setCount={setSinks}
                    />

                    <FixtureCard
                        name="Lavatory"
                        count={lavatory}
                        setCount={setLavatory}
                    />

                    <FixtureCard
                        name="Shower"
                        count={shower}
                        setCount={setShower}
                    />

                    <FixtureCard
                        name="Tub"
                        count={tub}
                        setCount={setTub}
                    />

                    <FixtureCard
                        name="Tub / Shower"
                        count={tubshower}
                        setCount={setTubshower}
                    />

                    <FixtureCard
                        name="Bar Sink"
                        count={BarSink}
                        setCount={setBarSink}
                    />

                </div>

            </div>


            {/* =================================================
                FIXTURE BRANCH INFORMATION
            ================================================= */}

            <div className="branch-reference">

                <div className="section-heading">

                    <div>

                        <span className="section-label">
                            FIXTURE BRANCHES
                        </span>

                        <h2>
                            Individual Fixture Pipe
                        </h2>

                        <p>
                            These are individual fixture
                            branch sizes, not the building main.
                        </p>

                    </div>

                </div>


                <div className="branch-reference-grid">

                    <div className="branch-card">

                        <strong>
                            1/2"
                        </strong>

                        <span>
                            Bar Sink
                        </span>

                        <small>
                            1.0 WSFU
                        </small>

                    </div>


                    <div className="branch-card">

                        <strong>
                            1/2"
                        </strong>

                        <span>
                            Lavatory
                        </span>

                        <small>
                            1.0 WSFU
                        </small>

                    </div>


                    <div className="branch-card">

                        <strong>
                            1/2"
                        </strong>

                        <span>
                            Kitchen Sink
                        </span>

                        <small>
                            1.5 WSFU
                        </small>

                    </div>

                </div>

            </div>


            {/* =================================================
                BUILDING SUPPLY REFERENCE
            ================================================= */}

            <div className="pipe-reference">

                <div className="section-heading">

                    <div>

                        <span className="section-label">
                            UPC TABLE 610.4
                        </span>

                        <h2>
                            Building Supply Capacity
                        </h2>

                        <p>
                            The building supply starts at 3/4".
                            Capacity is affected by meter size,
                            pressure, developed length, and WSFU.
                        </p>

                    </div>

                </div>


                <div className="pipe-reference-conditions">

                    <div>

                        <span>
                            Meter
                        </span>

                        <strong>
                            {meterSize}"
                        </strong>

                    </div>


                    <div>

                        <span>
                            Pressure
                        </span>

                        <strong>
                            {pressure} psi
                        </strong>

                    </div>


                    <div>

                        <span>
                            Length
                        </span>

                        <strong>
                            {length} ft
                        </strong>

                    </div>

                </div>


                {getPressureRange() ? (

                    <div className="pipe-reference-grid">

                        {referenceRows.map(
                            (row, index) => {

                                const capacity =
                                    row.capacity[length];


                                const isCold =
                                    coldSizing.pipe ===
                                    `${row.pipe}"`;


                                const isHot =
                                    hotSizing.pipe ===
                                    `${row.pipe}"`;


                                const isActive =
                                    isCold || isHot;


                                return (

                                    <div
                                        key={index}
                                        className={
                                            `pipe-reference-card ${
                                                isActive
                                                    ? "active"
                                                    : ""
                                            }`
                                        }
                                    >

                                        <div className="pipe-size">
                                            {row.pipe}"
                                        </div>

                                        <div className="pipe-label">
                                            Building Supply
                                        </div>

                                        <div className="pipe-capacity">
                                            {capacity}
                                        </div>

                                        <div className="pipe-unit">
                                            WSFU maximum
                                        </div>

                                    </div>

                                );

                            }
                        )}

                    </div>

                ) : (

                    <div className="pipe-reference-empty">

                        Enter at least 30 psi to
                        calculate water sizing.

                    </div>

                )}

            </div>


            {/* =================================================
                RESULTS
            ================================================= */}

            <div className="professional-results">


                <div className="results-top">

                    <div>

                        <div className="results-eyebrow">
                            WATER SUPPLY RESULTS
                        </div>

                        <h2>
                            Sizing Summary
                        </h2>

                        <p>
                            Private residential UPC water
                            supply sizing
                        </p>

                    </div>


                    <div className="code-badge">
                        UPC {upcEdition}
                    </div>

                </div>


                {/* =================================================
                    COLD + HOT
                ================================================= */}

                <div className="water-systems">


                    {/* COLD */}

                    <div className="system-card cold">

                        <div className="system-header">

                            <div className="system-icon">
                                ❄
                            </div>

                            <div>

                                <h3>
                                    Cold Water
                                </h3>

                                <span>
                                    Cold water distribution
                                </span>

                            </div>

                        </div>


                        <div className="system-main-result">

                            <span>
                                Recommended Building Supply
                            </span>

                            <strong>
                                {coldSizing.pipe}
                            </strong>

                        </div>


                        <div className="sizing-pair">

                            <div>

                                <span>
                                    Selected Meter
                                </span>

                                <strong>
                                    {coldSizing.meter}
                                </strong>

                            </div>


                            <div>

                                <span>
                                    Table Capacity
                                </span>

                                <strong>
                                    {coldSizing.capacity} WSFU
                                </strong>

                            </div>

                        </div>


                        <div className="sizing-status">
                            {coldSizing.status}
                        </div>


                        <div className="system-details">

                            <div className="detail">

                                <span>
                                    Fixtures
                                </span>

                                <strong>
                                    {coldFixtures}
                                </strong>

                            </div>


                            <div className="detail">

                                <span>
                                    WSFU
                                </span>

                                <strong>
                                    {coldWSFU}
                                </strong>

                            </div>


                            <div className="detail">

                                <span>
                                    Meter
                                </span>

                                <strong>
                                    {meterSize}"
                                </strong>

                            </div>

                        </div>

                    </div>


                    {/* HOT */}

                    <div className="system-card hot">

                        <div className="system-header">

                            <div className="system-icon">
                                ♨
                            </div>

                            <div>

                                <h3>
                                    Hot Water
                                </h3>

                                <span>
                                    Hot water distribution
                                </span>

                            </div>

                        </div>


                        <div className="system-main-result">

                            <span>
                                Recommended Building Supply
                            </span>

                            <strong>
                                {hotSizing.pipe}
                            </strong>

                        </div>


                        <div className="sizing-pair">

                            <div>

                                <span>
                                    Selected Meter
                                </span>

                                <strong>
                                    {hotSizing.meter}
                                </strong>

                            </div>


                            <div>

                                <span>
                                    Table Capacity
                                </span>

                                <strong>
                                    {hotSizing.capacity} WSFU
                                </strong>

                            </div>

                        </div>


                        <div className="sizing-status">
                            {hotSizing.status}
                        </div>


                        <div className="system-details">

                            <div className="detail">

                                <span>
                                    Fixtures
                                </span>

                                <strong>
                                    {hotFixtures}
                                </strong>

                            </div>


                            <div className="detail">

                                <span>
                                    WSFU
                                </span>

                                <strong>
                                    {hotWSFU.toFixed(2)}
                                </strong>

                            </div>


                            <div className="detail">

                                <span>
                                    Meter
                                </span>

                                <strong>
                                    {meterSize}"
                                </strong>

                            </div>

                        </div>

                    </div>

                </div>


                {/* =================================================
                    DESIGN CONDITIONS
                ================================================= */}

                <div className="design-conditions">

                    <div>

                        <span>
                            Available Pressure
                        </span>

                        <strong>
                            {pressure} psi
                        </strong>

                    </div>


                    <div>

                        <span>
                            Developed Length
                        </span>

                        <strong>
                            {length} ft
                        </strong>

                    </div>


                    <div>

                        <span>
                            Building Main Minimum
                        </span>

                        <strong>
                            3/4"
                        </strong>

                    </div>


                    <div>

                        <span>
                            UPC Edition
                        </span>

                        <strong>
                            UPC {upcEdition}
                        </strong>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default WaterSizing;
function HomeMantainance() {
    const work = [{
        Task: "cleaning gutters",
        Priority: "High"
    },
    {
        Task: "fix kitchem faucent",
        Priority: "Low"
    },
    { Task: "replace filter", Priority: "high" }]

    return (
        <>
            <h1>Home Mantainance Tracker</h1>bake a
            {work.map((item, index) => {
                return <p key={index}>{index + 1}-{item.Task}-{item.Priority}</p>
            })}
        </>
    )
}
export default HomeMantainance
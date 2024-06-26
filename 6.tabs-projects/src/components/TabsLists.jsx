const TabsLists = ({ data, currentItem }) => {
    const { dates, duties, title, company } = data[currentItem];
    return (
        <div>
            <h2>{company}</h2>
            <h3>{title}</h3>
            <p>{dates}</p>
            <div>{duties}</div>
        </div>
    )
}
export default TabsLists
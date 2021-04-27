const Options = (props) => {
    return (
        <div>
            {
                props.countMatches.length
                    ? props.countOptions.map(option => {
                        return <button onClick={(event) => {
                            props.addMatches(event.target.value)
                        }}
                                       className={'btn'} value={option}>{option}</button>
                    }) : <button className={'btn'} onClick={() => props.setIsRestart(true)}>Restart</button>
            }

        </div>
    )
}


export default Options
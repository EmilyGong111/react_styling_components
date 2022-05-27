const Content = () => {
    const handleNameChange = () => {
        const names = ['Bob', 'Kevin', 'Dave'];
        // get a random integer
        const int = Math.floor(Math.random() * 3);
        return names[int];
    }

    return (
        <main>
            <p>
                Hello {handleNameChange()}!
            </p>
            {/* 
            {}used for js expression
            <p>html</p> -> html
            <p>{"Emily"}</p> ->Emily
            <p>{[1,2,3]}</p> ->123
            <p>[1,2,3]</p> ->[1,2,3]
            <p>{{a:1, b:2}}</p> ->error, cannot render an object
            <p>{2===4}</p> ->empty, cannot render a boolean  
            */}
        </main>
    )
}

export default Content

import React from 'react';

import List from './List';

class App extends React.Component
{
    constructor()
    {
        super();

        this.state = {
            data: [ "Mango", "Apple", "Orange" ]
        }

        this.input = React.createRef();

        this.add = this.add.bind(this);

    }

    add = () => {
        this.setState({
            data: [...this.state.data, this.input.current.value],
            input: '',
        });
    }

    render()
    {
        return(
            <div>
                <List data={ this.state.data } />
                <input type="text" ref={ this.input } />
                <button onClick={ this.add }> + </button>
            </div>
        )
    }
}

export default App;

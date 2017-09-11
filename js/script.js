var Counter = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },

    render: function() {
        return (
            React.createElement('div', {
                    className: 'counter'
                },
                React.createElement('div', {
                        className: 'plus',
                        
                    },
                    React.createElement('button', {onClick: this.increment}, 'PLUS')
                ),
                React.createElement('div', {
                        className: 'minus',
                    },
                    React.createElement('button', {onClick: this.decrement}, 'MINUS')
                ),
                React.createElement('div', {
                        className: 'result'
                    },
                    React.createElement('span', {}, this.state.counter)
                )
            )
        );
    }
});

var element = React.createElement(Counter);
ReactDOM.render(element, document.getElementById('app'));
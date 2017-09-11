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
                        React.createElement('button', {
                            className: 'button-plus',
                            onClick: this.increment
                        }, '+')
                    ),
                    React.createElement('div', {
                            className: 'minus',
                        },
                        React.createElement('button', {
                            className: 'button-minus',
                            onClick: this.decrement
                        }, '-')
                    ),
                    React.createElement('div', {
                            className: 'result'
                        },
                        React.createElement('span', {}, this.state.counter)
                    )
                )
            );
        }
    }),

    counter_1 = React.createElement(Counter),
    counter_2 = React.createElement(Counter),
    counter_3 = React.createElement(Counter);

ReactDOM.render(counter_1, document.getElementById('counter-1'));
ReactDOM.render(counter_2, document.getElementById('counter-2'));
ReactDOM.render(counter_2, document.getElementById('counter-3'));
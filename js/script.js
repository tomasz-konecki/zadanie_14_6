var Counter = React.createClass({

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


        // ----- Mounting phase:

        getDefaultProps: function() {
            console.log('Ustawiono domyslne propsy.');
        },

        getInitialState: function() {
            console.log('Ustawiono stan poczatkowy');
            return {
                counter: 0
            };
        },

        componentWillMount: function() {
            console.log('Licznik nr', ++number, 'zostanie zamieszczony w DOM.');
        },


        render: function() {
            console.log('--- rendering ---');
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
        },

        componentDidMount: function() {
            console.log('Zamieszczono licznik nr', number, '\n    (wyslano zapytanie do serwera...)');
        },


        // ----- Updating phase:

        componentWillReceiveProps: function() {
            console.log('Komponent otrzyma nowe propsy.');
        },

        shouldComponentUpdate: function() {
            console.log('Czy komponent wymaga aktualizacji? - TAK');
            return true;
        },

        componentWillUpdate: function() {
            console.log('Komponent zostanie zaktualizowany');
        },

        componentDidUpdate: function() {
            console.log('Zaktualizowano komponent.');
        },


        // ----- Unmounting phase:

        componentWillUnmount: function() {
            console.log('Usunieto komponent.');
        }

    }),

    number = 0,

    counter_1 = React.createElement(Counter),
    counter_2 = React.createElement(Counter),
    counter_3 = React.createElement(Counter);

ReactDOM.render(counter_1, document.getElementById('counter-1'));
ReactDOM.render(counter_2, document.getElementById('counter-2'));
ReactDOM.render(counter_2, document.getElementById('counter-3'));
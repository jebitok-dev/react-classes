class TodoApp extends React.Component {
    render() {
        const title = 'TodoApp';
        const subtitle = 'Organize schedule'
        const options = ['Thing one', 'Thing two']
        return (
            <div>
                <Header title={title} title={subtitle}/>
                <Action />
                <Options options={options} />
                <AddOption />
            </div>
        )
    }

}
const Header = (props) => (
    <div>
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>
    </div>
)

class Action extends React.Component {
    handlePick() {
        alert('Binance is awesome')
    }
    render() {
        return (
            <div>
                <button onClick={this.handlePick}>What should I do?</button>
            </div>
        )
    }
}
//handleRemoveAll
//remove data options
class Options extends React.Component {
    constructor(props) {
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }
    handleRemoveAll() {
        console.log('remove data options');
        console.log(this.props.options);
    }
    render () {
        return (
            <div>
                <button onClick={this.handleRemoveAll}>Remove All</button>
                {this.props.options.map((option) => {
                return (
                    <Option key={option} optionText={option} />
                );
            })}</div>
        )
    }
}
const Option = (props) => (
    <div>{props.optionText}</div>
)

class AddOption extends React.Component {
    handleAddOption(e) {
        e.preventDefault(); //prevent from accessing a server
        const option = e.target.elements.option.value.trim();
        if (option) {
            alert(option);
        }
    }
    render () {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                </form>
            </div>
        )
    }
}


ReactDOM.render(<TodoApp />, document.getElementById('app'));
class TodoApp extends React.Component {
    constructor(props) {
        super(props)
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.state = {
            options: ['Tokyo', 'Cairo', 'Berlin']
        }
    }
    handleDeleteOptions() {
        this.setState(() => {
            return {
                options: []
            }
        })
    }
    handlePick() {
        const random = Math.floor(Math.random() *
        this.state.options.length)
        const option = this.state.options[random];
        alert(option);
    }
    render() {
        const title = 'TodoApp';
        const subtitle = 'Organize schedule'
        return (
            <div>
                <Header title={title} title={subtitle}/>
                <Action 
                    handlePick={this.handlePick}
                />
                <Options //props
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                 />
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
    render() {
        return (
            <div>
                <button onClick={this.props.handlePick}>What should I do?</button>
            </div>
        )
    }
}

class Options extends React.Component {
    constructor(props) {
        super(props);
    }
    render () {
        return (
            <div>
                <button onClick={this.props.handleDeleteOptions}>Remove All</button>
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
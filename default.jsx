var tabList = [
    { 'id': 1, 'name': 'Home', 'url': '/home' },
    { 'id': 2, 'name': 'Contact', 'url': '/contact' },
    { 'id': 3, 'name': 'Career', 'url': '/career' },
    { 'id': 4, 'name': 'About', 'url': '/about' }
];

var Tab = React.createClass({
    handleClick: function(e){
        e.preventDefault();
        this.props.handleClick();
    },
    
    render: function(){
        return (
            <li className={this.props.isCurrent ? 'current' : null}>
                <a onClick={this.handleClick} href={this.props.url}>
                    {this.props.name}
                </a>
            </li>
        );
    }
});

var Tabs = React.createClass({
    handleClick: function(tab){
        this.props.changeTab(tab);
    },
    
    render: function(){
        return (
            <nav>
                <ul>
                {this.props.tabList.map(function(tab) {
                    return (
                        <Tab
                            handleClick={this.handleClick.bind(this, tab)}
                            key={tab.id}
                            url={tab.url}
                            name={tab.name}
                            isCurrent={(this.props.currentTab === tab.id)}
                         />
                    );
                }.bind(this))}
                </ul>
            </nav>
        );
    }
});

var Content = React.createClass({
    render: function(){
        return(
            <div className="content">
                {this.props.currentTab === 1 ?
                <div className="home">
                    <h1>Welcome, this is home page.</h1>
                </div>
                :null}

                {this.props.currentTab === 2 ?
                <div className="contact">
                     <h1>Welcome, this is contact page.</h1>
                </div>
                :null}

                {this.props.currentTab === 3 ?
                <div className="career">
                     <h1>Welcome, this is career page.</h1>
                </div>
                :null}
            
                {this.props.currentTab === 4 ?
                <div className="about">
                     <h1>Welcome, this is about page.</h1>
                </div>
                :null}
            </div>
        );
    }
});

var App = React.createClass({
    getInitialState: function () {        
        return {
            tabList: tabList,
            currentTab: 1
        };
    },

    changeTab: function(tab) {
        this.setState({ currentTab: tab.id });
    },

    render: function(){
        return(
            <div>
                <Tabs
                    currentTab={this.state.currentTab}
                    tabList={this.state.tabList}
                    changeTab={this.changeTab}
                />
                <Content currentTab={this.state.currentTab} />
            </div>
        );
    }
});

React.render(
    <App />,
    document.body
);
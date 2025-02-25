const React = require("react");

//function Header(props){ return <h2>{props.text}</h2>;}

class Header extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return <h2>{this.props.text}</h2>;
    }
}
  
module.exports = Header;
const React = require("react");
  
//function Article(props){return <div>{props.content}</div>;}
  
class Article extends React.Component{
 
    constructor(props){
        super(props);
    } 
    render() {
        return <div>{this.props.content}</div>;
    }
}
  
module.exports = Article;
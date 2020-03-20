import React, { Component, Fragment } from 'react';
class ToolItem extends Component {
    state = {  }
    render() { 
        return ( 
            <Fragment>
                <li>
                    {this.props.content}
                    <button onClick={this.handleClick.bind(this)}>删除</button>
                </li>
            </Fragment>
         );
    }
    handleClick(){
        this.props.deleteItem(this.props.index);
    }
}
 
export default ToolItem;
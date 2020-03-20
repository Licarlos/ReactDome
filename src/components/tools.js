import React,{Component,Fragment} from 'react';
import ToolItem from './toolItem';

class Tools extends Component{
    constructor(props){
        super(props);
        this.state = {
            inputValue:'',
            list:['锤子']
        }
    };
    render(){
        return (
                <Fragment>
                    <div>
                        <div className="toolsBox">
                            <label>工具：</label>
                            <input value={this.state.inputValue} onChange={this.inputChange.bind(this)} className="nameInput"></input>
                            <button className="addBtn" onClick={this.addItem.bind(this)}>新增</button>
                        </div>
                        <ul>
                            {
                                this.state.list.map((item,index)=>{
                                    return (
                                           <ToolItem key={index} index={index} content={item} deleteItem={this.deleteItem.bind(this)} />
                                        )
                                })
                            }                            
                        </ul>
                    </div>
                </Fragment>
        );
    };
    inputChange(e){
        this.setState({
            inputValue:e.target.value?e.target.value:''
        });
    };
    addItem(e){
        this.setState({
            list:[...this.state.list,this.state.inputValue]
        })
    };
    deleteItem(index){
        let List = this.state.list;
        List.splice(index,1);
        this.setState({
            list:List
        })
    }
}
export default Tools;
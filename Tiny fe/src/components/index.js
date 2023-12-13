import React,{Component} from "react";
import Tiny from "./Tiny";
export default class Items extends Component{
    state={
        id:'',
        title:'',
        content:'',
        i:0,
        id1:''
    }
    render(){
        let listData=[]
        if(this.props.item){
            listData=this.props.item.map((item,key)=>{
                return(
                    <tr key={key}>
                        <th>
                            {key+1}
                        </th>
                        <th>{item.title}</th>
                        <th  dangerouslySetInnerHTML={{__html:item.content}}></th>
                        <th><button onClick={()=>this.setState({id:item._id,content:item.content})}>choose</button></th>
                        <th><button onClick={()=>this.props.deleteItem({id:item._id})}>delete</button></th>

                        
                    </tr>
                )
            })
        }
        return(
            <div>
                <div>
                    <table>
                        <tbody>
                            <tr>
                                <th>Id du lieu</th>
                                <th>Title du lieu</th>
                                <th>Content</th>
                            </tr>
                            {listData}
                        </tbody>
                    </table>
                </div>
                <Tiny
                addContent={this.props.addItem}
                updateContent={this.props.updateItem}
                id={this.state.id}
                content={this.state.content}
                
                />
            </div>
        )
    
    }
}
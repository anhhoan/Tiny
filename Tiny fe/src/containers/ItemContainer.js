import { connect } from "react-redux";
import Items from "../components";
import * as actions from '../actions/index'
import React from "react";
class ItemContainer extends React.Component{
    componentDidMount(){
        this.props.getItem()
    }
    render(){
        return(
            <Items {...this.props}/>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        item:state.items.listItem
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        getItem:()=>{
            dispatch(actions.getStudentRequest())
        },
        addItem:(data)=>{
            dispatch(actions.addStudentRequest(data))
        },
        deleteItem:(data)=>{
            dispatch(actions.deleteStudentRequest(data))
        },
        updateItem:(data)=>{
            dispatch(actions.updateStudentRequest(data))
        },
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ItemContainer)
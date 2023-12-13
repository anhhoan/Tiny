import React, { Component } from "react";
import { Editor } from '@tinymce/tinymce-react';
var listName = []
export default class Tiny extends Component {
  state = {
    content: '',  
    id: '',
    title: ''
  }
  componentDidUpdate(){
    if(this.state.id!==this.props.id){
      this.setState({
        content:this.props.content,
        id:this.props.id
      })
    }
  }

  render() {
    return (
      <div>
        <div>
          <input placeholder="nhap title" onChange={(e) => this.setState({ title: e.target.value })} />
          <button onClick={() => this.props.addContent({
            content: this.state.content,
            title: this.state.title,
            listName
          })}>add</button>
          <button onClick={()=>this.props.updateContent({content:this.state.content,id:this.state.id, title:this.state.title})}>Update</button>
          <Editor

            apiKey='0szh883h1tq2448dxm7x6mhm5xn1bo1gpqm1paatrzex5uxl'


            onEditorChange={(value) =>  { this.setState({ content: value }) }}
            value={this.state.content}
            init={{
              width: '80%',
              height: 500,

              plugins:
               
                'advlist autolink lists link image charmap print preview anchor  searchreplace visualblocks code fullscreen insertdatetime media table paste code help wordcount image',

              toolbar: 'undo redo | formatselect | ' +
                'bold italic backcolor | alignleft aligncenter ' +
                'alignright alignjustify | bullist numlist outdent indent | ' +
                'removeformat | help image ',
              content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
              images_upload_handler: async function(blobInfo,success,failure){
                var response
                var form=new FormData()
                var url='http://localhost:3001/item'
                form.append('img',blobInfo.blob())
                try {
                    response=await fetch(url,{
                        method:'POST',
                        body:form
                    })
                    const res=await response.json()
                    success(res.arrImg[0])
                    listName=res.arrName
                    
                } catch (error) {
                    failure('INVAILD JSON'+response)
                    
                }
            }
            
            
            }}
            />
            </div>
            </div>)}}
            
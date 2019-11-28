import React, { Component } from "react";
import { Table, Button, Modal } from 'antd';
import FromCom from './components/Form'
const oringinData = [{
  name: 'chen', address: 'cd',
  files: [
    {
      fileName: "home.png",
      fileUrl: "http://192.168.10.220:8888/group2/M00/00/09/wKgK4F3eKqGAQ9MeAAABA5subTo067.png",
      id: 58
    },
    {
      fileName: "logo.png",
      fileUrl: "http://192.168.10.221:8888/group2/M00/00/09/wKgK4F3eKqGAcmToAAAVVF2E1wY777.png",
      id: 59
    }

  ]
}, {
  name: 'chen1', address: 'cd1',
  files: [
    {
      fileName: "home.png",
      fileUrl: "http://192.168.10.220:8888/group2/M00/00/09/wKgK4F3eKqGAQ9MeAAABA5subTo067.png",
      id: 58
    },
    {
      fileName: "logo.png",
      fileUrl: "http://192.168.10.221:8888/group2/M00/00/09/wKgK4F3eKqGAcmToAAAVVF2E1wY777.png",
      id: 59
    }

  ]
}



];


export default class Index extends Component {

  constructor(props) {
    super(props);
    this.state = {
      confirmLoading: false,
      visible: false,
      modalType:'new',
      currentItem: {},
      columns:[
        {
          title: '名字',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: '地址',
          dataIndex: 'address',
          key: 'address',
        }, {
          title: '操作',
          key: 'action',
          render: (text, record) => (
            <span>
              <a onClick={this.handleEditRecord.bind(this, {record, type: 'edit'} )}>编辑</a>
            </span>
          ),
        },
      ]
      
    }
  }
  handleEditRecord({ type, record }) {
    this.setState({
      visible: true,
      modalType: type
    });
    if (type == 'edit') {
      this.setState({
        currentItem: record
      });
    }

  }

  handleOk() {
    this.formCom.props.form.validateFields((err, val) => {
      if (!err) {
        this.setState({
          confirmLoading: true
        })
        console.log(val)

        setTimeout(() => {
          this.setState({
            currentItem: {},
            confirmLoading: false,
            visible: false
          });
          this.formCom.props.form.resetFields()
         
        }, 3000)
      }
    })
    
  }

  handleCancel() {
    this.setState({
      currentItem: {},
      visible: false
    });
    this.formCom.props.form.resetFields()
  }

  // getFormData(data) {
  //   this.setState({
  //     formData:data
  //   })
  // }


  render() {
    let { visible,currentItem,columns,modalType,confirmLoading } = this.state;
    return <div>
      <Button type="primary" size={'large'} onClick={this.handleEditRecord.bind(this, { type: 'new' })}>
          新增
        </Button>
      <Table rowKey="address" columns={columns} dataSource={oringinData} />
      <Modal
          confirmLoading= {confirmLoading}
          title={modalType}
          visible={visible}
          onOk={this.handleOk.bind(this)}
          onCancel={this.handleCancel.bind(this)}
        >
        <FromCom currentItem={currentItem} wrappedComponentRef={formCom => this.formCom = formCom}
          // getFormData={this.getFormData.bind(this)}
        ></FromCom>
        </Modal>
    </div>
  }

}
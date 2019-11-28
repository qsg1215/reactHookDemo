import {
    Form,
    Input,
    Button,
    Upload,
    Icon,
} from 'antd';
import React, { Component } from 'react';

const formItemLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 14 },
};


class Index extends Component {

    normFile = e => {
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    };

    componentDidMount() {
        let { currentItem } = this.props;
        console.log()
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        let { name = '', address = '', files = [] } = this.props.currentItem;
        files = files.map(({fileName, fileUrl,id} )=> ({
            uid: id,
            name: fileName,
            url: fileUrl,
        }))
        return (
            <Form {...formItemLayout} >

                <Form.Item {...formItemLayout} label="名字">
                    {getFieldDecorator('name', {
                        initialValue:name,
                        rules: [
                            {
                                required: true,
                                message: '名字',
                            },
                        ],
                    })(<Input placeholder="Please input your nickname" />)}
                </Form.Item>


                <Form.Item {...formItemLayout} label="地址">
                    {getFieldDecorator('address', {
                         initialValue:address,
                        rules: [
                            {
                                required: true,
                                message: '地址',
                            },
                        ],
                    })(<Input placeholder="Please input your nickname" />)}
                </Form.Item>


                <Form.Item label="图片" >
                    {getFieldDecorator('files', {
                        initialValue:files,
                        valuePropName: 'fileList',
                        getValueFromEvent: this.normFile,
                    })(
                        <Upload name="logo" action="/upload.do" listType="picture">
                            <Button>
                                <Icon type="upload" /> 上传附件
                </Button>
                        </Upload>,
                    )}
                </Form.Item>

            </Form>
        );
    }
}

const WrappedForm = Form.create({
    name: 'validate_other',
})(Index);

export default WrappedForm
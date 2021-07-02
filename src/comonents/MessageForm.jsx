import React, { useState } from 'react';
import { sendMessage, isTyping } from 'react-chat-engine';
import { SendOutlined, PictureOutlined } from '@ant-design/icons';

export const MessageForm = (props) => {
    const [value, setValue] = useState('');
    const { chatId, creds } = props;

    const handelSubmit = (event) => {
        event.preventDefault(); 
        const text = value.trim();
        if(text.length > 0) sendMessage(creds, chatId, { text }) 
        setValue('');

    }

    const handelChange = (event) =>{
        setValue(event.target.value)
        isTyping(props, chatId)

    }
    const handleUpload = (event) =>{
        sendMessage(creds, chatId, { files: event.target.files, text:'' })

    }
    return (
            <form className="message-form" onSubmit={handelSubmit}>
                <input
                    className="message-input"
                    placeholder="Send a message..."
                    value={value}
                    onChange={handelChange}
                    onSubmit={handelSubmit}
                />
                <label htmlFor="upload-button">
                    <span className="image-button">
                        <PictureOutlined  className="picture-icon"/>
                    </span>
                </label>
                <input
                    type="file"
                    multiple={false}
                    id="upload-button"
                    style={{ display : 'none'}}
                    onChange={handleUpload}
                />
                <button type="submit" className="send-button">
                    <SendOutlined className="send-icon" />

                </button>
            </form>
    )
}


import React from 'react';
import styled from 'styled-components';


function ChatMessage() {
    return (
        <Container>
           <UserAvater>
                <img src ="https://randomuser.me/api/portraits/men/80.jpg"/>

           </UserAvater>
        
           <MessageContent>
                <Name>
                    sonia
                    <span>3/2/2021</span>
                </Name>

                <Text>
                    This is a test
                </Text>
           </MessageContent>
        
        </Container>
    )
}

export default ChatMessage

const Container = styled.div`
    padding: 8px 20px;
    display: flex;
    align-items: center;

    :hover {
        color: gray
    }
`
const MessageContent = styled.div`
    display: flex;
    flex-direction: column;
    
`

const UserAvater = styled.div`
    width : 36px;
    height: 36px;
    border-radius: 2px;
    overflow: hidden;
    margin-right: 8px;

    img {
        width : 100%;
    }
`
const Name = styled.span`
    font-weight: 900;
    font-size: 15px;
    line-height: 1.4;
    
    span {
        font-weight:400;
        color: rgb(97,96,97);
        margin-left: 8px;
        font-size: 13px;
    }
`

const Text = styled.span`
    

`

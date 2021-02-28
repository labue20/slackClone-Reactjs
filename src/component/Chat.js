
import React from 'react'
import styled from 'styled-components'

function Chat() {
    return (
        <Container>
            <Header>
                
            </Header>

            <MessageContainer>
                    
            </MessageContainer>
            <ChatInput></ChatInput>
           
        </Container>
    )
}

export default Chat;
 
const Container = styled.div`
    display: grid;
    grid-template-rows: 64px auto min-content;
    background
`
const Header = styled.div`
    background: orange;
`
const MessageContainer = styled.div`
    background: gray;
`
const ChatInput = styled.div`
`
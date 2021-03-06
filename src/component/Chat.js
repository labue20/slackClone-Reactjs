
import React , { useEffect,useState } from 'react'
import styled from 'styled-components'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import { InfoOutlined, InfoRounded } from '@material-ui/icons';
import ChatInput  from './ChatInput';
import ChatMessage from './ChatMessage';
import  db from '../firebase';
import { useParams } from 'react-router-dom';

function Chat() {

    // let { channelId } = useParams ();
    // const [ channel , setChannel ] = useState();

    // const getChannels = () => {
    //     db.collection('rooms')
    //     .doc(channelId)
    //     .onSnapshot((snapshot)=>{
    //         setChannel(snapshot.data());
    //     })

    // }
    
    // useEffect(()=>{
    //     getChannels();
    // },[channelId])




    return (
        <Container>
            <Header>
                  
                <Channel>
                    <ChannelName>
                    # Willz
                       
                    </ChannelName>
                    <ChannelInfor>
                            Company-wde announcement
                       </ChannelInfor>

                </Channel>
                <ChannelDetails>
                    <div>
                        Details
                    </div>
                    <Info/>
                    
                </ChannelDetails>
            </Header>

            <MessageContainer>
                    <ChatMessage/>
            </MessageContainer>
            <ChatInput/>
           
        </Container>
    )
}

export default Chat;
 
const Container = styled.div`
    display: grid;
    grid-template-rows: 64px auto min-content;
    
`
const Header = styled.div`
    padding-left:20px;
    padding-right:20px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgba(83,39,83,.13);
    justify-content: space-between;
`
const MessageContainer = styled.div`
    
`


const Channel  = styled.div`

`
const Info = styled(InfoOutlinedIcon)`
    margin-left:10px;
`
const ChannelDetails = styled.div`
    display:flex;
    align-items: center;
    color: #606060;
  
`
const ChannelInfor = styled.div`
    font-weight = 400;
    color: #606060;
    font-size: 13px;
    margin-top: 8px;
`
const ChannelName = styled.div`
    font-weight = 700;
`
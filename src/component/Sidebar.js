
import React from 'react';
import styled from 'styled-components';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import {sidebarItems} from '../data/SidebarData';
import AddIcon from '@material-ui/icons/Add';

function Sidebar(props) {

    const 

    console.log(props);
    return (
       <Container>
            <WorkspaceContainer>
                <Name>
                    #237 Programmer
                </Name>

                <NewMessage>
                    <AddCircleIcon/>
                </NewMessage>
            </WorkspaceContainer>

            <MainChannels>
                {
                    sidebarItems.map(item => (
                        <MainChannelsItem>
                            {item.icon}
                                {item.text}
                        </MainChannelsItem>
                    ))
                }
                
            </MainChannels>
            <ChannelsContainer>
                <NewChannelContainer>
                    <div>
                        Channels
                    </div>
                    <AddIcon/>
                </NewChannelContainer>
                <ChannelsList>

                    {
                        props.rooms.map(item => (
                            <Channel>
                                # {item.id}
                          </Channel>
                        ))
                    }

                </ChannelsList>
            </ChannelsContainer>
       </Container>
    )
}

export default Sidebar

const Container = styled.div`
    background: #3F0E40;

`
const Name = styled.div`
    padding-left: 16px;
`

const WorkspaceContainer =styled.div`
    color: white;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #532753;
`

const NewMessage = styled.div`
    width: 36px;
    height : 36px;
    background: white;
    color: #3F0E40;
    fill: #3F0E40;;
    display:flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 20px;
    cursor:pointer;
`
const MainChannels = styled.div `
    padding-top:20px:
`
const MainChannelsItem = styled.div`
    color: rgb(188,171,188);
    display: grid;
    grid-template-columns: 15% auto;
    height: 28px;
    align-items: center;
    padding-left: 19px;
    cursor: pointer;
    :hover {
        background: #350D36;
    }
`

const ChannelsContainer =styled.div`
    color: rgb(188,171,188);
    margin-top: 10px;
`
const NewChannelContainer = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding-left:19px;
    padding-right:12px;
`
const ChannelsList = styled.div`

`
const Channel = styled.div`
    height:28px;
    display:flex;
    align-items:center;
    padding-left:19px;
    cursor:pointer;
    :hover{
        background:#350D36;
    }
`
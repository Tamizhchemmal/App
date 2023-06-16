import { ScrollView, Touchable, TouchableOpacity,StatusBar } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { styled } from "styled-components";
import Imagecard from "./assets/Components/Imagecard";

export default function App() {
  return (

    <Main>
     
     

   

      <Header>
        <TouchableOpacity>
          <HeaderText>
            HostStar
            <Smallogo source={require("./assets/Images/logo1.png")} />
          </HeaderText>
        </TouchableOpacity>
        <TouchableOpacity>
          <Profile source={require("./assets/Images/logo.png")} />
        </TouchableOpacity>
      </Header>

      <BigCard>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <Imagecard imagesource={require("./assets/Images/card.jpg")} />
        <Imagecard imagesource={require("./assets/Images/card1.jpg")} />
        <Imagecard imagesource={require("./assets/Images/card2.jpg")} />
        <Imagecard imagesource={require("./assets/Images/card3.jpg")} />
  
      </ScrollView>
       
      </BigCard>
    
    </Main>
  );
}

const Main = styled.View`
  width: 100%;
  height: 100%;
  background-color: #b8dad9;
`;

const Header = styled.View`
  background-color: #002333;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 9%;
`;
const HeaderText = styled.Text`
  color: white;
  font-size: 25px;
  margin-left: 15px;
  font-weight: 600;
  height: 100%;
`;
const Profile = styled.Image`
  top: 10px;
  right: 18px;
  height: 50px;
  width: 50px;
  background-color: white;
  border-radius: 20px;
`;
const Smallogo = styled.Image`
  margin: 20px;
`;

const BigCard = styled.View`
  left: 15px;
`;

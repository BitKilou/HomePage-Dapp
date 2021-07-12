import React from "react";
import NavBar from "../../Components/NavBar/NavBar";
import NavBarDetail from "../../Components/NavBarDetail/NavBarDetail";
import NFT from "../../Components/NFT/NFT";
//import {MemberCard} from './components';

export default function HomePage() {
    return (
        <div className="App">
        <NavBar />
        <h1 className="title">DigiBox, le plaisir d'offrir!</h1>
        <h2 className="subTitle">Les DigiBox du moment</h2>
            <NFT />
        <NavBarDetail />
        </div>
    )
}

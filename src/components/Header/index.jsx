import { Section } from "./styles";
import SignOut from "../../assets/app_icons/sign_out.svg"
import Menu from "../../assets/app_icons/menu.svg"
import { MainLogo } from "../MainLogo";
import { SearchInput } from "../SearchInput/index.";
import { Button } from "../Button";
import { CartButtonMobile } from "../CartButtonMobile";
import { CartButton } from "../CartButton";

export function Header({ admin = false }) {
    return (
        <Section>
            <div className="desktop">   
                <MainLogo admin={admin} />
                <SearchInput />
                {!admin && <CartButton totalDishes={0} />}
                {admin && <Button title={'Novo prato'} />}
                <button id="sign-out">
                    <img src={SignOut} alt="Sair" />
                </button>                
            </div>
            <div className="mobile">
                <button id="side-menu">
                    <img src={Menu} alt="Menu lateral" />  
                </button>                
                <MainLogo admin={admin} />
                {!admin && <CartButtonMobile totalDishes={4} />}
                {admin && <div/>}
            </div>                
        </Section>
    );
}
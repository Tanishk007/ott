import React from "react";
import { OptForm } from "../components";
import { Feature } from "../components";
import { HeaderContainer } from '../containers/header';
import { FaqsContainer } from '../containers/faqs';
import { FooterContainer } from '../containers/footer';
import { JumbotronContainer } from '../containers/jumbotron';

export default function Home(){
    return (
        <> 
        <HeaderContainer>
            <Feature>
                <Feature.Title>Unlimited films, TV programmes and More.</Feature.Title>
                <Feature.SubTitle>Watch anywhere. cancel at any time.</Feature.SubTitle>
                
                <OptForm>
                    <OptForm.Input placeholder="Email address" />
                    <OptForm.Button>Try it Now</OptForm.Button>
                    <OptForm.Break />
                    <OptForm.Text>Ready to watch ? get your account renewed a</OptForm.Text>
                </OptForm>
            </Feature>
        </HeaderContainer>
        <JumbotronContainer/>
        <FaqsContainer />
        <FooterContainer/>
        </>
    );
}
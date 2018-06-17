import React, { Component } from 'react';
import Header from './Header/Header';
import News_underHead from './News/News-underHead';
import News from './News/News-1';
import Footer from './Footer/Footer';
import LastFooter from './Footer/LastFooter';


class All_news extends Component {
    render() {
        return (
            <div>
            <Header />
            <News_underHead />
            <News />
            <Footer />
            <LastFooter />
            </div>
        )
    }
}

export default All_news;
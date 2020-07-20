import React, {Component} from 'react';

class FooterComponent extends Component {
    render() {
        return (
            <div className='footer'>
                <div className='footer-inner'>
                    <div className='footer-logo'>
                        <img src='https://cdn.worldvectorlogo.com/logos/react.svg' />
                        <p>Kedai Makan Apps.</p>
                    </div>
                    {/*<ul className='footer-list'>*/}
                    {/*    <li>USER</li>*/}
                    {/*    <li>FOOD</li>*/}
                    {/*</ul>*/}
                </div>
            </div>
        );
    }
}

export default FooterComponent;
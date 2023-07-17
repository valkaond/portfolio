import React from "react";

class Layout extends React.Component{
    render(){
        return (
            <React.Fragment>
                <div>
                    <div>
                        {this.props.children}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Layout;